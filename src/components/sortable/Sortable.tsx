import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import {
    Announcements,
    closestCenter,
    CollisionDetection,
    DragOverlay,
    DndContext,
    DropAnimation,
    defaultDropAnimation,
    KeyboardSensor,
    Modifiers,
    MouseSensor,
    MeasuringConfiguration,
    PointerActivationConstraint,
    ScreenReaderInstructions,
    TouchSensor,
    UniqueIdentifier,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    useSortable,
    SortableContext,
    sortableKeyboardCoordinates,
    SortingStrategy,
    rectSortingStrategy,
    AnimateLayoutChanges,
    NewIndexGetter,
} from '@dnd-kit/sortable';

const defaultInitializer = (index: number) => index;

function createRange<T = number>(
    length: number,
    initializer: (index: number) => any = defaultInitializer,
): T[] {
    return [...new Array(length)].map((_, index) => initializer(index));
}

import { Item } from './Item';
import { List } from './List';
import { Wrapper } from './Wrapper';

export interface SortableProps {
    activationConstraint?: PointerActivationConstraint;
    animateLayoutChanges?: AnimateLayoutChanges;
    adjustScale?: boolean;
    collisionDetection?: CollisionDetection;
    Container?: any; // To-do: Fix me
    dropAnimation?: DropAnimation | null;
    getNewIndex?: NewIndexGetter;
    handle?: boolean;
    itemCount?: number;
    items?: string[];
    measuring?: MeasuringConfiguration;
    modifiers?: Modifiers;
    renderItem?: any;
    removable?: boolean;
    reorderItems?: typeof arrayMove;
    strategy?: SortingStrategy;
    useDragOverlay?: boolean;
    getItemStyles?(args: {
        id: UniqueIdentifier;
        index: number;
        isSorting: boolean;
        isDragOverlay: boolean;
        overIndex: number;
        isDragging: boolean;
    }): React.CSSProperties;
    wrapperStyle?(args: {
        index: number;
        isDragging: boolean;
        id: string;
    }): React.CSSProperties;
    isDisabled?(id: UniqueIdentifier): boolean;
}

const defaultDropAnimationConfig: DropAnimation = {
    ...defaultDropAnimation,
    dragSourceOpacity: 0.5,
};

const screenReaderInstructions: ScreenReaderInstructions = {
    draggable: `
    To pick up a sortable item, press the space bar.
    While sorting, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
};

export function Sortable({
    activationConstraint,
    animateLayoutChanges,
    adjustScale = false,
    Container = List,
    collisionDetection = closestCenter,
    dropAnimation = defaultDropAnimationConfig,
    getItemStyles = () => ({}),
    getNewIndex,
    handle = false,
    itemCount = 16,
    items: initialItems,
    isDisabled = () => false,
    measuring,
    modifiers,
    removable,
    renderItem,
    reorderItems = arrayMove,
    strategy = rectSortingStrategy,
    useDragOverlay = true,
    wrapperStyle = () => ({}),
}: SortableProps) {
    const [items, setItems] = useState<string[]>(
        () =>
            initialItems ??
            createRange<string>(itemCount, index => (index + 1).toString()),
    );
    const [activeId, setActiveId] = useState<string | null>(null);
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint,
        }),
        useSensor(TouchSensor, {
            activationConstraint,
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );
    const isFirstAnnouncement = useRef(true);
    const getIndex = items.indexOf.bind(items);
    const getPosition = (id: string) => getIndex(id) + 1;
    const activeIndex = activeId ? getIndex(activeId) : -1;
    const handleRemove = removable
        ? (id: string) => setItems(items => items.filter(item => item !== id))
        : undefined;
    const announcements: Announcements = {
        onDragStart(id) {
            return `Picked up sortable item ${id}. Sortable item ${id} is in position ${getPosition(
                id,
            )} of ${items.length}`;
        },
        onDragOver(id, overId) {
            // In this specific use-case, the picked up item's `id` is always the same as the first `over` id.
            // The first `onDragOver` event therefore doesn't need to be announced, because it is called
            // immediately after the `onDragStart` announcement and is redundant.
            if (isFirstAnnouncement.current === true) {
                isFirstAnnouncement.current = false;
                return;
            }

            if (overId) {
                return `Sortable item ${id} was moved into position ${getPosition(
                    overId,
                )} of ${items.length}`;
            }

            return;
        },
        onDragEnd(id, overId) {
            if (overId) {
                return `Sortable item ${id} was dropped at position ${getPosition(
                    overId,
                )} of ${items.length}`;
            }

            return;
        },
        onDragCancel(id) {
            return `Sorting was cancelled. Sortable item ${id} was dropped and returned to position ${getPosition(
                id,
            )} of ${items.length}.`;
        },
    };

    useEffect(() => {
        if (!activeId) {
            isFirstAnnouncement.current = true;
        }
    }, [activeId]);

    return (
        <DndContext
            announcements={announcements}
            screenReaderInstructions={screenReaderInstructions}
            sensors={sensors}
            collisionDetection={collisionDetection}
            onDragStart={({ active }) => {
                if (!active) {
                    return;
                }

                setActiveId(active.id);
            }}
            onDragEnd={({ over }) => {
                setActiveId(null);

                if (over) {
                    const overIndex = getIndex(over.id);
                    if (activeIndex !== overIndex) {
                        setItems(items =>
                            reorderItems(items, activeIndex, overIndex),
                        );
                    }
                }
            }}
            onDragCancel={() => setActiveId(null)}
            measuring={measuring}
            modifiers={modifiers}
        >
            <Wrapper center>
                <SortableContext items={items} strategy={strategy}>
                    <Container>
                        {items.map((value, index) => (
                            <SortableItem
                                key={value}
                                id={value}
                                handle={handle}
                                index={index}
                                style={getItemStyles}
                                wrapperStyle={wrapperStyle}
                                disabled={isDisabled(value)}
                                renderItem={renderItem}
                                onRemove={handleRemove}
                                animateLayoutChanges={animateLayoutChanges}
                                useDragOverlay={useDragOverlay}
                                getNewIndex={getNewIndex}
                            />
                        ))}
                    </Container>
                </SortableContext>
            </Wrapper>
            {useDragOverlay
                ? createPortal(
                      <DragOverlay
                          adjustScale={adjustScale}
                          dropAnimation={dropAnimation}
                      >
                          {activeId ? (
                              <Item
                                  value={items[activeIndex]}
                                  handle={handle}
                                  renderItem={renderItem}
                                  wrapperStyle={wrapperStyle({
                                      index: activeIndex,
                                      isDragging: true,
                                      id: items[activeIndex],
                                  })}
                                  style={getItemStyles({
                                      id: items[activeIndex],
                                      index: activeIndex,
                                      isSorting: activeId !== null,
                                      isDragging: true,
                                      overIndex: -1,
                                      isDragOverlay: true,
                                  })}
                                  dragOverlay
                              />
                          ) : null}
                      </DragOverlay>,
                      document.body,
                  )
                : null}
        </DndContext>
    );
}

interface SortableItemProps {
    animateLayoutChanges?: AnimateLayoutChanges;
    disabled?: boolean;
    getNewIndex?: NewIndexGetter;
    id: string;
    index: number;
    handle: boolean;
    useDragOverlay?: boolean;
    onRemove?(id: string): void;
    style(values: any): React.CSSProperties;
    renderItem?(args: any): React.ReactElement;
    wrapperStyle({
        index,
        isDragging,
        id,
    }: {
        index: number;
        isDragging: boolean;
        id: string;
    }): React.CSSProperties;
}

export function SortableItem({
    disabled,
    animateLayoutChanges,
    getNewIndex,
    handle,
    id,
    index,
    onRemove,
    style,
    renderItem,
    useDragOverlay,
    wrapperStyle,
}: SortableItemProps) {
    const {
        attributes,
        isDragging,
        isSorting,
        listeners,
        overIndex,
        setNodeRef,
        transform,
        transition,
    } = useSortable({
        id,
        animateLayoutChanges,
        disabled,
        getNewIndex,
    });

    return (
        <Item
            ref={setNodeRef}
            value={id}
            disabled={disabled}
            dragging={isDragging}
            sorting={isSorting}
            handle={handle}
            renderItem={renderItem}
            index={index}
            style={style({
                index,
                id,
                isDragging,
                isSorting,
                overIndex,
            })}
            onRemove={onRemove ? () => onRemove(id) : undefined}
            transform={transform}
            transition={!useDragOverlay && isDragging ? 'none' : transition}
            wrapperStyle={wrapperStyle({ index, isDragging, id })}
            listeners={listeners}
            data-index={index}
            data-id={id}
            dragOverlay={!useDragOverlay && isDragging}
            {...attributes}
        />
    );
}
