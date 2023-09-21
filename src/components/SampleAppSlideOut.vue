<template>
	<rux-container>
		<header slot="header" class="flex items-center">
			<rux-classification-marking tag classification="secret" class="mr-2"></rux-classification-marking>
			Container title
		</header>
		<section class="p-4">

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				<label for="">Select</label>
				<rux-select class="col-span-2">
					<rux-option value="Select menu" label="Select menu"></rux-option>
				</rux-select>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
				<label for="">Input</label>
				<rux-input class="" type="text" value="Global input" disabled>
				</rux-input>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
				<label for="">Select 2</label>
				<div class="col-span-2">

					<rux-select class="w-full" help-text="Help text">
						<rux-option value="Select menu" label="Select menu 2"></rux-option>
					</rux-select>
				</div>
			</div>

			<div class="flex flex-col md:grid md:grid-cols-3 gap-4 mt-4">
				<label for="">Input</label>
				<div class="col-span-2 flex gap-4">
					<rux-input class="" type="text" value="Global input">
					</rux-input>
					<rux-button icon="access-time" class="" icon-only secondary></rux-button>
					<rux-button icon="access-time" class="opacity-0" icon-only></rux-button>
				</div>
				<div class="col-start-2 col-span-2 flex gap-4">
					<rux-input class="" type="text" value="Global input">
					</rux-input>
					<rux-button icon="add" class="" icon-only secondary></rux-button>
					<rux-button icon="remove" class="" icon-only secondary></rux-button>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
				<label for="">Check Item *</label>
				<div class="col-span-2">

					<rux-checkbox checked></rux-checkbox>
				</div>
			</div>
			
		</section>
		<footer slot="footer">
			<div class="flex items-center">
				<rux-button borderless>Restore to defaults</rux-button>
				<div class="ml-auto">
					<rux-button secondary class="mr-2">Cancel</rux-button>
					<rux-button>Apply</rux-button>
				</div>
			</div>

			
		</footer>
		
	</rux-container>
</template>

<script setup>

</script>

<style></style>