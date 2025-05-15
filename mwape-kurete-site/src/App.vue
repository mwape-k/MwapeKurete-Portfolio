<template>
  <div class="grainy-app">
    <router-view />
  </div>
</template>

<style>
/* .grainy-app {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgb(0, 0, 0) 0%,
    rgb(30, 31, 63) 62%,
    rgb(47, 48, 90) 100%
  );
  overflow: hidden;
}

.grainy-app::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='3' numOctaves='5' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.2'/></svg>")
    repeat;
  background-size: cover;
  pointer-events: none;
  z-index: 1;
  opacity: 0.253;
} */

.grainy-app {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(25, 25, 25, 1) 0%,
    rgba(42, 31, 66, 1) 89%
  );
  overflow: hidden;
}

.grainy-app::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/overlay.png"); /* Use a transparent or grayish PNG */
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.2;
  filter: contrast(120%) brightness(90%);
  pointer-events: none;
  z-index: 1;
}
</style>
