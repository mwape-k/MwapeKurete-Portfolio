<script></script>

<template>
  <div class="navbar">
    <div class="home"><a href="/">Home</a></div>
    <div class="work"><a href="">UX/UI Work</a></div>
    <div class="work"><a href="">Dev Work</a></div>
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
  position: relative;
  border-radius: 5px;
  border: 1px solid #fff2c3;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 94px;
  text-align: center;
  font-size: 20px;
  color: #cf9048;
  font-family: Quicksand;
}
</style>
