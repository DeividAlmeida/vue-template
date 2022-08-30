<template>
  <div
    class="card my-card w-100 border-0"
    style="width: 18rem"
    :style="`background-color: var(--${card.background})`"
  >
    <div class="card-image d-flex justify-content-center my-3">
      <img height="97" width="97" :src="card.icon" :alt="card.title" />
    </div>
    <div class="card-body">
      <h4
        class="card-title fw-bold d-flex justify-content-center mb-4 text-center"
      >
        {{ card.title }}
      </h4>
      <p class="card-text description">
        {{ card.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import type { ICard } from "../interfaces/ICard";
import type { PropType } from "vue";

export default {
  props: {
    card: {} as PropType<ICard>,
  },
};
</script>

<style>
.my-card {
  height: 500px;
}

.description {
  font-size: 18px;
}
</style>
