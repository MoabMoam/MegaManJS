function Sprite(img){
	//Atributos ****************
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
	
	//Origem para captura da imagem a ser exibida
	this.srcX = this.srcY = 0;
	//Posição no canvas onde a figura será exibida
	this.posX = this.posY = 0;
	this.width = 34;
	this.height = 35;
	this.speed = 6;
	this.jmpspeed = 3;
	this.img = img;
	this.countAnim = 0;
	this.gravidade = 0.7	;
	this.velocidade = 0;
	this.forcaDoPulo = 8.5;
	this.maxPulos = 2;
	this.qntPulos = 1;

	// Pulo
	this.pula = function() {
		if (this.qntPulos < this.maxPulos) {
			this.velocidade = -this.forcaDoPulo
			this.qntPulos += 1
		}
	}

	// Colisão com o ambiente
	this.colision = function() {
		if (this.posX < 50) {
			this.posX = 50
		}

		if (this.posX > 700) {
			this.posX = 700
		}

		if (this.posY < 60) {
			this.posY = 60;
		}
		
		if (this.posY > 500) {
			this.posY = 500;
		}
	}


	//Métodos *****************
	this.atualiza = function() {  // gravidade
		this.velocidade += this.gravidade;
		this.posY += this.velocidade

		if (this.posY > 500) {
			this.posY = 500
			this.qntPulos = 0

		}

	}
	//Desenha a figura
	this.draw = function(ctx){
		ctx.drawImage(	this.img,	//Imagem de origem
						//Captura da imagem
						this.srcX,	//Origem da captura no eixo X
						this.srcY,	//Origem da captura no eixo Y
						this.width,	//Largura da imagem que será capturada
						this.height,//Altura da imagem que será capturada
						//Exibição da imagem
						this.posX,	//Posição no eixo X onde a imagem será exibida 
						this.posY,	//Posição no eixo Y onde a imagem será exibida 
						this.width,	//Largura da imagem a ser exibida 
						this.height	//Altura da imagem a ser exibida 
					);
		this.animation();
		this.atualiza();
		this.colision();
		
		

	}

	//Move a figura
	this.move = function(){
		if (this.mvLeft && !this.mvRight) {
			this.posX -= this.speed;
			this.srcY = this.height * 2;
		}
		if (this.mvRight && !this.mvLeft) {
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		}
		if (this.mvUp && !this.mvDown) {
			this.pula();
			this.posY -= this.speed;
			this.srcY = this.height * 1;
		}
		if (this.mvDown && !this.mvUp) {
			this.srcY = this.height * 0;
		}
		
	}
	
	//Anima a figura
	this.animation = function(){
		if(this.mvLeft || this.mvUp || this.mvRight || this.mvDown){
			//Caso qualquer seta seja pressionada, o contador de animação é incrementado
			this.countAnim++;
			if(this.countAnim >= 60){
				this.countAnim = 12;
			}
			this.srcX = Math.floor(this.countAnim / 5) * this.width;
		} else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
			this.srcX = 0;
			this.countAnim = 0;
		}
	}
}

window.onload = function () {
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "img/img.png";
	var zezim = new Sprite(spriteSheet);
	var scene = new Image();
	scene.src = "img/stage.png";
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	window.addEventListener("mousedown",clique);
	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = true;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = false;
				break;
			case LEFT:
				zezim.mvRight = false;
				zezim.mvLeft = true;
				zezim.mvUp = false;
				zezim.mvDown = false;
				break;
			case UP:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = true;
				zezim.mvDown = false;
				break;
			case DOWN:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = true;
				break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = false;
				break;
			case LEFT:
				zezim.mvLeft = false;
				break;
			case UP:
				zezim.mvUp = false;
				break;
			case DOWN:
				zezim.mvDown = false;
				break;
		}
	}
	
	var char = {
		vida: 2550,
	} // Vida mega man
	var life1 = new Image();
	life1.src = "./barrax/1.png"
	var life2 = new Image();
	life2.src = "./barrax/2.png"
	var life3 = new Image();
	life3.src = "./barrax/3.png"
	var life4 = new Image();
	life4.src = "./barrax/4.png";
	var life5 = new Image();
	life5.src = "./barrax/5.png";
	var life6 = new Image();
	life6.src = "./barrax/6.png";
	var life7 = new Image();
	life7.src = "./barrax/7.png";
	var life8 = new Image();
	life8.src = "./barrax/8.png";
	var life9 = new Image();
	life9.src = "./barrax/9.png";
	var life10 = new Image();
	life10.src = "./barrax/10.png"
	var life11 = new Image();
	life11.src = "./barrax/11.png";
	var life12 = new Image();
	life12.src = "./barrax/12.png";
	var life13 = new Image();
	life13.src = "./barrax/13.png";
	var life14 = new Image();
	life14.src = "./barrax/14.png";
	var life15 = new Image();
	life15.src = "./barrax/15.png";
	var life16 = new Image();
	life16.src = "./barrax/16.png";
	var life17 = new Image();
	life17.src = "./barrax/17.png";
	var barra1 = { 
		img: life1,
		x: 10,
		y: 90,
		width: 20,
		height: 100,
	  };
	  var barra2 = {
		img: life2,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra3 = {
		img: life3,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra4 = {
		img: life4,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra5 = {
		img: life5,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra6 = {
		img: life6,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra7 = {
		img: life7,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra8 = {
		img: life8,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra9 = {
		img: life9,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra10 = {
		img: life10,
		x: 10,
		y: 90,
		width: 35,
		height: 140,
	  };
	  var barra11 = {
		img: life11,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra12 = {
		img: life12,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra13 = {
		img: life13,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra14 = {
		img: life14,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra15 = {
		img: life15,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra16 = {
		img: life16,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };
	  var barra17 = {
		img: life17,
		x: 50,
		y: 512,
		width: 140,
		height: 10,
	  };


	  // Botão Play
	  var botao1 = new Image();
	  botao1.src = "./js/custom.png";

	  var play = {
		  img: botao1,
		  x: 245,
		  y: 150,
		  width: 310,
		  height: 150,
	  }

	  // Botão Perdeu
	  var lose = new Image();
	  lose.src = "./js/40.png";

	  var perdeu = {
		  img: lose,
		  x: 245,
		  y: 150,
		  width: 310,
		  height: 150,
	  }

	  // Barra de vida
	  function barraVida() {
		if (char.vida <= 2550 && char.vida > 2400) {
		  ctx.drawImage(barra1.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 2400 && char.vida > 2250) { 
		  ctx.drawImage(barra2.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 2250 && char.vida > 2100) { 
		  ctx.drawImage(barra3.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 2100 && char.vida > 1950) { 
		  ctx.drawImage(barra4.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 1950 && char.vida > 1800) { 
		  ctx.drawImage(barra5.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 1800 && char.vida > 1650) { 
		  ctx.drawImage(barra6.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 1650 && char.vida > 1500) { 
		  ctx.drawImage(barra7.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 1500 && char.vida > 1350) { 
		  ctx.drawImage(barra8.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 1350 && char.vida > 1200) { 
		  ctx.drawImage(barra9.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 1200 && char.vida > 1050) { 
		  ctx.drawImage(barra10.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 1050 && char.vida > 900) { 
		  ctx.drawImage(barra11.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 900 && char.vida > 750) { 
		  ctx.drawImage(barra12.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 750 && char.vida > 600) { 
		  ctx.drawImage(barra13.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 600 && char.vida > 450) { 
		  ctx.drawImage(barra14.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 450 && char.vida > 300) { 
		  ctx.drawImage(barra15.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 300 && char.vida > 150) { 
		  ctx.drawImage(barra16.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida <= 150 && char.vida > 0) { 
		  ctx.drawImage(barra16.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 } else if (char.vida == 0) {
		  ctx.drawImage(barra17.img, barra10.x, barra10.y, barra10.width, barra10.height)
		 }
	  
	  }


	// Temporizador 
	 var temporizador = 0;

	 // Sons
	 function musicaDead(){
		var audioMorte = new Audio();
		audioMorte.src = "./js/dead.mp3";
		audioMorte.play();
	  }

	  function musicaMain() {
		  var audioMain = new Audio();
		  audioMain.src = "./js/main.mp3";
		  audioMain.play();
		  if (char.vida === 0) {
			  audioMain.pause();
		  }
	  }

	

	// Score
	function score() {
		playerScore = parseInt(temporizador / 5)
		ctx.font = "40px Arial Black"
		ctx.fillText(`Score: ${playerScore}`, 300, 600)
	  }

	  // Estados
	  var _estadoAtual;
	  var _estados = {
		  jogar: 0,
		  jogando: 1,
		  perdeu: 2,
	  }
	


	// Espinhos 
	var contEspinho = true;
	var contEspinho2 = true;
	var espinhoLim1 = 50;
	var espinhoLim2 = 720;
	var espinhoLim3;
	var espinhoLim4;
	var veloEspinho = 5;
	var thorn = new Image();
	thorn.src = "img/_espinho.png"

	var espinho = {
		img: thorn,
		x: 720,
		y: 0,
		width: 10,
		height: 15,
		velocidade: 5
	}

	var espinho2 = {
		img: thorn,
		x: 50,
		y: 0,
		width: 10,
		height: 15,
		velocidade: 5
	}

	function drawThorn() {
		if (contEspinho) {
			ctx.drawImage(espinho.img, espinho.x -= espinho.velocidade, 520, espinho.width, espinho.height);
			if (espinho.x == espinhoLim1) {
				contEspinho = false;
			}
		}		
		if (!contEspinho) {
			ctx.drawImage(espinho.img, espinho.x += espinho.velocidade, 520, espinho.width, espinho.height);
			if (espinho.x == espinhoLim2) {
				contEspinho = true;
			}
		}
		
		if (temporizador > 140) {
			if (contEspinho2) {
				ctx.drawImage(espinho2.img, espinho2.x += espinho2.velocidade, 520, espinho.width, espinho.height)
				if (espinho2.x == 720) {
					contEspinho2 = false;
				}
			}
			

			if (!contEspinho2) {
				ctx.drawImage(espinho2.img, espinho2.x -= espinho2.velocidade, 520, espinho.width, espinho.height)
				if (espinho2.x == 50) {
					contEspinho2 = true;
				}
			}
		}

		// Aumento da velocidade do espinho
		if (temporizador > 400) {
			espinho.velocidade = 10
			espinhoLim2 = 705
			espinhoLim1 = 55
		}
	}

	// Contador de vida
	 function contVida() {
		if (char.vida === 0) {
			_estadoAtual = _estados.perdeu
			musicaDead()
			
			
		}

		if (char.vida === 2500) {
			musicaMain();
			
		}
	}

	// Clique
	function clique(e) {
		if (_estadoAtual == _estados.jogar) {
			_estadoAtual = _estados.jogando
		}
	}

	
	
	//Quano a imagem é carregada, o programa é iniciado
	spriteSheet = function(){
		init();
		zezim.posX = zezim.posY = 150;
	}

	function init(){
		loop();
		
		_estadoAtual = _estados.jogar
		
	}

	function update(){
		zezim.move();
		
	}

	function draw(){
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		
		if (_estadoAtual == _estados.jogar) {
			
			ctx.drawImage(play.img, play.x, play.y, play.width, play.height);
		} else if (_estadoAtual == _estados.jogando) {
			temporizador += 1
			zezim.draw(ctx);
			drawThorn();
			score();
			barraVida()
			
		} else if (_estadoAtual == _estados.perdeu) {
			score();
			ctx.drawImage(barra17.img, barra10.x, barra10.y, barra10.width, barra10.height);
			ctx.drawImage(perdeu.img, perdeu.x, perdeu.y, perdeu.width, perdeu.height);
		}
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
		colisao();
		barraVida();
		contVida()

		window.addEventListener("mousedown", clique);

	}
	//  Colisão 
	function colisao() {
		if (zezim.posX > espinho.x - 20 && zezim.posX < espinho.x + 5) {
			if (zezim.posY > 490) {
				char.vida -= 50
			}
		}

		if (zezim.posX > espinho2.x - 20 && zezim.posX < espinho2.x + 5) {
			if (zezim.posY > 490) {
				char.vida -= 50
			}
		}
	}
	spriteSheet();
}
