<script setup>
import MainLayout from "../layouts/TheMainLayout.vue";
import DevWorkHero from "../components/DevWorkHero.vue";
import DevProjectHighlight from "../components/DevProjectHighlight.vue";
import ProjectCard from "../components/ProjectCard.vue";

/// Imports for all project cards (add yours as needed)
import sticker from "../assets/projects/Peeling Off Sticker-5.png";
import sticker2 from "../assets/projects/Peeling Off Sticker-6.png";
import sticker3 from "../assets/projects/Peeling Off Sticker-7.png";
import sticker4 from "../assets/projects/Peeling Off Sticker-8.png";
import sticker5 from "../assets/projects/Peeling Off Sticker-9.png";
import sticker6 from "../assets/projects/Peeling Off Sticker-10.png";

const projects = [
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["Axios", "React", "Bootstrap", "Axios", "Node.js"],
    projectTitle: "STAXS",
    projectSticker: sticker,
    projectDesc: "A Spotify & Chart.js powered artist comparison site",
    ctaBtnText: "Check it Out",
    bgColor: "#ff595e",
    onCta: () =>
      window.open("https://github.com/Mwape-Kurete/STAXS_T1P1", "_blank"),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["MongoDB", "React", "Axios", "Node.js", "Bootstrap"],
    projectTitle: "EQ",
    projectSticker: sticker2,
    projectDesc: "A High-Fi & High End audio e-commerce website",
    ctaBtnText: "Check it Out",
    bgColor: "#FFCA3A",
    onCta: () =>
      window.open(
        "https://github.com/KurtSchwimmbacher/DV200T2GroupAssignment",
        "_blank"
      ),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["MySQL", "PHP", "Bootstrap"],
    projectTitle: "ADDI",
    projectSticker: sticker3,
    projectDesc:
      "A community centered event Q&A platform. Bringing together like minded people through 3rd spaces",
    ctaBtnText: "Check it Out",
    bgColor: "#1982C4",
    onCta: () => window.open("https://github.com/Mwape-Kurete/ADDI", "_blank"),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["MongoDB", "React", "Axios", "Node.js", "Bootstrap"],
    projectTitle: "REKENI",
    projectSticker: sticker4,
    projectDesc:
      "An immersive, smart music recommendation and album review platform",
    ctaBtnText: "Check it Out",
    bgColor: "#a259ff",
    onCta: () =>
      window.open("https://github.com/Mwape-Kurete/Rekeni", "_blank"),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: [".NET", "C#", "MySQL", "Vue", "Node.js"],
    projectTitle: "CC SCHOOL",
    projectSticker: sticker5,
    projectDesc: "A End-to-end school management system",
    ctaBtnText: "Check it Out",
    bgColor: "#8AC926",
    onCta: () =>
      window.open(
        "https://github.com/Mwape-Kurete/CC-School-Frontend",
        "_blank"
      ),
  },
  {
    projectType: "UX/UI DESIGN",
    projectStack: ["React Native", "Firebase"],
    projectTitle: "REVERB",
    projectSticker: sticker6,
    projectDesc: "A re-imagined audio journalling mobile app",
    ctaBtnText: "Check it Out",
    bgColor: "#fff",
    onCta: () =>
      window.open("https://github.com/Mwape-Kurete/REVERB", "_blank"),
  },
  // Add more if needed
];
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
      <div class="project-gallery">
        <ProjectCard
          v-for="(proj, idx) in projects"
          :key="proj.projectTitle + idx"
          v-bind="proj"
          :class="['gallery-card', 'card-' + idx]"
        />
      </div>
      <div class="skills">
        <DevProjectHighlight />
      </div>
    </div>
  </MainLayout>
</template>
<style>
.dev-projects {
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
.card-5 {
  top: 33%;
  right: 65%;
}
.card-0:hover,
.card-1:hover,
.card-2:hover,
.card-3:hover,
.card-4:hover,
.card-5:hover {
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
