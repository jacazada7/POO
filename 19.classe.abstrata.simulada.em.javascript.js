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