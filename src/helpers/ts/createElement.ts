export const createElement = (id: string): HTMLElement => {
    const el = document.createElement('div');
    el.setAttribute('id', id);
    return el;
};
