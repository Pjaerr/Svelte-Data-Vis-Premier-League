<script>
  import { fade } from "svelte/transition";

  import MapContainer from "./Components/MapContainer.svelte";
  import MapRegion from "./Components/MapRegion.svelte";
  import RegionInformation from "./Components/RegionInformation.svelte";
  import Regions from "./Data/Regions.js";

  import { getRegionData } from "./Data/Data.js";

  let activeRegion = "No region selected";
  let title = "Premier League: UK & Ireland Contribution";
</script>

<style>
  .app {
    display: flex;
  }

  .map-container {
    position: fixed;
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
  <h1>{activeRegion}</h1>
  <div class="map-container">
    <MapContainer>
      {#each Regions as { name, svgPath }}
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
