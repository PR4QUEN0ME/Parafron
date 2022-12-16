//PARTE UM

class dialogos{
    constructor(texto,dx,dy,dwidth, dcolor, dfonte){
        this.texto = texto;
        this.dx = dx;
        this.dy = dy;
        
        this.dwidth = dwidth;
        this.dcolor = dcolor;
        this.dfonte = dfonte;
    }

    escrever(){
        pincel.fillStyle = this.dcolor;
        pincel.font = this.dfonte;
        pincel.fillText(this.texto,this.dx,this.dy,this.dwidth);
    }

}

class objetoGeo{
 constructor(x,y,width,height, color){
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.color = color;
 }
 desenho(){
    pincel.beginPath();
     pincel.fillStyle = this.color;
     pincel.fillRect(this.x,this.y,this.width,this.height);
     pincel.stroke();
 }

imagem(){
     var img = new Image();
     img.src = this.color;
     pincel.drawImage(img, this.x, this.y, this.width, this.height);
 }

}

class Player extends objetoGeo {
    controle(vy){
        this.imagem();
        this.y+=vy;
    }
    colisao1(valorx,valory,valorw,valorh){
        this.valorx = valorx;
        this.valory = valory;
        this.valorw = valorw;
        this.valorh = valorh;
        if(this.x + this.width >= valorx && this.y + this.height <= valory + valorh){
          endgame();
        }
    }
    colisao2(valorx,valory,valorw,valorh){
        this.valorx = valorx;
        this.valory = valory;
        this.valorw = valorw;
        this.valorh = valorh;
        if(this.x + this.width >= valorx && this.y + this.height >= valory){
            endgame();
        }
    }
}

class Barreira extends objetoGeo {
    movimentacao(velox){
        this.velox = velox;
        this.imagem();
        this.x+=this.velox;
        if(this.x + this.width > 1600){
            this.velox =- this.velox;
        } 
        if(this.x + this.width < 0){
            this.velox =- this.velox;
        }   
     }
    spawnum(lim, spawn, max, min){
        this.lim = lim;
        this.spawn = spawn;
        if (this.x + this.width <= lim){
            this.x = spawn;
            this.height = Math.floor(Math.random()* (max - min) + min);
        }
    }
    spawndois(lim, spawn, distancia){
        this.lim = lim;
        this.spawn = spawn;
        if (this.x + this.width <= lim){
            this.x = spawn;
            this.y = distancia;
        }

    }
}

//PARTE DOIS
class Obj { //fazendo o jogador

    constructor(posX, posY, size,color) {
        this.posX = posX;
        this.posY = posY;
        this.size = size;
        this.color=color;

    }
    imagemJ(){
        var img = new Image();
        img.src = this.color;
        pincel.drawImage(img, this.posX, this.posY, this.size, this.size);
    }
  
}
class PlayerJ extends Obj{
    colisaoJ(inimigo){//colisão com do jogador com o inimigo
        if(this.posX + this.size > inimigo.posX && this.posX < inimigo.posX + inimigo.size && 
            this.posY + this.size > inimigo.posY && this.posY < inimigo.posY + inimigo.size){
            return true;
    }
    }
    canvascolisao() {
        if (this.posX <= 0) {
            this.posX = 0;
        }
        if (this.posX >= 1000 - this.size) {
            this.posX = 1000 - this.size;

        }
        if (this.posY <= 0) {
            this.posY = 0;
        }
        if (this.posY >= 500 - this.size) {
            this.posY = 500 - this.size;

        }

    }
}


class Tirando extends Obj {
    pontuacao=0;
    desenhaT() { //balas
        pincel.beginPath();
        pincel.fillStyle = "Red";
        pincel.fillRect(this.posX, this.posY, this.size, this.size);
    }
    atirando(tiro, posicaoydoplayer) {
        if (tiro == true) {
            this.posY -= 8;

        } else {
            this.posY = posicaoydoplayer;
        }
    }
    colisaoI(inimigo){
        if(this.posY>inimigo.posY&&this.posY<inimigo.posY+inimigo.size 
         &&this.posX<inimigo.posX+inimigo.size&&this.posX>inimigo.posX-inimigo.size){
            this.pontuacao++;
            inimigo.posY=500;
        }
    }
}

class Inimigo extends Obj{ //fazendo o inimigo

    movimenta(mover) {
        if (this.posY >= 500) {
            this.posX = Math.random() * (1000 - 100) + 100;
            this.posY = -200;//posição que renace
        }
        if (mover == true) {
            this.posY += 2;
        }

    }

}



