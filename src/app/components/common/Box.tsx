import {
    ComponentPropsWithRef,
    ElementType,
    forwardRef,
    JSXElementConstructor,
    Ref,
} from 'react';

type PropsOf<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    E extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> = JSX.LibraryManagedAttributes<E, ComponentPropsWithRef<E>>;

export interface BoxOwnProps<E extends ElementType = ElementType> {
    as?: E;
}

export type BoxProps<E extends ElementType> = BoxOwnProps<E> &
    Omit<PropsOf<E>, keyof BoxOwnProps>;

export type PolymorphicComponentProps<E extends ElementType, P> = P &
    BoxProps<E>;

const defaultElement = 'div';

export const Box = forwardRef(
    ({ as, ...restProps }: BoxOwnProps, ref: Ref<Element>) => {
        const Element = as || defaultElement;
        return <Element ref={ref} {...restProps} />;
    },
) as <E extends ElementType = typeof defaultElement>(
    props: BoxProps<E>,
) => JSX.Element;
