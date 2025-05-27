<script setup>
import { ref, onMounted, nextTick } from "vue";
import TheLoader from "./components/TheLoader.vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(async () => {
    loading.value = false;
    await nextTick(); // wait until DOM updates
    window.dispatchEvent(new Event("scroll")); // triggers any scroll-based effects
  }, 4000);
});
</script>

<template>
  <div class="grainy-app">
    <!-- Preloader -->
    <transition name="fade">
      <TheLoader v-if="loading" />
    </transition>

    <!-- Main App -->
    <transition name="zoom-fade" mode="out-in" appear>
      <router-view v-if="!loading" :key="$route.fullPath" />
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
  transition: opacity 0.8s ease, transform 0.8s ease;
  /* transition: opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1),
    transform 0.6s cubic-bezier(0.77, 0, 0.175, 1); */
}

/* 🔄 PURE FADE FOR MAIN APP TRANSITION */
.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 0.8s ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}

.zoom-fade-enter-to,
.zoom-fade-leave-from {
  opacity: 1;
}

.fade-enter-active {
  transition: opacity 0.8s ease, transform 1s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(1.02) translateY(10px);
}

.fade-leave-active {
  transition: opacity 0.8s ease, transform 1s ease;
  pointer-events: none;
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(-10px);
}
</style>
