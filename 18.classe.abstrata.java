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