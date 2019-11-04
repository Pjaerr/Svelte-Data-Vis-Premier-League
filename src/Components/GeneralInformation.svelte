<script>
  /*
   *
   * Import all of the data and then do something
   * here to actually work out the values we are
   * putting onto the page.
   *
   */

  const statistics = {
    numberOfPlayersContributed: 237,
    percentageOfUKPlayersContributed: 62,
    seasonWithHighestContribution: "1994/1995",
    playerWhoContributedMost: {
      name: "Ryan Giggs",
      numberOfTimes: 13
    }
  };
</script>

<p>
  Irure quis laborum in occaecat in voluptate laborum officia. Aliquip voluptate
  non voluptate enim dolor ea aliquip adipisicing. Aute fugiat ex labore est
  reprehenderit amet pariatur eiusmod commodo quis eu. Ea non sint sint esse
  amet enim non tempor culpa deserunt consequat in ea ea. Adipisicing duis
  mollit dolor occaecat aliqua deserunt est non id. Elit tempor quis aliqua amet
  do esse ex sit elit.
</p>
<p>
  <b>{statistics.numberOfPlayersContributed}</b>
  players from the UK and Ireland have contributed to Premier League wins since
  its conception in 1993.
</p>
<p>
  Out of all of the players who have contributed to Premier League wins,
  <b>{statistics.percentageOfUKPlayersContributed}%</b>
  were from the UK and Ireland and
  <b>{100 - statistics.percentageOfUKPlayersContributed}%</b>
  were from other countries.
</p>
<p>
  The
  <b>{statistics.seasonWithHighestContribution}</b>
  Premier League season saw the highest contribution from players born in the UK
  and Ireland.
</p>
<p>
  <b>{statistics.playerWhoContributedMost.name}</b>
  has contributed the most to Premier League wins, winning it a total of
  <b>{statistics.playerWhoContributedMost.numberOfTimes}</b>
  times.
</p>
