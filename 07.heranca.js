// Classe base Pessoa
class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

// Classe Estudante que herda de Pessoa

class Estudante extends Pessoa {
    constructor(nome, idade, altura, peso, curso) {
        super(nome, idade, altura, peso);
        this.curso = curso;
        
    }
}

//Classe Funcionário que herda de Pessoa
class Funcionário extends Pessoa {
    constructor(nome, idade, altura, peso, salário) {
        super(nome, idade, altura, peso);
        this.salário = salário;
    }
}

// Classe Diretor que herda de Funcionário

class Diretor extends Funcionário {
    constructor(nome, idade, altura, peso, salário) {
        super(nome, idade, altura, peso, salário);
        
    }
}