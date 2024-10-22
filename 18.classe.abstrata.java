abstract class Personagem {
    protected String nome;


    public Personagem(String nome) {
        this.nome = nome;
    }

    public abstract void atacar();
    public abstract void defender();
    
}

class Guerreiro extends Personagem {
    private String arma;

    public Guerreiro(String nome, String arma) {
        super(nome);
        this.arma = arma;
    }

    @Override
    public void atacar() {
        System.out.println(nome + " ataca com " + arma  + "!");
    }
    
    @Override
    public void defender() {
        System.out.println(nome + " levanta o escudo para defender!");
    }
}

class Mago extends Personagem {
    private String magia;

    public Mago(String nome, String magia) {
        super(nome);
        this.magia = magia;
    }

    @Override
    public void atacar() {
        System.out.println(nome + " lança a magia " + magia + "!");
    }

    @Override
    public void defender() {
        System.out.println(nome + " usa um escudo mágico para se defender!");
    }
}
