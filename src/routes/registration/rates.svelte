<script>
	const leagueRates = [
		{
			leagueName: 'T-Ball - Coach Pitch',
			rates: [
				{
					name: 'T-Ball Mixed',
					ages: '(Ages 5 or 6 on May 1st)',
					rate: '$55.00'
				},
				{
					name: 'Coach Pitch Girls',
					ages: '(Ages 7 or 8 on January 1st)',
					rate: '$60.00'
				},
				{
					name: 'Coach Pitch Boys',
					ages: '(Ages 7 or 8 on May 1st)',
					rate: '$60.00'
				}
			]
		},
		{
			leagueName: "Boy's Baseball",
			rates: [
				{
					name: 'Minors',
					ages: '(Ages 9 or 10 on May 1st)',
					rate: '$65.00'
				},
				{
					name: 'Majors',
					ages: '(Ages 11 or 12 on May 1st)',
					rate: '$75.00'
				},
				{
					name: 'Babe Ruth Jr.',
					ages: '(Ages 13 or 14 on May 1st)',
					rate: '$85.00'
				},
				{
					name: 'Babe Ruth Sr.',
					ages: '(Ages 15 to 17 on May 1st)',
					rate: '$85.00'
				}
			]
		},
		{
			leagueName: "Girl's Softball",
			rates: [
				{
					name: 'Minors',
					ages: '(Ages 9 or 10 on January 1st)',
					rate: '$65.00'
				},
				{
					name: 'Majors',
					ages: '(Ages 11 or 12 on May 1st)',
					rate: '$75.00'
				},
				{
					name: 'Juniors',
					ages: '(Ages 13 to 15 on May 1st)',
					rate: '$85.00'
				}
			]
		}
	];
</script>

<svelte:head>
	<title>CYBL Registration Rates</title>
</svelte:head>

<h2 class="font-bold text-xl text-center my-2">Registration Rates</h2>

<div class="flex flex-col items-center">
	{#each leagueRates as item}
        <div class="w-full md:w-5/6 mb-6">
		<div class="text-center bg-yellow-400">{item.leagueName}</div>
		{#each item.rates as rate}
			<div class="flex w-full px-5 py-1 bg-orange-100">
				<div class="w-1/4">{rate.name}</div>
				<div class="w-2/4">{rate.ages}</div>
				<div class="w-1/4">{rate.rate}</div>
			</div>
		{/each}
    </div>
	{/each}
</div>
