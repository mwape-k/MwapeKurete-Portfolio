<template>
  <div class="main-page-layout">
    <nav class="navbar-container">
      <NavBar />
    </nav>
    <main
      class="container-fluid page-content"
      style="position: relative; min-height: 100vh"
    >
      <!-- Injects page content here -->
      <div class="content-wrapper">
        <slot />
      </div>
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

<style></style>
