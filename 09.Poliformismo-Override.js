// Classe base Personagem
class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }


    atacar() {
        console.log(` ${this.nome} realiza um ataque basico!`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(` ${this.nome} recebeu ${dano} de dano. Vida rstante:${this.vida}`);
    }   

 
}

// Classe derivada Guerreiro que herda de Personagem

class Guerreiro extends Personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }

    atacar() {
        console.log(` ${this.nome} ataca com a ${this.arma}!`);
    }
        }

 // Classe derivada Mago que herda de Personagem

 class Mago extends Personagem {
    constructor(nome, vida, feitico) {
        super(nome, vida);
        this.feitico = feitico;
    }
    atacar() {
        console.log(` ${this.nome} lança ${this.feitico}!`);
    }
}