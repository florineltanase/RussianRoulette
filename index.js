let tries = 0;
const button1 = document.querySelector("btn");

function Verificare() {
  let check = 0;

  if (number === www) {
    check = 1;
  }

  return check;
}

function pressTheButton() {
  x = [1, 2, 3, 4, 5, 6];
  www = getRandomInt(1, 6);
  number = Math.floor(Math.random() * x.length);

  console.log("nr din x" + number);
  console.log("nr radon" + www);
    if (Verificare() == 0 && tries>=7) {
      document.getElementById("demo").innerHTML = "Youre free to go";
      document.body.style.backgroundColor = "#00ff00";
    } else if (Verificare() == 1 && tries<=7) {
      document.getElementById("demo").innerHTML = "GAME OVER HANG OVER";
      document.body.style.backgroundColor = "#ff0000";
      
      
    }

    console.log("tries" + tries);
    tries++;
  
}

function ResetAll() {

 
  document.body.style.backgroundColor = "#00ff00";
  tries = 0;
  document.getElementById("demo").innerHTML = " ";
  console.clear();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
