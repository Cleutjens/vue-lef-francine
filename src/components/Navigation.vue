<template>
  <header>
    <div class="nav" data-aos="fade-down" data-aos-duration="800">
      <div class="left">
        <img class="logo" src="../assets/lef-logo.svg" />
      </div>
      <div class="middle">
        <a href v-scroll-to="{ el: '#diensten', offset: 0 }" class="item scroll">Diensten</a>
        <a href v-scroll-to="{ el: '#ervaringen', offset: 0 }" class="item scroll">Klantervaringen</a>
        <a href v-scroll-to="{ el: '#overlef', offset: 0 }" class="item scroll">Over LEF</a>
      </div>
      <div class="right">
        <!-- <a class="item" href="#">NL</a> -->
        <a href v-scroll-to="{ el: '#contact', offset: 0 }" class="button-contact scroll">contact</a>
      </div>
    </div>
    <div class="middle-mobile">
      <a href="#" class="item">Diensten</a>
      <a href="#" class="item">Klantervaringen</a>
      <a href="#" class="item">Over LEF</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navigation"
};
</script>


<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/breakpoints.scss";

header {
  position: absolute;
  width: 100%;
  z-index: 1000;
}

.nav {
  display: flex;
  min-height: 64px;
  align-items: center;
  margin-top: 32px;
  padding: 0 80px 0 80px;
}

@media (max-width: $screen-lg-min) {
  .nav {
    padding: 0 64px 0 64px;
    display: flex;
  }
  .middle {
    display: none;
  }
}

@media (min-width: $screen-lg-min) {
  .middle-mobile {
    display: none;
  }
}

// Mobile menu nog stylen in overleg?

@media (max-width: $screen-lg-min) {
  .middle {
    display: none;
  }
  .middle-mobile {
    display: none;
    text-align: center;
    width: 100%;
    a {
      flex: 1;
    }
  }
}

.left {
  flex: 2;
}
.middle {
  flex: 4;
}
.right {
  flex: 2;
}

@media (max-width: $screen-md-min) {
  .left {
    flex: 1;
  }
  .middle {
    flex: 1;
  }
  .right {
    flex: 3;
  }
}

.middle {
  text-align: center;
}

.right {
  text-align: right;
}

.logo {
  width: 40px;
  height: 40px;
}

.item {
  padding: 16px;
  display: inline-block;
}

a.item {
  color: white;
  font-size: 12px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 800;
  transition: 0.3s;
  &:hover {
    color: #fec600;
  }
}

a.button-contact {
  background: rgba (0, 0, 0, 0);
  padding: 6px 20px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 800;
  border: solid 2px #fec600;
  transition: 0.3s;
  &:hover {
    background: #fec600;
    color: $black;
  }
}

@media (max-width: $screen-sm-min) {
  .nav {
    padding: 0 32px;
    margin-top: 24px;
  }
}
</style>
