export type CellType = 'NUTRITIVA' | 'MOTORA' | 'CORAZA';

export class Cell {
  dx: number;
  dy: number;
  type: CellType;

  constructor(dx: number, dy: number, type: CellType){
    this.dx = dx; this.dy = dy; this.type = type;
  }
}
