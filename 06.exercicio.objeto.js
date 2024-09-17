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
    console.log(`Meu time tem ${this.titulos} Titulos!`);
  }
  falarRebaixamentos() {
    console.log(`Meu time tem ${this.rebaixamentos} rebaixamentos.`);
  }
}

// Instância da classe

const time1 = new Times(15,0 , 'Flamengo', 'Rubro-Negro',  'Zico' );
time1.falarTimes();
time1.falarTitulos();
time1.falarRebaixamentos();