<script>
  import {draw, fade} from "svelte/transition";

  export let name;
  export let svgPath;
  export let fillColour = "#333";
  export let strokeColour = "#333"
  export let strokeWidth = "1px";
  export let drawSpeed = 1000;

  let startingFillColour = "#fff";
  let startingStrokeColour = "#333"
</script>

<style>
  .map-region {
    transition: all 0.2s ease-in;
  }

  .map-region:hover {
    fill: #fff;
  }
</style>

<path
    transition:draw="{{duration: drawSpeed}}"
    on:introend={() => {startingFillColour = fillColour; startingStrokeColour = strokeColour;}}
    on:click
    class="map-region"
    id={name}
    stroke={startingStrokeColour}
    fill={startingFillColour}
    style="stroke-width: {strokeWidth};"
    d={svgPath}
    title={name} />