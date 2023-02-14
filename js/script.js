var divs = [
  document.getElementById("resposta"),
  document.getElementById("resposta1"),
  document.getElementById("resposta2"),
  document.getElementById("resposta3")
];

divs.forEach(x => x.style.display = "none")

function ativar(posicao){      
  if (divs[posicao].style.display == "none"){ 
    divs.forEach(x => x.style.display = "none");
    divs[posicao].style.display = "block";
  }
  else {
    divs[posicao].style.display = "none";
    }
  }