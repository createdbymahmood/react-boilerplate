export interface Shape {
    borderRadius: number;
}

export type ShapeOptions = Partial<Shape>;

const shape = {
    borderRadius: 4,
};

export default shape;
