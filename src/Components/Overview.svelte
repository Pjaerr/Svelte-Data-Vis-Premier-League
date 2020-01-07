<script>
  import { blur } from "svelte/transition";
</script>

<style>
  .container {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 300px;
    padding: 20px;
  }

  @media (min-width: 940px) {
    .container {
      display: block;
    }
  }

  @media (min-width: 1100px) {
    .container {
      max-width: 400px;
    }
  }

  @media (min-width: 1500px) {
    .container {
      max-width: 600px;
    }
  }

  .none,
  .low,
  .high {
    font-weight: bold;
  }

  .none {
    background-color: rgba(51, 51, 51, 0.5);
  }

  .low {
    background-color: #38003c;
    color: #f5f5f5;
  }

  .high {
    background-color: #00ff85;
  }
</style>

<div class="container" transition:blur|local>
  <h1>English Premier League</h1>
  <p>
    The Premier League, often referred to as the English Premier League or the
    EPL outside England, is the top level of the English football league system.
  </p>
  <p>
    This is a data visualization on the map of the UK & Ireland that highlights
    which regions have contributed the most to premier league title wins based
    on British & Irish players that took part within winning teams.
  </p>
  <p class="key">
    The colour of a region on the map is based on its contribution which can be
    <span class="none">None</span>
    , or interpolated between
    <span class="low">Low</span>
    and
    <span class="high">High</span>
    .
  </p>
</div>
