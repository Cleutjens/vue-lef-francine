<template>
  <div class="home">
    <Navigation />
    <Hero />
    <ServiceBlocks />
    <Quote />
    <WhyLef />
    <Methods />
    <Testimonials />
    <Howitworks />
    <About />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Hero from "@/components/Hero.vue";
import ServiceBlocks from "@/components/ServiceBlocks.vue";
import Quote from "@/components/Quote.vue";
import WhyLef from "@/components/WhyLef.vue";
import Methods from "@/components/Methods.vue";
import Testimonials from "@/components/Testimonials.vue";
import Howitworks from "@/components/Howitworks.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Navigation,
    Hero,
    ServiceBlocks,
    Quote,
    WhyLef,
    Methods,
    Testimonials,
    Howitworks,
    About,
    Footer
  }
};
</script>
