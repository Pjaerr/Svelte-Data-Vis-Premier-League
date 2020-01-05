<script>
  import { fade } from "svelte/transition";

  import MapContainer from "./Components/MapContainer.svelte";
  import MapRegion from "./Components/MapRegion.svelte";
  import RegionInformation from "./Components/RegionInformation.svelte";
  import regions from "./Data/regionPaths.js";

  import getRegionData from "./Data/getRegionData.js";

  let activeRegion;
  let title = "Premier League: UK & Ireland Contribution";
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

  .premier-league-info {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    padding: 20px;
  }

  @media (min-width: 1480px) {
    .premier-league-info {
      display: block;
    }
  }

  .none,
  .low,
  .high {
    font-weight: bold;
  }

  .none {
    background-color: rgba(51, 51, 51, 0.5);
  }

  .low {
    background-color: #38003c;
    color: #f5f5f5;
  }

  .high {
    background-color: #00ff85;
  }
</style>

<main class="app">
  {#if activeRegion !== undefined}
    <RegionInformation
      region={getRegionData(activeRegion)}
      onClose={() => {
        activeRegion = undefined;
      }} />
    <!-- {:else}
    <div class="premier-league-info">
      <h1>English Premier League</h1>
      <p>
        The Premier League, often referred to as the English Premier League or
        the EPL outside England, is the top level of the English football league
        system.
      </p>
      <p>
        This is a data visualization on the map of the UK & Ireland that
        highlights which regions have contributed the most to premier league
        title wins based on British & Irish players that took part within
        winning teams.
      </p>
      <p class="key">
        The colour of a region on the map is based on its contribution
        interpolated which can be
        <span class="none">None</span>
        , or interpolated between
        <span class="low">Low</span>
        and
        <span class="high">High</span>
        .
      </p>
    </div> -->
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
