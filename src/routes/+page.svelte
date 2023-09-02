
<script>
    import {sitedata,editMode} from "$lib/stores/data.js";
    import EditLongText from "../lib/components/edit/EditLongText.svelte";
    import ShortText from "../lib/components/edit/ShortText.svelte";
</script>

<ShortText bind:data={$sitedata.frontpage.header}></ShortText>
<EditLongText bind:data={$sitedata.frontpage.preamble}></EditLongText>
