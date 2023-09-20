<template>
	<rux-container>
		<div class="text-3xl">Conflicts (50)</div>
		<p class="p-4">
            This equipment may be allocated to contacts within the timeframe of
            this maintenance job. A list of these contacts is provided below
            after clicking "Calculate Conflicts".
		</p>
          <p class="px-4 pb-4">
            To ensure that these contacts have the equipment they need to
            execute, change the timeframe of the maintenance job using the
            Start/Stop fields, or change the equipment allocated to these
            contacts in the GRM Schedule app.
		</p>


		<div class="overflow-hidden">
			<rux-table>
				<rux-table-header>
					<rux-table-header-row>
						<rux-table-header-cell class="max-w-xs text-ellipsis overflow-hidden">Status</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">IRON</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">Ground Station</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">REV</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">Equipment String</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">State</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">DOY</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">Start Time</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">AOS</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">LOS</rux-table-header-cell>
						<rux-table-header-cell class="max-w-0 text-ellipsis overflow-hidden">Stop Time</rux-table-header-cell>
					</rux-table-header-row>
				</rux-table-header>
				<rux-table-body>
					<rux-table-row v-for="(n, index) in 10">
					<rux-table-cell>
						<div class="flex items-center">
							<rux-status :status="createRow().status" class="m-auto"></rux-status>
						</div>
					</rux-table-cell>
					<rux-table-cell>{{ createRow().iron }}</rux-table-cell>
					<rux-table-cell> {{  createRow().ground  }}</rux-table-cell>
					<rux-table-cell>{{  createRow().rev }}</rux-table-cell>
					<rux-table-cell>{{ createRow().equipment }}</rux-table-cell>
					<rux-table-cell>{{ createRow().state }}</rux-table-cell>
					<rux-table-cell>{{  createRow().DOY }}</rux-table-cell>
					<rux-table-cell >{{  createRow().start }}</rux-table-cell>
					<rux-table-cell>{{ createRow().aos}}</rux-table-cell>
					<rux-table-cell>{{  createRow().los  }}</rux-table-cell>
					<rux-table-cell>{{  createRow().stop }}</rux-table-cell>
					</rux-table-row>
				</rux-table-body>
			</rux-table>
		</div>
	</rux-container>
</template>

<script setup>
import { faker } from '@faker-js/faker';
const meta = {
	tags: ['paragraph text', 'table', 'status']
}
const createRow = () => {
	return {
		status: faker.helpers.arrayElement(['critical', 'normal', 'off', 'standby']),
		iron: `USA-${faker.string.alpha({casing: 'upper', length: { min: 4, max: 4}})}`,
		ground: faker.string.alpha({casing: 'upper', length: { min: 3, max: 3}}),
		rev: faker.number.int({min: 1000, max: 5000}),
		equipment: faker.hacker.abbreviation(),
		state: faker.helpers.arrayElement(['Complete', 'Executing', 'Failed', 'Upcoming']),
		DOY: faker.number.int({min: 200, max: 300}),
		start: new Date(faker.date.anytime()).toTimeString().slice(0, 8),
		aos: new Date(faker.date.anytime()).toTimeString().slice(0, 8),
		los: new Date(faker.date.anytime()).toTimeString().slice(0, 8),
		stop: new Date(faker.date.anytime()).toTimeString().slice(0, 8)
	}
}

</script>

<style scoped>

</style>