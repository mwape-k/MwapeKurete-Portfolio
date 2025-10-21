<script setup>
import MainLayout from "../layouts/TheMainLayout.vue";
import UIWorkHero from "../components/UIWorkHero.vue";
import UIProjects from "../components/UIProjectHighlight.vue";
import ProjectCard from "../components/ProjectCard.vue";

/// Imports for all project cards (add yours as needed)
import sticker from "../assets/projects/Peeling Off Sticker-4.png";
import sticker2 from "../assets/projects/Peeling Off Sticker-3.png";
import sticker3 from "../assets/projects/Peeling Off Sticker.png";
import sticker4 from "../assets/projects/Peeling Off Sticker-1.png";
import sticker5 from "../assets/projects/Peeling Off Sticker-2.png";
import UIProjectHighlight from "../components/UIProjectHighlight.vue";

const projects = [
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["Figma", "Branding", "Design System", "Ui/Ux"],
    projectTitle: "MULTITUDES",
    projectSticker: sticker,
    projectDesc:
      "A Single Page site built for an immersive Jazz & Art Music Festival.",
    ctaBtnText: "Check it Out",
    bgColor: "#ff595e",
    onCta: () =>
      window.open(
        "https://www.behance.net/gallery/225295889/Multitudes-A-Jazz-Music-Festival",
        "_blank"
      ),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["Figma", "Branding", "Design System", "Ui/Ux"],
    projectTitle: "EcoFest",
    projectSticker: sticker2,
    projectDesc:
      "A Responsive Web Activation for an existing South African company.",
    ctaBtnText: "Check it Out",
    bgColor: "#FFCA3A",
    onCta: () =>
      window.open(
        "https://www.behance.net/gallery/225296167/EcoFest-A-brand-activation",
        "_blank"
      ),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["Figma", "Branding", "Design System", "Ui/Ux"],
    projectTitle: "Recs",
    projectSticker: sticker3,
    projectDesc:
      "A Mobile app built for upcoming artists – discover your new favs through genre-based recommendations.",
    ctaBtnText: "Check it Out",
    bgColor: "#1982C4",
    onCta: () =>
      window.open(
        "https://www.behance.net/gallery/225296361/Recs-Discover-underground-Artists",
        "_blank"
      ),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["Figma", "Branding", "Design System", "Ui/Ux"],
    projectTitle: "KIOSK",
    projectSticker: sticker4,
    projectDesc:
      "An immersive mobile app designed for tattoo artists to connect and grow",
    ctaBtnText: "View Portfolio",
    bgColor: "#a259ff",
    onCta: () =>
      window.open("https://www.behance.net/gallery/228105347/KIOSK", "_blank"),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["Figma", "Branding", "Design System", "Ui/Ux"],
    projectTitle: "TravelPass",
    projectSticker: sticker5,
    projectDesc: "A sustainable travel solution.",
    ctaBtnText: "View Audit",
    bgColor: "#8AC926",
    onCta: () =>
      window.open(
        "https://www.behance.net/gallery/233689997/TravelPass",
        "_blank"
      ),
  },
  // Add more if needed
];
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
      <div class="project-gallery">
        <ProjectCard
          v-for="(proj, idx) in projects"
          :key="proj.projectTitle + idx"
          v-bind="proj"
          :class="['gallery-card', 'card-' + idx]"
        />
      </div>
    </div>
    <div class="skills">
      <UIProjectHighlight />
    </div>
  </MainLayout>
</template>
<style>
.ui-projects {
  padding-top: 2%;
}

/* Gallery Container: relative positioning for absolute stacking */
.project-gallery {
  position: relative;
  width: 100%;
  min-height: 800px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  height: 950px;
}

.gallery-card {
  position: absolute;
  transition: transform 0.3s cubic-bezier(0.44, 1.67, 0.75, 0.77),
    box-shadow 0.2s;
  /* All other sizing inherited from ProjectCard */
}

/* Mimic random/jumbled placement like the React example */
.card-0 {
  top: 10%;
  right: 45%;
}
.card-1 {
  top: 10%;
  right: 8%;
}
.card-2 {
  top: 52%;
  left: 10%;
}
.card-3 {
  top: 45%;
  left: 60%;
}
.card-4 {
  top: 63%;
  left: 40%;
}

.card-0:hover,
.card-1:hover,
.card-2:hover,
.card-3:hover,
.card-4:hover {
  z-index: 1;
}
/* Add more custom positions for extra cards... */

/* Stacked layout on mobile */
@media (max-width: 900px) {
  .project-gallery {
    position: static;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    height: auto;
    min-height: 0;
  }
  .gallery-card {
    position: static;
    margin-bottom: 38px;
    width: 92vw !important;
    left: unset;
    top: unset;
    min-width: 0;
    max-width: none;
    transition: none;
    margin-top: -6.5rem;
  }
}

.skills {
  margin-top: 4rem;
}
</style>
