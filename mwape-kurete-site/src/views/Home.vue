<template>
  <MainLayout>
    <div class="home-hero">
      <HomeHero />
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

export default {
  components: { MainLayout, AboutMeComponent, AboutSection, HomeHero },
};
</script>

<style></style>
