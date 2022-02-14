<script>
	import CoachesCornerNav from "$lib/CoachesCornerNav.svelte";
</script>
<div class="flex flex-col md:flex-row">
    <div class='md:block md:w-1/4'>
        <CoachesCornerNav />
    </div>
    
    
    <main class='md:w-3/4'>
        <slot />
    </main>

</div>
