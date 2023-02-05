var respostas = [
  document.getElementById("resposta"),
  document.getElementById("resposta1"),
  document.getElementById("resposta2"),
  document.getElementById("resposta3")
];

respostas.forEach(x => x.style.display = "none");

function ativar(posicao){      
  if (respostas[posicao].style.display == "none"){ 
    respostas.forEach(x => x.style.display = "none"); //esconde todos os outros
    respostas[posicao].style.display = "block"; //mostra este
  }
  else {
    respostas[posicao].style.display = "none";
  }
}