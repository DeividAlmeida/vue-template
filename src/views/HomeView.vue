<template>
  <BannerComponent />
  <SectionTitle />
  <div v-for="card in cards">

  </div>
  <CardComponent />
  <ContactForm />
</template>

<script lang="ts">
import BannerComponent from "@/components/BannerComponent.vue";
import ContactForm from "@/components/ContactForm.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import CardComponent from "@/components/CardComponent.vue";
import { cardsStore } from "../stores/cards";
export default {
  components: {
    BannerComponent,
    SectionTitle,
    CardComponent,
    ContactForm,
  },
  setup() {
    const getCardsStore = cardsStore();
    const cards = getCardsStore.cards;
  }
};

</script>

<style></style>
