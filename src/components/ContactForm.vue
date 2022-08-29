<template>
  <div class="container">
    <h1 class="opportunite fw-bold text-wrap">
      <div class="image-out position-relative">
        <img
          class="position-absolute"
          src="https://cdn.jsdelivr.net/gh/DeividAlmeida/assets/Vector%2012.png"
          alt="leaf"
        />
      </div>
      Gostaria de considerar uma oportunidade profissional conosco</h1>
  </div>
  <FooterComponent />
</template>

<script lang="ts">
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    FooterComponent,
  },
};
</script>

<style>
.opportunite {
  font-size: 48px;
}

.image-out {
  right: 102px;
  bottom: 12px;
}

.image-out > img {
  z-index: -1;
}
</style>
