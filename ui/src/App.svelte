<script lang="ts">
    import { getTestCollections } from "./lib/collection_test";
    import Sidebar from "./lib/Sidebar.svelte";
    import { collections } from "./lib/stores";

    collections.set(getTestCollections())

    function createNewCollection() {
        collections.set([...$collections, {
            name: "Test",
            columns: ["id", "created", "deinemom"],
            id: $collections.length + 1,
            rows: [[]]
        }])
    }
</script>

<div class="flex h-screen w-full">
    <Sidebar on:click={createNewCollection} />
    <div class="w-full">
        
    </div>
</div>