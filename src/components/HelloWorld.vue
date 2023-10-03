<template>
  <MDBContainer>
    <NavComponent />
    <HeroComponent />
    <MockupComponent />
    <WhyChoose />
    <AppPreview />
    <FaqComponent />
    <FooterComponent />
  </MDBContainer>
</template>

<script setup lang="ts">
import { MDBContainer } from "mdb-vue-ui-kit";
import NavComponent from "./NavComponent.vue";
import HeroComponent from "./HeroComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import MockupComponent from "./MockupComponent.vue";
import WhyChoose from "./WhyChoose.vue";
import AppPreview from "./AppPreview.vue";
import FaqComponent from "./FaqComponent.vue";

defineProps<{ msg: string }>();
</script>
