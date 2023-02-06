var respostas = [
  document.getElementById("resposta"),
  document.getElementById("resposta1"),
  document.getElementById("resposta2"),
  document.getElementById("resposta3")
];

respostas.forEach(x => x.style.display = "none");

function ativar(posicao){      
  if (respostas[posicao].style.display == "none"){ 
    respostas.forEach(x => x.style.display = "none");
    respostas[posicao].style.display = "block"; 
  }
  else {
    respostas[posicao].style.display = "none";
  }
}