<template>
  <div class="footer" id="contact">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-12 col-xs-12 bg-grey">
          <div class="row">
            <div class="col-md-12 no-padding">
              <h2>Contact</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg contact-info">
              <h3>Francine de Bruyckere – Geerts</h3>
              <a href="tel:+31622472046">06 2247 2046</a>
              <a href="mailto:francine@lefincompany.nl">francine@lefincompany.nl</a>
            </div>
            <div class="col-lg policy-info">
              <h3 class="company-info">Bedrijfsinformatie</h3>
              <a href="<%= BASE_URL %>Algemene-voorwaarden-LEF!.pdf">Algemene voorwaarden</a>
              <a href="../../public/Algemene-voorwaarden-LEF!.pdf">Privacy verklaring</a>
              <p>KvK 67864481, gevestigd te Zeist</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-xs-12 bg-white">
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
  margin-bottom: 40px;
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
  font-size: 16px;
  padding-right: 40px;
}

a {
  font-size: 16px;
  margin-bottom: 2px;
  color: $black;
  text-decoration: none;
  display: block;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    color: #ffc100;
  }
}

.no-padding {
  padding: 0;
}

.method-block {
  margin-bottom: 86px;
}

.bg-grey {
  background: #eee;
  padding: 130px 80px 168px 80px;
}

@media (max-width: $screen-lg-min) {
  .bg-grey {
    padding: 95px 64px 120px 64px;
  }
}

@media (max-width: $screen-sm-min) {
  .bg-grey {
    padding: 95px 32px 120px 32px;
  }
}

.bg-white {
  background: #fff;
  padding: 188px 80px 138px 80px;
}

@media (max-width: $screen-xl-min) {
  .bg-white {
    padding: 240px 64px 138px 64px;
  }
}

@media (max-width: 1023px) {
  .bg-white {
    padding: 120px 0 120px 0;
  }
}

@media (max-width: $screen-md-min) {
  .bg-grey {
    padding: 88px 32px;
  }
}

.contact-info {
  padding-top: 42px;
  padding-right: 42px;
}

.policy-info {
  padding-top: 42px;
}

// @media (max-width: $screen-md-min) {
//   .policy-info {
//     padding-top: 0;
//   }
// }

// @media (max-width: 673px) {
//   .policy-info {
//     padding-top: 42px;
//   }
// }
</style>