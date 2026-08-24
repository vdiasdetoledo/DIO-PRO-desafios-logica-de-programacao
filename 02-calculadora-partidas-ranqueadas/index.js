






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



console.log(contadorDePartidas(vitorias,derrotas))


