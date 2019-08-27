<script>
    import {onMount} from "svelte";

    let svg;
    let width = "100%";
    let height = "100%";

    onMount(() => {
      /* Scale the SVG to fit its contents */
      let svgBoundingBox = svg.getBBox();
      width = svgBoundingBox.x + svgBoundingBox.width + svgBoundingBox.x;
      height = svgBoundingBox.y + svgBoundingBox.height + svgBoundingBox.y;
    });
</script>

<style>
  .regions {
    transform: scale(0.8);
  }

  .map-container {
    display: flex;
    justify-content: center;
  }
</style>

<div class="map-container">
  <svg {width} {height} bind:this={svg}>
    <g class="regions">
      <slot/>
    </g>
  </svg>
</div>