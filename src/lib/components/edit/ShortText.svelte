<script>
    import {currentElement, editMode} from "$lib/stores/data.js";
    export let data = {text: "", style: ""};
    $: classes="focus:outline-none focus:border focus:border-slate-800 rounded-md "  + Object.values(data.style).join(" ") + ($currentElement == data ? " border-slate-900 border" : " border-none");
</script>

{#if $editMode}
    <input on:click={(e) => {$currentElement = data;}} type="text" class={classes} bind:value={data.text}>
{:else}
    <p class={Object.values(data.style).join(" ")}>{data.text}</p>
{/if}

