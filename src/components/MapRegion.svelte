<script>
  import {draw} from "svelte/transition";

  export let name;
  export let svgPath;
  export let hasParentSvg = true;
  export let fillColour = "#333";

  let startingFillColour = "#fff";
  let startingStrokeColour = "#333"
</script>

<style>
  .map-region {
    transition: all 0.2s ease-in;
  }

  .map-region:hover {
    fill: red;
  }
</style>

<path
    transition:draw="{{duration: 1000}}"
    on:introend={() => {startingFillColour = fillColour; startingStrokeColour = "#fff"}}
    on:click
    class="map-region"
    id={name}
    stroke={startingStrokeColour}
    fill={startingFillColour}
    d={svgPath}
    title={name} />