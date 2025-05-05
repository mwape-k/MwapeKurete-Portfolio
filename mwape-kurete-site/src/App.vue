<template>
  <div class="grainy-app">
    <router-view />
  </div>
</template>

<style>
.grainy-app {
  position: relative;
  min-height: 100vh;
  width: 100% !important;
  background-color: #1e1e1e;
  overflow: hidden;
}

.grainy-app::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="1.2" numOctaves="5" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23n)" opacity="0.20"/></svg>');
  pointer-events: none;
  z-index: 0;
  opacity: 0.253; /* More subtle grain */
  background-size: 800px 800px; /* Fixed syntax - removed SVG params here */
}
</style>
