<script>
  import MapContainer from "./components/MapContainer.svelte";
  
  import regions from "./data/regions.js";

  const getContributionColour = contribPercentage => {
    const contribution = (contribPercentage / 100) * 255 + 0;

    return `rgba(0, ${contribution}, 0, 1.0)`;
  };
</script>
<!--

  We can probably use a <slot> inside of the <MapContainer/> element then put the foreach loop that
  creates the <MapRegion/> components in the App.svelte component so they can be interacted with more easily.

  Essentially keeping <MapContainer/> as just a container.

-->
<MapContainer {regions}/>
