// Classe base Musica
class ReinoAnimal {
  constructor(nome, vida, forca, hierarquia, velocidade) {
    this.nome = nome;
    this.vida = vida;
    this.forca = forca;
    this.hierarquia = hierarquia;
    this.velocidade = velocidade;
  }

  morder() {
    console.log(` ${this.nome} realiza uma forte mordida!`);
  }

  brigaAnimal(mordida) {
    this.vida -= mordida;
    console.log(
      ` ${this.nome} recebeu ${mordida} na briga no reino animal. Vida restante:${this.vida}`
    );
  }
}


class Leao extends ReinoAnimal {
  constructor(nome, vida, forca, hierarquia, velocidade, raiva, tamamanhoDaJuba) {
    super(nome, vida, forca, hierarquia, velocidade);
    this.raiva = raiva;
    this.tamamanhoDaJuba = tamamanhoDaJuba;
  }

  morder() {
    console.log(` ${this.nome} morde com ${this.forca} de força!`);
    
  }
  brigaAnimal() {
    this.vida -= this.raiva;
    console.log( ` ${this.nome} ficou com ${this.raiva} de raiva na briga no reino animal.` );
  }


}



class Elefante extends ReinoAnimal {
  constructor(nome, vida, forca, hierarquia, velocidade, tromba, tamanho) {
    super(nome, vida, forca, hierarquia, velocidade,);
    this.tromba = tromba
    this.tamanho = tamanho;
  }
  morder() {
    console.log(` ${this.nome} morde com uma força de ${this.forca}!`);
    
  }

  brigaAnimal() {
    this.vida -= this.tromba;
    console.log( ` ${this.nome} deu uma trombada de ${this.tromba} de força na briga no reino animal.` );
}

}




const leao = new Leao ("Alex", 100, 900 , 1, 90, 100, 70);
leao.morder(); 
leao.brigaAnimal(30); 

const elefante = new Elefante ("Loxes", 90, 900, 3, 60, 70, 500);
elefante.morder(); 
elefante.brigaAnimal(10); 


