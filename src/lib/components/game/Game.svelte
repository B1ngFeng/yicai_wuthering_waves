<!--/* File: src/lib/components/game/Game.svelte */-->
<script lang="ts">
    import {GameMode, } from "$lib/types";
    import type {PuzzleDataType, } from "$lib/types";
    import PlayCore from "$lib/components/game/PlayCore.svelte";
    import DemoCore from "$lib/components/game/DemoCore.svelte";
    import SolutionCore from "$lib/components/game/SolutionCore.svelte";
    import Editor from "$lib/components/game/Editor.svelte";
    import PlayRandom from "$lib/components/game/PlayRandom.svelte";

    type Props = {
        data: PuzzleDataType;
        mode: GameMode;
    }
    let props: Props = $props();

    let data = $derived(props.data);
    let mode = $derived(props.mode);
</script>



{#if mode === GameMode.PLAY_TRAVERSE}
    <PlayCore
            data={data}
    ></PlayCore>
{:else if mode === GameMode.PLAY_SIMPLE}
    <PlayCore
            data={data}
    ></PlayCore>
{:else if mode === GameMode.PLAY_RANDOM}
    <PlayRandom />
{:else if mode === GameMode.EDIT}
    <Editor
            data={data}
    >
    </Editor>

{:else if mode === GameMode.SOLUTION}
    <SolutionCore
            data={data}
    ></SolutionCore>
{:else}
{/if}
