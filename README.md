# Xyvid Portal Template + Brand Theme experiment


## Theme

This approach leverages CSS variables to make DB/endpoint results (mocked up in local Svelte stores here) accesible to Tailwind and scoped Svelte style blocks. 

Functionally this appears to be reliable, but stuffing values into a style attribute feels a bit like code smell and the syntax while using the variables could be cleaner. One possible alternative would be to do the work of generating theme colors and reusable classes (ie: `bg-primary`) in a seperate endpoint that returns a standard CSS file we can import from index.html with no further magic.

@JoshuaXyvid created a [POC](https://github.com/xyvid/JWT-Login-Redis-POC/blob/main/Controllers/CSSConfigController.cs) for this option. 

Another option would be deploying an instance of the portal for each client (which has additional benefits and downsides) and configuring Tailwind with their brand colors.

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
