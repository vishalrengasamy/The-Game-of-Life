var rows;
var columns;
var side = 20;
var board;
var next;
var structure;

function setup() {
  createCanvas(800, 800); 
  rows = floor(height/side);
  columns = floor(width/side);

  board = new Array(columns);
  for (var i = 0; i < columns; i++) {
    board[i] = new Array(rows);
  } 
  next = new Array(columns);
  for (i = 0; i < columns; i++) {
    next[i] = new Array(rows);
  }
  init();
}

function draw() {
  frameRate(20);
  background(240);
  generate();
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      if (board[i][j] == 1) {
      var l = j*side;
      var b = i*side;
      noStroke();
      fill(0);
      rect(l, b, side, side);
      }
    }
  }
}

function mousePressed() {
  init();
}

function init() {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      if (i === 0 || j === 0 || i == rows - 1 || j == columns - 1) {
        board[i][j] = 0;
      }
      else {
        board[i][j] = floor(random(0, 2));
        next[i][j] = 0;
      }
    }
  }
}

function generate() {
  for (var x = 1; x < rows - 1; x++) {
    for (var y = 1; y < columns - 1; y++) {
      
      var neighbors = 0;
      for (var i = -1; i <= 1; i++) {
        for (var j = -1; j <= 1; j++) {
          neighbors += board[x+i][y+j];
        }
      }
      
      neighbors -= board[x][y];
      
      if ((board[x][y] == 1) && (neighbors < 2)) {
        next[x][y] = 0;
      }
      else if ((board[x][y] == 1) && (neighbors > 3)) {
        next[x][y] = 0;
      }
      else if ((board[x][y] === 0) && (neighbors == 3)) {
        next[x][y] = 1;
      }
      else {
        next[x][y] = board[x][y];
      }
    }
  }
  var temp = board;
  board = next;
  next = temp;
}

function initial() {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      if (i === 0 || j === 0 || i == rows - 1 || j == columns - 1) {
        board[i][j] = 0;
        
      }
      else {
        board[rows/2][24] = 1;
        board[rows/2][25] = 1;
        board[rows/2][26] = 1;
        board[rows/2][27] = 1;
        board[rows/2][28] = 1;
        board[rows/2][29] = 1;
        
        next[i][j] = 0;
      }
    }
  }
}

