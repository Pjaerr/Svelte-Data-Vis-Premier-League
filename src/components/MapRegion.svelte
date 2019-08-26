<script>
  export let name;
  export let colour;
  export let width;
  export let height;
  export let posX;
  export let posY;
  export let svgPath;
</script>

<style>
  .map-region {
    position: absolute;
  }

  .map-region > svg {
    transition: transform 0.2s ease-in;
  }

  .map-region > svg:hover {
    transform: scale(1.5);
  }
</style>

<div class="map-region" style="left:{posX}%; top:{posY}%;">
  <svg
    class="map-region-svg"
    width="{width}px"
    height="{height}px"
    viewBox="0 0 {width}
    {height}"
    xmlns="http://www.w3.org/2000/svg">
    <path fill={colour} d={svgPath} transform="translate({width * 0.5})" />
  </svg>
</div>
