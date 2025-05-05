<script>
export default {
  name: "TheFooter",
};
</script>
<template>
  <div class="footer-cont">
    <div class="inner-footer-container">
      <div class="footer-links-left">
        <div class="some-important-links">Some Important Links</div>
        <b class="linkedin">LinkedIn</b>
        <b class="linkedin">Behance</b>
        <b class="linkedin">GitHub</b>
        <b class="linkedin">Instagram</b>
      </div>
      <div class="footer-header">
        <div class="thank-you">THANK YOU!</div>
        <div class="hope-to-hear">Hope to hear from you!</div>
      </div>
      <div class="footer-links-right">
        <div class="some-important-links">Get In Touch @</div>
        <b class="linkedin">Kurete.Mwape@gmail.com</b>
        <b class="linkedin">+27 72 449 8646</b>
      </div>
    </div>
  </div>
</template>
<style>
.some-important-links {
  align-self: stretch;
  position: relative;
  font-family: "Paytone One";
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  flex-shrink: 0;
}
.linkedin {
  align-self: stretch;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  flex-shrink: 0;
}
.footer-links-left {
  width: 217px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
}
.thank-you {
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 517px;
  height: 183px;
}
.hope-to-hear {
  position: absolute;
  top: 120.27px;
  left: 83px;
  font-family: "Just Me Again Down Here";
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350.1px;
  height: 122.9px;
  transform: rotate(-7.7deg);
  transform-origin: 0 0;
}
.footer-header {
  width: 517px;
  position: relative;
  height: 243px;
  font-size: 48px;
  font-family: "Paytone One";
}
.footer-links-right {
  width: 217px;
  height: 243px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
}
.inner-footer-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 188px;
}
.footer-cont {
  width: 100%;
  background-color: #cf9048;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 35px 54px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: #1e1e1e;
  font-family: Quicksand;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}
</style>
