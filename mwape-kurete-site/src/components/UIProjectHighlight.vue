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
  margin-top: 4rem !important;
}

/* Header */

.some-of-my {
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.uiux-projects {
  text-align: center;
  font-family: "Darker Grotesque";
  color: #212121;
  width: 100%;
  background-color: #d67456;
  font-size: clamp(16px, 5vw, 28px);
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
  margin-top: 0.5rem;
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
  color: #d67456;
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
  color: #fff;
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
  margin-top: 4rem;
}
.electron img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
</style>
