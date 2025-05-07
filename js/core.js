var annualForestLoss, fixedLandArea, forestAreaShareLand, globalLivingPlanetIndex, humanFootprintRaw;
var selectedYear = 1;
var globalData;

var moveX = 0;
var moveY = 0;

let rotationValues = [50, 22];
var posLeaves = [
[150, 334, -rotationValues[0]],
[237.5, 236.5, -rotationValues[1]],
[325, 204, 0],
[422, 210.5, rotationValues[1]],
[487, 306, rotationValues[0]]];

var posBranches = [
[137,385,-rotationValues[0]],
[223,285,-rotationValues[1]],
[310,251,0],
[405,255,rotationValues[1]],
[472,348,rotationValues[0]]];

let yearsKeys = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
let countryKeys = ["America", "Africa", "Asia", "Europe", "Oceania"]
let colorScale = ["#53854D", "#8A9550", "#B8A64A", "#A26652", "#9F544D"]
let lowestValue = 24;
let highestValue = 86;
let distanceValue = (highestValue - lowestValue) / 3;
let scaleMultiplier = 0.008;

const jsonFiles = [
  '../data/annualForestLoss.json',
  '../data/fixedLandArea.json',
  '../data/forestAreaShareLand.json',
  '../data/globalLivingPlanetIndex.json',
  '../data/humanFootprintRaw.json'
];

Promise.all(
  jsonFiles.map(file =>
    fetch(file)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading JSON file: ${file}`);
        }
        return response.json();
      })
  )
)
  .then(results => {
    // Destructure the results into variables
    [annualForestLoss, fixedLandArea, forestAreaShareLand, globalLivingPlanetIndex, humanFootprintRaw] = results;

    // Use the loaded data
    console.log(annualForestLoss, fixedLandArea, forestAreaShareLand, globalLivingPlanetIndex, humanFootprintRaw);

    // Initialize p5.js or other logic here
    // new p5(sketch);
    var leavesCanvas= new p5(leaves, 'p5sketch');
    var trunkCanvas= new p5(trunk, 'p5sketch');

  })
  .catch(error => {
    console.error('Error loading JSON files:', error);
  });

  function setup(){
    pixelDensity(1)
  }