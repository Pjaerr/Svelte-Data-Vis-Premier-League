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
  //Create the initial region object
  const newRegionObject = {
    name: region.name,
    players: [],
    appearances: 0
  };

  //For each of the players
  for (const player of Players) {
    //If the player is from this region
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

//Map the number of appearances (0 to highestNumberOfAppearances) to an RGB value (50 to 255)
for (const region of regions) {
  let greenValue = Math.round(
    ((region.appearances - 0) / (highestNumberOfAppearances - 0)) * (255 - 30) +
      30
  );

  region.colour = `rgb(0, ${greenValue}, 0)`;
}

/* Step 3:
  Export a function that takes a region name and will return the region for that name.
*/
export const getRegionData = regionName => {
  let regionToReturn;

  for (const region of regions) {
    if (region.name === regionName) {
      regionToReturn = region;
      break;
    }
  }

  return regionToReturn;
};
