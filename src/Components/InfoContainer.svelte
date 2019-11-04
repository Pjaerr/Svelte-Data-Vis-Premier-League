<script>
  export let title;
</script>

<style>
  .info-container {
    display: flex;
    flex-direction: column;

    letter-spacing: 1px;
  }
</style>

<div class="info-container">
  <h1>{title}</h1>
  <div class="body">
    <slot />
  </div>
</div>
