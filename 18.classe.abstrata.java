abstract class Personagem {
    protected String nome;


    public Personagem(String nome) {
        this.nome = nome;
    }

    public abstract void atacar();
    public abstract void defender();
    
}