# ⚔️ Calculadora de Partidas Rankeadas

Este projeto é uma solução para o desafio da **DIO (Digital Innovation One)**, com o objetivo de calcular o saldo de partidas rankeadas de um herói e determinar seu nível/elo com base nas suas vitórias e derrotas.

---

## 📌 Funcionalidades

- Recebe o número de **vitórias** e **derrotas** de um jogador.
- Calcula o **saldo de vitórias** (`vitórias - derrotas`).
- Classifica o jogador em um **nível/elo** com base nas seguintes regras:

| Saldo de Vitórias | Nível / Elo |
| :--- | :--- |
| Menor ou igual a 10 | **Ferro** |
| Entre 11 e 20 | **Bronze** |
| Entre 21 e 50 | **Prata** |
| Entre 51 e 80 | **Ouro** |
| Entre 81 e 90 | **Diamante** |
| Entre 91 e 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

---

## 🛠️ Tecnologias Utilizadas

- **JavaScript (ES6+)**: Linguagem utilizada para desenvolver a lógica.

---

## 💻 Estrutura do Código

A função principal `contadorDePartidas(vitorias, derrotas)` faz o cálculo do saldo e utiliza estruturas condicionais (`if / else if`) para atribuir a patente do herói.

```javascript




let vitorias = 470;
let derrotas = 400;


function contadorDePartidas(vitorias,derrotas){
   let saldoVitorias = vitorias-derrotas;
   let nivel = "";

   if (saldoVitorias >=0 && saldoVitorias <=10) { nivel = "Ferro";}


   else if (saldoVitorias >=11 && saldoVitorias <= 20) {nivel = "Bronze";}


   else if (saldoVitorias >=21 && saldoVitorias <= 50) {nivel = "Prata";}


   else if (saldoVitorias >=51 && saldoVitorias <= 80) {nivel = "Ouro";}


   else if (saldoVitorias >=81 && saldoVitorias <= 90) {nivel = "Diamante";}


   else if (saldoVitorias >=91 && saldoVitorias <= 100) {nivel = "Lendario";}


   else if (saldoVitorias >=101 ) {nivel ="Imortal";}

   return("O Heroi tem o saldo de "+saldoVitorias+
" vitorias e esta no nivel de "+nivel+ "!");

}
