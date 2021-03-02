let heights = [];
let rectWidth = 2;
let speed = 200;
let keyV;
let j = 1;
let i = j - 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate();
  for (let i = 1; i < width / rectWidth - 1; i++) {
    heights.push(i);
  }
  shuffle(heights, true);
  keyV = heights[j];
}

function draw() {
  background(50);
  insertSort();
  drawSquares();

}

// Doesn't need for loop since the draw function is the loop itself
function insertSort() {
  for (let s = 0; s < speed; s++) {
    if (j < heights.length) {
      // We dont use the while loop since we want to see the piece move.
      if (i >= 0 && heights[i] > keyV) {
        heights[i + 1] = heights[i];
        i--;
      }
      if (i < 0 || heights[i] <= keyV) {
        heights[i + 1] = keyV;
        j++;
        keyV = heights[j];
        i = j - 1;
      }
    } else {
      noLoop();
    }
  }
}

function drawSquares() {
  for (let k = 0; k < heights.length; k++) {
    if(k == i){
      stroke(255, 204, 0);
      fill(255, 204, 0);
      rect(k * rectWidth, height, rectWidth, -heights[k]);
    }else {
      stroke(255);
      fill(255);
      rect(k * rectWidth, height, rectWidth, -heights[k]);
    }
    
  }
}