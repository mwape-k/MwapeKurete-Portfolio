<script>
import MainLayout from "../layouts/TheMainLayout.vue";
import UIWorkHero from "../components/UIWorkHero.vue";
import UIProjects from "../components/UIProjectHighlight.vue";

export default {
  components: { MainLayout, UIWorkHero, UIProjects },
};
</script>
<template>
  <MainLayout>
    <div class="ui-hero" data-aos="fade-up">
      <UIWorkHero />
    </div>
    <div
      id="work-sect"
      class="ui-projects"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <UIProjects />
    </div>
  </MainLayout>
</template>
<style>
.ui-projects {
  padding-top: 2%;
}
</style>
