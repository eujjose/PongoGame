function setup() {
  createCanvas(700, 400)
}

var xBolinha = 350
var yBolinha = 201
var diametro = 23
var raio = diametro / 2

var veloYBolinha = 6
var veloXBolinha = 6

var xRaquete = 6
var yRaquete = 170
var larguraRaquete = 10
var alturaRaquete = 100

var xRaqueteOponente = 685
var yRaqueteOponente = 170

var colidiu = false

var meusPontos = 0
var pontosOponente = 0

function draw() {
  background(0)
  mostrarBolinha()
  moverBolinha()
  colisaoBorda()
  mostrarRaquete()
  moverRaquete()
  VerificarColisao(xRaquete, yRaquete)
  VerificarColisao(xRaqueteOponente, yRaqueteOponente)
  moverRaqueteOponente()
  placar()
  verPlacar()
  salvarBolinha()
}

function mostrarBolinha() {
  circle(xBolinha, yBolinha, diametro)
}

function moverBolinha() {
  xBolinha += veloXBolinha
  yBolinha += veloYBolinha
}

function colisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    veloXBolinha *= -1
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    veloYBolinha *= -1
  }
}

function mostrarRaquete() {
  rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete)
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete)

  if (yRaquete >= width - 200) {
    yRaquete = 170
  }
}

function moverRaquete() {
  if (keyIsDown(87)) {
    yRaquete += -10
  }
  if (keyIsDown(83)) {
    yRaquete += 10
  }
}

function moverRaqueteOponente() {
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente += -10
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaqueteOponente += 10
  }
}

function VerificarColisao(x, y) {
  colidiu = hit = collideRectCircle(
    x,
    y,
    larguraRaquete,
    alturaRaquete,
    xBolinha,
    yBolinha,
    raio
  )

  if (colidiu) {
    veloXBolinha *= -1
  }
}

function verPlacar() {
  fill(255)
  text(meusPontos, 300, 100)
  text(pontosOponente, 400, 100)
}

function placar() {
  if (xBolinha + raio > 698) {
    meusPontos += 1
  }

  if (xBolinha - raio < 2) {
    pontosOponente += 1
  }
}

function salvarBolinha() {
  if (xBolinha - raio < -5) {
    console.log('bolinha ficou presa')
    xBolinha = 300
  }
}
