<script setup>
import { onMounted } from "vue";
</script>

<template>
  <div class="grainy-app">
    <transition name="zoom-fade" mode="out-in">
      <router-view :key="$route.fullPath" />
    </transition>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Antonio:wght@100..700&family=Space+Grotesk:wght@300..700&display=swap");

.grainy-app {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(25, 25, 25, 1) 0%,
    rgb(14, 14, 15) 89%
  );
  overflow: hidden;
}

.grainy-app {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(25, 25, 25, 1) 0%,
    rgb(14, 14, 15) 89%
  );
  overflow-x: hidden;
}

.grainy-app::before {
  content: "";
  position: absolute; /* Changed from fixed to absolute */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Exact height of your image */
  background-image: url("./assets/texture2.png");
  background-repeat: no-repeat;
  background-size: cover; /* Show entire image without cropping */
  background-position: top center;
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.grainy-app > * {
  position: relative;
  z-index: 1;
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
