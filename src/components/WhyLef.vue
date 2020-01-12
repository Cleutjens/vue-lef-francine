<template>
  <div class="why-lef">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-8 col-md-12 bg-blue">
          <div class="row">
            <div class="col-sm-12">
              <h2 data-aos="fade-up" data-aos-duration="1200">Waarom LEF?</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
              <div class="content-container">
                <div class="container-image">
                  <img src="../assets/bulb-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Beproefde methodes</h3>
                  <p>Een aanpak gebaseerd op wetenschappelijke modellen en theorieën. Teruggebracht naar de kern en bewezen effectief in de praktijk. Geen leergang, maar concrete resultaten.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
              <div class="content-container no-padding">
                <div class="container-image">
                  <img src="../assets/collab-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Co-creatie</h3>
                  <p>In company betekent: de context en de management agenda bepaalt het doel, ik ontwerp de aanpak. De weg ernaartoe creëren we samen. Als opdrachtgever zelf de regie én het succes in handen.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
              <div class="content-container">
                <div class="container-image">
                  <img src="../assets/lead-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Leiderschap 2.0</h3>
                  <p>Vergroten van het bewustzijn. Versterken van onderlinge verbindingen. De vaardigheden om het te doen. Waardoor er méér mogelijk wordt, wat nu nog niet zichtbaar is. Grootsheid zit in iedereen.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
              <div class="content-container no-padding">
                <div class="container-image">
                  <img src="../assets/leap-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Verrassend</h3>
                  <p>Elke interventie is specifiek geschikt voor het doel. Leren, ervaren, prototypen, delen, reflecteren en toepassen. Verwacht het onverwachte: pionieren is uit de comfort zone stappen.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
              <div class="content-container">
                <div class="container-image">
                  <img src="../assets/experience-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Senior ervaring</h3>
                  <p>Ruim 20 jaar ervaring in de corporate wereld op het gebied van strategie, marketing, compliance, HR, IT en productinnovatie. Als senior manager, programmamanager, interim, facilitator en coach.</p>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
              <div class="content-container no-padding">
                <div class="container-image">
                  <img src="../assets/network-icon.svg" alt />
                </div>
                <div class="container-text">
                  <h3>Netwerk Partners</h3>
                  <p>Waar nodig werk ik met co-facilitators. Het netwerk bestaat uit ervaren senior managers en door de wol geverfde veranderaars in FMCG, food & agri, zorg, IT, onderwijs en financiële sector.</p>
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
                <h4>Aanpak: ik maak me zo snel mogelijk weer misbaar</h4>
                <p>Samen met de opdrachtgever kijk ik wat de werkelijke vraag achter de vraag is. In de analyse integreer ik de bovenstroom -de strategie, klantprocessen, rollen, IT, kortom de aspecten van de bedrijfsvoering- met de onderstroom: mindset, feitelijk gedrag en het leiderschap. Verenigen van het zichtbare met het onzichtbare. Zo kom ik snel tot de essentie van het probleem, voorbij de symptomen. Dan is het vaak verrassend eenvoudig, komt los wat vast zit en gaat het weer stromen. Dat proces doorlopen we samen, op basis van de kennis en de kwaliteiten in de organisatie. En ja, daar hoort zelfreflectie en uit de comfortzone komen bij. De opdrachtgever houdt altijd de regie en creëert het eigen succes. Dat is de kern van mijn aanpak: de opdrachtgever sterker maken.</p>
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
  padding: 130px 80px 70px 80px;
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
  background: #eeeeee;

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
  margin-bottom: 16px;
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
  margin-bottom: 100px;
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
    padding: 120px 32px 60px 32px;
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
    margin-bottom: 100px;
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
      padding: 64px 32px 120px 32px;
    }
  }
}

@media (min-width: $screen-xl-min) {
  .bg-black {
    img {
      max-width: 280px;
    }
  }
}
</style>