<template>
  <div class="about">
    <div class="container-fluid">
      <div class="row middle-xs" style="background-color: black;">
        <!-- <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-black no-padding"> -->
        <!-- <div class="row middle-xs"> -->
        <div class="col-lg-8 col-xs-12">
          <!-- <img src="../assets/francine-2.png" alt /> -->
          <div class="features">
            <ul>
              <li>
                <h3>Onconventionele aanpak</h3>
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
                <h3>Creëert impact met liefde en lef</h3>
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
                <h3>
                  Wel humor,
                  <br />geen flauwekul
                </h3>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-4 col-xs-12 no-padding about-text">
          <h4>Over Francine</h4>
          <p>Ik weet hoe het is om aan het roer te staan van de verandering. De druk, de verantwoordelijkheid, het ploeteren. En het kan zoveel soepeler. Ik heb gezien en ervaren wat er gebeurt als mensen in hun kracht gaan staan en hun potentieel vol inzetten. Grenzen verleggen. Grootse dingen bereiken. Voor klanten en met elkaar. Dat is de kern van LEF: Leadership Empowerment Facilitation.</p>
          <p>Verwacht het onverwachte. Met positieve én confronterende interventies. Ik ben dol op grootse dromen, de dynamiek van teams in verandering en de energie explosies die daarbij vrij komen. Met humor, liefde en lef. Omdat ik niet anders wil. Omdat het werkt.</p>
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
  padding-left: 64px;
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
  max-width: 320px;
}

ul {
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

// img {
//   position: absolute;
//   display: inline;
//   left: 0;
//   top: -100%;
//   object-fit: cover;
// }

.middle-xs {
  background-image: url(../assets/francine-2.png);
  background-repeat: no-repeat;
  background-position: bottom left 30%;
}

.about-text {
  padding: 165px 64px;
}
</style>