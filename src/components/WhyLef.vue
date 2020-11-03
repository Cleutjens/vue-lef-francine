<template>
  <div class="why-lef">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-12 bg-blue">
          <div class="row">
            <div class="col-sm-12">
              <h2>Waarom LEF?</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="content-container">
                <div class="container-image">
                  <img src="../assets/bulb-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Beproefde methodes</h3>
                  <p>Praktische aanpak gebaseerd op wetenschappelijke modellen en theorieën</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="content-container no-padding">
                <div class="container-image">
                  <img src="../assets/collab-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Bewezen effectief</h3>
                  <p>Diepgaand én snel merkbare effecten. Check de ervaringen van klanten</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="content-container">
                <div class="container-image">
                  <img src="../assets/lead-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Empowering</h3>
                  <p>Uw team ontwikkelt de leiderschapsvaardigheden om zelf de verandering te continueren</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="content-container no-padding">
                <div class="container-image">
                  <img src="../assets/leap-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Maatwerk</h3>
                  <p>Elk traject wordt ontworpen op basis van uw doelen, business context en actuele relevantie</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="content-container">
                <div class="container-image">
                  <img src="../assets/experience-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>SR Management ervaring</h3>
                  <p>20+ jaar ervaring in verandermanagement, strategie, marketing, compliance, HR en IT projecten</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6">
              <div class="content-container no-padding">
                <div class="container-image">
                  <img src="../assets/network-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Gedurfd</h3>
                  <p>Instant impact met humor, creativiteit, gedegen vakkennis en een onconventionele aanpak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 bg-grey no-padding">
          <div class="row">
            <div class="col-lg-12 col-md-6 col-sm-6 col-xs-12 bg-black no-padding">
              <img class="bottom" src="../assets/francine-1.jpg" alt />
            </div>
            <div class="col-lg-12 col-md-6 col-sm-6 col-xs-12 bg-white">
              <div class="box">
                <h4>Ik laat een sterkere organisatie achter</h4>
                <p>
                  Samen met u en uw team analyseer ik het werkelijke probleem achter de vraag. Voorbij de symptomen, zodat we snel tot de kern komen. In mijn aanpak integreer ik de bovenstroom (beleid, targets, context, klantprocessen en IT) met de onderstroom (cultuur, leiderschap, gedrag).
                  <br />
                  <br />Samen identificeren kansen voor nieuwe grootse mogelijkheden, op basis van de aanwezige kennis, waarden en kwaliteiten in de organisatie. Door al deze inzichten zijn de vervolgstappen vaak verrassend eenvoudig in praktijk te brengen. Met minder inspanning meer bereiken. <br><br> Elke klantvraag is uniek. Het antwoord dus ook. De combinatie van het “hard en zacht” van verandering, maakt dat het werkt. Met training en coaching bied ik desgewenst directie en management de aanvullende vaardigheden om de verandering op eigen kracht voort te zetten.
                </p><br>
                <p>Certificeringen: ACC, MBTI, Rake vragen , Valuematch, Systemisch Transitiemngt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WhyLef"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/breakpoints.scss";
@import "@/global-styles/flexgrid.scss";

.no-padding {
  padding: 0 !important;
}

.no-margin {
  margin: 0;
}

.bg-blue {
  background: $blue;
  padding: 130px 80px 30px 80px;
  h2 {
    color: white;
  }
  img {
    display: inline;
    width: 56px;
  }
  p {
    font-size: 16px;
    color: white;
    max-width: 360px;
  }
}

.bg-grey {
  background: $grey;

  .box {
    padding: 80px;
  }

  h4 {
    max-width: 320px;
  }
}

.bg-black {
  background: linear-gradient(
    0deg,
    rgba(2, 3, 3, 1) 0%,
    rgba(9, 9, 9, 1) 47%,
    rgba(8, 9, 9, 1) 100%
  );

  img {
    // max-width: 480px;
    margin: 0 auto;
  }
}

h2 {
  margin-bottom: 85px;
}

h3 {
  font-size: 16px;
  margin-bottom: 12px;
  text-transform: uppercase;
  color: white;
}

h4 {
  font-size: 28px;
  font-weight: 900;
  line-height: 128%;
  color: $black;
  margin-bottom: 40px;
}

.content-container {
  display: flex;
  margin-bottom: 130px;
}
.container-image {
  padding-right: 24px;
  object-fit: contain;
  align-self: flex-start;
}
.container-text {
  flex: 1 1 auto;
  max-width: 260px;
}

@media (max-width: $screen-xl-min) {
  .container-image {
    display: block;
    margin-bottom: 16px;
  }
  .content-container {
    display: inline-block;
  }
  .bg-grey {
    .box {
      padding: 64px;
    }
    p {
      font-size: 16px;
    }
  }
  .bg-black {
    display: flex;
    img {
      object-fit: contain;
      align-self: flex-end;
      width: 100%;
      // position: relative;
      // margin-bottom: 0;
      // bottom: 0;
    }
  }
}

@media (max-width: $screen-lg-min) {
  .bg-blue {
    padding: 120px 64px 60px 64px;
  }
}

@media (max-width: $screen-sm-min) {
  .bg-blue {
    padding: 64px 32px 0px 32px;
  }
}

@media (min-width: 1800px) {
  .container-text {
    flex: 1 1 auto;
    max-width: 400px;
  }
}

@media (max-width: 767px) {
  .content-container {
    padding-right: 48px;
  }
  .bg-black {
    order: -1;
    img {
      width: 300px;
      padding-left: 32px;
      text-align: center;
    }
  }
}

@media (max-width: 1023px) {
  .bg-black {
    img {
      max-width: 100%;
      margin: 0;
    }
  }
}

.box {
  p {
    font-size: 16px;
    max-width: 320px;
  }
}

@media (max-width: 767px) {
  .box {
    p {
      max-width: 440px;
    }
  }
}

@media (max-width: 631px) {
  .content-container {
    display: flex;
    margin-bottom: 64px;
    padding: 0 !important;
  }
  .container-image {
    padding-right: 32px;
    object-fit: contain;
    align-self: flex-start;
  }
}

@media (max-width: $screen-sm-min) {
  .bg-white {
    .box {
      padding: 64px 32px;
    }
  }
}

@media (min-width: $screen-xl-min) {
  .bg-black {
    img {
      max-width: 340px;
    }
  }
}
</style>