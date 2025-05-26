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
    <!-- Header Section -->
    <div class="row project-rows">
      <div
        class="col-12 project-cols d-flex justify-content-center align-items-center"
      >
        <div class="header2" data-aos="fade down">
          <div class="some-of-my">Some of My fav</div>
          <div class="uiux-projects">ui/ux projects</div>
        </div>
      </div>
    </div>

    <!-- Project Cards -->
    <div class="row project-rows">
      <div
        class="col-12 project-cols d-flex justify-content-center align-items-center"
      >
        <div class="project-cards-outer">
          <!-- Card 1 -->
          <div
            class="project-card-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="project-header">
              <div class="nd-year-project">2nd Year Project</div>
              <div class="click-the-card">
                Click the Card to view the Case Study
              </div>
            </div>
            <div class="project-card">
              <a
                href="https://www.behance.net/gallery/225295889/Multitudes-A-Jazz-Music-Festival"
                class="project-card-links"
                target="_blank"
              >
                <img
                  class="multitudes-icon"
                  alt=""
                  src="../assets/multitudes.png"
                />
              </a>
              <div class="a-single-page">
                A Single Page site built for an immersive Jazz & Art Music
                Festival.
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            class="project-card-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="project-header">
              <div class="nd-year-project">2nd Year Project</div>
              <div class="click-the-card">
                Click the Card to view the Case Study
              </div>
            </div>
            <div class="project-card">
              <a
                href="https://www.behance.net/gallery/225296167/EcoFest-A-brand-activation"
                class="project-card-links"
                target="_blank"
              >
                <img
                  class="multitudes-icon"
                  alt=""
                  src="../assets/ecofest.png"
                />
              </a>
              <div class="a-single-page">
                A Responsive Web Activation for an existing South African
                company.
              </div>
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="project-card-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="project-header">
              <div class="nd-year-project">2nd Year Project</div>
              <div class="click-the-card">
                Click the Card to view the Case Study
              </div>
            </div>
            <div class="project-card">
              <a
                href="https://www.behance.net/gallery/225296361/Recs-Discover-underground-Artists"
                class="project-card-links"
                target="_blank"
              >
                <img class="multitudes-icon" alt="" src="../assets/recs.png" />
              </a>
              <div class="a-single-page">
                A Mobile app built for upcoming artists – discover your new favs
                through genre-based recommendations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Skillset -->
    <div class="row project-rows">
      <div class="col-12 project-cols">
        <div class="skillset-ux" data-aos="zoom-in-up">
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

<style scoped>
.main-highlights {
  z-index: 900;
}
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

.uiux-projects {
  text-align: center;
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-5.9deg);
  margin-top: -10rem;
  font-size: clamp(24px, 5vw, 48px);
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
  margin-top: 1rem;
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
