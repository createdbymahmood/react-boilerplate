import { act, renderHook } from '@testing-library/react-hooks';
import useWindowSize from './useWindowSize';

const setupHook = () => renderHook(() => useWindowSize());

function triggerResize(dimension: 'width' | 'height', value: number) {
    if (dimension === 'width') {
        (window.innerWidth as number) = value;
    } else if (dimension === 'height') {
        (window.innerHeight as number) = value;
    }

    window.dispatchEvent(new Event('resize'));
}

describe('useElementSize()', () => {
    it('should be defined', () => {
        expect(useWindowSize).toBeDefined();
    });

    it('should initialize', () => {
        const { result } = setupHook();
        const { height, width } = result.current;
        expect(typeof height).toBe('number');
        expect(typeof width).toBe('number');
    });

    it('should initialize', () => {
        const { result } = setupHook();

        act(() => {
            triggerResize('height', 360);
        });
        expect(result.current.height).toBe(360);

        act(() => {
            triggerResize('height', 2048);
        });

        expect(result.current.height).toBe(2048);
    });

    it('should re-render after width change on closest RAF', () => {
        const { result } = setupHook();
        act(() => {
            triggerResize('width', 360);
        });

        expect(result.current.width).toBe(360);

        act(() => {
            triggerResize('width', 2048);
        });

        expect(result.current.width).toBe(2048);
    });
});

export {};
