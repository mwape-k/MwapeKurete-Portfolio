<template>
  <MainLayout>
    <div class="home-hero" data-aos="fade-up">
      <HomeHero />
    </div>
    <div
      id="about-sect"
      class="home-about"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <AboutSection />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/TheMainLayout.vue";
import HomeHero from "../components/HomeHero.vue";
import AboutSection from "../components/AboutMeSection.vue";

export default {
  components: { MainLayout, HomeHero, AboutSection },
};
</script>

<style></style>
