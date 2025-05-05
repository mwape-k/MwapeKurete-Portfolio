<script>
export default {
  name: "UIProjectHighlight",

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
          <div class="uiux-projects">ui/ux projects</div>
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
                Click the Card to view the Case Study
              </div>
              <div class="nd-year-project">2nd Year Project</div>
            </div>
            <div class="project-card">
              <img
                class="multitudes-icon"
                alt=""
                src="../assets/multitudes.png"
              />
              <div class="a-single-page">
                A Single Page site built for an immersive Jazz & Art Music
                Festival.
              </div>
            </div>
          </div>
          <div class="project-card-container">
            <div class="project-header">
              <div class="click-the-card">
                Click the Card to view the Case Study
              </div>
              <div class="nd-year-project">2nd Year Project</div>
            </div>
            <div class="project-card">
              <img class="multitudes-icon" alt="" src="../assets/ecofest.png" />
              <div class="a-responsive-web-container">
                <span>
                  <p class="a-responsive-web">
                    A Responsive Web Activation for an already existing South
                    African company.
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div class="project-card-container">
            <div class="project-header">
              <div class="click-the-card">
                Click the Card to view the Case Study
              </div>
              <div class="nd-year-project">2nd Year Project</div>
            </div>
            <div class="project-card">
              <img class="multitudes-icon" alt="" src="../assets/recs.png" />
              <div class="a-single-page">
                A Mobile application built for upcoming artists - discover your
                new favs through genre based recommendations.
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
          <div class="skills">
            <img class="figma-icon" alt="" src="../assets/UI/figma.svg" />
            <img class="figma-icon" alt="" src="../assets/UI/ps.svg" />
            <img class="figma-icon" alt="" src="../assets/UI/an.svg" />
            <img class="figma-icon" alt="" src="../assets/UI/lr.svg" />
            <img class="figma-icon" alt="" src="../assets/UI/ai.svg" />
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
}
.multitudes-icon {
  align-self: stretch;
  position: relative;
  border-radius: 20.83px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: cover;
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
  gap: 26px;
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
  gap: 32px;
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
.figma-icon {
  width: 58.4px;
  position: relative;
  height: 58.4px;
  overflow: hidden;
  flex-shrink: 0;
}
.skills {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 160px;
}
.skillset-ux {
  margin-top: 5rem;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  background-color: #1e1e1e;
  width: 100%;
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
