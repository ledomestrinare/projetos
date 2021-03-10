function simular() {
  //coletando dados e salvando em variaveis
  var valorFinanciado = document.getElementById("valor").valueAsNumber;
  var prazoAnos = document.getElementById("prazo").valueAsNumber;
  var jurosAno = document.getElementById("juros").valueAsNumber;

  //transformando prazoAnos em prazoMeses
  var prazoMeses = prazoAnos * 12;

  //zerando campos depois de clicar em Simular
  document.getElementById("valor").value = "";
  document.getElementById("prazo").value = "";
  document.getElementById("juros").value = "";

  document.getElementById("valorR").value = valorFinanciado;
  document.getElementById("prazoR").value = prazoMeses;
  document.getElementById("jurosR").value;

  // calculo de juros por mes
  jurosMes = (Math.pow(1 + jurosAno, (1 / 12))) - 1;
  console.log(jurosMes)

  //amortizacao
  var amortizacao = valorFinanciado / prazoMeses;

  //calculo de juros, juros acumulado e total das parcelas
  var i = 0;
  var qtParcela = [1, 2, 3, 4, 5]
  var jurosList = [];
  var jurosAcumulado = 0;
  var totalParcela = [];

  while (i < prazoMeses) {
    var jurosCalculo = ((valorFinanciado - (i * amortizacao)) * jurosMes);
    jurosList.push(jurosCalculo);
    jurosAcumulado += jurosCalculo;
    totalParcela.push(parseFloat(jurosCalculo + amortizacao));
    i++;
  }

  //modificando os valores na tabela
  document.getElementById("res_prestacao1").innerHTML = qtParcela[0];
  document.getElementById("res_prestacao2").innerHTML = qtParcela[1];
  document.getElementById("res_prestacao3").innerHTML = qtParcela[2];
  document.getElementById("res_prestacao4").innerHTML = qtParcela[3];
  document.getElementById("res_prestacao5").innerHTML = qtParcela[4];

  document.getElementById("res_amortizacao1").innerHTML = "R$ " + amortizacao.toFixed(2);
  document.getElementById("res_amortizacao2").innerHTML = "R$ " + amortizacao.toFixed(2);
  document.getElementById("res_amortizacao3").innerHTML = "R$ " + amortizacao.toFixed(2);
  document.getElementById("res_amortizacao4").innerHTML = "R$ " + amortizacao.toFixed(2);
  document.getElementById("res_amortizacao5").innerHTML = "R$ " + amortizacao.toFixed(2);

  document.getElementById("res_juros1").innerText = "R$ " + jurosList[0].toFixed(2);
  document.getElementById("res_juros2").innerText = "R$ " + jurosList[1].toFixed(2);
  document.getElementById("res_juros3").innerText = "R$ " + jurosList[2].toFixed(2);
  document.getElementById("res_juros4").innerText = "R$ " + jurosList[3].toFixed(2);
  document.getElementById("res_juros5").innerText = "R$ " + jurosList[4].toFixed(2);

  document.getElementById("res_total1").innerHTML = "R$ " + totalParcela[0].toFixed(2);
  document.getElementById("res_total2").innerHTML = "R$ " + totalParcela[1].toFixed(2);
  document.getElementById("res_total3").innerHTML = "R$ " + totalParcela[2].toFixed(2);
  document.getElementById("res_total4").innerHTML = "R$ " + totalParcela[3].toFixed(2);
  document.getElementById("res_total5").innerHTML = "R$ " + totalParcela[4].toFixed(2);

  document.getElementById("jurosR").value = jurosAcumulado.toFixed(2)
  document.getElementById("parcela").style.visibility = "visible";

}



