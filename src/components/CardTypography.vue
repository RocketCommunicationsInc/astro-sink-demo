<template>
  <rux-container style="--body-padding: var(--spacing-4);">
    <header slot="header" class="flex">
      Legacy Typography
      <div class="text-sm flex items-center ml-auto">
        <rux-switch label="Show Bolds" id="show-bolds" :checked="showBolds"
          @ruxchange="showBolds = $event.target.checked"></rux-switch>
      </div>
    </header>
    <ul class="flex flex-col gap-4">
      <li class="rux-display-1">Display 1</li>
      <li class="rux-display-2">Display 2</li>
      <li class="rux-heading-1">Heading 1</li>
      <li class="rux-heading-1-bold" v-if="showBolds">Heading 1 Bold</li>
      <li class="rux-heading-2">Heading 2</li>
      <li class="rux-heading-3">Heading 3</li>
      <li class="rux-heading-4">Heading 4</li>
      <li class="rux-heading-5">Heading 5</li>
      <li class="rux-heading-6">Heading 6</li>
      <li class="rux-body-1">Body 1</li>
      <li class="rux-body-1-bold" v-if="showBolds">Body 1 Bold</li>
      <li class="rux-body-2">Body 2</li>
      <li class="rux-body-2-bold" v-if="showBolds">Body 2 Bold</li>
      <li class="rux-body-3">Body 3</li>
      <li class="rux-body-3-bold" v-if="showBolds">Body 3 Bold</li>
      <li class="rux-control-body-1">Control Body 1</li>
      <li class="rux-control-body-1-bold" v-if="showBolds">Control Body 1 Bold</li>
    </ul>





  </rux-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showBolds = ref(false)

</script>

<style scoped>
.rux-body-1,
.rux-body-1-bold,
.rux-body-2,
.rux-body-2-bold,
.rux-body-3,
.rux-body-3-bold,
.rux-control-body-1,
.rux-control-body-1-bold {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-2xl) !important;
}

.rux-heading-1,
.rux-heading-1-bold {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-xl) !important;
}

.rux-heading-2,
.rux-heading-5,
.rux-heading-6,
.rux-display-2 {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-base) !important;
}

.rux-heading-3,
.rux-heading-4 {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-lg) !important;
}

.rux-display-1 {
  font-family: var(--font-family-sans) !important;
  letter-spacing: var(--letter-spacing-sm) !important;
}</style>