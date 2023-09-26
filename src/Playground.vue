<script setup lang="ts">
import "./style.css";
import SampleAppSlideOut from './components/SampleAppSlideOut.vue'
import CardTypography from './components/CardTypography.vue'
import GRMEquipmentJobDetails from './components/GRMEquipmentJobDetails.vue';
import CardTree from './components/CardTree.vue'
import CardTimeline from "./components/CardTimeline.vue";
</script>

<template>
	<div class="container ">



		<div class="grid gap-4 grid-cols-3">
			<section class="col-span-3 border-red-500">
				<rux-card>
					<rux-classification-marking></rux-classification-marking>
					<rux-global-status-bar app-name="Lorien" app-domain="East" version="1.1.0">
						<rux-clock></rux-clock>

						<div slot="right-side" class="flex items-center gap-4">

							<rux-monitoring-icon class="m-auto" icon="antenna-transmit" label="Spacecraft" status="critical"
								notifications="1" sublabel="" size="2.5rem"></rux-monitoring-icon>
							<rux-monitoring-icon class="m-auto" icon="satellite-transmit" label="Ground" status="normal"
								notifications="1" sublabel="" size="2.5rem"></rux-monitoring-icon>
							<rux-monitoring-icon class="m-auto" icon="altitude" label="Monitoring" status="normal"
								notifications="1" sublabel="" size="2.5rem"></rux-monitoring-icon>
						</div>
					</rux-global-status-bar>
					<div class="px-4">

						<rux-breadcrumb class="mx-2">
							<rux-breadcrumb-item href="#">Monitor</rux-breadcrumb-item>
							<rux-breadcrumb-item href="#">Details</rux-breadcrumb-item>
							<rux-breadcrumb-item>Edit</rux-breadcrumb-item>
						</rux-breadcrumb>
					</div>
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
					<div class="p-4 flex">
						<rux-indeterminate-progress class="m-auto"></rux-indeterminate-progress>
					</div>
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

			<rux-notification open status="critical" class="col-span-3 w-full block"
				message="This is a notification banner. It won’t disappear until the user dismisses it."></rux-notification>
			<rux-container class="col-span-3" style="--body-padding: 0;">
				<CardTimeline></CardTimeline>
			</rux-container>


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
			<rux-container style="--body-padding: 0;" class="col-span-1">

				<CardTree></CardTree>
			</rux-container>
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

			<CardTypography class="col-span-1"></CardTypography>

			<rux-container class="col-span-3">
				<header slot="Font Sizes"></header>
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
			</rux-container>
			<rux-container class="col-span-3">
				<header slot="header">Font Size / Line Height</header>
				<ul class="grid md:grid-cols-2 gap-8">
					<li class="text-6xl leading-normal">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since.</p>
						<p class="text-right text-sm text-secondary">text-6xl / line-height-tight</p>
					</li>
					<li class="text-5xl">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since.</p>
						<p class="text-right text-sm text-secondary">text-5xl / line-height-tight</p>
					</li>
					<li class="text-4xl">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since.</p>
						<p class="text-right text-sm text-secondary">text-4xl / line-height-tight</p>
					</li>
					<li class="text-3xl">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since.</p>
						<p class="text-right text-sm text-secondary">text-3xl / line-height-tight</p>
					</li>
					<li class="text-2xl">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember
							that all the people in this world haven't had the advantages that you've had."</p>
						<p class="text-right text-sm text-secondary">text-2xl / line-height-tight</p>
					</li>
					<li class="text-xl">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember
							that all the people in this world haven't had the advantages that you've had."</p>
						<p class="text-right text-sm text-secondary">text-xl / line-height-tight</p>
					</li>
					<li class="text-lg">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember
							that all the people in this world haven't had the advantages that you've had."</p>
						<p class="text-right text-sm text-secondary">text-lg / line-height-normal</p>
					</li>
					<li class="text-base">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember
							that all the people in this world haven't had the advantages that you've had. He didn't say any
							more but we've always been unusually communicative in a reserved way, and I understood that he
							meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit
							that has opened up many curious natures to me and also made me the victim of not a few veteran
							bores."</p>
						<p class="text-right text-sm text-secondary">text-base / line-height-normal</p>
					</li>
					<li class="text-sm">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember
							that all the people in this world haven't had the advantages that you've had. He didn't say any
							more but we've always been unusually communicative in a reserved way, and I understood that he
							meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit
							that has opened up many curious natures to me and also made me the victim of not a few veteran
							bores."</p>
						<p class="text-right text-sm text-secondary">text-sm / line-height-normal</p>
					</li>
					<li class="text-xs">
						<p>In my younger and more vulnerable years my father gave me some advice that I've been turning over
							in my mind ever since. "Whenever you feel like criticizing any one," he told me, "just remember
							that all the people in this world haven't had the advantages that you've had. He didn't say any
							more but we've always been unusually communicative in a reserved way, and I understood that he
							meant a great deal more than that. In consequence I'm inclined to reserve all judgments, a habit
							that has opened up many curious natures to me and also made me the victim of not a few veteran
							bores."</p>
						<p class="text-right text-sm text-secondary">text-xs / line-height-normal</p>
					</li>
				</ul>
			</rux-container>
			<rux-container class="col-span-3">
				<header slot="header">Line Height</header>
				<ul class="grid md:grid-cols-2 gap-8 text-base">
					<li>
						<p class="leading-tight">In my younger and more vulnerable years my father gave me some advice that
							I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he
							told me, "just remember that all the people in this world haven't had the advantages that you've
							had. He didn't say any more but we've always been unusually communicative in a reserved way, and
							I understood that he meant a great deal more than that. In consequence I'm inclined to reserve
							all judgments, a habit that has opened up many curious natures to me and also made me the victim
							of not a few veteran bores."</p>
						<p class="text-right text-sm text-secondary">line-height-tight</p>
					</li>
					<li>
						<p class="leading-normal">In my younger and more vulnerable years my father gave me some advice that
							I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he
							told me, "just remember that all the people in this world haven't had the advantages that you've
							had. He didn't say any more but we've always been unusually communicative in a reserved way, and
							I understood that he meant a great deal more than that. In consequence I'm inclined to reserve
							all judgments, a habit that has opened up many curious natures to me and also made me the victim
							of not a few veteran bores."</p>
						<p class="text-right text-sm text-secondary">line-height-normal</p>
					</li>
					<li>
						<p class="leading-relaxed">In my younger and more vulnerable years my father gave me some advice
							that I've been turning over in my mind ever since. "Whenever you feel like criticizing any one,"
							he told me, "just remember that all the people in this world haven't had the advantages that
							you've had. He didn't say any more but we've always been unusually communicative in a reserved
							way, and I understood that he meant a great deal more than that. In consequence I'm inclined to
							reserve all judgments, a habit that has opened up many curious natures to me and also made me
							the victim of not a few veteran bores."</p>
						<p class="text-right text-sm text-secondary">line-height-relaxed</p>
					</li>
					<li>
						<p class="leading-loose">In my younger and more vulnerable years my father gave me some advice that
							I've been turning over in my mind ever since. "Whenever you feel like criticizing any one," he
							told me, "just remember that all the people in this world haven't had the advantages that you've
							had. He didn't say any more but we've always been unusually communicative in a reserved way, and
							I understood that he meant a great deal more than that. In consequence I'm inclined to reserve
							all judgments, a habit that has opened up many curious natures to me and also made me the victim
							of not a few veteran bores."</p>
						<p class="text-right text-sm text-secondary">line-height-loose</p>
					</li>
				</ul>
			</rux-container>
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



rux-card {
	--body-padding: 0;
	overflow: hidden;
}
</style>
