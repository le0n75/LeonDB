<script>
    export let checked = false;
</script>

<button on:click on:click={() => checked = !checked} class="w-5 mx-auto flex justify-center items-center h-5 {checked ? "bg-green-500" : "border-neutral-300 bg-white hover:border-neutral-400 border-2"} rounded transition">
    {#if checked}
        <svg  xmlns="http://www.w3.org/2000/svg"  width="18"  height="18"  viewBox="0 0 24 24"  fill="none"  stroke="white"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
    {/if}
</button>