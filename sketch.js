function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //movimeto bolinha
}
let xBolinha = 300;
let yBolinha = 200;
let diametro = 25;
let velocidadexbolinha = 5;
let velocidadeybolinha = 5;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let comprimento = 10;
let altura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  image(campo2.png, 0, 0);

  rect(xRaquete, yRaquete, comprimento, altura);

  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }

  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadexbolinha;
  yBolinha += velocidadeybolinha;

  if (xBolinha > width || xBolinha < 0) {
    velocidadexbolinha *= -1;
  }

  if (yBolinha > height || yBolinha < 0) {
    velocidadeybolinha *= -1;
  }
}
