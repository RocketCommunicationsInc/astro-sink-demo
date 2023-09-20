<script setup lang="ts">
import SampleAppSlideOut from './components/SampleAppSlideOut.vue'
import  CardTypography  from './components/CardTypography.vue'
import PropertyControl from './components/PropertyControl.vue'
import GRMEquipmentJobDetails from './components/GRMEquipmentJobDetails.vue';

const segmentedButtonData = [
	{ label: "First segment" },
	{ label: "Second segment", selected: true },
	{ label: "Third segment" }
];



</script>

<template>
  <div class="container">
    <PropertyControl/>
    

    <div class="grid gap-4 grid-cols-3">
      <section class="col-span-3 border-red-500">
        <rux-card>
          <rux-classification-marking></rux-classification-marking>
          <rux-global-status-bar app-name="App"></rux-global-status-bar>
          <rux-breadcrumb class="mx-2">
            <rux-breadcrumb-item href="#"><rux-icon icon="home"></rux-icon>
              Home</rux-breadcrumb-item>
            <rux-breadcrumb-item href="#"><rux-icon icon="border-clear"></rux-icon> Second
              Item</rux-breadcrumb-item>
            <rux-breadcrumb-item><rux-icon icon="person"></rux-icon>Current
              Item</rux-breadcrumb-item>
          </rux-breadcrumb>
        </rux-card>
      </section>

      <rux-card>
        <rux-accordion>
          <rux-accordion-item>
            <div slot="label">Title 1</div>
            <p>Content 1</p>
          </rux-accordion-item>
          <rux-accordion-item>
            <div slot="label">Title 2</div>
            <p>Content 2</p>
          </rux-accordion-item>
          <rux-accordion-item>
            <div slot="label">Title 3</div>
            <p>Content 3</p>
          </rux-accordion-item>
        </rux-accordion>
      </rux-card>

      <rux-card class="">
        <rux-container>
          <header slot="header">Header</header>

          <div slot="footer" class="flex items-center">
            <rux-button borderless>Cancel</rux-button>
            <div class="flex items-center gap-4 ml-auto">
              <rux-button secondary>Deny</rux-button>
              <rux-button>Accept</rux-button>
            </div>
          </div>
        </rux-container>
      </rux-card>

      <rux-card class="overflow-hidden">
        <rux-table class="">
          <rux-table-header>
            <rux-table-header-row>
              <rux-table-header-cell>
                Header text
              </rux-table-header-cell>
              <rux-table-header-cell>
                Header text
              </rux-table-header-cell>
              <rux-table-header-cell> </rux-table-header-cell>
            </rux-table-header-row>
          </rux-table-header>
          <rux-table-body>
            <rux-table-row>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>
                <div class="flex items-center gap-4 justify-end">
                  <rux-button icon-only secondary icon="create" size="small"></rux-button>
                  <rux-button icon-only secondary icon="history" size="small"></rux-button>
                  <rux-button icon-only secondary icon="delete" size="small"></rux-button>
                </div>
              </rux-table-cell>
            </rux-table-row>
            <rux-table-row>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>
                <div class="flex items-center gap-4 justify-end">
                  <rux-button icon-only secondary icon="create" size="small"></rux-button>
                  <rux-button icon-only secondary icon="history" size="small"></rux-button>
                  <rux-button icon-only secondary icon="delete" size="small"></rux-button>
                </div>
              </rux-table-cell>
            </rux-table-row>
            <rux-table-row>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>
                <div class="flex items-center gap-4 justify-end">
                  <rux-button icon-only secondary icon="create" size="small"></rux-button>
                  <rux-button icon-only secondary icon="history" size="small"></rux-button>
                  <rux-button icon-only secondary icon="delete" size="small"></rux-button>
                </div>
              </rux-table-cell>
            </rux-table-row>
            <rux-table-row>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>Table text</rux-table-cell>
              <rux-table-cell>
                <div class="flex items-center gap-4 justify-end">
                  <rux-button icon-only secondary icon="create" size="small"></rux-button>
                  <rux-button icon-only secondary icon="history" size="small"></rux-button>
                  <rux-button icon-only secondary icon="delete" size="small"></rux-button>
                </div>
              </rux-table-cell>
            </rux-table-row>
          </rux-table-body>
        </rux-table>
      </rux-card>

      <rux-card class="col-span-3">
        <rux-timeline timezone="America/New_York" start="2021-02-01T00:00:00.000Z" end="2021-02-03T00:00:00.000Z"
          playhead="2021-02-01T04:00:00.000Z" interval="hour" zoom="2">
          <rux-track>
            <div slot="label">Region 1</div>
            <rux-time-region start="2021-02-01T01:00:00Z" end="2021-02-01T02:00:00Z" status="serious">
              Event 1.2
            </rux-time-region>
          </rux-track>
          <rux-track>
            <div slot="label">Region 2</div>
            <rux-time-region start="2021-02-01T10:00:00Z" end="2021-02-01T12:00:00Z" status="serious">
              Event 2.1
            </rux-time-region>
          </rux-track>
          <rux-track>
            <div slot="label">Region 3</div>
            <rux-time-region start="2021-02-01T00:00:00Z" end="2021-02-02T02:00:00Z" status="standby">
              Event 3.1
            </rux-time-region>
          </rux-track>
          <rux-track>
            <div slot="label">Region 4</div>
            <rux-time-region start="2021-02-01T03:00:00Z" end="2021-02-02T04:33:00Z" status="critical">
              Event 4.1
            </rux-time-region>
          </rux-track>
          <rux-track>
            <div slot="label">Region 5</div>
            <rux-time-region start="2021-02-01T05:00:00Z" end="2021-02-02T05:33:00Z" status="caution">
              Event 5.1
            </rux-time-region>
          </rux-track>
          <rux-track>
            <div slot="label">Region 6</div>
            <rux-time-region start="2021-02-01T05:00:00Z" end="2021-02-02T05:33:00Z" status="normal">
              Event 6.1
            </rux-time-region>
          </rux-track>
          <rux-track>
            <div slot="label">Region 7</div>
            <rux-time-region start="2021-02-01T05:00:00Z" end="2021-02-02T05:33:00Z" status="normal">
              Event 7.1
            </rux-time-region>
          </rux-track>
          <rux-track slot="ruler">
            <rux-ruler></rux-ruler>
          </rux-track>
        </rux-timeline>
      </rux-card>

      <rux-container class="col-span-2">
        <div slot="header">Sign In</div>
        <form class="flex flex-col items-center m-8 gap-y-8">
          <rux-input type="email" label="Email" placeholder="example@example.com" class="w-5/6"></rux-input>
          <div class="w-5/6">
            <rux-input type="password" label="Password" placeholder="Enter password"></rux-input>
            <rux-checkbox label="Remember me" class="my-2"></rux-checkbox>
            <div class="flex w-full justify-end my-2">
              <rux-button type="submit">Sign In</rux-button>
            </div>
          </div>
        </form>
      </rux-container>

      <rux-card class="col-span-1">
        <div class="grid grid-cols-2 p-4 gap-4">
          <rux-monitoring-progress-icon progress="10" label="Minas Tirith" sublabel="Area"
            class="m-auto"></rux-monitoring-progress-icon>
          <rux-monitoring-progress-icon progress="20" label="Gondor" sublabel="Area"
            class="m-auto"></rux-monitoring-progress-icon>
          <rux-monitoring-progress-icon progress="40" label="Barad-dûr" sublabel="Area"
            class="m-auto"></rux-monitoring-progress-icon>
          <rux-monitoring-progress-icon progress="50" label="Osgiliath" sublabel="Area"
            class="m-auto"></rux-monitoring-progress-icon>
          <rux-monitoring-progress-icon progress="70" label="The Shire" sublabel="Area"
            class="m-auto"></rux-monitoring-progress-icon>
          <rux-monitoring-progress-icon progress="90" label="Rohan" sublabel="Area"
            class="m-auto"></rux-monitoring-progress-icon>
        </div>
      </rux-card>

      <GRMEquipmentJobDetails class="col-span-2"></GRMEquipmentJobDetails>
      <rux-card>
        <div slot="header" style="display: flex; align-items: center">
          <rux-pop-up open="true" placement="bottom" disable-auto-update="">
            <rux-icon icon="apps" slot="trigger" size="26px" class="mr-4"></rux-icon>
            <rux-menu>
              <rux-menu-item href="#">Menu Item 1</rux-menu-item>
              <rux-menu-item href="#">Menu Item 2</rux-menu-item>
              <rux-menu-item href="#">Menu Item 3</rux-menu-item>
            </rux-menu>
          </rux-pop-up>

          Card Title
        </div>
        <div style="
                        padding-top: 20px;
                        padding-bottom: 20px;
                        display: flex;
                        justify-content: center;
                    ">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M139.65 70C139.65 108.467 108.467 139.65 70 139.65C31.5334 139.65 0.35 108.467 0.35 70C0.35 31.5334 31.5334 0.35 70 0.35C108.467 0.35 139.65 31.5334 139.65 70Z"
              stroke="black" stroke-width="0.7"></path>
            <circle cx="70" cy="70" r="41.65" stroke="black" stroke-width="0.7"></circle>
            <path
              d="M69.3044 28L69.3044 0.700024C109.605 0.700026 139.3 32.2 139.3 70.7L112.002 70.7C112.002 45.5 92.4029 28 69.3044 28Z"
              fill="#AEA8E5"></path>
            <path
              d="M69.3044 112L69.3044 139.3C109.605 139.3 139.3 107.45 139.3 70.7L112.002 70.7C111.302 93.45 92.7529 112 69.3044 112Z"
              fill="#938BDB"></path>
            <path
              d="M69.3044 28L69.3044 0.702855C30.8085 0.349326 0.00881784 33.6 0.711748 70.7L27.9982 70.7C27.9982 45.85 47.597 28.35 69.3044 28Z"
              fill="#302C54"></path>
            <path
              d="M69.3044 112L69.3044 139.3C30.1086 139.3 0.361846 106.75 0.711796 70.7L27.9982 70.7C28.6963 94.15 47.247 111.65 69.3044 112Z"
              fill="#6058A8"></path>
          </svg>
        </div>
        <div slot="footer" style="justify-content: center; display: flex">
          <rux-button size="small">Primary button</rux-button>
        </div>
      </rux-card>

      <rux-card>
        <div class="grid grid-cols-2 gap-4">
          <rux-clock class="m-auto"></rux-clock>
          <rux-monitoring-icon class="m-auto"></rux-monitoring-icon>
          <rux-indeterminate-progress class="m-auto"></rux-indeterminate-progress>
          <rux-monitoring-icon class="m-auto" icon="altitude" label="Monitoring" status="normal" notifications="1"
            sublabel="" size="2.5rem"></rux-monitoring-icon>
          <div class="m-auto flex gap-4">
            <rux-tag status="pass"> </rux-tag>
            <rux-tag status="fail"> </rux-tag>
            <rux-tag status="unknown"> </rux-tag>
          </div>

          <rux-progress class="col-span-2" value="1"></rux-progress>
          <rux-push-button checked label="Push Button"></rux-push-button>


          <rux-switch></rux-switch>
        </div>
        <rux-segmented-button class="mt-4" :data="segmentedButtonData"></rux-segmented-button>
      </rux-card>

      <rux-container style="--body-padding: 0" class="overflow-hidden">
        <div slot="header">Parent container title</div>
        <div slot="tab-bar">
          <rux-tabs id="tab-set-id-2" small="">
            <rux-tab id="tab-id-4">Tab 1</rux-tab>
            <rux-tab id="tab-id-5">Tab 2</rux-tab>
            <rux-tab id="tab-id-6" disabled="">
              Tab 3 (disabled)
            </rux-tab>
          </rux-tabs>
        </div>
        <div slot="toolbar">
          <rux-slider></rux-slider>
        </div>
        <div>
          <rux-tab-panels aria-labelledby="tab-set-id-2">
            <rux-tab-panel aria-labelledby="tab-id-4">
              <rux-table>
                <rux-table-header>
                  <rux-table-header-row>
                    <rux-table-header-cell>
                      Header text
                    </rux-table-header-cell>
                    <rux-table-header-cell>
                      Header text
                    </rux-table-header-cell>
                    <rux-table-header-cell>
                      Header text
                    </rux-table-header-cell>
                    <rux-table-header-cell>
                      Header text
                    </rux-table-header-cell>
                  </rux-table-header-row>
                </rux-table-header>
                <rux-table-body>
                  <rux-table-row>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                  </rux-table-row>
                  <rux-table-row>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                  </rux-table-row>
                  <rux-table-row>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                  </rux-table-row>
                  <rux-table-row>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                    <rux-table-cell>Table text</rux-table-cell>
                  </rux-table-row>
                </rux-table-body>
              </rux-table>
            </rux-tab-panel>
            <rux-tab-panel aria-labelledby="tab-id-5">
              <div style="padding: 1.25rem">
                Tab 2 HTML content
              </div>
            </rux-tab-panel>
            <rux-tab-panel aria-labelledby="tab-id-6">Tab 3 HTML content</rux-tab-panel>
          </rux-tab-panels>
        </div>
        <div slot="footer">
          <rux-button style="width: 100%">Primary Button</rux-button>
        </div>
      </rux-container>

      <SampleAppSlideOut class="col-span-1"></SampleAppSlideOut>
      
      <rux-card class="col-span-3">
        <div class="flex flex-col gap-2">
          <rux-classification-marking classification="cui"></rux-classification-marking>
          <rux-classification-marking classification="controlled"></rux-classification-marking>
          <rux-classification-marking classification="confidential"></rux-classification-marking>
          <rux-classification-marking classification="secret"></rux-classification-marking>
          <rux-classification-marking classification="top-secret"></rux-classification-marking>
          <rux-classification-marking classification="top-secret-sci"></rux-classification-marking>
          <rux-classification-marking classification="unclassified"></rux-classification-marking>
        </div>
      </rux-card>

      <rux-card class="col-span-3">
        <rux-notification open status="standby"
          message="This is a notification banner. It won’t disappear until the user dismisses it."></rux-notification>
        <rux-notification open status="serious"
          message="This is a notification banner. It won’t disappear until the user dismisses it."></rux-notification>
        <rux-notification open status="critical"
          message="This is a notification banner. It won’t disappear until the user dismisses it."></rux-notification>
      </rux-card>

      <CardTypography class="col-span-3"></CardTypography>
    
      
    </div>
  </div>
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

:root {
  --base: 4px;
  --spacing-050: calc(0.25 * var(--base));
  --spacing-025: calc(0.5 * var(--base));
  --spacing-24: calc(24 * var(--base));
  --spacing-20: calc(20 * var(--base));
  --spacing-16: calc(16 * var(--base));
  --spacing-14: calc(14 * var(--base));
  --spacing-12: calc(12 * var(--base));
  --spacing-10: calc(10 * var(--base));
  --spacing-8: calc(8 * var(--base));
  --spacing-6: calc(6 * var(--base));
  --spacing-4: calc(4 * var(--base));
  --spacing-3: calc(3 * var(--base));
  --spacing-2: calc(2 * var(--base));
  --spacing-1: calc(1 * var(--base));
  --spacing-0: 0rem;

  --paragraph-spacing-0: 0;
  --letter-spacing-sm: -0.005em;
  --letter-spacing-lg: 0.0015em;
  --letter-spacing-base: 0em;
  --letter-spacing-xl: 0.0025em;
  --letter-spacing-2xl: 0.005em;
  /* --font-size-6xl: 3.75rem;
  --font-size-5xl: 3rem;
  --font-size-4xl: 2.125rem;
  --font-size-3xl: 1.75rem;
  --font-size-2xl: 1.5rem;
  --font-size-xl: 1.25rem;
  --font-size-lg: 1.125rem;
  --font-size-base: 1rem;
  --font-size-sm: 0.875rem;
  --font-size-xs: 0.75rem; */

  --ratio: 4;
	/* --baseFontSize: 0.25rem; */
	--baseFontSize: 16px;

	--font-size-xs: 12px; 
	--font-size-sm: 14px; 
	--font-size-base: 16px; 
	--font-size-lg: 18px; 
	--font-size-xl: 20px;
	--font-size-2xl: 24px;
	--font-size-3xl: 28px;
	--font-size-4xl: 34px;
	--font-size-5xl: 48px;
	--font-size-6xl: 60px; 

	/* --font-size-xs: calc(var(--baseFontSize) * pow(var(--ratio),1));
	--font-size-sm: calc(var(--baseFontSize) * pow(var(--ratio),2));
	--font-size-base: calc(var(--baseFontSize) * pow(var(--ratio),3));
	--font-size-lg: calc(var(--baseFontSize) * pow(var(--ratio),4));
	--font-size-xl: calc(var(--baseFontSize) * pow(var(--ratio),5));
	--font-size-2xl: calc(var(--baseFontSize) * pow(var(--ratio),6));
	--font-size-3xl: calc(var(--baseFontSize) * pow(var(--ratio),7));
	--font-size-4xl: calc(var(--baseFontSize) * pow(var(--ratio),8)); */

  --font-weights-bold: 700;
  --font-weights-medium: 500;
  --font-weights-regular: 400;
  --font-weights-light: 300;
  --line-height-4xl: 4.375rem;
  --line-height-3xl: 3.5rem;
  --line-height-2xl: 2.5rem;
  --line-height-xl: 2rem;
  --line-height-lg: 1.75rem;
  --line-height-base: 1.5rem;
  --line-height-sm: 1.25rem;
  --line-height-xs: 1rem;
  --line-height-2xs: 0.875rem;
  --font-family-sans: "Roboto";

  --font-control-body-1-bold-letter-spacing: var(--letter-spacing-2xl);
  --font-control-body-1-bold-font-size: var(--font-size-base);
  --font-control-body-1-bold-line-height: calc(20 / 16);
  --font-control-body-1-bold--font-weight: var(--font-weights-bold);
  --font-control-body-1-bold-font-family: var(--font-family-sans);

  --font-control-body-1-letter-spacing: var(--letter-spacing-2xl);
  --font-control-body-1-font-size: var(--font-size-base);
  --font-control-body-1-line-height: calc(20 / 16);
  --font-control-body-1-font-weight: var(--font-weights-regular);
  --font-control-body-1-font-family: var(--font-family-sans);

  --font-display-2-letter-spacing: var(--letter-spacing-base);
  --font-display-2-font-size: var(--font-size-5xl);
  --font-display-2-line-height: calc(56 / 48);
  --font-display-2-font-weight: var(--font-weights-regular);
  --font-display-2-font-family: var(--font-family-sans);

  --font-display-1-letter-spacing: var(--letter-spacing-sm);
  --font-display-1-font-size: var(--font-size-6xl);
  --font-display-1-line-height: calc(70 / 60);
  --font-display-1-font-weight: 300;
  --font-display-1-font-family: var(--font-family-sans);

  --font-monospace-1-letter-spacing: var(--letter-spacing-base);
  --font-monospace-1-font-size: 1.75rem;
  --font-monospace-1-line-height: calc(32 / 28);
  --font-monospace-1-font-weight: 500;
  --font-monospace-1-font-family: var(--font-family-sans);

  --font-body-3-bold-letter-spacing: var(--letter-spacing-2xl);
  --font-body-3-bold-font-size: var(--font-size-xs);
  --font-body-3-bold-line-height: calc(16 / 12);
  --font-body-3-bold--font-weight: var(--font-weights-bold);
  --font-body-3-bold-font-family: var(--font-family-sans);

  --font-body-3-letter-spacing: var(--letter-spacing-2xl);
  --font-body-3-font-size: 0.75rem;
  --font-body-3-line-height: calc(16 / 12);
  --font-body-3-font-weight: var(--font-weights-regular);
  --font-body-3-font-family: var(--font-family-sans);

  --font-body-2-bold-letter-spacing: var(--letter-spacing-2xl);
  --font-body-2-bold-font-size: var(--font-size-sm);
  --font-body-2-bold-line-height: calc(20 / 14);
  --font-body-2-bold--font-weight: var(--font-weights-bold);
  --font-body-2-bold-font-family: var(--font-family-sans);

  --font-body-2-letter-spacing: var(--letter-spacing-2xl);
  --font-body-2-font-size: var(--font-size-sm);
  --font-body-2-line-height: calc(20 / 14);
  --font-body-2-font-weight: var(--font-weights-regular);
  --font-body-2-font-family: var(--font-family-sans);

  --font-body-1-bold-letter-spacing: var(--letter-spacing-2xl);
  --font-body-1-bold-font-size: var(--font-size-base);
  --font-body-1-bold-line-height: calc(24 / 16);
  --font-body-1-bold--font-weight: var(--font-weights-bold);
  --font-body-1-bold-font-family: var(--font-family-sans);

  --font-body-1-letter-spacing: var(--letter-spacing-2xl);
  --font-body-1-font-size: var(--font-size-base);
  --font-body-1-line-height: calc(24 / 16);
  --font-body-1-font-weight: var(--font-weights-regular);
  --font-body-1-font-family: var(--font-family-sans);

  --font-heading-6-letter-spacing: var(--letter-spacing-base);
  --font-heading-6-font-size: var(--font-size-lg);
  --font-heading-6-line-height: calc(24 / 18);
  --font-heading-6-font-weight: var(--font-weights-light);
  --font-heading-6-font-family: var(--font-family-sans);

  --font-heading-5-letter-spacing: var(--letter-spacing-base);
  --font-heading-5-font-size: var(--font-size-lg);
  --font-heading-5-line-height: calc(24 / 18);
  --font-heading-5-font-weight: var(--font-weights-regular);
  --font-heading-5-font-family: var(--font-family-sans);

  --font-heading-4-letter-spacing: var(--letter-spacing-lg);
  --font-heading-4-font-size: var(--font-size-xl);
  --font-heading-4-line-height: calc(24 / 20);
  --font-heading-4-font-weight: var(--font-weights-300);
  --font-heading-4-font-family: var(--font-family-sans);

  --font-heading-3-letter-spacing: var(--letter-spacing-lg);
  --font-heading-3-font-size: var(--font-size-xl);
  --font-heading-3-line-height: calc(24 / 20);
  --font-heading-3-font-weight: var(--font-weights-medium);
  --font-heading-3-font-family: var(--font-family-sans);

  --font-heading-2-letter-spacing: var(--letter-spacing-base);
  --font-heading-2-font-size: var(--font-size-2xl);
  --font-heading-2-line-height: calc(28 / 24);
  --font-heading-2-font-weight: var(--font-weights-regular);
  --font-heading-2-font-family: var(--font-family-sans);

  --font-heading-1-bold-letter-spacing: var(--letter-spacing-xl);
  --font-heading-1-bold-font-size: var(--font-size-4xl);
  --font-heading-1-bold-line-height: calc(40 / 34);
  --font-heading-1-bold-font-weight: var(--font-weights-bold);
  --font-heading-1-bold-font-family: var(--font-family-sans);

  --font-heading-1-letter-spacing: var(--letter-spacing-xl);
  --font-heading-1-font-size: var(--font-size-4xl);
  --font-heading-1-line-height: calc(40 / 34);
  --font-heading-1-font-weight: var(--font-weights-regular);
  --font-heading-1-font-family: var(--font-family-sans);
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
