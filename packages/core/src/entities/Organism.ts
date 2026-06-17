import { Cell, CellType } from './Cell';

export interface Gene { dx:number; dy:number; type: CellType }

export class Organism {
  x:number; y:number; vx:number; vy:number; energy:number; generation:number; dna:Gene[]; cells:Cell[];

  constructor(x:number,y:number,dna:Gene[],energy:number,generation=1){
    this.x=x; this.y=y; this.vx=0; this.vy=0; this.dna = dna.map(g=>({dx:g.dx,dy:g.dy,type:g.type})); this.energy=energy; this.generation=generation; this.cells=[]; this.rebuild();
  }

  rebuild(){ this.cells = this.dna.map(g => new Cell(g.dx,g.dy,g.type)); }
}
