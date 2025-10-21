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

@media only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (orientation: landscape) {
  .gallery-card {
    width: min(100%, 650px);
    height: fit-content !important;
    min-height: fit-content !important;
    max-height: fit-content !important;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
      rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
      rgba(0, 0, 0, 0.07) 0px 16px 16px;
    background-image: url(data:image/png;base64,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);
  }
}
</style>
