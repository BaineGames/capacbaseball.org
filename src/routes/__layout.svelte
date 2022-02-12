<script>
    import "../app.css";
	import Header from '$lib/Header.svelte';
    import Nav from '$lib/Nav.svelte';
</script>

<Header />

<Nav />

<main class='bg-white text-black'>
    <slot />
</main>