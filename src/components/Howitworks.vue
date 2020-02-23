<template>
  <!-- <div class="wrapper">
    <div class="container">
      <h2>Hoe het werkt</h2>
    </div>
    <div class="timeline">
      <div class="timeline-container">
        <div class="progress">
          <ul class="timeline-ul">
            <li class="handshake">
              <img src="../assets/handshake-icon.svg" alt />
              <p class="number number-first">1</p>
              <p class="subtitle">Persoonlijk intake gesprek</p>
              <hr />
            </li>
            <li class="brief">
              <img src="../assets/brief-icon.svg" alt />
              <p class="number">2</p>
              <p class="subtitle">Debrief opdracht en offerte</p>
              <hr />
            </li>
            <li class="unlock">
              <img src="../assets/unlock-icon.svg" alt />
              <p class="number">3</p>
              <p class="subtitle">Ontwerp maatwerk programma</p>
              <hr />
            </li>
            <li class="rocket">
              <img src="../assets/rocket-icon.svg" alt />
              <p class="number number-last">4</p>
              <p class="subtitle">Start versnelling</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>-->
  <div class="howitworks">
    <div class="container-fluid">
      <div class="container">
        <div class="col-xs">
          <h2>Hoe het werkt</h2>
        </div>
      </div>
    </div>
    <div class="swipe-wrapper">
      <div class="swiper-container2">
        <swiper :options="swiperOptions2">
          <swiper-slide>
            <div class="timeline-block timeline-step1">
              <div class="handshake">
                <img src="../assets/handshake-icon.svg" alt />
                <p class="number number-first">1</p>
                <hr />
                <p class="subtitle">Persoonlijk intake gesprek</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="timeline-block timeline-step2">
              <div class="brief">
                <img src="../assets/brief-icon.svg" alt />
                <p class="number number-first">2</p>
                <hr />
                <p class="subtitle">Debrief opdracht en offerte</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="timeline-block timeline-step2">
              <div class="unlock">
                <img src="../assets/unlock-icon.svg" alt />
                <p class="number number-first">3</p>
                <hr />
                <p class="subtitle">Ontwerp maatwerk programma</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="timeline-block timeline-step4">
              <div class="rocket">
                <img src="../assets/rocket-icon.svg" alt />
                <p class="number number-first">4</p>
                <hr />
                <p class="subtitle">Start versnelling</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="mobile-swipe-wrapper">
      <div class="container timeline-container">
        <div class="row mobile-flex">
          <ul class="timeline-ul">
            <li class="handshake-mobile">
              <img src="../assets/handshake-icon.svg" alt class="img-mobile" />
              <p class="numbers">1</p>
              <p class="subtitle">Persoonlijk intake gesprek</p>
            </li>
            <li class="handshake-mobile">
              <img src="../assets/brief-icon.svg" alt class="img-mobile" />
              <p class="numbers">2</p>
              <p class="subtitle">Debrief opdracht en offerte</p>
            </li>
            <li class="handshake-mobile">
              <img src="../assets/unlock-icon.svg" alt class="img-mobile" />
              <p class="numbers">3</p>
              <p class="subtitle">Ontwerp maatwerk programma</p>
            </li>
            <li class="handshake-mobile">
              <img src="../assets/rocket-icon.svg" alt class="img-mobile" />
              <p class="numbers">4</p>
              <p class="subtitle last-text">Start versnelling</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Howitworks",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOptions2: {
        slidesPerView: "4",
        spaceBetween: 0,
        noSwiping: true,
        noSwipingClass: "swiper-container2",
        breakpoints: {
          720: {
            slidesPerView: "1",
            noSwiping: false,
            noSwipingClass: "swiper-container2"
          }
        }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/breakpoints.scss";

.container {
  padding: 0px 80px;
  margin-top: 130px;
  text-align: center;
}

@media (max-width: $screen-md-min) {
  .container {
    padding: 0px 64px;
    text-align: left;
    margin-top: 64px;
  }
}

@media (max-width: $screen-sm-min) {
  .container {
    padding: 0px 32px;
    margin-top: 64px;
  }
}

.swipe-wrapper {
  padding: 0 80px;
  margin-bottom: 80px;
}

@media (max-width: $screen-lg-min) {
  .swipe-wrapper {
    padding: 0 64px;
  }
}

@media (max-width: $screen-sm-min) {
  .swipe-wrapper {
    padding: 0 32px;
  }
}

@media (max-width: $screen-md-min) {
  .swipe-wrapper {
    padding: 0;
  }
}

.timeline-block {
  padding-top: 85px;
  padding-bottom: 80px;
}

@media (max-width: $screen-md-min) {
  .timeline-block {
    padding-top: 24px;
  }
}

.swiper-wrapper {
  width: 100%;
}

p.number {
  display: block;
  position: relative;
  font-weight: 900;
  text-align: center;
  font-size: 12px;
  padding-top: 4px;
  margin-top: 48px;
  margin-bottom: 48px;
  background: $red;
  color: $white;
  width: 24px;
  height: 20px;
  z-index: 100;
}

p.numbers {
  display: inline-block;
  position: relative;
  font-weight: 900;
  text-align: center;
  font-size: 12px;
  padding-top: 4px;
  background: $red;
  color: $white;
  width: 24px;
  height: 24px;
  z-index: 100;
}

hr {
  display: block;
  margin-left: auto;
  margin-top: -60px;
  border: 0;
  border-bottom: 1px dashed #fff;
  background: #b4b4b4;
  z-index: -1;
}

p.subtitle {
  font-size: 16px;
  font-weight: 900;
  color: $black;
  text-transform: uppercase;
  max-width: 160px;
  text-align: left;
  margin-top: 32px;
}

.timeline-step2 {
  width: 100%;
  text-align: center;
  margin: 0 auto;

  p.number {
    margin: 48px auto;
  }

  p.subtitle {
    margin: 48px auto 0 auto;
    text-align: center;
  }

  img {
    margin: 0 auto;
  }
}

@media (max-width: $screen-md-min) {
  .timeline-step2 {
    margin-left: 64px;
    p.subtitle {
      margin: 48px 0 0 0;
      text-align: left;
    }
    p.number {
      margin: 48px 0;
    }
    hr {
      width: 100%;
      margin-left: 0;
    }
    img {
      margin-right: auto;
      margin-left: 0;
    }
  }
}

@media (max-width: $screen-sm-min) {
  .timeline-step2 {
    margin-left: 32px;
  }
}

.timeline-step1 {
  width: 100%;
  text-align: center;
  margin: 0 auto;

  p.number {
    margin: 48px auto;
  }

  p.subtitle {
    margin: 48px auto 0 auto;
    text-align: center;
  }

  img {
    margin: 0 auto;
  }
  hr {
    width: 50%;
    margin-right: 0;
  }
}

@media (max-width: $screen-md-min) {
  .timeline-step1 {
    margin-left: 64px;
    p.subtitle {
      margin: 48px 0 0 0;
      text-align: left;
    }
    p.number {
      margin: 48px 0;
    }
    hr {
      width: 100%;
      margin-left: 0;
    }
    img {
      margin-right: auto;
      margin-left: 0;
    }
  }

  .timeline-block {
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
  }
}

@media (max-width: $screen-sm-min) {
  .timeline-step1 {
    margin-left: 32px;
  }
}

.timeline-step4 {
  width: 100%;
  text-align: center;
  margin: 0 auto;

  p.number {
    margin: 48px auto;
  }

  p.subtitle {
    margin: 48px auto 0 auto;
    text-align: center;
  }

  img {
    margin: 0 auto;
  }

  hr {
    width: 50%;
    margin-left: 0;
  }
}

@media (max-width: $screen-md-min) {
  .timeline-step4 {
    margin-left: 64px;
    p.subtitle {
      margin: 48px 0 0 0;
      text-align: left;
    }
    p.number {
      margin: 48px 0;
    }
    hr {
      background: #fff;
    }
    img {
      margin-right: auto;
      margin-left: 0;
    }
  }
}

@media (max-width: $screen-sm-min) {
  .timeline-step4 {
    margin-left: 32px;
  }
}

@media (min-width: $screen-md-min) {
  .mobile-swipe-wrapper {
    display: none;
  }
}

@media (max-width: $screen-md-min) {
  .swipe-wrapper {
    display: none;
  }
}

.img-mobile {
  display: inline-block;
  width: 64px;
  object-fit: contain;
  align-self: flex-start;
  margin-right: 24px;
}

.handshake-mobile {
  max-width: 100%;
  display: flex;
}

.mobile-flex {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  li {
    margin-bottom: 48px;
  }

  .timeline-ul {
    margin-bottom: 50px;
  }

  p.subtitle {
    max-width: 240px;
  }
}

.timeline-container {
  margin-top: 40px;
}

p.subtitle {
  display: inline-block;
  margin-top: 10px;
  margin-left: 24px;
  max-width: 180px;
}

p.last-text {
  margin-top: 20px;
}

p.numbers {
  margin-top: 20px;
}

.mt-64 {
  margin-top: 64px;
}

@media (max-width: 420px) {
  .img-mobile {
    width: 48px;
    margin-top: 8px;
  }
}

@media (max-width: 374px) {
  .mobile-flex {
    img {
      display: none;
    }
  }
}

// .timeline {
//   padding: 0px 80px;
//   margin-bottom: 140px;
// }

// @media (max-width: $screen-lg-min) {
//   .container {
//     padding: 0 32px;
//   }
//   .timeline {
//     padding: 0 32px;
//   }
// }

// ul.timeline-ul {
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   width: 100%;
//   img {
//     width: 60px;
//     height: 60px;
//   }
// }
// ul {
//   display: flex;
//   flex-direction: column;
//   flex-basis: 100%;
//   flex: 1;
//   padding: 0;
// }
// ul li {
//   text-decoration: none;
//   list-style: none;
// }
// li {
//   flex: 3;
// }

// @media (max-width: $screen-md-min) {
//   p.subtitle {
//     font-size: 12px;
//     max-width: 80px;
//   }
//   ul {
//     display: inline-block;
//   }
// }

// li.brief {
//   hr {
//     margin-top: -106px;
//   }
// }

// li.unlock {
//   hr {
//     margin-top: -106px;
//   }
// }

// @media (max-width: 720px) {
//   hr {
//     margin-top: -84px;
//   }
//   li.unlock {
//     hr {
//       margin-top: -84px;
//     }
//   }
//   li.brief {
//     hr {
//       margin-top: -84px;
//     }
//   }
//   p.subtitle {
//     font-size: 10px;
//   }
//   ul.timeline-ul {
//     img {
//       width: 48px;
//       height: 48px;
//     }
//   }
// }
</style>

