<script>
import CurvedLoop from "../components/vue-bits/CurvedLoop.vue";
export default {
  name: "HomeHero",
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  components: { CurvedLoop },
};
</script>

<template>
  <div class="hero-home">
    <div class="header-container">
      <div class="mwape-kurete">Mwape Kurete</div>
      <div class="portfolio">Portfolio</div>
    </div>
    <div class="banner">
      <CurvedLoop
        marquee-text=" Frontend ✦ Developer ✦ UX/UI ✦ Designer ✦ crafting ✦ human-centred ✦ web ✦ experiences ✦"
        :speed="1.5"
        :curve-amount="300"
        direction="left"
        :interactive="true"
      />
    </div>
  </div>
</template>

<style scoped>
.hero-home {
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  overflow: hidden;
  text-align: center;
}

.header-container {
  margin-top: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.mwape-kurete {
  font-size: clamp(48px, 10vw, 128px);
  color: #fff;
  font-family: "Anton", sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 0.9;
  white-space: nowrap;
}

.portfolio {
  font-size: clamp(24px, 8vw, 64px);
  width: 400px;
  height: 48px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: "Darker Grotesque", sans-serif;
  color: #212121;
  background-color: #ff595e;
  padding: 2rem;
  white-space: nowrap;
  margin-top: 2.5rem; /* Increase negative margin */
  transform: rotate(-5deg) translateY(-18%); /* Extra lift */
}

.banner {
  width: 100%;
  bottom: 2rem;
  margin-top: -14rem;
  left: 0;
  z-index: 1;
}

/* Optional tweaks for smaller screens */
@media (max-width: 480px) {
  .portfolio {
    transform: rotate(-5deg) scale(0.95);
    margin-top: 1rem;
    height: 48px;
    width: 250px;
  }

  .explore-btn {
    margin-top: 10rem;
  }
}

/* Vue's deep selector: >>> (.curved-loop-text) style for text inside CurvedLoop */
.banner :deep(.curved-loop-text) {
  font-size: clamp(1.4rem, 6vw, 3.6rem) !important;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Darker Grotesque", sans-serif;
  letter-spacing: 0.03em;
  fill: white;
}

/* Further fine-tune for mobile */
@media (max-width: 480px) {
  .banner :deep(.curved-loop-text) {
    font-size: 1.1rem;
  }
}
</style>
