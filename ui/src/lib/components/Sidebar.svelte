<script>
    import { collections, selectedCollection } from "../stores";
</script>

<div class="border-r min-w-56 lg:min-w-64 h-full flex flex-col items-center">
    <h1 class="mt-4 text-lg font-semibold">MiniBase</h1>
    <div class="w-full px-6 mt-4 border-t py-1">
        <h2 class="text-center text-neutral-400 mt-2">Collections</h2>
    </div>
    <div class="flex flex-col mt-4 w-full px-6 gap-y-3">
        {#each $collections as collection}
            <button on:click title={collection.name} on:click={() => selectedCollection.set(collection)} class="rounded w-full text-center py-2 flex items-center px-2 {$selectedCollection.name.toLowerCase() === collection.name.toLowerCase() ? "bg-neutral-200 text-black" : "text-neutral-600"} hover:bg-neutral-200 transition">
                {#if collection.name.toLowerCase() === "users" || collection.name.toLowerCase() === "user"}
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /><path d="M21 21v-2a4 4 0 0 0 -3 -3.85" /></svg>
                {:else}
                <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 19l2.757 -7.351a1 1 0 0 1 .936 -.649h12.307a1 1 0 0 1 .986 1.164l-.996 5.211a2 2 0 0 1 -1.964 1.625h-14.026a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2h4l3 3h7a2 2 0 0 1 2 2v2" /></svg>
                {/if}
                <h1 class="ml-4 truncate max-w-28">{collection.name}</h1>
            </button>
        {/each}
        <button on:click class="w-full rounded border-2 border-black py-2 hover:scale-105 transition">+ New collection</button>
    </div>
</div>