import p5 from 'p5';
import { Renderer } from './renderer/Renderer';

// Inicializa el renderer p5
new p5((sketch) => {
  const r = new Renderer(sketch);
  sketch.setup = () => r.setup();
  sketch.draw = () => r.draw();
  sketch.windowResized = () => r.windowResized();
});
