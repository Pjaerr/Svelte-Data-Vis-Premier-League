<script>
  import { fade } from "svelte/transition";

  import MapContainer from "./Components/MapContainer.svelte";
  import MapRegion from "./Components/MapRegion.svelte";
  import InfoContainer from "./Components/InfoContainer.svelte";
  import GeneralInformation from "./Components/GeneralInformation.svelte";
  import RegionInformation from "./Components/RegionInformation.svelte";
  import Regions from "./Data/Regions.js";

  import { NUMBER_OF_PLAYERS } from "./Data/Data.js";

  let activeRegion;
  let title = "Premier League: UK & Ireland Contribution";
</script>

<style>
  .app {
    display: flex;
  }

  .left-panel {
    padding-left: 40px;
    max-width: 50%;
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .right-panel {
    display: flex;
    justify-content: center;
    flex: 2;
  }

  .map-container {
    position: fixed;
  }

  @media (max-width: 860px) {
    .app {
      flex-direction: column;
    }

    .left-panel {
      max-width: 100%;
      padding-left: 0;
    }

    .right-panel {
      max-width: 100%;
    }

    .map-container {
      position: relative;
    }
  }
</style>

<main class="app">
  <div class="left-panel">
    <div class="info-container" transition:fade={{ duration: 1000 }}>
      <InfoContainer title={activeRegion ? activeRegion : title}>
        {#if activeRegion}
          <RegionInformation region={activeRegion} />
        {:else}
          <GeneralInformation />
        {/if}
      </InfoContainer>
    </div>
  </div>
  <div class="right-panel">
    <div class="map-container">
      <MapContainer>
        {#each Regions as { name, svgPath }}
          <MapRegion
            on:click={() => {
              activeRegion = name;
            }}
            {svgPath}
            fillColour="#333"
            strokeColour="white"
            strokeWidth="1px" />
        {/each}
      </MapContainer>
    </div>
  </div>
</main>
