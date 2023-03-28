<script lang="ts">
    import { activeEvent } from "$lib/stores/event"
    import { activeTheme } from "$lib/stores/theme"

    let showPane = false
</script>

<div class="absolute right-3 top-3 z-10">
    <button class="text-4xl  absolute right-0" on:click={()=>{ showPane = !showPane}}>
        <i class="fa fa-gear"></i>
    </button>
    {#if showPane}
    <div class="bg-slate-300 rounded-sm p-6 space-y-3">
        <h2 class="text-xl">Settings</h2>
        <div>
            Event title
            <input type="text" bind:value={$activeEvent.title}>
        </div>
        <div>
            Event date
            <input type="date" bind:value={$activeEvent.start}>
        </div>
        <div>
            Event status
            <select bind:value={$activeEvent.status}>
                <option value="Pending">Pending</option>
                <option value="Active">Active</option>
            </select>
        </div>
        <h2 class="text-xl">Theme</h2>
        <div>
            Template group
            <select bind:value={$activeTheme.name}>
                <option value="Default">Default</option>
                <option value="PWC-Tax-Spring2023">PWC-Tax-Spring2023</option>
            </select>
        </div>
        <div>
            Show Countdown Clock
            <input type="checkbox" bind:checked={$activeTheme.showCountDown}>
        </div>
        <div class="mt-8">
            Primary
            <input type="color" bind:value={$activeTheme.primary} style="height: 50px;">
            Accent
            <input type="color" bind:value={$activeTheme.accent} style="height: 50px;">
            Background
            <input type="color" bind:value={$activeTheme.background} style="height: 50px;">
            Surface
            <input type="color" bind:value={$activeTheme.surface} style="height: 50px;">
        </div>
    </div>
    {/if}
</div>