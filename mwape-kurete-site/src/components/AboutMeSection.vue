<script>
export default {
  name: "AboutMeSection",
};
</script>

<template>
  <div class="about-me-cont">
    <!-- Header Section -->
    <div class="about-header">
      <div class="header-content">
        <div class="a-bit-about">A Bit About</div>
        <div class="me">Me!!!</div>
      </div>
    </div>

    <!-- Bio Section -->
    <div class="about-content">
      <div class="about-blurb">
        <p class="bio-text">
          I'm a 22-year-old South African UI/UX and full-stack development
          student, proudly based in the vibrant city of Johannesburg.
        </p>
        <p class="bio-text">
          I've always considered myself a creative at heart. Looking back, it's
          clear I've had a "thing" for all things artistic and expressive.
        </p>
        <p class="bio-text">
          In Grade 6, I produced my first-ever song. By Grade 9, I had designed
          and made my first clothing item — and from that point on, creativity
          became my calling. I pursued art throughout high school, and today I'm
          studying a degree that challenges me to be creative in more ways than
          one.
        </p>
      </div>

      <!-- Links Section -->
      <div class="links-section">
        <div class="have-a-look">
          Have a Look at my official self promo here →
        </div>
        <div class="link-buttons">
          <a
            href="../../public/CV/Mwape_Kurete_231115_CV.pdf"
            class="cv-link"
            target="_blank"
          >
            CV LINK
          </a>
          <a
            href="https://www.instagram.com/boxdcheesecake"
            class="ig-link"
            target="_blank"
          >
            Art IG Account
          </a>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="cta-section">
      <div class="cta-header">
        <div class="want-to-see">Want to See Some of My Work?</div>
        <div class="yes-of-course">Yes, Of Course!!</div>
      </div>
      <div class="cta-buttons">
        <div class="cta-option">
          <div class="work-type">UX/UI Work</div>
          <a href="/ui-work" class="cta-button">check it out</a>
        </div>
        <div class="cta-option">
          <div class="work-type">Dev Work</div>
          <a href="/dev-work" class="cta-button">check it out</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Base Styles */
.about-me-cont {
  width: 100%;
  padding: 2rem 1rem;
  color: #fff;
  font-family: Quicksand;
}

/* Header Styles */
.about-header {
  margin-bottom: 3rem;
  text-align: center;
}

.header-content {
  position: relative;
  display: inline-block;
}

.a-bit-about {
  font-size: clamp(48px, 8vw, 96px);
  color: #d8675f;
  font-family: "Paytone One";
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  line-height: 0.9;
}

.me {
  font-size: clamp(64px, 10vw, 128px);
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transform: rotate(-8deg);
  display: inline-block;
  margin-left: 0.5em;
  transform-origin: left center;
}

/* Bio Content */
.about-content {
  max-width: 900px;
  margin: 0 auto 4rem;
}

.bio-text {
  font-size: clamp(16px, 2vw, 18px);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: left;
}

/* Links Section */
.links-section {
  margin-top: 3rem;
  text-align: center;
}

.have-a-look {
  font-size: clamp(16px, 2vw, 18px);
  font-family: "Paytone One";
  margin-bottom: 1.5rem;
  color: #d8675f;
}

.link-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.cv-link,
.ig-link {
  font-family: "Just Me Again Down Here";
  font-size: clamp(18px, 3vw, 24px);
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cv-link {
  color: #cf9048;
}

.ig-link {
  color: #d8675f;
}

.cv-link:hover,
.ig-link:hover {
  color: #fedcb5;
  transform: scale(1.05);
}

/* CTA Section */
.cta-section {
  background: rgba(56, 54, 54, 0.26);
  border-radius: 16px;
  backdrop-filter: blur(9px);
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  border: 1px solid rgba(56, 54, 54, 0.08);
}

.cta-header {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.want-to-see {
  font-size: clamp(20px, 3vw, 24px);
  margin-bottom: 0.5rem;
  font-family: "Paytone One";
  color: #d8675f;
}

.yes-of-course {
  font-family: "Just Me Again Down Here";
  color: #fff2c3;
  font-size: clamp(24px, 4vw, 32px);
  transform: rotate(-9.2deg);
  display: inline-block;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: clamp(2rem, 10vw, 4rem);
  flex-wrap: wrap;
}

.cta-option {
  text-align: center;
}

.work-type {
  font-size: clamp(18px, 2.5vw, 20px);
  margin-bottom: 0.5rem;
  font-family: "Paytone One";
  color: #d8675f;
}

.cta-button {
  font-family: "Just Me Again Down Here";
  color: #fedcb5;
  font-size: clamp(16px, 2vw, 18px);
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  color: #d8675f;
  transform: rotate(-5deg) scale(1.05);
}

/* Enhanced Responsive Adjustments */
@media (max-width: 1024px) {
  /* Tablet landscape adjustments */
  .header-content {
    padding: 0 2rem;
  }

  .me {
    transform: rotate(-8deg) scale(0.95);
  }
}

@media (max-width: 768px) {
  /* Tablet portrait adjustments */
  .about-header {
    margin-bottom: 2rem;
  }
  .about-me-cont {
    padding-bottom: 6rem; /* Reduced from 15rem */
  }
  .me {
    margin-left: 0.3em;
    transform: rotate(-8deg) scale(0.9);
  }

  .link-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .cta-section {
    margin-bottom: 8rem;
  }
}

@media (max-width: 640px) {
  /* Large mobile breakpoint */
  .a-bit-about {
    font-size: clamp(40px, 10vw, 48px);
  }

  .me {
    font-size: clamp(48px, 12vw, 64px);
  }

  .about-content {
    margin-bottom: 3rem;
  }
}

@media (max-width: 480px) {
  /* Mobile portrait adjustments */
  .about-me-cont {
    padding-bottom: 8rem; /* Increased footer space */
  }

  .yes-of-course {
    transform: rotate(-9.2deg) scale(0.85);
  }

  .cta-buttons {
    gap: 1.5rem;
  }
}

@media (max-width: 375px) {
  /* Small mobile devices */
  .about-me-cont {
    padding-bottom: 10rem;
  }

  .me {
    margin-left: 0.2em;
    transform: rotate(-8deg) scale(0.8);
  }

  .bio-text {
    font-size: clamp(15px, 3.5vw, 16px);
  }
}

/* Special height considerations */
@media (max-height: 700px) {
  .about-me-cont {
    padding-bottom: 8rem;
  }

  .about-header {
    margin-bottom: 1.5rem;
  }
}

/* Animation stays the same */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
</style>
