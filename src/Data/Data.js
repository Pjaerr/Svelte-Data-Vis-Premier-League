/** What conclusions do we need to make?
 * -------------------------------------------
 * * How much has each Region contributed to premier league wins?
 * * How many players from the UK and Ireland have contributed to premier league wins?
 * * What percentage of players who won the premier league were from UK and Ireland?
 * * Which season saw the highest contribution from UK and Ireland players?
 * * Which player from UK and Ireland has contributed to the most premier league wins?
 */

/** Sub-Task List for "Making Sense of the Data" section
 * -------------------------------------------------------
 * 1. Convert the Region objects into something with the following structure:
 *
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
 *                      weighting: number
 *                  }
 *              ]
 *          }
 *
 * 4. Tally up how many players have won the premier league overall and then map the number
 *    of UK and Ireland vs. Foreign players on a 0, 100 range.
 *
 * 5. Go through all of the seasons and remove all non UK and Ireland players. From the remaining players,
 *    order the seasons by number of players. Then out of the seasons, run the weighting functionality and
 *    then store the resulting season year (Eg. "1994/1995") as a constant that is exported showing the
 *    season with the highest UK and Ireland contribution.
 *
 * 6. Go through all of the seasons and remove all non UK and Ireland players. Out of the remaining players
 *    remove any players that haven't won more than a single season. Out of the remaining players tally
 *    up each of their accumlated appearances in each season. At the end, the player with the highest
 *    accumulated total is the player who has contributed the most. Export this as a constant.
 */

import Players from "./Players";

//Constants
export const NUMBER_OF_PLAYERS = Players.length;

/**
 *  Calculates which, out of a collection of arrays of objects with an appearance property,
 * has the highest number of appearances by adding them all together and returning the array
 * that has the highest accumulated weighting.
 * @param {[[{appearances: number}]]} arrays
 * @returns {[{accumulatedWeight: number, array: []}]} An array containing an object for each array alongside the accumulated weighting
 */
export function getHighestAccumulatedAppearances(arrays) {
  //Store each array in an object alongside their accumulated appearances
  const accumulatedArrays = arrays
    .map(array => {
      let accumulatedAppearances = 0;

      array.forEach(obj => {
        accumulatedAppearances += parseInt(obj.appearances);
      });

      return {
        array,
        accumulatedAppearances
      };
    })
    .sort((a, b) => b.accumulatedAppearances - a.accumulatedAppearances);

  /** Return the highest weighted array, account for multiple arrays having the same
   * accumulated weighting and so multiple need to be returned.*/
  let highestWeightedArrays = [accumulatedArrays[0]];

  for (let i = 0; i < accumulatedArrays.length; i++) {
    if (
      accumulatedArrays[i].accumulatedAppearances !==
      accumulatedArrays[i + 1].accumulatedAppearances
    ) {
      i = accumulatedArrays.length;
    } else {
      highestWeightedArrays.push(accumulatedArrays[i + 1]);
    }
  }

  return highestWeightedArrays;
}

// ! Experimental Code
// import Players from "./Players.js";
// import Titles from "./Titles.js";
// import Regions from "./Regions.js";

// const getContrib = regionToCalculateFor => {
//   const regions = Regions.map(region => {
//     return {
//       name: region.name,
//       players: []
//     };
//   });

//   Players.forEach(player => {
//     player.regions.forEach(regionPlayerIsFrom => {
//       regions.forEach(region => {
//         if (region.name === regionPlayerIsFrom) {
//           region.players.push({
//             name: player.name,
//             seasons: []
//           });
//         }
//       });
//     });
//   });

//   Titles.forEach(title => {
//     regions.forEach(region => {
//       region.players.forEach(player => {
//         title.players.forEach(winningPlayer => {
//           if (winningPlayer.name === player.name) {
//             player.seasons.push({
//               year: title.season,
//               team: title.winner,
//               appearances: winningPlayer.appearances
//             });
//           }
//         });
//       });
//     });
//   });

//   let highestNumberOfPlayers = 0;

//   for (let i = 0; i < regions.length; i++) {
//     if (regions[i].players.length > highestNumberOfPlayers) {
//       highestNumberOfPlayers = regions[i].players.length;
//     }
//   }

//   let colour = `rgb(0, 50, 0)`;
//   regions.forEach(region => {
//     if (region.name === regionToCalculateFor) {
//       let greenValue = Math.round(
//         ((region.players.length - 0) / (33 - 0)) * (255 - 50) + 50
//       );

//       if (region.players.length === 0) {
//         greenValue = 0;
//       }

//       colour = `rgb(0, ${greenValue}, 0)`;
//     }
//   });

//   return colour;
// };

// export default getContrib;
