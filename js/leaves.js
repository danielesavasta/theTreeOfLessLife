
var leaves = function (leaves) {
  let leavesCanvas = document.getElementById("leavesCanvas");

  leaves.setup =function() {
    pixelDensity(1)
  // create a canvas inside id canvas1
  leaves.createCanvas(1920, 1080,P2D, leavesCanvas);

  //canvas.parent('section1');
  //console.log(globalData);
  leaves.angleMode(DEGREES)
  leaves.rectMode(CENTER, CENTER)
}

leaves.draw= function() {
  leaves.background(255,0,0);
  leaves.scale(1.5);
  leaves.translate(110,0)
  leaves.background(255);
  leaves.noStroke();
  leaves.fill(0)
  //ellipse(100,100,50)
  for (let i = 0; i < 5; i++) {
    leaves.push();
    let actualValue = globalLivingPlanetIndex[yearsKeys[selectedYear]][countryKeys[i]];
    let scaleFactor = actualValue * scaleMultiplier;

    // Adjust translation to compensate for scaling
    leaves.translate(posLeaves[i][0], posLeaves[i][1]); // Compensate for scaling
    leaves.rotate(posLeaves[i][2]);

    let selectedColor = getColorForValue(actualValue, lowestValue, highestValue, colorScale);

    leaves.fill(selectedColor);
    leaves.scale(scaleFactor);
    leavesShape();
    leaves.pop();
  }
  leaves.push()
  leaves.translate(10,-45)
  for (let i = 0; i < 5; i++) {
    leaves.push();
    leaves.translate(posBranches[i][0], posBranches[i][1]);
    leaves.rotate(posBranches[i][2]);
    branchShape(i);
    leaves.pop();
  }
  branchCore();
  leaves.pop()
  //console.log("Year: " + yearsKeys[selectedYear] + "\n")
  console.log("moveX: " + moveX + "\n")
  console.log("moveY: " + moveY + "\n")
}

function leavesShape() {
  leaves.push()
  leaves.translate(-78, -212.8)

  leaves.beginShape();
  leaves.vertex(94.3, 212.8);
  leaves.vertex(93.9, 214.0);
  leaves.bezierVertex(92.2, 214.0, 75.8, 213.8, 74.1, 213.7);
  leaves.bezierVertex(72.4, 213.6, 63.0, 213.4, 63.0, 213.4);
  leaves.bezierVertex(63.0, 213.4, 62.2, 211.3, 62.0, 210.5);
  leaves.bezierVertex(59.5, 202.4, 57.6, 194.1, 55.2, 185.9);
  leaves.bezierVertex(52.9, 177.8, 51.3, 170.6, 44.3, 165.1);
  leaves.bezierVertex(35.9, 158.4, 25.3, 155.5, 17.3, 148.1);
  leaves.bezierVertex(1.3, 133.3, -2.7, 109.0, 1.6, 88.5);
  leaves.bezierVertex(7.8, 58.8, 29.3, 35.5, 48.6, 13.3);
  leaves.vertex(59.0, 1.2);
  leaves.bezierVertex(59.0, 1.2, 61.1, 0.3, 66.5, 0.1);
  leaves.bezierVertex(72.8, -0.2, 74.1, 0.6, 74.1, 0.6);
  leaves.vertex(85.6, 11.7);
  leaves.bezierVertex(98.4, 24.1, 108.5, 38.8, 120.0, 52.4);
  leaves.bezierVertex(128.6, 62.5, 137.3, 73.2, 141.9, 85.8);
  leaves.bezierVertex(150.7, 109.9, 138.1, 133.1, 121.4, 150.2);
  leaves.bezierVertex(113.2, 158.6, 108.5, 163.9, 104.9, 175.1);
  leaves.bezierVertex(100.4, 189.0, 97.8, 196.3, 94.7, 210.6);
  leaves.bezierVertex(94.5, 211.6, 94.3, 212.8, 94.0, 213.5);
  leaves.endShape()
  //ellipse(78, 212.8, 10,10)
  leaves.pop()
}

function branchShape() {
  leaves.push()
  //translate(310, 251)
  leaves.scale(.4)
  leaves.beginShape();
  leaves.vertex(64.09, 379);
  leaves.bezierVertex(61.2, 347.21, 58.36, 315.42, 55.49, 283.63);
  leaves.vertex(64.09, 379);
  leaves.bezierVertex(50, 379.92, 60.99, 379.17, 33.22, 379.04);
  leaves.vertex(24.2, 195.1);
  leaves.bezierVertex(21.17, 163.05, 3.95, 31.97, 0, 0);
  leaves.vertex(29.94, 0.23);
  leaves.bezierVertex(32.86, 32.58, 44.35, 160, 47.3, 192.35);
  leaves.vertex(64.1, 379);
  leaves.endShape();
  leaves.pop()
}

function branchCore(){
  leaves.push()
  leaves.translate(260, 400);
  leaves.scale(.4)
  leaves.beginShape();
  leaves.vertex(252.3, 0.0);
  leaves.bezierVertex(252.3, 0.0, 280.2, 12.9, 280.2, 12.9);
  leaves.bezierVertex(274.1, 37.1, 270.7, 61.8, 266.0, 86.3);
  leaves.bezierVertex(264.4, 94.6, 249.1, 137.7, 270.0, 134.1);
  leaves.vertex(282.7, 161.7);
  leaves.bezierVertex(254.2, 182.9, 226.6, 216.0, 219.9, 250.1);
  leaves.bezierVertex(211.7, 291.4, 231.5, 332.6, 250.7, 370.1);
  leaves.bezierVertex(232.8, 382.6, 214.9, 395.1, 197.0, 407.6);
  leaves.bezierVertex(186.7, 371.2, 184.6, 332.9, 174.8, 296.4);
  leaves.bezierVertex(164.9, 259.9, 149.2, 242.2, 115.1, 225.9);
  leaves.bezierVertex(77.9, 208.2, 49.8, 216.1, 0.0, 177.4);
  leaves.vertex(18.5, 152.6);
  leaves.bezierVertex(29.6, 155.0, 46.8, 159.1, 58.3, 155.5);
  leaves.bezierVertex(68.0, 152.4, 78.1, 148.2, 83.3, 139.5);
  leaves.bezierVertex(87.5, 132.2, 87.3, 123.2, 86.8, 114.8);
  leaves.bezierVertex(85.8, 96.7, 85.8, 71.1, 79.2, 47.9);
  leaves.vertex(107.5, 35.6);
  leaves.bezierVertex(110.5, 41.5, 112.8, 42.3, 116.7, 47.6);
  leaves.bezierVertex(122.0, 54.7, 129.9, 61.6, 138.6, 60.1);
  leaves.bezierVertex(149.4, 58.2, 153.6, 45.1, 155.2, 34.3);
  leaves.bezierVertex(156.6, 24.4, 157.6, 14.4, 158.2, 4.5);
  leaves.vertex(189.1, 4.4);
  leaves.bezierVertex(189.6, 10.3, 190.1, 16.2, 190.7, 22.1);
  leaves.bezierVertex(191.7, 33.4, 193.0, 54.7, 206.2, 59.2);
  leaves.bezierVertex(210.3, 60.6, 215.0, 59.4, 218.6, 57.0);
  leaves.bezierVertex(222.2, 54.6, 225.0, 51.1, 227.5, 47.5);
  leaves.bezierVertex(237.6, 33.1, 245.8, 16.4, 252.3, 0.0);
  leaves.endShape();
  leaves.pop()
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
}