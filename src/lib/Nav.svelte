<script>
    const navItems = [
      { label: "Home", href: "/" },
      { label: "League Info", href: "/leagueinfo" },
      { label: "Registration", href: "/registration" },
      { label: "Allstars", href: "/allstars" },
      { label: "Sponsors", href: "/sponsors" },
      { label: "Coaches Corner", href: "/coachescorner" },
        { label: "Contact Us", href: "mailto:capacyouthbaseball@gmail.com" }
    ];

    let showNav = false;
    let displayBlock = 'hidden';

    function toggleNav() {
      showNav = !showNav;
      if(showNav){
        displayBlock = 'block';
      } else {
        displayBlock = 'hidden';
      }
    }

</script>

<ul class='md:flex justify-center bg-yellow-400'>
    <li class="px-4 py-1 hover:bg-yellow-300 md:py-2 md:hidden font-semibold text-black text-center border-b-2 md:border-b-0 md:border-r-2 border-black md:last:border-none">
        <span on:click={toggleNav} class='flex align-center justify-center h-full cursor-pointer'>Menu</span>
    </li>
    {#each navItems as item}
        <li class="{displayBlock} md:block px-4 py-1 hover:bg-yellow-300 md:py-2 font-semibold text-black text-center border-b-2 md:border-b-0 md:border-r-2 border-black md:last:border-none">
            <a class='flex align-center justify-center h-full' href={item.href}>{item.label}</a>
        </li>
    {/each}
</ul>