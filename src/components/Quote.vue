<template>
  <div class="wrapper-ticker">
    <div class="ticker-wrap">
      <div class="ticker">
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
        <div class="ticker__item">
          <p class="text-xl">Out of the comfort zone is where the magic happens...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote"
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
$duration: 500s;

@-webkit-keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@keyframes ticker {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  100% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

p.text-xl {
  font-size: 80px;
  font-weight: 900;
  color: #000000;
  line-height: 62px;
}

.wrapper-ticker {
  overflow: hidden;
}

.ticker-wrap {
  width: 100%;
  overflow: hidden;
  height: 20rem;
  padding-left: 100%;
  box-sizing: content-box;

  .ticker {
    display: inline-block;
    height: 22rem;
    line-height: 22rem;
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;

    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: $duration;
    animation-duration: $duration;

    &__item {
      display: inline-block;

      padding: 0 2rem;
      font-size: 2rem;
      color: black;
    }
  }
}
</style>