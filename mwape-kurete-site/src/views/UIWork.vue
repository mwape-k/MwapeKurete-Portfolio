<script setup>
import MainLayout from "../layouts/TheMainLayout.vue";
import UIWorkHero from "../components/UIWorkHero.vue";
import UIProjects from "../components/UIProjectHighlight.vue";
import ProjectCard from "../components/ProjectCard.vue";

//imports for project card
import sticker from "../assets/projects/Peeling Off Sticker-4.png";

//importing logo
import { CodeXml } from "lucide-vue-next";
import { Paintbrush } from "lucide-vue-next";

const stack01 = ["Figma", "Branding", "Design System", "Ui/Ux"];
const handleCta = () => window.open("https://yourproject.com", "_blank");
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
      <ProjectCard
        :typeIcon="typeIcon"
        projectType="UX/UI DESIGN"
        :projectStack="stack01"
        projectTitle="MULTITUDES"
        :projectSticker="sticker"
        projectDesc="A Single Page site built for an immersive Jazz & Art Music Festival."
        ctaBtnText="Check it Out"
        bgColor="#ff595e"
        :onCta="handleCta"
      />
    </div>
  </MainLayout>
</template>
<style>
.ui-projects {
  padding-top: 2%;
}
</style>
