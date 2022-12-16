var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');
canvas.width = 1000;
canvas.height = 500;

//Variáveis
var telainicial = new objetoGeo(0, 0, 1000, 500, "imagens/Parafron.jpg");
var dialogoum = new objetoGeo(0, 0, 1000, 500, "imagens/1.jpg");
var dialogodois = new objetoGeo(0, 0, 1000, 500, "imagens/2.jpg");
var dialogotres = new objetoGeo(0, 0, 1000, 500, "imagens/3.jpg");
var dialogoquatro = new objetoGeo(0, 0, 1000, 500, "imagens/4.jpg");
var dialogocinco = new objetoGeo(0, 0, 1000, 500, "imagens/5.jpg");
var dialogoseis = new objetoGeo(0, 0, 1000, 500, "imagens/6.jpg");
var dialogosete = new objetoGeo(0, 0, 1000, 500, "imagens/7.jpg");
var dialogooito = new objetoGeo(0, 0, 1000, 500, "imagens/8.jpg");
var dialogonove = new objetoGeo(0, 0, 1000, 500, "imagens/9.jpg");
var tuto1 = new objetoGeo(0, 0, 1000, 500, "imagens/10.jpg");
var telagameover = new objetoGeo(0, 0, 1000, 500, "imagens/GameOver.png");
var beethoven = new Audio ("audio/city.ogg");
var musicadialogos = new Audio("audio/PassaDialogo.ogg");
var mais = 1;
var Interval2;
var Interval3;
var Interval4;

function inicio(){
beethoven.play();

    if (mais == 1){
    telainicial.imagem();
    }
    if (mais == 2){
    dialogoum.imagem();
    }
    if (mais == 3){
    dialogodois.imagem();
    }
    if (mais == 4){
    dialogotres.imagem();
    }
    if (mais == 5){
        dialogoquatro.imagem();
    }
    if (mais == 6){
        dialogocinco.imagem();
    }
    if (mais == 7){
        dialogoseis.imagem();
    }
    if (mais == 8){
        dialogosete.imagem();
    }
    if (mais == 9){
        dialogooito.imagem();
    }
    if (mais == 10){
        dialogonove.imagem();
    }
    if (mais == 11){
        tuto1.imagem();
    }
    if (mais == 12){
        clearInterval(Interval1);
        Interval2 = setInterval(jogo,20);
        Interval3 = setInterval(extratempo,1000);
    }
}

var Interval1 = setInterval(inicio,1);

document.addEventListener('keydown', (event) =>{
    if(event.key === 'q'){
      mais+=1;
      musicadialogos.play();
    }
    }
        )

//Variáveis jogo
var background = new objetoGeo(0, 0, 1000, 500, "imagens/bkk.jpg");
var pontuacao = 0;
var jogador = new Player(31, 187, 40, 40, "imagens/protagonista.jpg");
var obstaculo1 = new Barreira(1000,0,70,312, "imagens/cig.jpg");
var obstaculo2 = new Barreira(1000,400,70,500, "imagens/cigin.jpg");
var obstaculo3 = new Barreira(1500,0,70,312, "imagens/cig.jpg");
var obstaculo4 = new Barreira(1500,400,70,500, "imagens/cigin.jpg");
var pont = new objetoGeo(410, 17, 20, 20, "imagens/PontoKau.jpg");
var temp = new objetoGeo(410, 45, 20, 20, "imagens/TempoKau.jpg");
var audio = new Audio ("audio/soundtrack.ogg");
var audiodois = new Audio ("audio/score.ogg");
var tempo = 7;
var end = false;

function limpar(){
    pincel.clearRect(0,0,canvas.width,canvas.height);
}

// JOGO

function colisao(){
    jogador.colisao1(obstaculo1.x, obstaculo1.y, obstaculo1.width, obstaculo1.height);
    jogador.colisao2(obstaculo2.x, obstaculo2.y, obstaculo2.width, obstaculo2.height);
    jogador.colisao1(obstaculo3.x, obstaculo3.y, obstaculo3.width, obstaculo3.height);
    jogador.colisao2(obstaculo4.x, obstaculo4.y, obstaculo4.width, obstaculo4.height);
}

function jogo(){
    end = false;
    beethoven.pause();
    audio.play();
    limpar();
    background.imagem();
    temp.imagem();
    pont.imagem();
    jogador.controle(0,0);
    obstaculo1.movimentacao(-11);
    obstaculo2.movimentacao(-11);
    obstaculo3.movimentacao(-11);
    obstaculo4.movimentacao(-11);
    obstaculo1.spawnum(0, 1000, 375, 63);
    obstaculo2.spawndois(0, 1000, obstaculo1.height +120);
    obstaculo3.spawnum(0, 1000, 375, 63);
    obstaculo4.spawndois(0, 1000, obstaculo3.height +120);

    colisao();
    if(pontuacao >= 3){
        window.location = "Parte2.html";
     }
     //texto 1
    pincel.fillStyle = 'yellow';
    pincel.font = '20px courier new';
    pincel.fillText('Pontos: ' + pontuacao + "/3",445,30,800);

    //texto 2
    pincel.fillStyle = 'yellow';
    pincel.font = '20px courier new';
    pincel.fillText('Tempo: ' + tempo,445,60,800);

    escrita1.escrever();

}

    document.addEventListener('keydown', (event) =>{
        if(event.key === 'w'){
            jogador.controle(-30, 0);

        }
        if (event.key === 's'){
            jogador.controle(30, 0);
        }
        }
            )

//TEMPO
function temporizador(cronograma){
    if(cronograma==true){
        tempo--;
        cronograma=false;
        if (tempo==0){
            pontuacao++;
            tempo = 7;
            audiodois.play();
        }
    }
}
function extratempo(){
    temporizador(true);
}

// GAME OVER
function final(){
    clearInterval(Interval2);
    clearInterval(Interval3);
    telagameover.imagem();
    audio.pause();
}

function endgame(){
    Interval4 = setInterval(final,1);
    document.addEventListener('keydown', (event) =>{
        if(event.key === 'z'){
       clearInterval(Interval4);
       location.reload();

        }
        }
            )
}

