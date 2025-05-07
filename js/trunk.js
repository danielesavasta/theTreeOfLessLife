var trunk = function (trunk) {
    trunk.setup =function() {
        let trunkCanvas = document.getElementById("trunkCanvas");

      // create a canvas inside id canvas1
  let canvas2 = createCanvas(1920, 1080,P2D, trunkCanvas);

  canvas2.parent('section2');
  console.log(globalData);
  angleMode(DEGREES)
  rectMode(CENTER, CENTER)
}

trunk.draw =function() {
    background(0,255,0);
    
}
}