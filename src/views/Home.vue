<template>
  <div class="home">
    <Navigation />
    <Hero />
    <ServiceBlocks />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Hero from "@/components/Hero.vue";
import ServiceBlocks from "@/components/ServiceBlocks.vue";

export default {
  name: "home",
  components: {
    Navigation,
    Hero,
    ServiceBlocks
  }
};
</script>
