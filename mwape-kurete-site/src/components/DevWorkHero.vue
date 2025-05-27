<script>
export default {
  name: "DevWorkHero",

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
      <div class="mwape-kurete">My Dev Work</div>
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
  color: #fff;
  font-family: "Anton", sans-serif;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 0.9;
  white-space: nowrap;
}

.portfolio {
  font-size: clamp(12px, 8vw, 48px);
  font-family: "Space Grotesk", sans-serif;
  color: #212121;
  background-color: #4e8359;
  padding: 0 2rem;
  width: 40%;
  white-space: nowrap;
  margin-top: 2.5rem; /* Increase negative margin */
  transform: translateY(-18%); /* Extra lift */
}

.explore-btn {
  margin-top: 12rem;
  font-size: clamp(10px, 5vw, 20px);
  color: #212121;
  font-family: "Space Grotesk", sans-serif;
  background-color: #fff;
  padding: 0 3rem;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 4;
}

.explore-btn:hover {
  background-color: rgba(233, 167, 1, 0.228);
  color: #fff;

  transform: rotate(-5deg) scale(1.05);
}

/* Optional tweaks for smaller screens */
@media (max-width: 480px) {
  .portfolio {
    transform: scale(0.95);
    margin-top: 1rem;
    width: 60%;
    font-size: 20px;
  }

  .explore-btn {
    margin-top: 10rem;
  }
}

@media (max-width: 768px) {
  .portfolio {
    transform: scale(0.95);
    margin-top: 1rem;
    width: 70%;
    font-size: 32px;
  }

  .explore-btn {
    margin-top: 10rem;
  }
}
</style>
