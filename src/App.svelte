<script>
  import MapContainer from "./components/MapContainer.svelte";
  import MapRegion from "./components/MapRegion.svelte";
  
  import regions from "./data/regions.js";

  const getRandomColour = () => {
    return `rgba(${Math.floor(Math.random() * (255))}, ${Math.floor(Math.random() * (255))}, ${Math.floor(Math.random() * (255))})`;
  }
</script>

<MapContainer>
  {#each regions as { name, svgPath }}
    <MapRegion {name} {svgPath} fillColour={getRandomColour()} on:click="{() => console.log(name)}"/>
  {/each}
</MapContainer>