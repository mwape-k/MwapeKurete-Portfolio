<template>
  <div class="grainy-app">
    <transition name="zoom-fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<style>
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

.grainy-app > * {
  position: relative;
  z-index: 1; /* Ensure children are layered above */
}

.grainy-app::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/overlay.png"); /* Transparent or grayish PNG */
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.2;
  filter: contrast(120%) brightness(90%);
  pointer-events: none;
  z-index: 0;
}

/* 🔥 Zoom + Fade Page Transition */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1),
    transform 0.6s cubic-bezier(0.77, 0, 0.175, 1);
}

.zoom-fade-enter-from {
  opacity: 0;
  transform: scale(1.015);
}

.zoom-fade-leave-to {
  opacity: 0;
  transform: scale(0.985);
}
</style>
