<script>
    import {currentElement} from "$lib/stores/data.js";
    import {sitedata, editMode} from "$lib/stores/data.js";
    import { onMount } from "svelte";

    let bold = false; 
    let italic = false;

    $: italic = setItalic($currentElement);
    $: bold = setBold($currentElement);
   
    function setBold() {
        if(!$currentElement.style) return false;
        return $currentElement.style["fontWeight"] == "font-bold";
    }
    function setItalic() {
        if(!$currentElement.style) return false;
        return $currentElement.style["fontStyle"] == "italic";
    }

</script>


<div class="sticky top-0 flex flex-col items-center">
    <div class="container flex justify-between gap-6 py-2">
        <div class="flex gap-6">
            <h1>Home</h1>
            <a href="#">Page 1</a>
            <a href="#">Page 2</a>
            <a href="#">Page 3</a>
        </div>
    {#if !$editMode}
        <button on:click={() => {$editMode = true;}} class="rounded-md bg-slate-800 px-4 py-1 text-white">Edit page</button>
    {/if}
    </div>
    {#if $editMode}
    <div class="container flex justify-center gap-4">
        <button class={"rounded-md border transition-all ease-out hover:bg-slate-800 hover:text-white border-slate-800 px-4 py-1 font-bold " + (bold ? "bg-slate-900 text-white" : "")}
        on:click={() => {
            if(!$currentElement.style) return;
            bold = !bold;
            $currentElement.style["fontWeight"] = bold ? "font-bold" : "";
        }}>
            B
        </button>
        <button class={"rounded-md border transition-all ease-out hover:bg-slate-800 hover:text-white border-slate-800 px-4 py-1 italic " + (italic ? " bg-slate-900 text-white" : "")}
        on:click={() => {
            if(!$currentElement.style) return;
            italic = !italic;
            $currentElement.style["fontStyle"] = italic ? "italic" : "";
        }}>
        I
        </button>
        <input class="rounded-md border border-slate-800 p-2 w-16" type="number" />
        <button on:click={() => {$editMode = false;}} class="rounded-md bg-green-700 px-4 py-1 text-white">Save changes</button>
        <button on:click={() => {$editMode = false;}} class="rounded-md bg-slate-800 px-4 py-1 text-white">Cancel</button>
    </div>
    {/if}
</div>


