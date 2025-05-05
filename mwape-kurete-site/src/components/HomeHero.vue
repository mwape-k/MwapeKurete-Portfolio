<script>
export default {
  name: "HomeHero",
};
</script>
<template>
  <div class="hero-home" style="width: 100%; height: 100vh; position: relative">
    <div class="header1">
      <div class="mwape-kurete">Mwape Kurete</div>
      <div class="portfolio">Portfoli</div>
    </div>
    <div class="explore-btn">
      <div class="explore">Explore!!!</div>
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
  left: 267px;
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-5.9deg);
  transform-origin: 0 0;
}
.header1 {
  top: 143px;
  left: calc(50% - 458px);
  width: 917px;
  height: 318.4px;
}
.explore {
  position: relative;
}
.explore-btn {
  top: 663px;
  left: 625px;
  border-radius: 4px;
  width: 150px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 36px;
  color: #347796;
  font-family: "Just Me Again Down Here";
}
.hero-home {
  width: 100%;
  position: relative;
  height: 907px;
  overflow: hidden;
  text-align: left;
  font-size: 128px;
  color: #d8675f;
  font-family: "Paytone One";
}
</style>
