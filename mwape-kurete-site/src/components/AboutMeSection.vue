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
        <div class="a-bit-about">A BIT ABOUT</div>
        <div class="me">Me!!!</div>
      </div>
    </div>

    <!-- Bio Section -->
    <div class="about-content text-center">
      <div class="about-blur">
        <p class="bio-text">
          I’m a 22-year-old UI/UX designer and aspiring full-stack developer
          based in the vibrant city of Johannesburg, South Africa. Currently in
          my third year of a BA in Creative Technology at The Open Window
          Institute, I specialize in UI/UX Design and Interactive Development —
          a path that allows me to merge my technical curiosity with a lifelong
          creative passion.
        </p>
        <p class="bio-text">
          Creativity has always been central to my identity. From composing my
          first song in Grade 6 to designing my first clothing item in Grade 9,
          I’ve consistently sought out expressive, hands-on ways to bring ideas
          to life. This artistic foundation has shaped my design philosophy, one
          rooted in visual storytelling, intentional interaction, and
          human-centered design.
        </p>
        <p class="bio-text">
          With a strong background in traditional and digital art, I’ve
          developed practical skills in tools like Figma, Photoshop, and Adobe
          Illustrator. My experience ranges from crafting intuitive user
          interfaces to developing full-stack web applications, always with an
          emphasis on both form and function.
          <br />
          I’m driven by the challenge of solving problems through design, and
          I’m passionate about creating digital experiences that are not only
          functional and accessible but also emotionally resonant and
          future-forward.
        </p>
      </div>

      <!-- Links Section -->
      <div class="links-section">
        <div class="have-a-look">
          Have a Look at my official self promo here →
        </div>
        <div class="link-buttons">
          <a
            href="/CV/Mwape_Kurete_231115_CV.pdf"
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
        <div class="yes-of-course">[ <small>Yes, Of Course!!</small> ]</div>
      </div>
      <div class="cta-buttons">
        <div class="cta-option">
          <div class="work-type">UX/UI Work</div>
          <router-link to="/ui-work" class="cta-button"
            >check it out</router-link
          >
        </div>
        <div class="cta-option">
          <div class="work-type">Dev Work</div>
          <router-link to="/dev-work" class="cta-button"
            >check it out</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Base Styles */
.about-me-cont {
  width: 100%;
  padding: 1rem 0;
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
  font-size: clamp(48px, 8vw, 128px);
  color: #fff;
  font-family: "Anton", sans-serif;
  line-height: 0.9;
}

.me {
  font-size: clamp(16px, 10vw, 48px);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 600;
  color: #212121;
  display: inline-block;
  background-color: #65a3d4;
  width: 100%;
  height: 4rem;
  transform-origin: center;
}

/* Bio Content */
.about-content {
  max-width: 900px;
  margin: 0 auto 4rem;
  text-align: center;
}

.bio-text {
  font-size: clamp(16px, 2vw, 18px);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: justify;
}

/* Links Section */
.links-section {
  margin-top: 3rem;
  text-align: center;
}

.have-a-look {
  font-size: clamp(16px, 2vw, 18px);
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
}

.link-buttons {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.cv-link,
.ig-link {
  font-family: "Space Grotesk", sans-serif;
  color: #fff !important;
  font-size: clamp(12px, 3vw, 16px);
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cv-link {
  color: #fff;
}

.ig-link {
  color: #fff;
}

.cv-link:hover,
.ig-link:hover {
  background-color: #65a4d4;
  color: #212121 !important;
}

/* CTA Section */
.cta-section {
  background: rgba(33, 33, 33, 0.528);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10.3px);
  -webkit-backdrop-filter: blur(10.3px);
  padding: 2rem;
  max-width: 100vw;
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
  font-family: "Anton", sans-serif;
  color: #65a3d4;
}

.yes-of-course {
  font-family: "Space Grotesk";
  color: #fff;
  font-size: clamp(16px, 4vw, 20px);
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
  font-family: "Anton";
  color: #fff;
}

.cta-button {
  font-family: "Space Grotesk", sans-serif;
  color: #fff !important;
  font-size: clamp(12px, 2vw, 16px);
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.cta-button:hover {
  color: #fff !important;
  background-color: #65a4d46f;
}

/* Enhanced Responsive Adjustments */
@media (max-width: 1024px) {
  /* Tablet landscape adjustments */
  .header-content {
    padding: 0 2rem;
  }

  .me {
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
    font-size: clamp(22px, 12vw, 36px);
  }

  .about-content {
    margin-bottom: 3rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  /* Mobile portrait adjustments */
  .about-me-cont {
    padding-bottom: 8rem; /* Increased footer space */
  }

  .yes-of-course {
    font-size: 16px;
  }

  .cta-buttons {
    gap: 1.5rem;
  }

  .me {
    font-size: 16px;
    height: 1.5rem;
  }
}

@media (max-width: 375px) {
  /* Small mobile devices */
  .about-me-cont {
    padding-bottom: 10rem;
  }

  .me {
    margin-left: 0.2em;
    font-size: 12px;
    height: 1rem;
  }

  .bio-text {
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
</style>
