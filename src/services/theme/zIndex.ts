// We need to centralize the zIndex definitions as they work
// like global values in the browser.

export interface ZIndex {
    mobileStepper: number;
    speedDial: number;
    appBar: number;
    drawer: number;
    modal: number;
    snackbar: number;
    tooltip: number;
}

const zIndex: ZIndex = {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
};

export type ZIndexOptions = Partial<typeof zIndex>;

export default zIndex;
