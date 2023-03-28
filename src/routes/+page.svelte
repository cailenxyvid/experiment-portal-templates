<script lang="ts">
    import Settings from "$lib/components/Settings.svelte"

    import { activeTheme } from "$lib/stores/theme"
    import { activeEvent } from "$lib/stores/event"

    const loadTemplate = async (template:string) => {        
        return import('../lib/templates/'+$activeTheme.name + '/' + $activeEvent.status+'.svelte')
    }

    // theme names serve to group templates. each theme should have a template for each event status.    
    let currentTheme = $activeTheme.name // "Default"

    // let event = {
    //     title: "Test Event",
    //     status: "Pending" // Active, Archive, Selfstudy
    // }

    let activeScreen: null | string

    // set the current template (component) based on naming convention; theme name + event state
    $: activeScreen = $activeTheme.name + '/' + $activeEvent.status
</script>

<!-- here we want the most basic app shell styles, everything else should go in the theme component -->
<div class="flex h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[color:var(--theme-background)]">
    <Settings />
    {#if activeScreen}
        {#await loadTemplate(activeScreen) then template}
            <svelte:component this={template.default} event={$activeEvent} />
        {/await}
    {:else}
        Loading
    {/if}
</div>