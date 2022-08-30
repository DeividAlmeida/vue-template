<template>
  <div class="banner container">
    <div class="d-flex mt-5 align-items-end justify-content-between">
      <LogoComponent />
      <NavBar />
    </div>
    <div class="row banner-left d-flex align-items-center">
      <div class="col-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
        <h1 class="fw-bold text-wrap">Olá, sou a Nathalie Madeira</h1>
        <p class="mt-4 col-11">
          Estamos à procura de pessoas como você. Quer saber mais ?
        </p>
        <button type="button" class="btn px-4 fw-bold">Saber mais</button>
      </div>
    </div>
    <img
      class="position-absolute"
      id="after-content"
      src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/Group%20110.png"
      alt="after"
    />
  </div>
</template>

<script lang="ts">
import NavBar from "@/components/NavBar.vue";
import LogoComponent from "@/components/LogoComponent.vue";
export default {
  components: {
    NavBar,
    LogoComponent,
  },
};
</script>

<style>
.banner {
  min-height: 670px;
  background: url("https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/Group%20112.png"),
    url("https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/Vector%208.png"),
    url("https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/1.png");
  background-repeat: no-repeat;
  background-position: 53% 55%, right 90%, right 25px;
}

#after-content {
  left: 0;
  top: 360px;
  height: 200px;
  width: auto;
}

.banner-left {
  height: 500px;
}

.banner-left > div > h1 {
  font-size: 48px;
}

.banner-left > div > button {
  color: #fff;
  background-color: var(--yellow);
  font-size: 14px;
}

@media screen and (max-width: 770px) {
  .banner {
    background-image: none;
  }
  #after-content {
    display: none;
  }
}
</style>
