<script>
export default {
  name: "UIWorkHero",

  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<template>
  <div class="hero-home" style="width: 100%; height: 100vh; position: relative">
    <div class="header1">
      <div class="mwape-kurete">My UI/UX Work</div>
      <div class="portfolio">Explore!!!</div>
    </div>
    <div class="explore-btn">
      <div class="explore" @click="scrollToSection('work-sect')">
        Explore!!!
      </div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
}

.mwape-kurete {
  font-size: clamp(48px, 10vw, 128px);
  color: #d8675f;
  font-family: "Paytone One";
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 0.9;
  white-space: nowrap;
}

.portfolio {
  font-size: clamp(32px, 8vw, 96px);
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
  margin-top: -2rem; /* Increase negative margin */
  transform: rotate(-5.9deg) translateY(-10%); /* Extra lift */
}

.explore-btn {
  margin-top: 12rem;
  font-size: clamp(24px, 5vw, 36px);
  color: #fedcb5;
  font-family: "Just Me Again Down Here";
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 4;
}

.explore-btn:hover {
  color: #d8675f;
  transform: rotate(-5deg) scale(1.05);
  text-shadow: 0 0 10px rgba(216, 103, 95, 0.5);
}

/* Optional tweaks for smaller screens */
@media (max-width: 480px) {
  .portfolio {
    transform: rotate(-5deg) scale(0.95);
    margin-top: -0.8rem;
  }

  .explore-btn {
    margin-top: 10rem;
  }
}
</style>
