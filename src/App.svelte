<script>
  import MapContainer from "./Components/MapContainer.svelte";
  import MapRegion from "./Components/MapRegion.svelte";
  import Regions from "./Data/Regions.js";
</script>

<MapContainer>
  {#each Regions as { name, svgPath }}
    <MapRegion
      {svgPath}
      fillColour="red"
      strokeColour="white"
      strokeWidth="1px" />
  {/each}
</MapContainer>
