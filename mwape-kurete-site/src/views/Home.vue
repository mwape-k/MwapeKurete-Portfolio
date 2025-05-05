<template>
  <MainLayout>
    <HomeHero />
  </MainLayout>
</template>

<script>
import MainLayout from "../layouts/TheMainLayout.vue";
import HomeHero from "../components/HomeHero.vue";

export default {
  components: { MainLayout, HomeHero },
};
</script>
