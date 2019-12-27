<template>
  <div class="home">
    <Navigation />
    <Hero />
    <ServiceBlocks />
    <Methods />
    <Howitworks />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Hero from "@/components/Hero.vue";
import ServiceBlocks from "@/components/ServiceBlocks.vue";
import Methods from "@/components/Methods.vue";
import Howitworks from "@/components/Howitworks.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navigation,
    Hero,
    ServiceBlocks,
    Methods,
    Howitworks,
    Footer
  }
};
</script>
