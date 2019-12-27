<template>
  <header>
    <div class="nav">
      <div class="left">
        <img class="logo" src="../assets/lef-logo.svg" />
      </div>
      <div class="middle">
        <a href="#" class="item">Diensten</a>
        <a href="#" class="item">Klantervaringen</a>
        <a href="#" class="item">Over LEF</a>
      </div>
      <div class="right">
        <a class="item" href="#">NL</a>
        <a href="#" class="button-contact">contact</a>
      </div>
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
}

.nav {
  display: flex;
  min-height: 64px;
  align-items: center;
  margin-top: 16px;
  padding: 0 64px 0 64px;
}

@media (max-width: $screen-lg-min) {
  .nav {
    padding: 0 32px 0 32px;
  }
}

.left {
  flex: 1;
}
.middle {
  flex: 3;
}
.right {
  flex: 1;
}

.middle {
  text-align: center;
}

.right {
  text-align: right;
}

.logo {
  width: 32px;
  height: 32px;
}

.item {
  padding: 16px;
  display: inline-block;
}

a.item {
  color: white;
  font-size: 13px;
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
  font-size: 13px;
  font-weight: 800;
  border: solid 2px #fec600;
  transition: 0.3s;
  &:hover {
    background: #fec600;
    color: $black;
  }
}
</style>
