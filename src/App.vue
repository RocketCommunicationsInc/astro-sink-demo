<script setup lang="ts">

import Playground from "./Playground.vue"
import PropertyControl from './components/PropertyControl.vue'




</script>


<template>
    <PropertyControl/>
    
    <Playground></Playground>
</template>

<style>

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1400px;
  }
}

 rux-card {
  --body-padding: 0;
  overflow: hidden;
}


/* .rux-body-1, .rux-body-1-bold, .rux-body-2, .rux-body-2-bold, .rux-body-3, .rux-body-3-bold, .rux-control-body-1, .rux-control-body-1-bold {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-2xl) !important;
}

.rux-heading-1, .rux-heading-1-bold {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-xl) !important;
}

.rux-heading-2, .rux-heading-5, .rux-heading-6, .rux-display-2 {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-base) !important;
}

.rux-heading-3, .rux-heading-4 {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-lg) !important;
}

.rux-display-1 {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-sm) !important;
} */


</style>
