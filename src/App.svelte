<script>
  import MapContainer from "./components/MapContainer.svelte";
  import MapRegion from "./components/MapRegion.svelte";

  import regions from "./data/regions.js";

  const getRandomColour = () => {
    return `rgba(0, ${Math.floor(Math.random() * (255) + 150)}, 0, 1)`;
  }

  let regionIsActive = false;
  let activeRegionName;

  const setActiveRegion = (name) => {
    activeRegionName = name;
    regionIsActive = true;
  }
</script>

<style>
  .page-container {
    display: flex;
  }

  .info-container {
    padding-top: 20px;
    padding-left: 40px;
    flex: 2; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .map-container {
    display: flex;
    justify-content: flex-start;
    flex: 2;
  }
</style>

<div class="page-container">
  <div class="info-container">
  <h1>{regionIsActive ? activeRegionName : "Map Map Test"}</h1>
  <p>Minim sit ex minim labore mollit amet pariatur ad magna. Excepteur consectetur cillum incididunt enim ipsum anim in minim est laboris. Elit sit enim sint est deserunt. Consequat elit cillum commodo dolore excepteur magna veniam in. Consectetur ut nulla cupidatat do minim officia tempor labore veniam excepteur est fugiat deserunt ullamco. Qui ut pariatur do ex eu enim eiusmod reprehenderit duis.</p>
  </div>
  <div class="map-container">
    <MapContainer>
        {#each regions as { name, svgPath }}
            {#if name === activeRegionName}
              <MapRegion {name} {svgPath} drawSpeed={1000} strokeWidth="4px" fillColour="#f5f5f5" on:click={() => {regionIsActive = false; activeRegionName = ""}}/>
              {:else}
              <MapRegion {name} {svgPath} drawSpeed={1000} fillColour={getRandomColour()} on:click="{() => setActiveRegion(name)}"/>
            {/if}
        {/each}
    </MapContainer>
  </div>
</div>