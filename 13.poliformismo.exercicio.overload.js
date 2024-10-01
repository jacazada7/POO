class Personagem {
  constructor(nome, cor, titulos, rebaixamentos, anos, torcida, região, grandeza, idolo, jogador) {
    this.nome = nome;
    this.cor = cor;
    this.titulos = titulos;
    this.rebaixamentos = rebaixamentos;
    this.anos = anos;
    this.torcida = torcida;
    this.região = região;
    this.grandeza = grandeza;
    this.idolo = idolo;
    this.jogador = jogador;
    
  }
  //Simulaçao de sobrecarga
  falar(nomeDoTime) {
    console.log(`${this.nome} falar o nome do time!`);
  }

  falar(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} falar o nome do time!`);
    } else if (args.length === 1) {
      const arma = args[0];
      console.log(`${this.nome} ataca com ${arma}!`);
    } else if (args.length === 2) {
      const [tipoFlecha, comArco] = args;
      if (comArco) {
        console.log(`${this.nome} fala o ${tipoFlecha} nome do time!`);
      } else {
        console.log(`${this.nome} dispara flechas ${tipoFlecha} sem arco!`);
      }
    } else {
      console.log(`Número de argumentos não suportados`);
    }
  }
  receberDano(dano) {
    this.vida -= dano;
    console.log(
      `${this.nome} recebeu ${dano} de dano. Vida restante: ${this.vida}`
    );
  }
}
