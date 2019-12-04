import Players from "./Players";
import Regions from "./Regions";
import Titles from "./Titles";

/** Step 1:
 Convert the Region objects into something more usable by creating a new object for each region
 with the following structure:
*          {
*              name: string,
*              players: [
*                  {
*                      name: string,
*                      seasons: [
*                          {
*                              year: string,
*                              team: string,
*                              appearances: number
*                          }
*                      ]
*                  },
*             appearances: number
*              ]
*          }

*/
const regions = Regions.map(region => {
  //Create the initial new region object
  const newRegionObject = {
    name: region.name,
    players: [],
    appearances: 0
  };

  //For each of the players in the array exported from Players.js
  for (const player of Players) {
    //If the player is from the current region
    if (player.regions.includes(region.name)) {
      //Create the initial player object
      const playerObject = {
        name: player.name,
        seasons: []
      };

      //For each of the titles
      for (const title of Titles) {
        //For each of the players who won the title
        for (const winningPlayer of title.players) {
          //If the winning player is the same as our player
          if (player.name === winningPlayer.name) {
            //Add the current title to the player object
            playerObject.seasons.push({
              year: title.season,
              team: title.winner,
              appearances: winningPlayer.appearances
            });

            //Increment the overall appearances of the region by the player we just added
            newRegionObject.appearances += winningPlayer.appearances;
          }
        }
      }

      //Add the player to the region object
      newRegionObject.players.push(playerObject);
    }
  }

  return newRegionObject;
});

/* Step 2:
  Figure out what the colour of each region should be based on their number of appearances
*/

//What is the maximum number of appearances a region can have
let highestNumberOfAppearances = 0;

for (const region of regions) {
  if (region.appearances > highestNumberOfAppearances) {
    highestNumberOfAppearances = region.appearances;
  }
}

const colourPalette = [
  "#38003c",
  "#2a404e",
  "#274c52",
  "#265053",
  "#255454",
  "#245956",
  "#226659",
  "#1f735d",
  "#1c8060",
  "#198c64",
  "#169968",
  "#14a66b",
  "#11b26f",
  "#0ebf73",
  "#0bcc76",
  "#08d97a",
  "#06e67e",
  "#03f281",
  "#00ff85"
];

//Map the number of appearances (0 to highestNumberOfAppearances) to an RGB value (50 to 255)
for (const region of regions) {
  const index = Math.round(
    (region.appearances / highestNumberOfAppearances) *
      (colourPalette.length - 1)
  );

  region.colour = colourPalette[index];
}

/* Step 3:
  Export a function that takes a region name and will return the region for that name.
*/
export const getRegionData = regionName => {
  return regions.filter(region => region.name === regionName)[0];
};
