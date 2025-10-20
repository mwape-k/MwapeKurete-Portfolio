<script setup lang="ts">
import { defineProps, withDefaults } from "vue";

interface BannerProps {
  text: string;
  bgColor?: string;
}

const props = withDefaults(defineProps<BannerProps>(), {
  text: "Frontend Developer + UX/UI Designer crafting human-centred web experiences.",
  bgColor: "#1982c4",
});
</script>

<template>
  <div class="banner" :style="{ backgroundColor: props.bgColor }">
    <div class="marquee">
      <p class="marquee-text" aria-label="Scrolling banner text">
        {{ props.text }}&nbsp;&nbsp;&nbsp;{{ props.text }}&nbsp;&nbsp;&nbsp;{{
          props.text
        }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.banner {
  position: relative; /* Fix at bottom of container */
  bottom: 0;
  left: 0;
  right: 0;
  height: 3rem; /* Height of banner */
  overflow: hidden;
  background-color: inherit; /* Use bgColor prop */
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-sizing: border-box;
  z-index: 10;
}

.marquee {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}

.marquee-text {
  display: inline-block;
  /* The actual animation */
  animation: scrollText 50s linear infinite;
  font-family: "Darker Grotesque", sans-serif;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
  font-weight: 600;
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.5px;
  user-select: none;
}

@keyframes scrollText {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
