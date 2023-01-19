<script>
	const leagueRates = [
		{
			leagueName: 'Baseball',
			rates: [
				{
					name: '5U T-Ball',
					rate: '$55.00'
				},
				{
					name: '8U Coach Pitch',
					rate: '$60.00'
				},
				{
					name: '10U Minors',
					rate: '$65.00'
				},
				{
					name: '12U Majors',
					rate: '$75.00'
				},
				{
					name: '15U Babe Ruth',
					rate: '$85.00'
				},
				{
					name: '6U Boys & Girls',
					rate: '$60.00'
				},
				{
					name: '13U Minors',
					rate: '$75.00'
				}
			]
		},
		{
			leagueName: "Softball",
			rates: [
				{
					name: '8U Coach Pitch',
					rate: '$60.00'
				},
				{
					name: '10U Minors',
					rate: '$65.00'
				},
				{
					name: '12U Majors',
					rate: '$75.00'
				},
				{
					name: '15U Juniors',
					rate: '$85.00'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>CYBL Registration Rates</title>
</svelte:head>

<h2 class="font-bold text-xl text-center my-2">2023 Registration Rates</h2>
<p class='text-center'>Age cut off dates are January 1st for girls and May 1st for boys</p>

<div class="flex flex-col items-center">
	{#each leagueRates as item}
        <div class="w-full md:w-5/6 mb-6">
		<div class="text-center bg-yellow-400">{item.leagueName}</div>
		{#each item.rates as rate}
			<div class="flex w-full px-5 py-1 bg-orange-100">
				<div class="w-2/4">{rate.name}</div>
				<div class="w-2/4">{rate.rate}</div>
			</div>
		{/each}
    </div>
	{/each}
</div>
