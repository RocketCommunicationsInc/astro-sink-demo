<template>
<rux-container style="--body-padding: var(--spacing-4);">
	<header slot="header" class="flex">
		<div class="text-sm flex items-center ml-auto">

		<rux-switch label="Show Bolds" id="show-bolds" :checked="showBolds" @ruxchange="showBolds = $event.target.checked"></rux-switch>
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

         <hr class="my-4">
         <ul class="flex flex-col gap-4">
          <li class="text-6xl">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-6xl</p>
          </li>
          <li class="text-5xl">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-5xl</p>
          </li>
          <li class="text-4xl">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-4xl</p>
          </li>
          <li class="text-3xl">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-3xl</p>
          </li>
          <li class="text-2xl">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-2xl</p>
          </li>
          <li class="text-xl">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-xl</p>
          </li>
          <li class="text-lg">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-lg</p>
          </li>
          <li class="text-base">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-base</p>
          </li>
          <li class="text-sm">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-sm</p>
          </li>
          <li class="text-xs">
            The quick brown fox jumps over the lazy dog
            <p class="text-sm text-secondary">text-xs</p>
          </li>
         </ul>

         <hr class="my-4"> 

         <ul class="flex flex-col gap-4 w-1/2">
          <li class="text-6xl">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
            <p class="text-right text-sm text-secondary">text-6xl / line-height-tight</p>
          </li>
          <li class="text-5xl">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
            <p class="text-right text-sm text-secondary">text-5xl / line-height-tight</p>
          </li>
          <li class="text-4xl">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
            <p class="text-right text-sm text-secondary">text-4xl / line-height-tight</p>
          </li>
          <li class="text-3xl">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
            <p class="text-right text-sm text-secondary">text-3xl / line-height-tight</p>
          </li>
          <li class="text-2xl">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had."</p>
            <p class="text-right text-sm text-secondary">text-2xl / line-height-tight</p>
          </li>
          <li class="text-xl">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had."</p>
            <p class="text-right text-sm text-secondary">text-xl / line-height-tight</p>
          </li>
          <li class="text-lg">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had."</p>
            <p class="text-right text-sm text-secondary">text-lg / line-height-normal</p>
          </li>
          <li class="text-base">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had. He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores."</p>
            <p class="text-right text-sm text-secondary">text-base / line-height-normal</p>
          </li>
          <li class="text-sm">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had. He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores."</p>
            <p class="text-right text-sm text-secondary">text-sm / line-height-normal</p>
          </li>
          <li class="text-xs">
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had. He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores."</p>
            <p class="text-right text-sm text-secondary">text-xs / line-height-normal</p>
          </li>
         </ul>
        
         <hr class="my-4">

         <ul class="w-1/2 flex flex-col gap-8 text-base">
            <li>
              <p class="leading-tight">In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had. He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores."</p>
              <p class="text-right text-sm text-secondary">line-height-tight</p>

            </li>
            <li>
              <p class="leading-relaxed">In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had. He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores."</p>
              <p class="text-right text-sm text-secondary">line-height-relaxed</p>
            </li> 
            <li>
              <p class="leading-loose">In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had. He didn't say any more but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores."</p>
              <p class="text-right text-sm text-secondary">line-height-loose</p>
            </li>


         

         </ul>

        

      </rux-container>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const showBolds = ref(false)

</script>

<style scoped>
.rux-body-1, .rux-body-1-bold, .rux-body-2, .rux-body-2-bold, .rux-body-3, .rux-body-3-bold, .rux-control-body-1, .rux-control-body-1-bold {
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
}

</style>