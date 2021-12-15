function manha(){
  document.getElementById('quarto').src='manha.jpg'
}

function noite(){
  document.getElementById('quarto').src='noite.jpg'
}

var data = new Date();
var dia = data.getDate();
var ano = data.getFullYear(); 

document.getElementById("mudar").innerText = dia ;
document.getElementById("mudarAno").innerText = ano ;
