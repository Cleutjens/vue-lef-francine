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
        <swiper-slide class="tupperware-slide">
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
        <swiper-slide>
          <div class="TestimonialCard campina">
            <div class="TestimonialContent">
              <img src="../assets/Campina-logo.svg" alt />
              <p
                class="testimonial-text"
              >“Francine heeft mij zelf laten (her)ontdekken wat voor mij belangrijk is en hoe ik op mijn eigen wijze impact kan hebben. Ik heb weer plezier in wat ik doe en voel me krachtig. Het coaching traject was het begin van een nieuwe fase in mijn leven. Ik weet hoe ik wil dat mijn leven er over vijf jaar uit ziet. En het blijft niet bij dromen en plannen maken, het wordt al werkelijkheid!”</p>
              <p class="name">Petra Schildmeijer</p>
              <p class="title">Projectmanager FC</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="TestimonialCard overheid">
            <div class="TestimonialContent">
              <img src="../assets/overheid-logo.svg" alt />
              <p
                class="testimonial-text"
              >“Francine brengt de veiligheid om op tafel te krijgen wat nodig en waardevol is. Met humor, scherpte en een goed gevoel voor timing. Aan de hand van de dagelijkse praktijk en onze belangrijke thema’s zijn de kwaliteiten én het groeipotentieel van het team in onze organisatie besproken. Een frisse start, wat ik wilde!”</p>
              <p class="name">Manager</p>
              <p class="title">Ministerie van Sociale Zaken en Werkgelegenheid</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="TestimonialCard zijerveld">
            <div class="TestimonialContent">
              <img src="../assets/zijerveld-logo.png" alt />
              <p
                class="testimonial-text"
              >“Na de start up maakt onze business een snelle groei door. Met de hulp van Francine en de aangedragen tools groeien wijzelf ook, zowel op individueel als teamniveau.”</p>
              <p class="name">Francesco Gribling</p>
              <p class="title">Manager Sales Zijerveld</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="TestimonialCard talentcare">
            <div class="TestimonialContent">
              <img src="../assets/talentcare-logo.svg" alt />
              <p
                class="testimonial-text"
              >“Francine heeft ons geholpen ons bedrijf naar de volgende fase te brengen. Ze heeft ons als directie en management team uitgedaagd, gecoacht en enorm veel geleerd. Van marketing- en salesstrategie tot implementatie in de bedrijfsvoering en op het HR vlak.”</p>
              <!-- Francine heb ik ervaren als pragmatisch, betrokken en authentiek. En ze is ook gewoon heel erg leuk om mee te werken. Je voelt dat er echt iemand naast je staat als ondernemer! -->
              <p class="name">Stefan Ottenbros</p>
              <p class="title">Oprichter en eigenaar TalentCare</p>
            </div>
          </div>
        </swiper-slide>
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
        // breakpoints: {
        //   575: {
        //     swiperSlide.removeSlide(1);
        //   },
        // },
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
  cursor: move; /* fallback if grab cursor is unsupported */
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:active {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }

  img {
    height: 24px;
  }
}

.campina {
  img {
    height: 32px;
  }
  .testimonial-text {
    padding-top: 56px;
  }
}

.overheid {
  background: $blue;
  color: white;
  img {
    height: 48px;
  }
  .testimonial-text {
    padding-top: 40px;
  }
}

.zijerveld {
  img {
    height: 32px;
  }
  .testimonial-text {
    padding-top: 56px;
  }
}

.talentcare {
  background: $black;
  color: white;
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

@media (max-width: $screen-sm-min) {
  .tupperware-slide {
    display: none;
  }
}
</style>
