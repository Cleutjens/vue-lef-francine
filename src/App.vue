<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/reset.scss";
@import "@/global-styles/breakpoints.scss";
@import "@/global-styles/swiper.scss";

body,
html {
  min-height: 100vh;
  background: #fff;
}

html {
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

*,
:after,
:before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}

#app {
  font-family: "Muli", Helvetica, Arial, sans-serif;
}
</style>

