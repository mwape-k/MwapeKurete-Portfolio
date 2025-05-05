<script>
export default {
  name: "TheNavBar",
};
</script>

<template>
  <div class="navbar">
    <div class="home"><a href="/">Home</a></div>
    <div class="work"><a href="/ui-work">UX/UI Work</a></div>
    <div class="work"><a href="/dev-work">Dev Work</a></div>
  </div>
</template>

<style>
.home {
  width: 200px;
  position: relative;
  font-weight: 600;
  color: #d8675f;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-shrink: 0;
}
.work {
  width: 200px;
  position: relative;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-shrink: 0;
}
.navbar {
  top: 0;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  text-align: center;
  font-size: 24px;
  color: #cf9048;
  font-family: "Just Me Again Down Here";
}
</style>
