<script>
import MainLayout from "../layouts/TheMainLayout.vue";
import DevWorkHero from "../components/DevWorkHero.vue";
import DevProjectHighlight from "../components/DevProjectHighlight.vue";

export default {
  components: { MainLayout, DevWorkHero, DevProjectHighlight },
};
</script>
<template>
  <MainLayout>
    <div class="dev-hero" data-aos="fade-up">
      <DevWorkHero />
    </div>
    <div
      id="work-sect"
      class="dev-projects"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <DevProjectHighlight />
    </div>
  </MainLayout>
</template>
<style>
.dev-projects {
  padding-top: 2%;
}
</style>
