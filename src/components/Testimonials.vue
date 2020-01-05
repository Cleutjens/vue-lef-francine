<template>
  <div class="testimonials" id="ervaringen">
    <div class="container-fluid">
      <div class="col-xs">
        <div class="testimonial-controls">
          <h2>Enkele klantervaringen</h2>
          <div class="button-wrap">
            <div class="buttons">
              <div
                class="arrow-button drag-slider-prev reversed disabled previous"
                tabindex="0"
                role="button"
                slot="button-prev"
                aria-label="Previous slide"
                aria-disabled="true"
              >
                <svg width="16" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5h13.8571L8.92857.6875 9.71429 0 16 5.5 9.71429 11l-.78572-.6875L13.8571 6H0V5z"
                    fill="#000"
                  />
                </svg>
              </div>
              <div
                class="arrow-button drag-slider-next next"
                tabindex="0"
                role="button"
                slot="button-next"
                aria-label="Next slide"
                aria-disabled="false"
              >
                <svg width="16" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 5h13.8571L8.92857.6875 9.71429 0 16 5.5 9.71429 11l-.78572-.6875L13.8571 6H0V5z"
                    fill="#000"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-container">
      <swiper :options="swiperOptions">
        <swiper-slide>
          <div class="TestimonialCard rabobank">
            <div class="TestimonialContent">
              <img src="../assets/rabobank-logo.svg" alt />
              <p
                class="testimonial-text"
              >"Als directievoorzitter heb ik Francine meerdere malen gevraagd als begeleider op te treden binnen het management/directieteam van de bank, omdat ze ons steeds echt verder bracht. Zij treedt doortastend op, draait niet om relevante gevoelige onderwerpen heen en speelt goed in op onderstromen.</p>
              <p class="name">P. Konijnenburg</p>
              <p class="title">Voormalig directievoorzitter Rabobank</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="TestimonialCard tupperware">
            <div class="TestimonialContent">
              <img src="../assets/tupperware-logo.svg" alt />
              <p
                class="testimonial-text"
              >“Onze organisatie staat voor een aantal impactvolle veranderingen. We zijn als managementteam in 2 dagen intensief én met veel humor begeleid om daar beter sturing aan te kunnen geven. De interventies waren eenvoudig, inzicht gevend, direct toepasbaar en erg leuk om te doen!”</p>
              <p class="name">Manager</p>
              <p class="title">Tupperware</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="TestimonialCard tupperware-img">
            <div class="TestimonialContent"></div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Testimonials",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
          nextEl: ".next",
          prevEl: ".previous"
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/breakpoints.scss";
@import "@/global-styles/flexgrid.scss";

.testimonials {
  padding: 130px 0 40px 0;
}

.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}

.swiper-container {
  // min-height: 550px;
  // width: 100%;
  margin-top: 40px;
}

.container-fluid {
  padding: 0 64px;
}

.swiper-slide {
  max-width: 550px;
}

.card-content {
  padding: 64px;
  height: 100%;
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

.TestimonialCard {
  position: relative;
  overflow: hidden;
  min-height: 380px;
  padding: 80px 80px 40px 80px;

  img {
    height: 24px;
  }
}

.testimonial-text {
  padding: 64px 0 32px 0;
}

@media (max-width: $screen-lg-min) {
  .container-fluid {
    padding: 0 32px;
  }
  .TestimonialCard {
    padding: 40px 32px;
    min-height: 380px;
  }
  .TestimonialContent {
    max-width: 100vw;
  }
}

p {
  font-size: 16px;
}

p.name {
  text-transform: uppercase;
  font-weight: 800;
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
  position: relative;
  margin-top: 32px;

  .reversed {
    transform: rotate(180deg);
    &:hover {
      box-shadow: 0 -20px 20px 0 rgba(0, 0, 0, 0.09);
    }
  }
}

.buttons {
  display: flex;
  margin-left: 64px;
}

@media (max-width: $screen-lg-min) {
  .buttons {
    margin-left: 32px;
  }
}

.no-padding {
  padding: 0;
}

@media (max-width: $screen-xs-min) {
  .swiper-container {
    margin-top: 0px !important;
  }
}

@media (max-width: $screen-md-min) {
  .testimonial-controls {
    display: block;
    margin-top: 60px;
  }
  .buttons {
    margin-left: 0;
    margin-top: 32px;
  }
}
</style>
