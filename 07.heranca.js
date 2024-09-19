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

//Classe Professor que herda de Funcionário

class Professor extends Funcionário {
    constructor(nome, idade, altura, peso, salário) {
        super(nome, idade, altura, peso, salário);
        
    }
}

// Criando objetos aluno, diretor e professor

const aluno = new Estudante("João", 16, 1.70, 70, "Programação de Jogos Digitais");
const diretor = new Diretor("Sergio", 45, 1.65, 65, 3000);
const professor = new Professor("Wanderson", 40, 1.65, 70, 1000);

// Mostrando no console a saída

console.log(aluno); // Saída: Estudante (nome: `João`, idade: 16, altura: 1.7, peso: 70, curso: ´Programação de Jogos Digitais`)
console.log(diretor); //Saída: Diretor (nome: `Sergio`, idade: 45, altura: 1.65, peso: 65, salário: 3000 }
console.log(professor); // Saída: Professor (nome: `Wanderson´, idade: 40, altura: 1.65, peso 70, salario 1000)


