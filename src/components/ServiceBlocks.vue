<template>
  <div class="wrapper" id="diensten">
    <!-- <div class="container">
      <h2>Diensten</h2>
      <p class="text-large">Elke klantvraag is uniek. Het antwoord dus ook.</p>
    </div>
    <div class="block-container">
      <div class="block block-1">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Verander management</h3>
        <p>“De benodigde her&shy;structurering stuit op weer&shy;stand. Alles vertraagt. Help ons het proces weer vlot te trekken.”</p>
      </div>
      <div class="block block-2">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Cultuur verandering</h3>
        <p>“De regulering en markt&shy;verander&shy;ingen zijn niet bij te houden. Wij zijn nu over op agile. Maar de star&shy;heid neemt juist toe?!"</p>
      </div>
      <div class="block block-3">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Strategie &amp; Marketing</h3>
        <p>“Onze ambitie is om markt&shy;leider te worden. Op welke manieren kunnen we onze groei versnel&shy;len?”</p>
      </div>
      <div class="block block-4">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Interim Management</h3>
        <p>“We hebben een tijde&shy;lijke executive nodig op een keerpunt voor de organis&shy;atie. Ja- knikkers helpen ons niet en tegelijk is draagvlak cruciaal.”</p>
      </div>
      <div class="block block-5">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Executive Coaching</h3>
        <p>“De druk neemt toe. Wat is er nodig om succesvol te blijven opereren, verander&shy;ingen te leiden en de organi&shy;satie op andere paden te brengen?”</p>
      </div>
      <div class="block block-6">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Leiderschap</h3>
        <p>“We staan voor belang&shy;rijke trans&shy;ities de komende jaren. Stoom ons management klaar om die succesvol te leiden.”</p>
      </div>
      <div class="block block-7">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Talent Management</h3>
        <p>“Werkdruk? Dat is bij ons normaal. De jonge garde ziet dat anders. Hoe houden we onze poten&shy;tials binnen én klaar voor de volgende stap.”</p>
      </div>
      <div class="block block-8">
        <svg width="10" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFC100" d="M1 1h8v8H1z" />
        </svg>
        <h3 class="allcaps">Team Coaching</h3>
        <p>“Mijn management&shy;team bestaat uit toppers. Maar het vliegt niet. De rem moet eraf!”</p>
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: "ServiceBlocks"
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/colors.scss";
@import "@/global-styles/breakpoints.scss";

.block-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.container {
  padding: 0px 80px 0 80px;
  margin-bottom: 65px;
  margin-top: 80px;
}

@media (max-width: $screen-lg-min) {
  .container {
    padding: 0 32px 0 32px;
  }
}

.block-1 {
  background: $blue;
  color: $white;
}
.block-2 {
  background: $white;
  color: $black;
}
.block-3 {
  background: $blue;
  color: $white;
}
.block-4 {
  background: $white;
  color: $black;
}
.block-5 {
  background: $white;
}
.block-6 {
  background: $red;
  color: $white;
}
.block-7 {
  background: $white;
  color: $black;
}
.block-8 {
  background: $black;
  color: $white;
}

@media (max-width: $screen-lg-min) {
  .block-1 {
    background: $white;
    color: $black;
  }
  .block-2 {
    background: $blue;
    color: $white;
  }
  .block-7 {
    background: $black;
    color: $white;
  }
  .block-8 {
    background: $white;
    color: $black;
  }
}

@media (max-width: 480px) {
  .block-1 {
    background: $blue;
    color: $white;
  }
  .block-2 {
    background: $white;
    color: $black;
  }
  .block-5 {
    background: $red;
    color: white;
  }
  .block-6 {
    background: $white;
    color: $black;
  }
  .block-7 {
    background: $black;
    color: $white;
  }
  .block-8 {
    background: $white;
    color: $black;
  }
}

.block {
  padding: 80px;
  min-height: 360px;
  max-height: 360px;
}

@media (max-width: $screen-lg-min) {
  .block {
    padding: 32px;
    min-height: 280px;
    // max-height: 280px;
  }
}

@media (max-width: $screen-lg-min) {
  .block-container {
    grid-template-columns: 1fr 1fr;
  }
  .block {
    min-height: 400px;
    padding-top: 40px;
  }
  p {
    font-size: 15px;
  }
}

@media (max-width: $screen-md-min) {
  .block-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .container {
    margin-top: 80px;
  }
}

@media (max-width: 720px) {
  .block {
    min-height: 320px;
  }
}

@media (max-width: 480px) {
  .block-container {
    display: grid;
    grid-template-columns: 1fr;
  }
  .block {
    min-height: 420px;
  }
  p {
    font-size: 18px;
  }
}

h3 {
  margin-bottom: 20px;
  line-height: 110%;
}

@media (max-width: $screen-md-min) {
  h3 {
    font-size: calc(14px + (20 - 16) * ((100vw - 300px) / (1600 - 300)));
  }
}

p.text-large {
  margin-top: 8px;
}

svg {
  margin-bottom: 20px;
}

@media (min-width: 961px) {
  p {
    font-size: 14px;
  }
  .block {
    min-height: 280px;
  }
}

@media (min-width: $screen-xl-min) {
  p {
    font-size: 16px;
  }
}

@media (min-width: 1600px) {
  p {
    font-size: 18px;
  }
  .block {
    min-height: 400px;
  }
}

@media (min-width: 1920px) {
  .block {
    min-height: 500px;
  }
}
</style>