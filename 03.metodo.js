class Pessoa {
    constructor(nome, altura, peso, genero) {// Atributos
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.genero = genero;
    }
    //Métodos
    falar() {
        console.log(`Olá, meu nome é ${this.nome}!`);
    }
}