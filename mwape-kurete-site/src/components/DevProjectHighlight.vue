<script>
import CircularGallery from "../components/vue-bits/CircleGallery.vue";

import electron from "../assets/electron.svg";
import docker from "../assets/docker.svg";
import mysql from "../assets/mysql.svg";
import php from "../assets/php.svg";
import csharp from "../assets/c-sharp.svg";
import js from "../assets/js.svg";
import html5 from "../assets/html5.svg";
import bootstrap from "../assets/bootstrap.svg";
import git from "../assets/git.svg";
import mongo from "../assets/mongo.svg";
import vite from "../assets/vite.svg";
import react from "../assets/react.svg";
import vs from "../assets/vs.svg";
import npm from "../assets/npm.svg";
import jquery from "../assets/jquery.svg";
import css from "../assets/css.svg";
import figma from "../assets/figma.svg";
import vue from "../assets/vue.svg";
import node from "../assets/node.svg";

export default {
  name: "DevProjectHighlight",
  components: { CircularGallery },
  data() {
    const logos = [
      { image: electron, text: "Electron" },
      { image: docker, text: "Docker" },
      { image: mysql, text: "MySQL" },
      { image: php, text: "PHP" },
      { image: csharp, text: "C-Sharp" },
      { image: js, text: "JavaScript" },
      { image: html5, text: "HTML5" },
      { image: bootstrap, text: "Bootstrap" },
      { image: git, text: "GitHub" },
      { image: mongo, text: "Mongo" },
      { image: vite, text: "Vite" },
      { image: react, text: "React" },
      { image: vs, text: "VS" },
      { image: npm, text: "NPM" },
      { image: jquery, text: "JQuery" },
      { image: css, text: "CSS" },
      { image: figma, text: "Figma" },
      { image: vue, text: "Vue" },
      { image: node, text: "Node" },
    ];
    return {
      electron,
      docker,
      mysql,
      php,
      csharp,
      js,
      html5,
      bootstrap,
      git,
      mongo,
      vite,
      react,
      vs,
      npm,
      jquery,
      css,
      figma,
      vue,
      node,
      logos,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<template>
  <div class="container-fluid main-highlights">
    <div class="row project-rows">
      <div class="col-12 project-cols">
        <div class="skillset-ux" data-aos="zoom-in-up">
          <div class="my-skillset">My Skillset</div>
          <div class="techstack">
            <div class="electron">
              <img class="electron-child" alt="" src="../assets/electron.svg" />
            </div>
            <div class="electron">
              <img
                class="typescript-child"
                alt=""
                src="../assets/typescript.svg"
              />
            </div>
            <div class="electron">
              <img class="docker-child" alt="" src="../assets/docker.svg" />
            </div>
            <div class="electron">
              <img class="mysql-child" alt="" src="../assets/mysql.svg" />
            </div>
            <div class="electron">
              <img class="php-child" alt="" src="../assets/php.svg" />
            </div>
            <div class="electron">
              <img class="c-sharp-child" alt="" src="../assets/c-sharp.svg" />
            </div>
            <div class="electron">
              <img class="typescript-child" alt="" src="../assets/js.svg" />
            </div>
            <div class="electron">
              <img class="html5-child" alt="" src="../assets/html5.svg" />
            </div>
            <div class="electron">
              <img class="vector-icon" alt="" src="../assets/bootstrap.svg" />
            </div>
            <div class="electron">
              <img class="git-child" alt="" src="../assets/git.svg" />
            </div>
            <div class="electron">
              <img class="mongo-child" alt="" src="../assets/mongo.svg" />
            </div>
            <div class="electron">
              <img class="vite-child" alt="" src="../assets/vite.svg" />
            </div>
            <div class="electron">
              <img class="react-child" alt="" src="../assets/react.svg" />
            </div>
            <div class="electron">
              <img class="vs-child" alt="" src="../assets/vs.svg" />
            </div>
            <div class="electron">
              <img class="typescript-child" alt="" src="../assets/npm.svg" />
            </div>
            <div class="electron">
              <img class="jquery-child" alt="" src="../assets/jquery.svg" />
            </div>
            <div class="electron">
              <img class="css-child" alt="" src="../assets/css.svg" />
            </div>
            <div class="electron">
              <img class="figma-child" alt="" src="../assets/figma.svg" />
            </div>
            <div class="electron">
              <img class="vue-child" alt="" src="../assets/vue.svg" />
            </div>
            <div class="electron">
              <img class="node-child" alt="" src="../assets/node.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-rows {
  width: 100%;
  padding-bottom: clamp(2rem, 5vw, 5rem);
}

.project-cols {
  width: 100%;
  margin-top: 8rem !important;
}

/* Header */
.header2 {
  width: 100%;
  position: relative;
  height: auto;
  text-align: center;
  font-size: clamp(48px, 8vw, 96px);
  color: #fff;
  font-family: "Anton";
  padding: 2rem 1rem;
  line-height: 1.5;
}

.some-of-my {
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

/* Project Cards */
.project-cards-outer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(2rem, 5vw, 4rem);
  width: 100%;
  padding: 0 1rem;
  text-align: center;
  font-size: 20px;
  color: #fff;
  font-family: "Darker Grotesque";
}

.project-card-container {
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.project-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  font-family: "Anton";
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
  font-family: "Darker Grotesque";
}

.multitudes-icon {
  width: 100%;
  border-radius: 20.83px;
  object-fit: cover;
}

.a-single-page {
  padding: 0 1rem;
}

/* Skillset Section */
.skillset-ux {
  margin-top: 5rem;
  background: rgba(33, 33, 33, 0.528);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.3px);
  -webkit-backdrop-filter: blur(10.3px);
  padding: 2rem;
  max-width: 100vw;
  margin: 0 auto;
  border: 1px solid rgba(56, 54, 54, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  font-size: 32px;
  color: #4e8359;
  font-family: "Anton";
}

.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.figma-icon {
  width: 58px;
  height: 58px;
}

/* RESPONSIVE HEADER */

.uiux-projects {
  text-align: center;
  font-family: "Darker Grotesque";
  color: #212121;
  width: 100%;
  background-color: #4e8359;
  font-size: clamp(16px, 5vw, 28px);
}

.click-the-card {
  font-family: "Darker Grotesque";
  font-weight: 400 !important;
  font-size: medium;
  color: #fff;
  background-color: #ffffff77 !important;
}

/* CENTERED CARD LAYOUT */
.project-cards-outer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 60px;
  padding: 1rem;
  width: 100%;
  text-align: center;
}

/* RESPONSIVE CARDS */
.project-card-container {
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* HOVER ANIMATIONS */
.project-card {
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  background-color: #141414;
  border-radius: 20px;
  padding: 1rem;
}
.project-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 35px rgba(0, 0, 0, 0.5);
}
.project-card img {
  transition: transform 0.5s ease;
  border-radius: 16px;
}
.project-card:hover img {
  transform: scale(1.05);
}

/* SKILLS WRAP */
.techstack {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
}
.electron img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
</style>
