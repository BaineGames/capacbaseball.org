<script>
	import RegistrationNav from "$lib/RegistrationNav.svelte";
</script>
<div class="flex flex-col md:flex-row">
    <div class='md:block md:w-1/4'>
        <RegistrationNav />
    </div>
    
    
    <main class='md:w-3/4'>
        <slot />
    </main>

</div>
