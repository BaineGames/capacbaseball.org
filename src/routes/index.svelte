<script>
	import Divisions from '$lib/Divisions.svelte';
	import News from '$lib/News.svelte';
</script>

<svelte:head>
	<title>Capac Youth Baseball & Softball League Website</title>
</svelte:head>

<div class="flex flex-col md:flex-row">
	<div class="md:w-3/4 p-3">
		<h1 class="text-2xl font-bold">Welcome to Capac Youth Baseball Leauge</h1>
		<p class="my-3">
			The objective of CYBL should be to implant firmly in the children of the community the ideals
			of good sportsmanship, honesty, loyalty, courage and respect for authority, so that they may
			be well-adjusted, stronger and happier children and will grow to be good, decent, healthy and
			trustworthy citizens.
		</p>
		<p class="my-3">CYBL organization is classified as a 501 (c) (3) not for profit organization</p>
		<p class="my-3">
			CYBL Annually hosts an ALL-STAR Tournament at our sporting complex consisting of 9 baseball /
			softball diamonds
		</p>

		<Divisions />
	</div>

	<div class="md:block md:w-1/4">
		<News />
	</div>
</div>
