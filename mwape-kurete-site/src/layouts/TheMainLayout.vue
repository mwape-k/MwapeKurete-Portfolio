<script>
import NavBar from "../components/TheNavBar.vue";
import FooterComp from "../components/TheFooter.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<template>
  <div class="main-page-layout">
    <NavBar />
    <main class="container-fluid py-5">
      <!--PAGE CONTENT-->
    </main>
    <FooterComp />
  </div>
</template>
