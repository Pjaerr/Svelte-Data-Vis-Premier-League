import data from "./data";

//Obtain the highest number of appearances that any single region has
let highestNumberOfAppearances = 0;

for (const region of data) {
  if (region.overallAppearances > highestNumberOfAppearances) {
    highestNumberOfAppearances = region.overallAppearances;
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

//Map the number of appearances (0 to highestNumberOfAppearances) to a HEX value in the array
for (const region of data) {
  const index = Math.round(
    (region.overallAppearances / highestNumberOfAppearances) *
      (colourPalette.length - 1)
  );

  if (region.overallAppearances <= 0) {
    region.colour = "rgba(51, 51, 51, 0.5)";
  } else {
    region.colour = colourPalette[index];
  }
}

//Export a function that takes a region name and will return the region for that name.
const getRegionData = regionName => {
  return data.filter(region => region.name === regionName)[0];
};

export default getRegionData;
