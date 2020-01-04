<template>
  <div class="test">
    <swiper>
      <swiper-slide>
        <TestimonialCard />
      </swiper-slide>
    </swiper>
  </div>
  <!-- <swiper :options="swiperOptions">
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg"
        title="Black Panther"
        description="Wakanda Forever"
        duration="2hrs15mins"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg "
        title="Avengers : Infinity War"
        description="Thanos is around"
        duration="2hrs"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg"
        title="Thor : Ragnarok"
        description="Thor lost his hair"
        duration="2hrs30mins"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg"
        title="Black Panther"
        description="Wakanda Forever"
        duration="2hrs15mins"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--4NgMf3RF--/v1521804358/avengers.jpg "
        title="Avengers : Infinity War"
        description="Thanos is around"
        duration="2hrs"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--BmgguRnX--/v1521804402/thor.jpg"
        title="Thor : Ragnarok"
        description="Thor lost his hair"
        duration="2hrs30mins"
      />
    </swiper-slide>
    <swiper-slide>
      <TestimonialCard
        image="http://res.cloudinary.com/og-tech/image/upload/s--qXaW5V3E--/v1521804426/wakanda.jpg"
        title="Black Panther"
        description="Wakanda Forever"
        duration="2hrs15mins"
      />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>-->
</template>

<script>
import TestimonialCard from "./TestimonialCard";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Testimonials",
  components: {
    TestimonialCard,
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.swiper-container {
  height: 450px;
  width: 100%;
}

.container {
  padding: 0px 64px;
  margin-top: 130px;
  margin-bottom: 65px;
}

.draggable-slider-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  margin-top: 56px;
  touch-action: pan-y;
}

.draggable-slide {
  display: block;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
  img {
    margin-bottom: 54px;
    height: 24px;
  }
}

.rabobank {
  background: white;
}

.tupperware {
  background: #a21c19;
  color: white;
}

.tupperware-img {
  background-image: url(../assets/tupperware-workshop.jpg);
  background-position: center left 40%;
}

.testimonial-card {
  position: relative;
  overflow: hidden;
  max-width: 560px;
  min-width: 560px;
  min-height: 550px;
  padding: 64px;
}

p {
  font-size: 16px;
}

h3 {
  margin-top: 24px;
}

.arrow-button {
  width: 48px;
  height: 48px;
  background: #fec600;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.09);
    background: #ffd02b;
  }
  &:focus {
    outline: none;
  }

  &:first-child {
    margin-right: 12px;
  }
}

.testimonial-controls {
  display: flex;

  .arrow-button.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  .reversed {
    transform: rotate(180deg);
  }
}

.no-padding {
  padding: 0;
}
</style>