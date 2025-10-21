<template>
  <MainLayout>
    <div class="home-hero">
      <HeroComponent />
    </div>
    <div
      id="about-sect"
      class="home-about"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <AboutMeComponent />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/TheMainLayout.vue";
import HomeHero from "../components/HomeHero.vue";
import AboutSection from "../components/AboutMeSection.vue";
import AboutMeComponent from "../components/AboutMeComponent.vue";
import HeroComponent from "../components/HeroComponent.vue";

export default {
  components: {
    MainLayout,
    AboutMeComponent,
    AboutSection,
    HomeHero,
    HeroComponent,
  },
};
</script>

<style></style>
