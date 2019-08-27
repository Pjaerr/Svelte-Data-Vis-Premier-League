<script>
    import MapRegion from './MapRegion.svelte';

    export let regions;
</script>

<svg
  width="100%"
  height="100%"
  >
    {#each regions as { name, svgPath }}
        <MapRegion {name} {svgPath}/>
    {/each}
</svg>