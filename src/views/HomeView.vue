<template>
  <BannerComponent />
  <SectionTitle />
  <div class="container col-12">
    <div class="row d-flex justify-content-center">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="col-md-4 d-flex justify-content-center mt-4"
      >
        <CardComponent :card="card" />
      </div>
    </div>
  </div>
  <ContactForm />
</template>

<script lang="ts">
import BannerComponent from "@/components/BannerComponent.vue";
import ContactForm from "@/components/ContactForm.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import CardComponent from "@/components/CardComponent.vue";
import { cardsStore } from "../stores/cards";
import type { ICard } from "../interfaces/ICard";

export default {
  components: {
    BannerComponent,
    SectionTitle,
    CardComponent,
    ContactForm,
  },
  setup() {
    const getCardsStore = cardsStore();
    return {
      cards: getCardsStore.cards as ICard[],
    };
  },
};
</script>

<style></style>
