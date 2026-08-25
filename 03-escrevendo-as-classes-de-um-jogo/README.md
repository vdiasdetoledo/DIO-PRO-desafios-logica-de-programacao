# 🗡️ Desafio: Escrevendo as Classes de um Jogo

Este repositório contém a solução desenvolvida para o desafio de código **"Escrevendo as Classes de um Jogo"**, integrante do bootcamp de lógica de programação da [DIO (Digital Innovation One)](https://www.dio.me/).

---

## 📌 Objetivo do Desafio

O objetivo principal foi aplicar os conceitos fundamentais da programação orientada a objetos (POO) em JavaScript para simular o comportamento de ataque de diferentes classes de heróis em um jogo de aventura.

### Requisitos Implementados:
- **Estrutura de Classe e Objeto:** Criação de uma classe genérica `Hero` representando um herói da aventura.
- **Propriedades da Classe:**
  - `nome` (String)
  - `idade` (String / Number)
  - `tipo` (guerreiro, mago, monge, ninja)
- **Método de Ação:** Implementação do método `atacar()` que identifica o tipo do herói e exibe a mensagem correspondente com o tipo de ataque utilizado:
  - **Mago** → usa *magia*
  - **Guerreiro** → usa *espada*
  - **Monge** → usa *artes marciais*
  - **Ninja** → usa *shuriken*

---

## 🛠️ Tecnologias e Conceitos Utilizados

- **Linguagem:** JavaScript (ES6+)
- **Conceitos Aplicados:**
  - Variáveis e Constantes
  - Operadores de Atribuição e Comparação
  - Estruturas de Decisão (`if / else if`)
  - Funções e Métodos de Classe
  - Orientação a Objetos (Classes, Instanciação e Construtores)
  - Interpolação de Strings (*Template Literals*)

---

## 💻 Código da Solução

```javascript
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let tipoDeAtaque = "";

        if (this.tipo === "mago") {
            tipoDeAtaque = "magia";
        } else if (this.tipo === "guerreiro") {
            tipoDeAtaque = "espada";
        } else if (this.tipo === "monge") {
            tipoDeAtaque = "artes marciais";
        } else if (this.tipo === "ninja") {
            tipoDeAtaque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${tipoDeAtaque}`);
    }
}

// Instanciação dos heróis
let magoLuminoso = new Hero("Gandalf", "700 anos", "mago");
let guerreiroDaAldeia = new Hero("Frodo", "21 anos", "guerreiro");
let mongeCorrompido = new Hero("Gollum", "300 anos", "monge");
let ninjaDeGondor = new Hero("Talion", "45 anos", "ninja");

// Execução das ações
magoLuminoso.atacar();
guerreiroDaAldeia.atacar();
mongeCorrompido.atacar();
ninjaDeGondor.atacar();
