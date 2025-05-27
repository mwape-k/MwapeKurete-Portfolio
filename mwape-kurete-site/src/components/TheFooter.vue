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
        <b class="linkedin">
          <a
            href="http://www.linkedin.com/in/mwape-kurete-"
            class="footer-link"
            target="_blank"
          >
            LinkedIn
          </a>
        </b>
        <b class="linkedin">
          <a
            href="https://www.behance.net/mwapekurete2"
            class="footer-link"
            target="_blank"
          >
            Behance
          </a>
        </b>
        <b class="linkedin">
          <a
            href="https://github.com/Mwape-Kurete?tab=overview&from=2025-05-01&to=2025-05-06"
            class="footer-link"
            target="_blank"
          >
            GitHub
          </a>
        </b>
        <b class="linkedin">
          <a
            href="https://www.instagram.com/boxdcheesecake?igsh=MXFiZzMyM2Z3MHdjZQ%3D%3D&utm_source=qr"
            class="footer-link"
            target="_blank"
          >
            Instagram
          </a>
        </b>
      </div>
      <div class="footer-header" data-aos="fade-up">
        <div class="thank-you">THANK YOU!</div>
        <div class="hope-to-hear">Hope to hear from you!</div>
      </div>
      <div class="footer-links-right">
        <div class="some-important-links">Get In Touch @</div>
        <b class="linkedin">
          <a
            href="mailto:kurete.mwape@gmail.com<"
            class="footer-link"
            target="_blank"
          >
            Kurete.Mwape@gmail.com
          </a>
        </b>
        <b class="linkedin">
          <a href="tel:+27724498646" class="footer-link"> +27 72 449 8646 </a>
        </b>
        <br />
        <br />
        <b class="linkedin"> Made with 💖 & Vue ;) </b>
      </div>
    </div>
  </div>
</template>

<style>
.footer-cont {
  width: 100%;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: -5%;
  padding: 95px 20px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-family: "Space Grotesk", sans-serif;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}

.inner-footer-container {
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
}

.some-important-links {
  position: relative;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  color: #212121;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19px;
  padding: 0 10px;
  margin-bottom: 10px;
}

.linkedin {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 23px;
  margin: 8px 0;
}

.footer-links-left,
.footer-links-right {
  color: #fff;
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  padding: 15px;
}

.footer-header {
  flex: 2;
  min-width: 300px;
  position: relative;
  height: auto;
  font-size: clamp(24px, 4vw, 48px);
  font-family: "Anton";
  color: #e9a701;
  padding: 20px;
}

.thank-you {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.hope-to-hear {
  font-family: "Space Grotesk", sans-serif;
  font-size: 28px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  transform: rotate(-7deg);
  transform-origin: 0 0;
}

a.footer-link {
  font-size: 16px !important;
  color: white !important;
  text-decoration: none;
  transition: all 0.3s ease;
}

a.footer-link:hover {
  font-weight: 600;
  background-color: #e9a701;
  color: #212121 !important;
  padding: 0.2rem 0.6rem;
  transform-origin: left;
}

/* Medium screens */
@media (max-width: 900px) {
  .inner-footer-container {
    justify-content: center;
    gap: 40px;
  }

  .footer-header {
    order: -1;
    flex: 1 1 100%;
  }

  .footer-links-left,
  .footer-links-right {
    flex: 1 1 40%;
  }
}

/* Small screens */
@media (max-width: 600px) {
  .footer-cont {
    padding: 25px 15px;
  }

  .inner-footer-container {
    flex-direction: column;
    gap: 30px;
  }

  .footer-header {
    order: -1;
    min-width: 100%;
    padding: 10px;
  }

  .footer-links-left,
  .footer-links-right {
    min-width: 100%;
    gap: 10px;
  }

  .hope-to-hear {
    transform: rotate(-5deg);
    font-size: 16px;
  }
}
</style>
