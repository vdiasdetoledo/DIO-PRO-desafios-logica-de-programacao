# 🛡️ Classificador de Nível de Herói

Este projeto é uma solução para o desafio de lógica de programação da **DIO (Digital Innovation One)**, focado em determinar a patente/nível de um herói com base na sua quantidade de experiência (XP).

---

## 📌 Funcionalidades

- Armazena o **nome** do herói e sua quantidade de **XP (Experiência)**.
- Determina a patente do herói utilizando estruturas condicionais com base nas seguintes faixas de XP:

| Quantidade de XP | Nível / Patente |
| :--- | :--- |
| Menor ou igual a 1.000 | **Ferro** |
| Entre 1.001 e 2.000 | **Bronze** |
| Entre 2.001 e 5.000 | **Prata** |
| Entre 5.001 e 7.000 | **Ouro** |
| Entre 7.001 e 8.000 | **Platina** |
| Entre 8.001 e 9.000 | **Ascendente** |
| Entre 9.001 e 10.000 | **Imortal** |
| Maior ou igual a 10.001 | **Radiante** |

---

## 🛠️ Conceitos Utilizados

- **Variáveis**: para armazenar o nome, o XP e o nível do herói.
- **Operadores Relacionais e Lógicos**: para checar os intervalos de experiência.
- **Estruturas de Decisão (`if / else if`)**: para atribuir a patente correspondente.

---

## 💻 Código do Projeto

```javascript

let nome = "Alpha";


let XP = 12000;



let nivel = "";



if (XP >= 0 && XP <=1000) { nivel = "Ferro";}


else if (XP >=1001 && XP <= 2000) {nivel = "Bronze";}


else if (XP >=2001 && XP <= 5000) {nivel = "Prata";}


else if (XP >=5001 && XP <= 7000) {nivel = "Ouro";}


else if (XP >=7001 && XP <= 8000) {nivel = "Platina";}


else if (XP >=8001 && XP <= 9000) {nivel = "Ascendente";}


else if (XP >=9001 && XP <= 10000) {nivel ="Imortal";}


else if (XP >= 10001) {nivel = "Radiante";} ;


console.log("O Heroi de nome  "+nome+

" esta no nivel "+nivel+ "!");
