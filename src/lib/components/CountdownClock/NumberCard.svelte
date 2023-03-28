<script lang="ts">
    export let number: number;
    export let label: string | undefined;
    export let autohide: boolean = true;
</script>

{#if number > 0 || !autohide}
<span class="border-primary-700 variant-filled-secondary chip">
    <span class="text-2xl">{number.toLocaleString()}</span>
    <span class="text-xl">{label}</span>
</span>
{/if}