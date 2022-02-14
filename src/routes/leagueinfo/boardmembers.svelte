<script>
	const members = [
		{ position: 'President', name: 'Jennifer Kluger', phone: '(989)621-6716', email: '' },
		{ position: 'Vice President', name: 'Terry Geliske', phone: '(301)351-1446', email: '' },
		{
			position: 'Secretary',
			name: 'Tina Howard',
			phone: '(810)459-3753',
			email: 'tmhoward6@yahoo.com'
		},
		{
			position: 'Treasurer',
			name: 'Mary Rilley',
			phone: '(810)650-9744',
			email: 'maryrilley1@aol.com'
		},
		{
			position: 'Fundraising',
			name: 'Mary Rilley',
			phone: '(810)650-9744',
			email: 'maryrilley1@aol.com'
		},
		{
			position: 'Equipment',
			name: 'Barry Geliske',
			phone: '(586)215-9596',
			email: 'thomemi@frontier.com'
		}
	];
</script>

<svelte:head>
	<title>CYBL Board Members</title>
</svelte:head>

<h2 class='font-bold text-xl text-center my-2'>Board Members</h2>

<div class="block md:hidden text-left">
    {#each members as item}
    <div class='my-2 text-center'>
        <p class='font-bold underline'>{item.position}</p>
        <p>{item.name}</p>
        <p>{item.phone}</p>
        <p>{item.email}</p>
    </div>
    {/each}
</div>

<div class="flex justify-center mb-2">

	<table class="hidden table-fixed md:block">
		<thead>
			<tr class="text-left">
				<th>Position</th>
				<th>Name</th>
				<th>Phone</th>
				<th>Email</th>
			</tr>
		</thead>
		<tbody>
			{#each members as item}
				<tr>
					<td class='pr-2'>{item.position}</td>
					<td class='pr-2'>{item.name}</td>
					<td class='pr-2'>{item.phone}</td>
					<td class='pr-2'>{item.email}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
