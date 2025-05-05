<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/TheNavBar.vue";

export default {
  components: { Navbar },
};
</script>
