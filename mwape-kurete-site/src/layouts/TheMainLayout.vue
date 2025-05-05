<template>
  <div class="main-page-layout">
    <nav class="navbar-container">
      <NavBar />
    </nav>
    <main class="container-fluid py-5">
      <!-- Injects page content here -->
      <slot />
    </main>
    <footer class="footer-container">
      <FooterComp />
    </footer>
  </div>
</template>

<script>
import NavBar from "../components/TheNavBar.vue";
import FooterComp from "../components/TheFooter.vue";

export default {
  components: {
    NavBar,
    FooterComp,
  },
};
</script>
