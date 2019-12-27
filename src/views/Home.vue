<template>
  <div class="home">
    <Navigation />
    <Hero />
    <ServiceBlocks />
    <Howitworks />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Hero from "@/components/Hero.vue";
import ServiceBlocks from "@/components/ServiceBlocks.vue";
import Howitworks from "@/components/Howitworks.vue";

export default {
  name: "home",
  components: {
    Navigation,
    Hero,
    ServiceBlocks,
    Howitworks
  }
};
</script>
