<script>
  /**
   * {
        name: string,
        players: [
            {
                name: string,
                seasons: [
                    {
                        year: string,
                        team: string,
                        appearances: number
                    }
                ]
            }
        ],
        appearances: number
    }
   * 
   * */
  export let region;
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
  }

  .year {
    font-weight: bold;
    text-decoration: underline;
  }

  .season {
    display: flex;
    flex-direction: column;
  }

  .season > div {
    display: flex;
  }

  .label {
    font-weight: bold;
  }

  .players-container {
    display: flex;
    flex-wrap: wrap;
  }

  .player {
    outline: 1px solid black;
    width: 300px;
  }
</style>

<div class="container">
  <h1>{region.name}</h1>

  <p>
    Number of appearances by players from this region during winning seasons:
    <b>{region.appearances}</b>
  </p>

  <h2 class="players-title">Players</h2>
  <div class="players-container">
    {#each region.players as { name, seasons }}
      <div class="player">
        <h3 class="player-name">{name}</h3>

        {#each seasons.reverse() as { year, team, appearances }}
          <div class="season">
            <div class="year">
              <p>{year}</p>
            </div>

            <div class="team">
              <p class="label">Team:</p>
              <p class="value">{team}</p>
            </div>

            <div class="appearances">
              <p class="label">Appearances:</p>
              <p class="value">{appearances}</p>
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>
