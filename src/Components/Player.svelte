<script>
  export let name;
  export let seasons;
</script>

<style>
  .container {
    width: 100%;
    background-color: #f5f5f5;
    margin-bottom: 5px;
  }

  .name {
    margin-bottom: 10px;
    font-weight: bold;
  }
</style>

<div class="container">
  <p class="name">{name}</p>
  {#each seasons.reverse() as { year, team, appearances }}
    <p>
      <b>{year}</b>
      with
      <b>{appearances}</b>
      appearances for
      <b>{team}</b>
    </p>
  {/each}
</div>
