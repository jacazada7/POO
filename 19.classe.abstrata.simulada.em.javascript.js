class Personagem {
    constructor(nome) {
        if (new.target === Personagem) {
            throw new Error("Não é possivel instanciar a classe abstrata Personagem diretamente.");
        }
        this.nome = nome;
    }
    atacar() {
        throw new Error("o método atacar() deve ser implementado pela classe derivada.");
    }

    defender() {
        throw new Error("o método defender() deve ser implementado pela classe derivada.");
    }
}

class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
}

    atacar() {
        console.log(`${this.nome} ataca com a ${this.arma}!`);
    }

    defender() {
        console.log(`${this.nome} levanta o escudo para se defender!`);
    }
}

class Mago extends Personagem {
    constructor(nome, magia) {
        super(nome);
        this.magia = magia;
    }

    atacar() {
        console.log(`${this.nome} lança a magia ${this.magia}!`);
    }

    defender() {
        console.log(`${this.nome} usa um escudo mágico para se defender!`);
    }
}

try {
    const Personagem = new Personagem("Invalido");
} catch (error) {
    console.error(error.message);
}

const guerreiro = new Guerreiro("Thorin", "Espada");
guerreiro.atacar(); // Saída: Ragnar ataca com a Espada de Ferro!
guerreiro.defender(); // Saída: Ragnar levanta o escudo para se defender!

const mago = new Mago("Gandalf", "Bola de Fogo");
mago.atacar(); // Saída: Thor lança a magia Fogo Solar!
mago.defender(); // Saída: Thor usa um escudo mágico para se defender!
