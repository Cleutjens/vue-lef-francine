<template>
  <div class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 bg-grey">
          <h2>Contact</h2>
          <div class="box">
            <div class="row">
              <div class="col-lg-6">
                <h3>Francine de Bruyckere – Geerts</h3>
                <a href="tel:+31622472046">06 2247 2046</a>
                <br />
                <a href="mailto:francine@lefincompany.nl">francine@lefincompany.nl</a>
              </div>
              <div class="col-lg-6">
                <h3>Bedrijfsinformatie</h3>
                <a href="#">Algemene voorwaarden</a>
                <a href="#">Privacy verklaring</a>
                <p>KvK 67864481, gevestigd te Zeist</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 bg-white">
          <div class="row center-xs middle-xs">
            <img src="../assets/lef-logo-big.svg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/breakpoints.scss";
@import "@/global-styles/flexgrid.scss";

h2 {
  margin-bottom: 85px;
}

h3 {
  margin-bottom: 16px;
  text-transform: uppercase;
}

h4 {
  font-size: 28px;
  font-weight: 900;
  color: $black;
  margin-bottom: 85px;
}

p {
  padding-right: 40px;
}

@media (max-width: $screen-lg-min) {
}

.method-block {
  margin-bottom: 86px;
}

.bg-grey {
  background: #f7f7f7;
  padding: 130px 64px 168px 64px;
}

.bg-white {
  background: #fff;
  padding: 188px 64px 138px 64px;
}
</style>