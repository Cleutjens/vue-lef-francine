<template>
  <div class="about" id="overlef">
    <div class="container-fluid">
      <div class="row middle-xs image-container" style="background-color: black;">
        <div class="image-wrapper"></div>
        <div class="col-lg-8 col-md-12">
          <div class="features">
            <ul>
              <li>
                <h3 data-aos="fade-left" data-aos-duration="800">
                  <span>Onconventionele aanpak</span>
                </h3>
              </li>
              <li>
                <svg
                  width="8"
                  height="8"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path id="a" d="M0 0h1440v857H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <use fill="#000" xlink:href="#a" transform="translate(-64 -379)" />
                    <path d="M1 1h6v6H1z" opacity=".99818638" stroke="#FFC500" />
                  </g>
                </svg>
              </li>
              <li>
                <h3
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-offset="200"
                >Creëert impact met liefde en lef</h3>
              </li>
              <li>
                <svg
                  width="8"
                  height="8"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path id="a" d="M0 0h1440v857H0z" />
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <use fill="#000" xlink:href="#a" transform="translate(-64 -379)" />
                    <path d="M1 1h6v6H1z" opacity=".99818638" stroke="#FFC500" />
                  </g>
                </svg>
              </li>
              <li>
                <h3 data-aos="fade-left" data-aos-duration="800" data-aos-offset="100">
                  Wel humor,
                  <br />geen flauwekul
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div
          class="col-lg-4 col-xs-12 no-padding about-text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-offset="300"
        >
          <h4>Over Francine</h4>
          <p>Ik weet hoe het is om aan het roer te staan van de verandering. De druk, de verantwoordelijkheid, het ploeteren. En het kan zoveel soepeler. Ik heb gezien en ervaren wat er gebeurt als mensen in hun kracht gaan staan en hun potentieel vol inzetten. Grenzen verleggen. Grootse dingen bereiken. Voor klanten en met elkaar. Dat is de kern van LEF: Leadership Empowerment Facilitation.</p>
          <p>Verwacht het onverwachte. Met positieve én confronterende interventies. Ik ben dol op grootse dromen, de dynamiek van teams in verandering en de energie explosies die daarbij vrij komen. Met humor, liefde en lef. Omdat ik niet anders wil. Omdat het werkt.</p>
        </div>
        <div class="col-md-12 center-xs img-mobile" data-aos="fade-left" data-aos-duration="1000">
          <img src="../assets/francine-2.png" alt />
        </div>
        <!-- </div> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/breakpoints.scss";
@import "@/global-styles/flexgrid.scss";

.features {
  padding-left: 80px;
}

@media (max-width: $screen-lg-min) {
  .features {
    padding-left: 64px;
  }
}

.image-container {
  position: relative;
  min-height: 100%;
}

img {
  // position: absolute;
  display: inline-block;
  bottom: 0;
}

h4 {
  font-size: 28px;
  font-weight: 900;
  line-height: 128%;
  color: white;
}

h3 {
  text-transform: uppercase;
  color: white;
  max-width: 180px;
  margin: 16px 0;
}

p {
  color: white;
  margin-top: 40px;
  font-size: 16px;
  max-width: 420px;
}

ul {
  position: relative;
  display: inline-block;
  padding: 0;
}

li {
  list-style: none;
  margin: 0;
}

.no-padding {
  padding: 0;
}

.bg-black {
  background: black;
}

.image-wrapper {
  position: absolute;
  bottom: 0;
  left: 12%;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(../assets/francine-2.png);
  background-position: cover;
  background-repeat: no-repeat;
  height: 800px;
  width: 900px;
}

@media (min-width: $screen-xl-min) {
  .image-wrapper {
    height: 700px;
  }
}

.about-text {
  padding: 130px 80px;
}

.img-mobile {
  text-align: center;
}

img {
  display: block;
  height: 600px;
  margin: auto;
}

@media (min-width: $screen-xl-min) {
  .img-mobile {
    display: none;
  }
}

@media (max-width: $screen-sm-min) {
  .img-mobile {
    margin-top: 0px;
  }
}

@media (max-width: $screen-xl-min) {
  .features {
    display: none;
  }
  .image-wrapper {
    display: none;
  }
  .about-text {
    padding: 80px 80px 16px 80px;
  }
  .img-mobile {
    margin-top: -400px;
    img {
      margin-right: 0;
    }
  }
}

@media (max-width: 1024px) {
  .img-mobile {
    width: 100%;
    margin-right: 0;
    margin-top: -300px;
    transform: scale(0.8);
    text-align: right;
  }
}

@media (max-width: $screen-lg-min) {
  .img-mobile {
    transform: scale(0.7);
    margin-top: -160px;
  }
}

@media (max-width: $screen-sm-min) {
  .img-mobile {
    margin-top: -20px;
    transform: scale(1);
    img {
      width: 100%;
      height: 100%;
    }
  }
}

@media (max-width: $screen-lg-min) {
  .about-text {
    padding: 80px 64px;
  }
}

@media (max-width: $screen-sm-min) {
  .about-text {
    padding: 80px 32px;
  }
}
</style>