<template>
  <MainLayout>
    <div class="home-hero">
      <HomeHero />
    </div>
    <div id="about-sect" class="home-about">
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

<style>
.home-hero {
  margin-bottom: 5%;
}

.home-about {
  margin-bottom: 5%;
}
</style>
