<script setup></script>

<template>
  <section class="loader-screen">
    <div class="loading loading02">
      <span>.</span>
      <span>.</span>
      <span>.</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
.loader-screen {
  position: fixed;
  height: 100vh;
  inset: 0;
  background: linear-gradient(180deg, #191919 0%, #0e0e0f 89%);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: env(safe-area-inset-top, 1rem) env(safe-area-inset-left, 1rem);
  z-index: 9999;
}

.loading {
  font-size: clamp(2rem, 12vw, 128px); /* 💡 Responsive text size */
  font-family: "Anton", sans-serif;
  font-weight: 800;
  color: white;
  text-align: center;

  span {
    display: inline-block;
    margin: 0 -0.05em;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* code #2 */
.loading02 {
  span {
    animation: loading02 1.2s infinite alternate;
    @for $i from 1 through 6 {
      &:nth-child(#{$i + 1}) {
        animation-delay: #{$i * 0.2}s;
      }
    }
  }
}
@keyframes loading02 {
  0% {
    filter: blur(0);
    opacity: 1;
  }
  100% {
    filter: blur(5px);
    opacity: 0.2;
  }
}
</style>
