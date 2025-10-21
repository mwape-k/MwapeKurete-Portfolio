<template>
  <section :class="$style.aboutMeSection">
    <div :class="$style.leftCol">
      <div :class="$style.bigText">
        <span>A BIT</span>
        <span>ABOUT ME</span>
      </div>
      <div :class="$style.links">
        <button :class="$style.linkBtn" @click="openCV">CV LINK</button>
        <button :class="$style.linkBtn" @click="openIG">
          PORTFOLIO IG ACCOUNT
        </button>
      </div>
    </div>

    <div :class="$style.rightCol">
      <p :class="$style.introText">
        I’m a 22-year-old South African UI/UX and full-stack development
        student, proudly based in the vibrant city of Johannesburg.<br /><br />
        I’ve always considered myself a creative at heart. Looking back, it’s
        clear I’ve had a “thing” for all things artistic and expressive.<br />
        In Grade 6, I produced my first-ever song. By Grade 9, I had designed
        and made my first clothing item — and from that point on, creativity
        became my calling. I pursued art throughout high school, and today I’m
        studying a degree that challenges me to be creative in more ways than
        one.
      </p>
      <div :class="$style.imageAndBadges">
        <img :src="profileImg" :class="$style.profileImg" alt="Profile" />
        <div :class="$style.badges">
          <img
            :src="uxWork"
            :class="$style.badge"
            alt="UX Work Badge"
            @click="goToUX"
            role="button"
          />
          <img
            :src="devWork"
            :class="$style.badge"
            alt="Dev Work Badge"
            @click="goToDev"
            role="button"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
import profileImg from "../assets/personal/profile-img.jpeg";
import uxWork from "../assets/personal/ux-work-badge.svg";
import devWork from "../assets/personal/dev-work-badge.svg";

const router = useRouter();
const openCV = () => window.open("/CV/Mwape_Kurete_231115_CV.pdf", "_blank");
const openIG = () =>
  window.open("https://www.instagram.com/boxdcheesecake", "_blank");
const goToUX = () => router.push("/ui-work");
const goToDev = () => router.push("/dev-work");
</script>

<style module>
.aboutMeSection {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1vw;
  padding: 4vw 8vw 0 2vw;
  width: 100%;
  min-height: 100vh;
}

.leftCol {
  flex: 1 1 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 280px;
}

.bigText {
  display: flex;
  flex-direction: column;
  font-family: Anton, sans-serif;
  font-size: clamp(14rem, 9vw, 8rem);
  text-align: left;
  font-weight: 900;
  color: #fff;
  line-height: 0.95;
  margin-bottom: 2.5rem;
  text-shadow: 0px 5px 5px rgba(0, 0, 0, 0.16);
  gap: 0;
}

.links {
  margin-top: 3rem;
  display: flex;
  gap: 0.2rem;
  width: 100%;
  background: #a259ff;
  max-width: 75%;
}

.linkBtn {
  font-family: "Darker Grotesque", sans-serif;
  flex: 1;
  color: #fff;
  font-weight: 700;
  font-size: clamp(1.1rem, 2.2vw, 1.55rem);
  margin: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 2px;
  border: 2.5px solid #000000;
  cursor: pointer;
  box-shadow: 0 2px 8px -3px rgba(0, 0, 0, 0.08);
  transition: background 0.17s, color 0.17s, border 0.17s;
  letter-spacing: 0.03em;
}

.linkBtn:hover,
.linkBtn:focus {
  background: #fff;
  color: #a259ff;
  border-color: #fff;
}

.rightCol {
  flex: 1 1 55%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 320px;
  gap: 1.5rem;
}

.introText {
  font-family: "Darker Grotesque", sans-serif;
  color: #ededed;
  font-size: clamp(1.4rem, 1.6vw, 1.25rem);
  text-align: justify;
  margin-bottom: 1.3rem;
  line-height: 1.48;
  max-width: 1000%;
}

.imageAndBadges {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
}

.profileImg {
  width: 100% !important;
  max-height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 0.3rem;
  filter: grayscale(100%) contrast(1.2);
  align-self: center;
}

.badges {
  z-index: 2;
  margin-top: -8rem;
  display: flex;
  flex-direction: row;
  gap: 4.2rem;
  justify-content: center;
}

.badge {
  max-width: 430px;
  width: 29vw;
  height: auto;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.15s;
}
.badge:hover {
  transform: scale(1.07) rotate(-4deg);
}

/* Responsive stacking for smaller screens */
@media (max-width: 900px) {
  .aboutMeSection {
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;
    padding: 3vw 1vw;
  }
  .leftCol,
  .rightCol {
    max-width: 95vw;
  }
  .bigText {
    font-size: clamp(8rem, 17vw, 10.5rem);
    text-align: left;
  }
  .links {
    margin-top: 2rem;
    flex-direction: column;
    gap: 0.85rem;
    max-width: 95%;
  }
  .badges {
    z-index: 2;
    margin-top: -8rem;
    display: flex;
    flex-direction: row;
    gap: 4.2rem;
    justify-content: center;
  }

  .badge {
    max-width: 430px;
    width: 29vw;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.15s;
  }
  .badge:hover {
    transform: scale(1.07) rotate(-4deg);
  }
}

@media (max-width: 540px) {
  .bigText {
    font-size: 8rem;
    margin-bottom: 2rem;
    text-align: left;
  }
  .introText {
    font-size: 1.2rem;
    max-width: 100% !important;
  }
  .badges {
    z-index: 2;
    margin-top: -8rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
  }

  .badge {
    max-width: 430px;
    width: 49vw;
    height: auto;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.15s;
  }
  .badge:hover {
    transform: scale(1.07) rotate(-4deg);
  }

  .profileImg {
    max-width: 95vw;
  }
  .links {
    max-width: 100%;
    background-color: transparent;
  }

  .linkBtn {
    background-color: #a259ff;
  }

  .linkBtn:hover,
  .linkBtn:focus {
    background: #fff;
    color: #a259ff;
    border-color: #fff;
  }
}

/* iPad landscape header resizing: big but not overwhelming */
@media only screen and (min-device-width: 768px) and (max-device-width: 1180px) and (orientation: landscape) {
  .bigText {
    font-size: clamp(178px, 8vw, 128px) !important;
    /* Reduces excessive scaling on iPad Mini landscape */
    line-height: 1.02;
  }

  .links {
    scale: 0.7;
    width: 100%;
  }
}
</style>
