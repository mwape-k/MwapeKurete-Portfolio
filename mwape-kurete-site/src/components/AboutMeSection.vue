<script>
export default {
  name: "AboutMeSection",
};
</script>
<template>
  <div class="container-fluid about-me-cont">
    <div class="row about-rows">
      <div class="col-12 about-cols">
        <div class="header-2 justify-content-center align-items-center">
          <div class="a-bit-about">A Bit About</div>
          <div class="me">Me!!!</div>
        </div>
      </div>
    </div>
    <div class="row about-rows">
      <div class="col-12 about-cols">
        <div class="about-blurb">
          <div class="about-me">
            <div class="im-a-22-year-old-container">
              <p class="im-a-22-year-old">
                I’m a 22-year-old South African UI/UX and full-stack development
                student, proudly based in the vibrant city of Johannesburg.
              </p>
              <p class="im-a-22-year-old">&nbsp;</p>
              <p class="im-a-22-year-old">
                I’ve always considered myself a creative at heart. Looking back,
                it’s clear I’ve had a “thing” for all things artistic and
                expressive.
              </p>
              <p class="im-a-22-year-old">
                In Grade 6, I produced my first-ever song. By Grade 9, I had
                designed and made my first clothing item — and from that point
                on, creativity became my calling. I pursued art throughout high
                school, and today I’m studying a degree that challenges me to be
                creative in more ways than one.
              </p>
              <p class="im-a-22-year-old">&nbsp;</p>
            </div>
          </div>
          <div class="cv-cta">
            <div class="have-a-look">
              Have a Look at my official self promo here →
            </div>
            <div class="cv-link-wrapper">
              <div class="cv-link">CV LINK</div>
            </div>
            <div class="art-ig-account-wrapper">
              <div class="cv-link">Art IG Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row about-rows">
      <div class="col-12 about-cols">
        <div class="cta-section1">
          <div class="header-sml">
            <div class="want-to-see">Want to See Some of My Work?</div>
            <div class="yes-of-course">Yes, Of Course!!</div>
          </div>
          <div class="cta-btn-cont">
            <div class="yes-btn">
              <div class="uxui-work">UX/UI Work</div>
              <div class="cta-btn">
                <div class="check-it-out">check it out</div>
              </div>
            </div>
            <div class="yes-btn1">
              <div class="uxui-work">Dev Work</div>
              <div class="cta-btn">
                <div class="check-it-out">check it out</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.a-bit-about {
  position: absolute;
  top: 0px;
  left: calc(50% - 324px);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.me {
  position: absolute;
  top: 30.93px;
  margin-left: 60%;
  font-size: 128px;
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  rotate: -8deg;
  transform-origin: 0 0;
}
.header-2 {
  top: 144px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 221.9px;
  text-align: center;
}
.uxui-work {
  top: 0px;
  left: 0px;
}
.check-it-out {
  position: relative;
}
.cta-btn {
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  color: #fedcb5;
  font-family: "Just Me Again Down Here";
}
.yes-btn {
  width: 140px;
  height: 77px;
}
.yes-btn1 {
  width: 114px;
  height: 77px;
}
.cta-btn-cont {
  margin-top: 2%;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 35%;
}
.want-to-see {
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 411px;
  height: 40px;
}
.yes-of-course {
  top: 35.03px;
  margin-top: -10px;
  margin-left: 20%;
  font-family: "Just Me Again Down Here";
  color: #fff2c3;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 124px;
  height: 30.8px;
  transform: rotate(-9.2deg);
  transform-origin: 0 0;
}
.header-sml {
  top: 0px;
  justify-content: center;
  align-items: center;
  margin-left: 35%;
  width: 100%;
  text-align: center;
  height: 65.4px;
}
.cta-section1 {
  margin-top: 5%;
  padding-top: 52px;
  padding-bottom: 52px;
  border: 25px;
  width: 100%;
  height: 280px;
  font-size: 24px;

  /* From https://css.glass */
  background: rgba(56, 54, 54, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(9px);
  -webkit-backdrop-filter: blur(9px);
  border: 1px solid rgba(56, 54, 54, 0.08);
}
.im-a-22-year-old {
  margin: 0;
}
.im-a-22-year-old-container {
  width: 887px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.about-me {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
.have-a-look {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 17.58px;
  font-family: "Paytone One";
  display: inline-block;
  width: 340px;
  height: 44px;
}
.cv-link-wrapper {
  position: absolute;
  top: 20px;
  left: 56px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  color: #ff7262;
}
.art-ig-account-wrapper {
  position: absolute;
  top: 20px;
  left: 142px;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  color: #cf9048;
}
.cv-cta {
  width: 340px;
  position: relative;
  height: 55px;
  text-align: left;
  font-size: 24px;
  font-family: "Just Me Again Down Here";
}
.about-blurb {
  top: 392px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 17px;
  font-size: 17.58px;
  color: #fff;
  font-family: Quicksand;
}
.about-me-cont {
  width: 100%;
  position: relative;
  height: 1024px;
  overflow: hidden;
  text-align: center;
  font-size: 96px;
  color: #d8675f;
  font-family: "Paytone One";
}
</style>
