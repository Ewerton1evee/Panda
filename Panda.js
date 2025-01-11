let button = document
 .querySelectorAll("button");

button[0].style.backgroundColor = "green";
let n1 = 1;
let n2 = 1;

function afavor() {
 let h3 = document
  .querySelectorAll("h3");
 h3[0].innerHTML = "Votos: " + n1;
 n1++;
}

function contra() {
 let h3 = document
  .querySelectorAll("h3");
 h3[1].innerHTML = "Votos: " + n2;
 n2++;
}
