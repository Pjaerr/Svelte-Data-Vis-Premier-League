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

  const players = region.players.sort((player1, player2) => {
    let player1Appearances = 0;
    let player2Appearances = 0;

    player1.seasons.forEach(
      season => (player1Appearances += season.appearances)
    );
    player2.seasons.forEach(
      season => (player2Appearances += season.appearances)
    );

    return player2Appearances - player1Appearances;
  });
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    position: absolute;
    z-index: 10;
    top: 30%;
    width: 100%;
    max-height: 600px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  .back-btn {
    flex: 1;
  }

  .header > h2 {
    text-align: center;
    flex: 16;
  }

  .body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .players {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .player {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .player > p {
    text-align: center;
  }
</style>

<div class="container">
  <div class="header">
    <button class="back-btn">--</button>
    <h2>{region.name}</h2>
  </div>
  <div class="body">
    <div class="stats">
      Number of appearances by players from this region during winning seasons:
      <b>{region.appearances}</b>
    </div>
    <div class="players">
      <h3>Players</h3>
      {#each players as { name, seasons }}
        <div class="player">
          <h4>{name}</h4>
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
      {/each}
    </div>
  </div>
</div>
