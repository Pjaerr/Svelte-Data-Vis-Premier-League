<script>
  import { draw } from "svelte/transition";

  export let svgPath;
  export let fillColour = "#333";
  export let strokeColour = "#fff";
  export let strokeWidth = "1px";

  let animationEnded = false;
</script>

<style>
  .path {
    transition: fill 0.3s ease-in;
  }
</style>

<path
  d={svgPath}
  class="path"
  transition:draw={{ duration: 2000 }}
  on:introend={() => {
    animationEnded = true;
  }}
  fill={animationEnded ? fillColour : strokeColour}
  stroke={animationEnded ? strokeColour : fillColour}
  style="stroke-width: {strokeWidth}" />
