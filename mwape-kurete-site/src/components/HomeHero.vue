<script>
export default {
  name: "HomeHero",

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
  <div class="hero-home" style="width: 100%; height: 100vh; position: relative">
    <div class="header1">
      <div class="mwape-kurete">Mwape Kurete</div>
      <div class="portfolio">Portfolio</div>
    </div>
    <div class="explore-btn">
      <div class="explore" @click="scrollToSection('about-sect')">
        Explore!!!
      </div>
    </div>
  </div>
</template>
<style>
.mwape-kurete {
  top: 0px;
  left: calc(50% - 458.5px);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.portfolio {
  top: 127.47px;
  left: 70%;
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-5.9deg);
  transform-origin: 0 0;
}
.header1 {
  margin-top: 10%;
  width: 100%;
  height: 318.4px;
  margin-bottom: 5%;
}
.explore {
  position: relative;
}
.explore-btn {
  border-radius: 4px;
  width: 100%;
  height: 56px;
  padding: 10px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-align: center;
  font-size: 36px;
  color: #fedcb5;
  font-family: "Just Me Again Down Here";
}

.explore-btn:hover {
  transition: all 3ms ease-in-out;
  color: #d8675f;
  rotate: -5deg;
  cursor: pointer;
}

.hero-home {
  width: 100%;
  margin-bottom: 10%;
  position: relative;
  height: 800px;
  overflow: hidden;
  text-align: center;
  font-size: 128px;
  color: #d8675f;
  font-family: "Paytone One";
  display: block;
  flex-direction: row;
}
</style>
