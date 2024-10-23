<script lang="ts">
    import { slide } from "svelte/transition";
    import { getTestCollections } from "./lib/collection_test";
    import CollectionHeader from "./lib/components/CollectionHeader.svelte";
    import Sidebar from "./lib/components/Sidebar.svelte";
    import { collections, openSettings, selectedCollection } from "./lib/stores";
    import Checkbox from "./lib/components/Checkbox.svelte";
    import type { Row } from "./lib/types";

    let selectedRows: Row[] = []
    let selectedAll = false
    let unique = [{}]

    function restart() {
        unique = [{}]
    }

    collections.set(getTestCollections())
    selectedCollection.set($collections[0])

    // function createNewCollection() {
    //     collections.set([...$collections, {
    //         name: "Test",
    //         columns: ["id", "created", "deinemom"],
    //         id: $collections.length + 1,
    //         rows: []
    //     }])
    // }

    function refreshCollection() {
        collections.set(getTestCollections())
    }

    function selectAllRows() {
        if (selectedAll) {
            selectedRows = []
            selectedAll = false
            restart()
            return
        }
        selectedRows = $selectedCollection.rows
        selectedAll = true
        restart()
    }

    function addSelectedRow(row: Row) {
        selectedRows.push(row)
        restart()
    }

    function removeSelectedRow(row: Row) {
        selectedRows = selectedRows.filter(currentRow => currentRow[0] !== row[0])
        restart()
    }

    function resetSelect() {
        selectedRows = []
        selectedAll = false
    }
</script>

{#if $openSettings}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click={() => openSettings.set(false)} class="w-full h-full z-10 absolute bg-black bg-opacity-35"></div>
    <div transition:slide={{axis: "x"}} class="h-full w-1/3 z-50 bg-white absolute border-l right-0 shadow">

    </div>
{/if}

<div class="flex h-screen w-full">
    <Sidebar on:click={resetSelect}/>
    <div class="w-full flex flex-col">
        <CollectionHeader on:click={refreshCollection}/>
        <div class="w-full h-[87vh] max-h-[87vh] overflow-y-auto">
            <table class="table-fixed w-full relative">
                <thead class="border-b">
                    {#key unique}
                        <th class="w-20 sticky top-0 pt-1.5 bg-white"><Checkbox checked={selectedAll} on:click={selectAllRows}/></th>
                    {/key}
                    {#each $selectedCollection.columns as column}
                        <th class="font-medium sticky top-0 py-3 text-left text-neutral-500 bg-white">{column}</th>
                    {/each}
                </thead>
                <tbody>
                    {#key unique}
                        {#each $selectedCollection.rows as row}
                            <tr class="hover:bg-neutral-200 transition border-b hover:cursor-pointer">
                                {#if selectedRows.includes(row)}
                                    <th class="w-20 pt-1"><Checkbox on:click={() => removeSelectedRow(row)} checked={true}/></th>
                                {:else}
                                    <th class="w-20 pt-1"><Checkbox on:click={() => addSelectedRow(row)} /></th>
                                {/if}
                                {#each row as cell}
                                    <td class="py-4">{cell}</td>
                                {/each}
                            </tr>
                        {/each}
                    {/key}
                </tbody>
            </table>
        </div>
        <p class="ml-6 text-xs mt-3 text-neutral-500">Total found: {$selectedCollection.rows.length}</p>
    </div>
</div>