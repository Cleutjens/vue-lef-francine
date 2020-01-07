<template>
  <div class="methods">
    <div class="container-fluid">
      <div class="row row-bg">
        <div class="col-lg-8 bg-grey">
          <div class="row">
            <div class="col-sm-12">
              <h2>Een selectie uit de methodes</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 method-block">
              <h3 class="allcaps">Systemisch</h3>
              <p>De organisatie als systeem met eigen patronen en dynamieken. Weerstand is te voorspellen en dus te managen. Anders dan verwacht, maar met minder inspanning en sneller resultaat.</p>
            </div>
            <div class="col-sm-6 method-block">
              <h3 class="allcaps">Theory U</h3>
              <p>Naar de kern van complexe vraagstukken, voorbij bestaande aannames, (voor)oordelen en blokkades. Met als resultaat: vernieuwende inzichten, mogelijkheden en concrete acties.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 method-block">
              <h3 class="allcaps">Reinventing Ourselves & Organizations</h3>
              <p>Transformatie van mensen = transformatie van organisaties. Vanuit bewustwording, betekenis & verbinding met de veranderende context van de organisatie. Pionieren voor leiders.</p>
            </div>
            <div class="col-sm-6 method-block">
              <h3 class="allcaps">Appreciative Inquiry</h3>
              <p>Van problemen oplossen naar waarde creëren voor klanten, medewerkers en andere stakeholders. Uitgaan van sterke punten en wat wél werkt… vind het verborgen goud in de organisatie.</p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 method-block">
              <h3 class="allcaps">MBTI®</h3>
              <p>Verschillen in persoonlijkheid inzichtelijk met MBTI®. Vergroot het vermogen bij probleemoplossing, communicatie en conflictsituaties. Wereldwijd bekend instrument voor individueel- en teamgebruik.</p>
            </div>
            <div class="col-sm-6 method-block">
              <h3 class="allcaps">Spiral Dynamics</h3>
              <p>Cultuur meetbaar, vanuit het perspectief van waarden en drijfveren. Beken kleur. In één oogopslag helder waar de schoen wringt en de sleutel tot betere samenwerking en aansluiting met de context.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-12 bg-white">
          <h4>Certificeringen</h4>
          <div class="row">
            <div class="col-lg-12 col-sm-3 col-xs-6">
              <img src="../assets/acc-logo.png" alt />
            </div>
            <div class="col-lg-12 col-sm-3 col-xs-6">
              <img src="../assets/valuematch-logo.png" alt />
            </div>
            <div class="col-lg-12 col-sm-3 col-xs-6">
              <img src="../assets/mbti-logo.png" alt />
            </div>
            <div class="col-lg-12 col-sm-3 col-xs-6">
              <img src="../assets/planb-logo.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Methods"
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
  font-style: 16px;
  margin-bottom: 16px;
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
  max-width: 480px;
}

.no-padding {
  padding: 0;
}

.method-block {
  margin-bottom: 86px;
}

.bg-grey {
  background: #eee;
  padding: 130px 80px 104px 80px;
}

.bg-white {
  background: #fff;
  padding: 130px 80px 168px 80px;
}

@media (max-width: 767px) {
  .method-block {
    margin-bottom: 48px;
  }
}

@media (max-width: 1199px) {
  .bg-grey {
    background-color: white;
    padding-bottom: 80px;
  }
  .bg-white {
    padding-top: 0;
  }
}

@media (max-width: $screen-lg-min) {
  .bg-grey {
    padding: 60px 32px 60px 32px;
  }
  .bg-white {
    padding: 60px 32px 0 32px;
  }
}

img {
  padding-bottom: 85px;
}
</style>