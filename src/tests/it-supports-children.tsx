import React from 'react';
import { render, act, RenderResult } from '@testing-library/react';

export function itRendersChildren(
    Component: React.ElementType,
    requiredProps: Record<string, any>,
) {
    it('renders children', async () => {
        const { queryAllByText } = await renderWithAct(
            <Component {...requiredProps}>
                <span className='test-children'>test-children</span>
            </Component>,
        );
        expect(queryAllByText('test-children')).toHaveLength(1);
    });
}
export async function renderWithAct(element: React.ReactElement) {
    let result: RenderResult;
    await act(async () => {
        result = render(element);
    });
    /* @ts-ignore */
    return result;
}

// fix eslint
