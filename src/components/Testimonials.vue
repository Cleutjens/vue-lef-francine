<template>
  <div class="testimonials" id="ervaringen">
    <div class="container">
      <div class="col-xs">
        <div class="testimonial-controls">
          <div
            class="arrow-button drag-slider-prev reversed disabled swiper-button-disabled"
            tabindex="0"
            role="button"
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
            class="arrow-button drag-slider-next"
            tabindex="0"
            role="button"
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
    <div class="container no-padding">
      <div class="col-xs">
        <div
          class="draggable-slider-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode"
          style="cursor: grab;"
        >
          <div
            class="draggable-slider-wrapper"
            style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
          >
            <div class="draggable-slide-wrapper col-xs-4 swiper-slide-active">
              <div class="draggable-slide testimonial-card rabobank">
                <img src="../assets/rabobank-logo.svg" alt />
                <p>“Als directievoorzitter heb ik Francine meerdere malen gevraagd als begeleider op te treden binnen het management/directieteam van de bank, omdat ze ons steeds echt verder bracht. Zij treedt doortastend op, draait niet om relevante gevoelige onderwerpen heen en speelt goed in op onderstromen. Zij heeft het lef om nog niet gebaande wegen te bewandelen en weet snel resultaat te bereiken. Het was altijd plezierig om met Francine te werken.</p>
                <h3 class="allcaps">P. Konijnenburg</h3>
                <p>Voormalig directievoorzitter Rabobank De Langstraat</p>
              </div>
            </div>
            <div class="draggable-slide-wrapper col-xs-4 swiper-slide-next">
              <div class="draggable-slide testimonial-card tupperware">
                <img src="../assets/tupperware-logo.svg" alt />
                <p>“Onze organisatie staat voor een aantal impactvolle veranderingen. We zijn als managementteam in 2 dagen intensief én met veel humor begeleid om daar beter sturing aan te kunnen geven. De interventies waren eenvoudig, inzicht gevend, direct toepasbaar en erg leuk om te doen!”</p>
                <h3 class="allcaps">Manager</h3>
                <p>Tupperware</p>
              </div>
            </div>
            <div class="draggable-slide-wrapper col-xs-4 swiper-slide-next">
              <div class="draggable-slide testimonial-card tupperware-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Testimonials"
};
</script>

<style lang="scss" scoped>
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