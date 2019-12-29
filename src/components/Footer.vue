<template>
  <div class="footer" id="contact">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col-xs-12 bg-grey">
          <div class="box">
            <div class="row">
              <div class="col-md-12 no-padding">
                <h2>Contact</h2>
              </div>
            </div>
          </div>
          <div class="box">
            <div class="row">
              <div class="col-lg-6 col-md-12 contact-info no-padding">
                <h3>Francine de Bruyckere – Geerts</h3>
                <a href="tel:+31622472046">06 2247 2046</a>
                <a href="mailto:francine@lefincompany.nl">francine@lefincompany.nl</a>
              </div>
              <div class="col-lg-6 col-md-12 policy-info no-padding">
                <h3 class="company-info">Bedrijfsinformatie</h3>
                <a href="#">Algemene voorwaarden</a>
                <a href="#">Privacy verklaring</a>
                <p>KvK 67864481, gevestigd te Zeist</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-xs-12 bg-white">
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
  background: #f7f7f7;
  padding: 130px 64px 168px 64px;
}

@media (max-width: $screen-lg-min) {
  .bg-grey {
    padding: 95px 32px 120px 32px;
  }
}

@media (max-width: $screen-xl-min) {
  h3.company-info {
    padding-top: 32px;
  }
}

@media (max-width: 1023px) {
  h3.company-info {
    padding-top: 0;
  }
  .contact-info {
    padding-right: 64px;
  }
}

@media (max-width: 689px) {
  h3.company-info {
    padding-top: 32px;
  }
}

.bg-white {
  background: #fff;
  padding: 188px 64px 138px 64px;
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
</style>