<template>
	<section class="mt-4 bg-slate-50 mb-4 rounded-xl text-black fixed top-0 right-0 z-[9999] property-control">
		<div class="flex items-center ml-auto">
			<button class="flex items-center ml-auto" @click.prevent="visible = !visible">
				<span class="mr-2"> Configuration </span>
				<svg v-if="!visible" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]" viewBox="0 0 24 24">
					<title>Settings</title>
					<path
						d="M19.5 12c0 .34-.03.66-.07.98l2.11 1.65c.19.15.24.42.12.64l-2 3.46c-.12.22-.38.31-.61.22l-2.49-1c-.52.39-1.08.73-1.69.98l-.38 2.65c-.03.24-.24.42-.49.42h-4c-.25 0-.46-.18-.49-.42l-.38-2.65c-.61-.25-1.17-.58-1.69-.98l-2.49 1c-.22.08-.49 0-.61-.22l-2-3.46a.505.505 0 0 1 .12-.64l2.11-1.65A7.93 7.93 0 0 1 4.5 12c0-.33.03-.66.07-.98L2.46 9.37a.493.493 0 0 1-.12-.64l2-3.46c.12-.22.38-.31.61-.22l2.49 1c.52-.39 1.08-.73 1.69-.98l.38-2.65c.03-.24.24-.42.49-.42h4c.25 0 .46.18.49.42l.38 2.65c.61.25 1.17.58 1.69.98l2.49-1c.22-.08.49 0 .61.22l2 3.46c.12.22.07.49-.12.64l-2.11 1.65c.04.32.07.64.07.98Zm-11 0c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5-3.5 1.57-3.5 3.5Z">
					</path>
					<metadata>
						application, change, details, gear, info, information,
						options, personal, service, settings
					</metadata>
				</svg>
				<svg v-if="visible" xmlns="http://www.w3.org/2000/svg" class="w-[20px] h-[20px]" fill="none"
					viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
			</button>
		</div>
		<div class="flex flex-col w-full mt-4" v-if="visible">
			<fieldset>
				<legend class="text-lg mb-2 font-bold">Spacing</legend>
				<div class="space-y-2">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
						for=":r1u:-form-item">
						Base Spacing Unit
						<span class="ml-auto">(px)</span>
					</label>
					<input v-model="base"
						class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
						id=":r1u:-form-item" aria-describedby=":r1u:-form-item-description" type="number" name="name" />
				</div>
			</fieldset>

			<fieldset class="mt-8">
				<legend class="text-lg mb-2 font-bold">Typography</legend>

				<div class="space-y-2 mb-4">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="fontFamily">
						Font
					</label>
					<div class="relative w-max">
						<select
							class="inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] appearance-none bg-transparent font-normal"
							name="fontFamily" id="fontFamily" aria-invalid="false" v-model="selectedFont">
							<option value="Roboto">Roboto (Default)</option>
							<option value="fantasy">Fantasy</option>
							<option value="system-ui">system</option>
							<option value="Red Hat Text">Red Hat</option>
							<option value="Georgia">Segoe</option>
						</select>
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="absolute right-3 top-2.5 h-4 w-4 opacity-50">
							<path
								d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
								fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
						</svg>
					</div>
				</div>

				<div class="space-y-2 mb-4">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
						for=":r1u:-form-item">
						Base Font Size
						<span class="ml-auto">(px)</span>
					</label>
					<input v-model="baseFontSize"
						class="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
						id=":r1u:-form-item" aria-describedby=":r1u:-form-item-description" type="number" name="name" />
				</div>

				<div class="space-y-2 mb-4">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for=":r1o:-form-item">Scale</label>
					<div class="relative w-max">
						<select
							class="inline-flex items-center justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] appearance-none bg-transparent font-normal"
							name="selectedScale" id="selectedScale" aria-invalid="false" v-model="selectedScale">
							<option :value="value" v-for="(value, scale) in scales">
								{{ scale }} ({{ value }})
							</option>
						</select>
						<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="absolute right-3 top-2.5 h-4 w-4 opacity-50">
							<path
								d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
								fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
						</svg>
					</div>
					<p class="text-[0.8rem] text-muted-foreground">
						Tweak the
						<a href="https://alistapart.com/article/more-meaningful-typography/"
							class="text-blue-500 hover:text-blue-300" target="_blank">modular scale</a>
						for calculating font size.
					</p>
				</div>

				<div class="space-y-2 mb-4">
					<div class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
						Computed Font Sizes
					</div>
					<ul class="text-sm">
						<li v-for="(_, tokenName) in fontSizes">
							<div class="flex">
								{{ tokenName }}
								<span class="ml-auto">{{
									fontSizes[tokenName]
								}}</span>
							</div>
						</li>
					</ul>
				</div>

				<div class="flex items-center">
					<label
						class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
						for="letterspacing">Show Letterspacing</label>
					<div class="flex items-center ml-auto">
						<input type="checkbox" id="letterspacing" class="" v-model="withLetterspacing" />
					</div>
				</div>
			</fieldset>

			<div class="flex mt-8 ml-auto">
				<button @click.prevent="resetAll"
					class="inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs mt-2"
					type="button">
					Reset All
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// import "../control.css"
import { ref, watch, reactive } from "vue";
const root = document.documentElement;
let visible = ref(true);
let base = ref(4);
let selectedFont = ref("Roboto");
const scales = {
	"minor second": 1.067,
	"major second": 1.125,
	"minor third": 1.2,
	"major third": 1.25,
	"perfect fourth": 1.333,
	"augmented fourth": 1.414,
	"perfect fifth": 1.5,
	"minor sixth": 1.6,
	"golden ratio": 1.618,
	"major sixth": 1.667,
	"minor seventh": 1.778,
	"major seventh": 1.875,
	octave: 2
};
let selectedScale = ref(scales["major second"]);
let withLetterspacing = ref(true);

let fontSizes = reactive({
	xs: "12px",
	sm: "14px",
	base: "16px",
	lg: "18px",
	xl: "20px",
	"2xl": "24px",
	"3xl": "28px",
	"4xl": "34px",
	"5xl": "48px",
	"6xl": "60px"
});

let baseFontSize = ref(16);

const letterspacing = {
	sm: "-0.005em",
	lg: "0.0015em",
	base: "0em",
	xl: "0.0025em",
	"2xl": "0.005em"
};

const calculateFontSizes = () => {
	fontSizes.xs = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, -2)
	)}px`;
	fontSizes.sm = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, -1)
	)}px`;
	fontSizes.base = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 0)
	)}px`;
	fontSizes.lg = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 1)
	)}px`;
	fontSizes.xl = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 2)
	)}px`;
	fontSizes["2xl"] = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 3)
	)}px`;
	fontSizes["3xl"] = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 4)
	)}px`;
	fontSizes["4xl"] = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 5)
	)}px`;
	fontSizes["5xl"] = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 6)
	)}px`;
	fontSizes["6xl"] = `${Math.round(
		baseFontSize.value * Math.pow(selectedScale.value, 7)
	)}px`;
};

watch(baseFontSize, async () => {
	// base.value = (baseFontSize.value / 4)
	calculateFontSizes();
});
watch(selectedScale, async () => {
	calculateFontSizes();
});

watch(base, async (newValue) => {
	setCSSVar("base", `${newValue}px`);
});

watch(selectedFont, async (newValue) => {
	setCSSVar("font-family-sans", newValue);
});

watch(withLetterspacing, async (newValue) => {
	if (newValue) {
		restoreLetterspacing();
	} else {
		nullifyLetterspacing();
	}
});

watch(fontSizes, async (newValue) => {
	Object.entries(newValue).map((size) => {
		setCSSVar(`font-size-${size[0]}`, size[1]);
		console.log(size);
	});
});

const setCSSVar = (cssVar: string, value: string) => {
	root.style.setProperty(`--${cssVar}`, value);
};
const resetAll = () => {
	base.value = 4;
	selectedFont.value = "Roboto";
	restoreLetterspacing();
	withLetterspacing.value = true;
	baseFontSize.value = 16;
	selectedScale.value = scales["major second"];
};

const restoreLetterspacing = () => {
	for (let token of Object.keys(letterspacing)) {
		//@ts-ignore
		setCSSVar(`letter-spacing-${token}`, letterspacing[token]);
	}
};

const nullifyLetterspacing = () => {
	for (let token of Object.keys(letterspacing)) {
		setCSSVar(`letter-spacing-${token}`, "0");
	}
};
</script>

<style scoped>
@import "../control.css";

.property-control {
	font-family: "system-ui";
	padding: 1rem;
	font-size: 18px;
	letter-spacing: 0;
}
</style>
