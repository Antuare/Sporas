import type p5 from 'p5';

export class Renderer {
  private p: p5;

  constructor(sketch: p5){ this.p = sketch; }

  setup(){ this.p.createCanvas(this.p.windowWidth, this.p.windowHeight); this.p.frameRate(60); }

  draw(){
    this.p.background(11,15,25);
    // Esqueleto de dibujo; el proyecto integrado importará el paquete core para dibujar entidades
    this.p.fill(255);
    this.p.noStroke();
    this.p.textAlign(this.p.CENTER, this.p.CENTER);
    this.p.textSize(14);
    this.p.text('Bioma - Web Renderer (placeholder)', this.p.width/2, this.p.height/2);
  }

  windowResized(){ this.p.resizeCanvas(this.p.windowWidth, this.p.windowHeight); }
}
