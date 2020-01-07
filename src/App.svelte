<script>
  //Data
  import regions from "./Data/regionPaths.js";
  import getRegionData from "./Data/getRegionData.js";

  //Components
  import MapContainer from "./Components/MapContainer.svelte";
  import MapRegion from "./Components/MapRegion.svelte";
  import RegionInformation from "./Components/RegionInformation.svelte";
  import Overview from "./Components/Overview.svelte";

  let activeRegion;
</script>

<style>
  .app {
    display: flex;
  }

  .map-container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 860px) {
    .app {
      flex-direction: column;
    }

    .map-container {
      position: relative;
    }
  }
</style>

<main class="app">
  {#if activeRegion}
    <RegionInformation
      region={getRegionData(activeRegion)}
      onClose={() => {
        activeRegion = undefined;
      }} />
  {:else}
    <Overview />
  {/if}
  <div class="map-container">
    <MapContainer>
      {#each regions as { name, svgPath }}
        <MapRegion
          on:click={() => {
            activeRegion = name;
          }}
          {svgPath}
          fillColour={activeRegion === name ? '#333' : getRegionData(name).colour}
          strokeColour="white"
          strokeWidth="1px" />
      {/each}
    </MapContainer>
  </div>
</main>
