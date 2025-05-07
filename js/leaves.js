var selectedYear = 1;
var globalData;
var pos = [[125, 250, -30],
[225, 215, -15],
[325, 200, 0],
[425, 215, 15],
[525, 250, 30]];

let yearsKeys = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];
let countryKeys = ["America", "Africa", "Asia", "Europe", "Oceania"]
let colorScale = ["#53854D", "#8A9550", "#B8A64A", "#A26652", "#9F544D"]
let lowestValue = 24;
let highestValue = 86;
let distanceValue = (highestValue - lowestValue) / 3;
let scaleMultiplier = 0.008;

function preload() {
  globalData = loadJSON("../data/globallivingplanetindex.json");
}

function setup() {
  //createCanvas(600, 600);
  // create a canvas inside id canvas1
  let canvas = createCanvas(1200, 1200);
  
  canvas.parent('section1');
  console.log(globalData);
  //console.log(globalData[yearsKeys[0]][countryKeys[0]]);
  angleMode(DEGREES)
  rectMode(CENTER,CENTER)
}

function draw() {
  scale(2);
  background(255);
  noStroke();
  fill(0)
  //ellipse(100,100,50)
  for (let i = 0; i < 5; i++) {
    push();
    let actualValue = globalData[yearsKeys[selectedYear]][countryKeys[i]];
    let scaleFactor = actualValue * scaleMultiplier;
  
    // Adjust translation to compensate for scaling
    translate(pos[i][0], pos[i][1]); // Compensate for scaling
    rotate(pos[i][2]);
  
    let selectedColor = getColorForValue(actualValue, lowestValue, highestValue, colorScale);
  
    fill(selectedColor);
    scale(scaleFactor);
    leavesShape();
    pop();
  }
}

function leavesShape() {
  push()
  translate(-78, -212.8)

  beginShape();
  vertex(94.3, 212.8);
  vertex(93.9, 214.0);
  bezierVertex(92.2, 214.0, 75.8, 213.8, 74.1, 213.7);
  bezierVertex(72.4, 213.6, 63.0, 213.4, 63.0, 213.4);
  bezierVertex(63.0, 213.4, 62.2, 211.3, 62.0, 210.5);
  bezierVertex(59.5, 202.4, 57.6, 194.1, 55.2, 185.9);
  bezierVertex(52.9, 177.8, 51.3, 170.6, 44.3, 165.1);
  bezierVertex(35.9, 158.4, 25.3, 155.5, 17.3, 148.1);
  bezierVertex(1.3, 133.3, -2.7, 109.0, 1.6, 88.5);
  bezierVertex(7.8, 58.8, 29.3, 35.5, 48.6, 13.3);
  vertex(59.0, 1.2);
  bezierVertex(59.0, 1.2, 61.1, 0.3, 66.5, 0.1);
  bezierVertex(72.8, -0.2, 74.1, 0.6, 74.1, 0.6);
  vertex(85.6, 11.7);
  bezierVertex(98.4, 24.1, 108.5, 38.8, 120.0, 52.4);
  bezierVertex(128.6, 62.5, 137.3, 73.2, 141.9, 85.8);
  bezierVertex(150.7, 109.9, 138.1, 133.1, 121.4, 150.2);
  bezierVertex(113.2, 158.6, 108.5, 163.9, 104.9, 175.1);
  bezierVertex(100.4, 189.0, 97.8, 196.3, 94.7, 210.6);
  bezierVertex(94.5, 211.6, 94.3, 212.8, 94.0, 213.5);
  endShape()
  //ellipse(78, 212.8, 10,10)
  pop()
}

function getColorForValue(x, lowestValue, highestValue, colorScale) {
  // Clamp x within the range
  x = Math.max(lowestValue, Math.min(x, highestValue));

  // Calculate relative position (0 to 1)
  const ratio = (x - lowestValue) / (highestValue - lowestValue);

  // Scale to color index
  const index = Math.floor(ratio * (colorScale.length - 1));

  return colorScale[index];
}