# Xyvid Portal Template + Brand Theme experiment


## Theme

This approach leverages CSS variables to make DB/endpoint results (mocked up in local Svelte stores here) accesible to Tailwind and scoped Svelte style blocks. 

#### See `/src/routes/+layout.svelte`

### Usage

#### Tailwind

`bg-[color:var(--theme-background)]`

#### Style blocks

`background-color: var(--theme-primary);`

## Template

This approach loads template components on demand, based on the selected Template Group and current event status.
`import('../lib/templates/'+$activeTheme.name + '/' + $activeEvent.status+'.svelte')`

Two notable downsides:
* Poor DX; loading components with a derived string disables HMR for the component being dynamically loaded (nested components still refresh correctly).
  * It is possible this can be solved with additional Vite/webpack settings or plugins
* Possible deployment challenges 
  * Vercel breaks. It looks this issue has been addressed for [similar](https://github.com/sveltejs/kit/issues/3308) use cases and may not even be an issue on whatever build environment we use, but worth noting
