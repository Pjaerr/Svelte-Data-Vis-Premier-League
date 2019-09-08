<script>
  import MapContainer from "./Components/MapContainer.svelte";
  import Regions from "./Data/Regions.js";
</script>

<MapContainer>
  {#each Regions as { name, svgPath }}
    <path d={svgPath} />
  {/each}
</MapContainer>
