<script>
  export let svgPath;
  export let fillColour = "#333";
  export let strokeColour = "#fff";
  export let strokeWidth = "1px";
</script>

<path
  d={svgPath}
  fill={fillColour}
  stroke={strokeColour}
  style="stroke-width: {strokeWidth}" />
