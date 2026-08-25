


class Hero {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
    
     let tipoDeAtaque = "" 
    
     if(this.tipo === "mago") tipoDeAtaque = "magia"
     else if(this.tipo === "guerreiro") tipoDeAtaque = "espada"
     else if(this.tipo === "monge") tipoDeAtaque = "artes marciais"
     else if(this.tipo === "ninja") tipoDeAtaque = "shuriken"

     console.log(` O ${this.tipo} atacou usando ${tipoDeAtaque}` )
}
    }
    



let magoLuminoso = new Hero("Gandalf", 700 , "mago")
let guerreiroDaAldeia = new Hero("Frodo", 21 , "guerreiro")
let mongeCorronpido = new Hero("Gollum", 300 , "monge")
let ninjaDeGondor = new Hero("Talion" , 45 , "ninja")

 

magoLuminoso.atacar()
guerreiroDaAldeia.atacar()
mongeCorronpido.atacar()
ninjaDeGondor.atacar()
