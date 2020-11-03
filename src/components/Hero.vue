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
      <video
        id="video"
        loop
        muted
        autobuffer
        autoplay
        playsinline
        poster="../assets/lef-hero-bg-2.jpg"
      >
        <source src="../assets/lef-bg-video2.mp4" type="video/mp4" />
      </video>
    </div>
    <div class="video-filter-top"></div>
    <div class="hero-content">
      <div class="hero-content-text">
        <h1 data-aos="fade-up" data-aos-duration="1200">LEF opent deuren naar groots&shy;heid</h1>
        <p
          class="text-large color-white"
          data-aos="fade-up"
          data-aos-duration="1200"
        >LEF faciliteert directie- en managementteams in organisatie transformatie.</p>
      </div>
    </div>
    <a href="#" v-scroll-to="{ el: '#diensten', offset: -0 }">
      <div class="hero-arrow">
        <div class="box pulse">
          <div class="arrow">
            <img src="../assets/arrow-hero.svg" alt="arrow-down" />
          </div>
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
  overflow: hidden;
  object-fit: cover;
}

.hero-content {
  display: flex;
  position: absolute;
  bottom: 0%;
  padding: 120px 80px;
}

.hero {
  overflow: hidden;
}

.video-filter-top {
  position: absolute;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.37) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  height: 300px;
  width: 100%;
  top: 0%;
}

@media (max-width: $screen-md-min) {
  .video-filter-bottom {
    bottom: 0%;
    height: 400px;
  }
}

@media (max-width: $screen-lg-min) {
  .hero-content {
    padding: 100px 64px;
  }
  .hero {
    background-position: center left 30%;
  }
}

@media (max-width: $screen-sm-min) {
  .hero-content {
    padding: 64px 32px 40px 32px;
  }
}

@media (max-width: $screen-sm-min) {
  video {
    display: none;
  }
  .hero-video-container {
    background-image: url(../assets/lef-hero-bg-2.jpg);
    background-position: 18% center;
    background-size: cover;
  }
}

.hero-content-text {
  display: inline-block;
  align-self: flex-end;
}

h1 {
  color: white;
  max-width: 840px;
  font-size: calc(72px + (1200vw - 3605px) / 1000);
  bottom: 0;
  padding-bottom: 24px;
  margin-bottom: auto;
}

@media (max-width: $screen-lg-min) {
  h1 {
    max-width: 800px;
    font-size: calc(68px + (1200vw - 3605px) / 1000);
  }
}

@media (max-width: $screen-md-min) {
  h1 {
    font-size: calc(54px + (1200vw - 3605px) / 1000);
  }
}

@media (max-width: $screen-sm-min) {
  h1 {
    font-size: calc(42px + (1200vw - 3605px) / 1000);
  }
}

p.text-large {
  max-width: 840px;
  font-size: 24px;
}

@media (max-width: $screen-xl-min) {
  p.text-large {
    max-width: 760px;
    font-size: 22px;
  }
}

@media (min-width: 1920px) {
  h1 {
    max-width: 960px;
  }
  p.text-large {
    max-width: 880px;
  }
}

@media (max-width: $screen-lg-min) {
  p.text-large {
    max-width: 660px;
    font-size: 18px;
    padding-bottom: 20px;
  }
}

@media (max-width: $screen-md-min) {
  p.text-large {
    font-size: 16px;
    max-width: 550px;
  }
}

.hero-arrow {
  display: block;
}

@media (max-width: $screen-sm-min) {
  .hero-arrow {
    display: none;
  }
}

.box {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  bottom: 40px;
  left: 50%;
  margin-left: -18px;
  border: 2px solid #ffc100;
  animation: intro 1s;
  transition: 1s;

  &:hover {
    background: rgba(255, 193, 0, 0.35);
    cursor: pointer;
  }
}
.arrow {
  img {
    padding: 8px;
  }
}

.pulse {
  animation: pulse 1.2s ease-out infinite;
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 0.3em rgba(255, 193, 0, 0.35);
  }
  100% {
    box-shadow: 0 0 0 0.6em rgba(255, 193, 0, 0);
  }
}

// .scroll {
//   display: block;
//   width: 4px;
//   height: 4px;
//   margin: 7px auto;
//   border-radius: 4px;
//   background: #eee;
//   animation: finger 2s infinite;
// }

// @keyframes intro {
//   0% {
//     opacity: 0;
//     transform: translateY(40px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes finger {
//   0% {
//     opacity: 1;
//   }
//   100% {
//     opacity: 0;
//     transform: translateY(20px);
//   }
// }
</style>
