<script>
  import { onMount } from "svelte";

  let svg;
  let width = "0";
  let height = "0";

  onMount(() => {
    let svgBoundingBox = svg.getBBox();

    width = svgBoundingBox.x + svgBoundingBox.width + svgBoundingBox.x;
    height = svgBoundingBox.y + svgBoundingBox.height + svgBoundingBox.y;
  });
</script>

<svg
  viewBox="0 0 {width}
  {height}"
  height={window.innerHeight - 10}
  bind:this={svg}>
  <g class="regions">
    <slot />
  </g>
</svg>
