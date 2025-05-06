<script>
export default {
  name: "DevProjectHighlight",

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
      <div
        class="col-12 project-cols justify-content-center align-items-center"
      >
        <div class="header2">
          <div class="some-of-my">Some of My favs</div>
          <div class="uiux-projects">Dev projects</div>
        </div>
      </div>
    </div>
    <div class="row project-rows">
      <div
        class="col-12 project-cols justify-content-center align-items-center"
      >
        <div class="project-cards-outer">
          <div class="project-card-container">
            <div class="project-header">
              <div class="click-the-card">
                Click the Card to view the GitHub Repo
              </div>
              <div class="nd-year-project">2nd Year Project</div>
            </div>
            <div class="project-card">
              <a
                href="https://github.com/Mwape-Kurete/STAXS_T1P1"
                class="project-link"
                target="_blank"
              >
                <img class="multitudes-icon" alt="" src="../assets/staxs.jpg" />
              </a>
              <div class="a-single-page">
                A website that let users view stats on their favourite artists’
                top ten tracks, and compare artist stats against one another.
              </div>
            </div>
          </div>
          <div class="project-card-container">
            <div class="project-header">
              <div class="click-the-card">
                Click the Card to view the GitHub Repo
              </div>
              <div class="nd-year-project">2nd Year Project</div>
            </div>
            <div class="project-card">
              <a
                href="https://github.com/Mwape-Kurete/ADDI"
                class="project-link"
                target="_blank"
              >
                <img class="multitudes-icon" alt="" src="../assets/addi.jpg" />
              </a>
              <div class="a-responsive-web-container">
                <span>
                  <p class="a-responsive-web">
                    A website built for extroverts. ADDI let’s users post about,
                    review/comment, and find events happening in their area.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div class="project-card-container">
            <div class="project-header">
              <div class="click-the-card">
                Click the Card to view the GitHub Repo
              </div>
              <div class="nd-year-project">2nd Year Project</div>
            </div>
            <div class="project-card">
              <a
                href="https://github.com/Mwape-Kurete/Rekeni"
                class="project-link"
                target="_blank"
              >
                <img
                  class="multitudes-icon"
                  alt=""
                  src="../assets/rekeni.jpg"
                />
              </a>
              <div class="a-single-page">
                REKENI is a website that connects music lovers through album
                recommendations & reviews. Discover new artists based on taste
                through a dynamic content-based filtering algorithm.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row project-rows">
      <div class="col-12 project-cols">
        <div class="skillset-ux">
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

<style>
.project-rows {
  width: 100% !important;
  padding-bottom: 5%;
  margin-left: 0.5rem;
}

.project-rows > .col-12 {
  width: 100%;
}

.project-cols {
  width: 100% !important;
}
/*heading*/
.some-of-my {
  position: absolute;
  top: 0px;
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.uiux-projects {
  position: absolute;
  top: 66.69px;
  text-align: center;
  right: 15%;
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-5.9deg);
  transform-origin: 0 0;
}
.header2 {
  width: 100%;
  position: relative;
  height: 209.9px;
  text-align: center;
  font-size: 96px;
  color: #d8675f;
  font-family: "Paytone One";
}

/*Cards*/
.click-the-card {
  position: absolute;
  top: 35.85px;
  left: 0px;
  transform: rotate(-2.7deg);
  transform-origin: 0 0;
}
.nd-year-project {
  position: absolute;
  top: 0px;
  left: 38.56px;
  font-family: "Paytone One";
  color: #d8675f;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 176px;
  height: 43px;
}
.project-header {
  width: 252.1px;
  position: relative;
  height: 65.8px;
  margin-bottom: 3rem;
}
.multitudes-icon {
  align-self: stretch;
  position: relative;
  border-radius: 20.83px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;

  transition: all 500ms ease-in-out;
}

.multitudes-icon:hover {
  rotate: -5deg;
  box-shadow: rgba(36, 22, 4, 0.102) 0px 10px 50px;
  cursor: pointer;
}
.a-single-page {
  align-self: stretch;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  flex-shrink: 0;
}
.project-card {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 55px;
  font-size: 16px;
  color: #fff;
  font-family: Quicksand;
}
.project-card-container {
  width: 335px;
  height: 524px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 42px;
}
.a-responsive-web {
  margin: 0;
}
.a-responsive-web-container {
  align-self: stretch;
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  flex-shrink: 0;
}
.project-cards-outer {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 100px;
  text-align: center;
  font-size: 20px;
  color: #fedcb5;
  font-family: "Just Me Again Down Here";
}

/*SkillSet*/
.my-skillset {
  width: 130px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.electron-child {
  position: absolute;
  height: 55.54%;
  width: 51.25%;
  top: 22.22%;
  right: 24.38%;
  bottom: 22.24%;
  left: 24.37%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.electron {
  width: 56px;
  position: relative;
  border-radius: 16px;
  background-color: #1e2235;
  height: 56px;
}
.typescript-child {
  position: absolute;
  height: 55.54%;
  width: 55.54%;
  top: 22.22%;
  right: 22.24%;
  bottom: 22.24%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.docker-child {
  position: absolute;
  height: 39.82%;
  width: 55.54%;
  top: 30.07%;
  right: 22.24%;
  bottom: 30.11%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.mysql-child {
  position: absolute;
  height: 55.36%;
  width: 55.54%;
  top: 22.32%;
  right: 22.24%;
  bottom: 22.32%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.php-child {
  position: absolute;
  height: 28.21%;
  width: 55.54%;
  top: 35.92%;
  right: 22.24%;
  bottom: 35.86%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.c-sharp-child {
  position: absolute;
  height: 55%;
  width: 48.93%;
  top: 22.5%;
  right: 25.54%;
  bottom: 22.5%;
  left: 25.53%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.html5-child {
  position: absolute;
  height: 55.54%;
  width: 48.93%;
  top: 22.22%;
  right: 25.57%;
  bottom: 22.24%;
  left: 25.5%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.vector-icon {
  position: absolute;
  height: 44.29%;
  width: 55.54%;
  top: 27.87%;
  right: 22.24%;
  bottom: 27.84%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.git-child {
  position: absolute;
  height: 54.11%;
  width: 55.54%;
  top: 22.91%;
  right: 22.24%;
  bottom: 22.98%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.mongo-child {
  position: absolute;
  height: 55.54%;
  width: 25%;
  top: 22.22%;
  right: 37.48%;
  bottom: 22.24%;
  left: 37.52%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.vite-child {
  position: absolute;
  height: 55.54%;
  width: 54.46%;
  top: 22.22%;
  right: 22.81%;
  bottom: 22.24%;
  left: 22.73%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.react-child {
  position: absolute;
  height: 60.36%;
  width: 56.07%;
  top: 19.78%;
  right: 22%;
  bottom: 19.86%;
  left: 21.93%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.vs-child {
  position: absolute;
  height: 55%;
  width: 55.54%;
  top: 22.52%;
  right: 22.24%;
  bottom: 22.48%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.jquery-child {
  position: absolute;
  height: 53.21%;
  width: 55.54%;
  top: 23.38%;
  right: 22.24%;
  bottom: 23.41%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.css-child {
  position: absolute;
  height: 55.54%;
  width: 48.93%;
  top: 22.22%;
  right: 25.56%;
  bottom: 22.24%;
  left: 25.51%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.figma-child {
  position: absolute;
  height: 55.54%;
  width: 36.96%;
  top: 22.22%;
  right: 31.55%;
  bottom: 22.24%;
  left: 31.48%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.vue-child {
  position: absolute;
  height: 47.86%;
  width: 55.54%;
  top: 26.04%;
  right: 22.24%;
  bottom: 26.1%;
  left: 22.22%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.node-child {
  position: absolute;
  height: 55.54%;
  width: 50.36%;
  top: 22.22%;
  right: 24.85%;
  bottom: 22.24%;
  left: 24.79%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
}
.techstack {
  width: 1047px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 9px 45px;
}
.skillset-ux {
  margin-top: 5rem;
  width: 100%;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  box-sizing: border-box;
  gap: 56px;
  text-align: center;
  font-size: 32px;
  color: #d8675f;
  font-family: "Paytone One";
}
</style>
