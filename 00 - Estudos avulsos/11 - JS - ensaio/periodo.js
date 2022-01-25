function manha(){
  document.getElementById('quarto').src='manha.jpg'
}

function noite(){
  document.getElementById('quarto').src='noite.jpg'
}

var data = new Date();
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear(); 

var mescorreto = mes + 1;

document.getElementById("mudar").innerText = dia ;
document.getElementById("mes").innerText = mescorreto ;
document.getElementById("mudarAno").innerText = ano ;
