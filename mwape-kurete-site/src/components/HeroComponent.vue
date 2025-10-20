<template>
  <div :class="$style.heroHome">
    <div :class="$style.name">Mwape Kurete</div>
    <div :class="$style.meContainer">
      <img :src="profile32" :class="$style.profileImg" alt="Profile" />

      <img
        :src="careerBadgeUx"
        :class="$style.badgeUx"
        alt="UI/UX Designer Badge"
      />
      <img
        :src="careerBadge"
        :class="$style.badgeDev"
        alt="Front-End Developer Badge"
      />
      <img
        :src="bannerHeader"
        :class="$style.bannerHeader"
        alt="Portfolio Banner"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import profile32 from "../assets/personal/photo-of-dev.png";
import careerBadge from "../assets/personal/dev-badge.svg";
import careerBadgeUx from "../assets/personal/ux-badge.svg";
import bannerHeader from "../assets/personal/banner-header.svg";
</script>

<style module>
.heroHome {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  font-family: "Anton", sans-serif;
  color: #ffffffb0;
  background: transparent;
}

.name {
  margin-top: 4rem;
  font-size: clamp(6rem, 18vw, 10rem);
  font-weight: bold;
  letter-spacing: 0.02em;
  text-align: center;
  mix-blend-mode: overlay;
  opacity: 0.85; /* Tweak opacity for desired intensity */
}

:global(.heroHome) :global(.name) {
  opacity: 0.75;
  mix-blend-mode: overlay;
}

.meContainer {
  position: relative;
  width: 89rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5rem;
}

.profileImg {
  width: 40rem;
  height: auto;
  object-fit: cover;
  position: absolute;
  left: 50%;
  top: 2px;
  transform: translateX(-50%);
  z-index: 1;
}

.badgeUx {
  position: absolute;
  left: 22%;
  top: 30%;
  width: 200px;
  z-index: 2;
}

.badgeDev {
  position: absolute;
  right: 25%;
  margin-bottom: -100rem;
  top: 15%;
  width: 210px;
  z-index: 2;
}

.bannerHeader {
  position: absolute;
  left: 50%;
  margin-top: 2.5rem;
  transform: translateX(-50%) rotate(-5deg);
  width: 560px;
  z-index: 3;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .meContainer {
    width: 89rem;
    height: 100vh;
  }
  .profileImg {
    width: 40rem;
  }
  .badgeUx,
  .badgeDev {
    width: 220px;
  }
  .bannerHeader {
    width: 340px;
  }
}

@media (max-width: 900px) {
  .heroHome {
    min-height: 100vh;
  }
  .meContainer {
    width: 36rem;
    height: 56vh;
  }
  .profileImg {
    width: 16rem;
  }
  .badgeUx,
  .badgeDev {
    width: 70px;
  }
  .bannerHeader {
    width: 170px;
  }
  .name {
    font-size: clamp(2rem, 10vw, 5rem);
    margin-top: 2rem;
  }
}

@media (max-width: 600px) {
  .meContainer {
    width: 100vw;
    height: 100vh;
    margin-top: -1rem;
    display: flex;
    align-items: center;
  }
  .profileImg {
    width: 100vw;
    max-width: 90vw;
    margin-top: -1.1rem;
  }
  .badgeUx {
    left: 5%;
    top: 20%;
    width: 27vw;
  }
  .badgeDev {
    right: 9%;
    top: 7%;
    width: 30vw;
  }
  .bannerHeader {
    width: 95vw;
    max-width: 85vw;
    margin-top: -14rem;
  }
  .name {
    font-size: clamp(4rem, 9vw, 2.4rem);
    margin-top: 8rem;
  }
}
</style>
