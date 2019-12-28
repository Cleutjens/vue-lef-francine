<template>
  <div class="wrapper">
    <div class="container">
      <h2>Hoe het werkt</h2>
    </div>
    <div class="timeline">
      <div class="timeline-container">
        <div class="progress">
          <ul class="timeline-ul">
            <li class="handshake">
              <img src="../assets/handshake-icon.svg" alt />
              <p class="number number-first">1</p>
              <p class="subtitle">Persoonlijk intake gesprek</p>
            </li>
            <li class="brief">
              <img src="../assets/brief-icon.svg" alt />
              <p class="number">2</p>
              <p class="subtitle">Debrief opdracht en offerte</p>
            </li>
            <li class="unlock">
              <img src="../assets/unlock-icon.svg" alt />
              <p class="number">3</p>
              <p class="subtitle">Ontwerp maatwerk programma</p>
            </li>
            <li class="rocket">
              <img src="../assets/rocket-icon.svg" alt />
              <p class="number number-last">4</p>
              <p class="subtitle">Start versnelling</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Howitworks"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/breakpoints.scss";

.container {
  padding: 0px 64px;
  margin-top: 130px;
  margin-bottom: 65px;
}

.timeline {
  padding: 0px 64px;
  margin-bottom: 140px;
}

@media (max-width: $screen-lg-min) {
  .container {
    padding: 0 32px;
  }
  .timeline {
    padding: 0 32px;
  }
}

ul.timeline-ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  img {
    width: 60px;
    height: 60px;
  }
}
ul {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  padding: 0;
}
ul li {
  text-decoration: none;
  list-style: none;
}
li {
  flex: 3;
}

p.number {
  display: block;
  font-weight: 900;
  text-align: center;
  font-size: 12px;
  padding-top: 4px;
  margin-top: 48px;
  background: #bf0000;
  color: $white;
  width: 24px;
  height: 24px;
}

p.subtitle {
  font-size: 16px;
  font-weight: 900;
  color: $black;
  text-transform: uppercase;
  display: block;
  max-width: 160px;
  text-align: left;
  margin-top: 28px;
}

@media (max-width: $screen-md-min) {
  p.subtitle {
    font-size: 12px;
    max-width: 80px;
  }
  ul {
    display: inline-block;
  }
}

// hr {
//   margin-left: auto;
//   margin-top: -122px;
//   border: 0;
//   border-bottom: 1px dashed #fff;
//   background: #b4b4b4;
//   max-width: calc(100% - 10vw);
// }
</style>

