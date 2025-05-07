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
        <div class="header2" data-aos="fade down">
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
          <div
            class="project-card-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="project-header">
              <div class="nd-year-project">2nd Year Project</div>
              <div class="click-the-card">
                Click the Card to view the GitHub Repo
              </div>
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

          <div
            class="project-card-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="project-header">
              <div class="nd-year-project">2nd Year Project</div>
              <div class="click-the-card">
                Click the Card to view the GitHub Repo
              </div>
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
                <p class="a-responsive-web">
                  A website built for extroverts. ADDI lets users post about,
                  review/comment, and find events happening in their area.
                </p>
              </div>
            </div>
          </div>

          <div
            class="project-card-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="project-header">
              <div class="nd-year-project">2nd Year Project</div>
              <div class="click-the-card">
                Click the Card to view the GitHub Repo
              </div>
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
}

/* Header */
.header2 {
  width: 100%;
  text-align: center;
  font-size: clamp(32px, 8vw, 96px);
  color: #d8675f;
  font-family: "Paytone One";
  position: relative;
  padding-bottom: 2rem;
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
  color: #fedcb5;
  font-family: "Just Me Again Down Here";
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
  font-family: "Paytone One";
  color: #d8675f;
  text-align: center;
}

.project-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 16px;
  color: #fff;
  font-family: Quicksand;
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
  background-color: #1e1e1e;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  text-align: center;
  font-size: 32px;
  color: #d8675f;
  font-family: "Paytone One";
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
.header2 {
  width: 100%;
  position: relative;
  height: auto;
  text-align: center;
  font-size: clamp(48px, 8vw, 96px);
  color: #d8675f;
  font-family: "Paytone One";
  padding: 2rem 1rem;
}
.uiux-projects {
  position: relative;
  text-align: center;
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-3deg);
  font-size: clamp(24px, 4vw, 36px);
  margin-top: -1rem;
}

.click-the-card {
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-2.9deg);
  margin-top: -1.2rem;
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
  background-color: #2c2c2c;
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
