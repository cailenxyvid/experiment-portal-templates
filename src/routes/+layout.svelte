<script>
    import "../app.css";

    // this would be pulled from DB
    import { activeTheme } from "$lib/stores/theme";

</script>

<!-- I do not love this, but it works. 
CSS variables need to be set on the style attr of an actual element. The vars will be available to any nested elements,
and can be used in scoped (component or +page) <style> blocks and also in Tailwind like so: 
    bg-[color:var(--theme-primary)]
-->
<div id="shell" style="
    --theme-primary: {$activeTheme.primary}; 
    --theme-accent: {$activeTheme.accent};
    --theme-background: {$activeTheme.background}; 
    --theme-surface: {$activeTheme.surface};
    ">    
<slot />
</div>