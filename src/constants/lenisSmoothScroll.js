import "@styles/lenis.css";
import Lenis from "lenis";

// Script to handle Lenis library settings for smooth scrolling
const lenis = new Lenis({
  duration: 1.5, // Ajuste de duración para un desplazamiento suave
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing personalizado
  smooth: true, // Habilita el smooth scrolling
  lerp: 0.1, // Interpolación más suave para un mejor rendimiento
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
