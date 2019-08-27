<script>
  export let name;
  export let svgPath;

  const defaultFillColour = "#333";
</script>

<style>
  .map-region {
    transition: transform 0.2s ease-in;

    fill-opacity: 1;
    stroke: white;
    stroke-opacity: 1;
    stroke-width: 0.5;

    transform: scale(0.7);
  }

  .map-region:hover {
    fill: red;
  }
</style>

<path
      class="map-region"
      id={name}
      fill={defaultFillColour}
      d={svgPath}
      title={name} />
