class Times {
  constructor(titulos, rebaixamentos, time, cor, idolo) {
    // Atributos
    this.time = time;
    this.titulos = titulos;
    this.rebaixamentos = rebaixamentos;
    this.cor = cor;
    this.idolo = idolo;
  }

  // Métodos
  falarTimes() {
    console.log(`Olá, meu time é ${this.time}!`);
  }
   falarTitulos() {
    console.log(`Meu time tem   ${this.titulos}!`);
  }
  falarRebaixamentos() {
    console.log(`Meu time fez ${this.rebaixamentos} rebaixamentos.`);
  }
}

