<script>
import MainLayout from "../layouts/TheMainLayout.vue";
import UIWorkHero from "../components/UIWorkHero.vue";
import UIProjects from "../components/UIProjectHighlight.vue";
import ProjectCard from "../components/ProjectCard.vue";

export default {
  components: { MainLayout, UIWorkHero, UIProjects, ProjectCard },
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
      <ProjectCard />
    </div>
  </MainLayout>
</template>
<style>
.ui-projects {
  padding-top: 2%;
}
</style>
