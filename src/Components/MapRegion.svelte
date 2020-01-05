<script>
  import { draw } from "svelte/transition";

  export let svgPath;
  export let fillColour = "#333";
  export let strokeColour = "#fff";
  export let strokeWidth = "1px";

  let transitionEnded = false;
</script>

<style>
  .path {
    transition: fill 0.5s ease;
  }

  .path:hover {
    fill: #333;
  }
</style>

<path
  on:click
  transition:draw={{ duration: 1500 }}
  on:introend={() => (transitionEnded = true)}
  d={svgPath}
  class="path"
  fill={transitionEnded ? fillColour : strokeColour}
  stroke={transitionEnded ? strokeColour : fillColour}
  style="stroke-width: {strokeWidth}" />
