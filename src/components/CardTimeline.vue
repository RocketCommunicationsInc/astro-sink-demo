<template>
	<header class="p-4 text-4xl flex items-center" slot="header">
		<div class="mr-auto flex items-center">
			<rux-status class="mr-4"></rux-status>
			Timeline
		</div>
		<div class="m-auto">
			<rux-segmented-button @ruxchange="currentInterval = $event.detail"
				:data.prop="intervalOptions"></rux-segmented-button>
		</div>
		<div class="ml-auto">
			<rux-slider min="2" max="11" :value="zoom" @ruxinput="zoom = $event.target.value"
				class="w-[150px]"></rux-slider>
		</div>
	</header>
	<div class="flex flex-col">

		<rux-timeline timezone="America/New_York" start="2021-02-01T00:00:00.000Z" end="2021-02-13T00:00:00.000Z"
			playhead="2021-02-01T04:00:00.000Z" :interval="currentInterval" :zoom="zoom">
			<rux-track>
				<div slot="label">Region 1</div>
				<rux-time-region start="2021-02-01T01:00:00Z" end="2021-02-01T02:00:00Z" status="serious">
					Event 1.2
				</rux-time-region>
			</rux-track>
			<rux-track>
				<div slot="label">Region 2</div>
				<rux-time-region start="2021-01-01T10:00:00Z" end="2021-02-01T12:00:00Z" status="serious">
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
	</div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
const zoom = ref(2)

let intervalOptions = [
	{
		label: "day",
	},
	{
		label: "hour"
	}
]

const currentInterval = ref('day')

</script>

<style scoped></style>