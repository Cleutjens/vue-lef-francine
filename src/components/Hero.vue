<template>
  <!-- <Vue100vh>
    <div class="hero">
      <div class="hero-content">
        <div class="hero-content-text">
          <h1>LEF opent deuren naar groots&shy;heid</h1>
          <p
            class="text-large color-white"
          >LEF faciliteert directie- en managementteams in organisatie transformatie. Maakt los wat vast zit en opent de deur naar ongekende mogelijkheden.</p>
        </div>
        <a href="#diensten">
          <div class="hero-arrow">
            <div class="mouse">
              <div class="scroll"></div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </Vue100vh>-->
  <div class="hero">
    <div class="hero-video-container">
      <video id="video" loop muted autobuffer autoplay playsinline>
        <source src="../assets/lef-bg-video2.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="hero-content">
      <div class="hero-content-text">
        <h1>LEF opent deuren naar groots&shy;heid</h1>
        <p
          class="text-large color-white"
        >LEF faciliteert directie- en managementteams in organisatie transformatie. Maakt los wat vast zit en opent de deur naar ongekende mogelijkheden.</p>
      </div>
    </div>
    <a href="#" v-scroll-to="{ el: '#diensten', offset: -100 }">
      <div class="hero-arrow">
        <div class="mouse">
          <div class="scroll"></div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/breakpoints.scss";

.hero-video-container {
  overflow: hidden;
  width: 100%;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  background: black;
  // position: relative;
  // z-index: 0;
}

video {
  // position: absolute;
  // left: 50%;
  // top: 50%;
  // transform: translate(-50%, -50%); /* % of current element */
  height: 100%;
  width: 177.77777778vh;
  min-width: 100%;
  min-height: 56.25vw;
}

// .hero {
//   // width: 100%;
//   // height: 100vh;
//   // height: calc(var(--vh, 1vh) * 100);
//   // display: flex;

//   // background-image: url(../assets/lef-hero-bg-2.jpg),
//   //   linear-gradient(
//   //     8deg,
//   //     rgba(0, 0, 0, 0.5) 0%,
//   //     rgba(0, 0, 0, 0.4) 40%,
//   //     rgba(0, 0, 0, 0) 100%
//   //   );
//   // background-size: cover;
//   // background-position: center left;
//   // background-repeat: no-repeat;
//   // background-attachment: fixed;
// }

// @media only screen and (max-width: 768px) {
//   .hero {
//     background-attachment: scroll;
//   }
// }

.hero-content {
  display: flex;
  position: absolute;
  bottom: 0%;
  padding: 64px;
}

@media (max-width: $screen-lg-min) {
  .hero-content {
    padding: 32px;
  }
  .hero {
    background-position: center left 30%;
  }
}

@media (min-width: $screen-md-min) {
  .hero-content {
    margin-bottom: 60px;
  }
}

@media (max-width: $screen-md-min) {
  .hero-content {
    margin-bottom: 92px;
  }
}

.hero-content-text {
  display: inline-block;
  align-self: flex-end;
}

h1 {
  color: white;
  max-width: 840px;
  bottom: 0;
  padding-bottom: 24px;
  margin-bottom: auto;
}

@media (max-width: $screen-lg-min) {
  h1 {
    max-width: 600px;
  }
}

p.text-large {
  max-width: 820px;
}

@media (max-width: $screen-lg-min) {
  p.text-large {
    max-width: 600px;
  }
}

.hero-arrow {
  display: block;
  padding-top: 80px;
}

.mouse {
  position: absolute;
  display: block;
  width: 22px;
  height: 42px;
  bottom: 40px;
  left: 50%;
  margin-left: -12px;
  border-radius: 15px;
  border: 2px solid #ffc100;
  animation: intro 1s;
}

.scroll {
  display: block;
  width: 4px;
  height: 4px;
  margin: 7px auto;
  border-radius: 4px;
  background: #eee;
  animation: finger 2s infinite;
}

@keyframes intro {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes finger {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
}

@media (min-width: 1920px) {
  h1 {
    max-width: 960px;
  }
  p.text-large {
    max-width: 960px;
  }
}
</style>