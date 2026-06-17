# Simulador de Evolución Pluricelular

Archivo autocontenido `simulador.html` que ejecuta una simulación interactiva basada en p5.js.

Cómo usar:

1. Abrir `simulador.html` en un navegador moderno (Chrome, Firefox, Edge).
2. Interacciones:
   - Clic: añade una partícula de comida en la posición del cursor.
   - Doble clic: empuja a los organismos (efecto de espantar).
   - Panel UI: pausar/reanudar, reiniciar, ajustar tasa de mutación y multiplicador de velocidad.

Notas técnicas:

- Implementado con clases `Organism`, `Cell` y `Food`.
- Reproducción mitótica con división de energía y posibilidad de mutación (cambio de rol o adición de célula).
- HUD muestra generación máxima, número de organismos, tamaño del clúster más grande y comida disponible.

Licencia: libre para uso y modificación.
