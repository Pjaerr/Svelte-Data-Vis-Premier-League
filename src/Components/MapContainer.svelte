<script>
  import { onMount } from "svelte";

  let svg;
  let width = "100%";
  let height = "100%";

  onMount(() => {
    let svgBoundingBox = svg.getBBox();

    width = svgBoundingBox.x + svgBoundingBox.width + svgBoundingBox.x;
    height = svgBoundingBox.y + svgBoundingBox.height + svgBoundingBox.y;
  });
</script>

<svg
  viewBox="0 0 {width}
  {height}"
  {width}
  height={window.innerHeight}
  bind:this={svg}>
  <g class="regions">
    <slot />
  </g>
</svg>
