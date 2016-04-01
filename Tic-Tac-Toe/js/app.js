$x1y1 = document.getElementById("x1y1");
$x1y2 = document.getElementById("x1y2");
$x1y3 = document.getElementById("x1y3");
$x2y1 = document.getElementById("x2y1");
$x2y2 = document.getElementById("x2y2");
$x2y3 = document.getElementById("x2y3");
$x3y1 = document.getElementById("x3y1");
$x3y2 = document.getElementById("x3y2");
$x3y3 = document.getElementById("x3y3");
$joueur = document.getElementById("joueur");
var compteur = 1;
var idClick = "";
var a = true;
var b = true;
var c = true;
var d = true;
var e = true;
var f = true;
var g = true;
var h = true;
var i = true;

function afficheConsole() {
  console.log(compteur);
  console.log(idClick);
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);
  console.log(g);
  console.log(h);
  console.log(i);
  console.log($x1y1);
  console.log($x1y2);
  console.log($x1y3);
  console.log($x2y1);
  console.log($x2y2);
  console.log($x2y3);
  console.log($x3y1);
  console.log($x3y2);
  console.log($x3y3);
};

function quiJoue() {
  compteur = compteur;
  if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
    $joueur.innerHTML = "Aux player 1 de jouer !";
  } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
    $joueur.innerHTML = "Aux player 2 de jouer !";
  }
};

function verificationCasesA() {
  if ($x1y1.classList.contains("player1")) {return a = false;}
  else if ($x1y1.classList.contains("player2")) {return a = false;}
};

function verificationCasesB() {
  if ($x1y2.classList.contains("player1")) {return b = false;}
  else if ($x1y2.classList.contains("player2")) {return b = false;}
};
function verificationCasesC() {
  if ($x1y3.classList.contains("player1")) {return c = false;}
  else if ($x1y3.classList.contains("player2")) {return c = false;}
};
function verificationCasesD() {
  if ($x2y1.classList.contains("player1")) {return d = false;}
  else if ($x2y1.classList.contains("player2")) {return d = false;}
};
function verificationCasesE() {
  if ($x2y2.classList.contains("player1")) {return e = false;}
  else if ($x2y2.classList.contains("player2")) {return e = false;}
};
function verificationCasesF() {
  if ($x2y3.classList.contains("player1")) {return f = false;}
  else if ($x2y3.classList.contains("player2")) {return f = false;}
};
function verificationCasesG() {
  if ($x3y1.classList.contains("player1")) {return g = false;}
  else if ($x3y1.classList.contains("player2")) {return g = false;}
};
function verificationCasesH() {
  if ($x3y2.classList.contains("player1")) {return h = false;}
  else if ($x3y2.classList.contains("player2")) {return h = false;}
};
function verificationCasesI() {
  if ($x3y3.classList.contains("player1")) {return i = false;}
  else if ($x3y3.classList.contains("player2")) {return i = false;}
};

function quiWin() {
  var win1 = $x1y1.classList.contains("player1") && $x1y2.classList.contains("player1") && $x1y3.classList.contains("player1");
  var win2 = $x2y1.classList.contains("player1") && $x2y2.classList.contains("player1") && $x2y3.classList.contains("player1");
  var win3 = $x3y1.classList.contains("player1") && $x3y2.classList.contains("player1") && $x3y3.classList.contains("player1");
  var win4 = $x1y1.classList.contains("player1") && $x2y1.classList.contains("player1") && $x3y1.classList.contains("player1");
  var win5 = $x1y2.classList.contains("player1") && $x2y2.classList.contains("player1") && $x3y2.classList.contains("player1");
  var win6 = $x1y3.classList.contains("player1") && $x2y3.classList.contains("player1") && $x3y3.classList.contains("player1");
  var win7 = $x1y1.classList.contains("player1") && $x2y2.classList.contains("player1") && $x3y3.classList.contains("player1");
  var win8 = $x1y3.classList.contains("player1") && $x2y2.classList.contains("player1") && $x3y1.classList.contains("player1");
  var win9 = $x1y1.classList.contains("player2") && $x1y2.classList.contains("player2") && $x1y3.classList.contains("player2");
  var win10 = $x2y1.classList.contains("player2") && $x2y2.classList.contains("player2") && $x2y3.classList.contains("player2");
  var win11 = $x3y1.classList.contains("player2") && $x3y2.classList.contains("player2") && $x3y3.classList.contains("player2");
  var win12 = $x1y1.classList.contains("player2") && $x2y1.classList.contains("player2") && $x3y1.classList.contains("player2");
  var win13 = $x1y2.classList.contains("player2") && $x2y2.classList.contains("player2") && $x3y2.classList.contains("player2");
  var win14 = $x1y3.classList.contains("player2") && $x2y3.classList.contains("player2") && $x3y3.classList.contains("player2");
  var win15 = $x1y1.classList.contains("player2") && $x2y2.classList.contains("player2") && $x3y3.classList.contains("player2");
  var win16 = $x1y3.classList.contains("player2") && $x2y2.classList.contains("player2") && $x3y1.classList.contains("player2");
  if(win1 || win2 || win3 || win4 || win5 || win6 || win7 || win8) {
    alert("player1 win !");
    retry();
    quiJoue();
  } else if(win9 || win10 || win11 || win12 || win13 || win14 || win15 || win16) {
    alert("player2 win !");
    retry();
    quiJoue();
  }
};

function divClick(event) { // vérification de l'élément clicker par id
  idClick = event.target.id;

  if(idClick === "x1y1" && a == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x1y1.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x1y1.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x1y2" && b == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x1y2.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x1y2.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x1y3" && c == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x1y3.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x1y3.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x2y1" && d == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x2y1.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x2y1.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x2y2" && e == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x2y2.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x2y2.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x2y3" && f == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x2y3.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x2y3.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x3y1" && g == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x3y1.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x3y1.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x3y2" && h == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x3y2.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x3y2.classList.add('player2');
      compteur += 1;
    }
  }
  else if(idClick === "x3y3" && i == true) {
    if (compteur == 1 || compteur == 3 || compteur == 5 || compteur == 7 || compteur == 9) {
      $x3y3.classList.add('player1');
      compteur += 1;
    } else if (compteur == 2 || compteur == 4 || compteur == 6 || compteur == 8) {
      $x3y3.classList.add('player2');
      compteur += 1;
    }
  }
  verificationCasesA();
  verificationCasesB();
  verificationCasesC();
  verificationCasesD();
  verificationCasesE();
  verificationCasesF();
  verificationCasesG();
  verificationCasesH();
  verificationCasesI();
  quiJoue();
  quiWin();
  afficheConsole();
};

function retry() {
  compteur = 1;
  idClick = "";
  a = true;
  b = true;
  c = true;
  d = true;
  e = true;
  f = true;
  g = true;
  h = true;
  i = true;
  $x1y1.classList.remove("player1");
  $x1y1.classList.remove("player2");
  $x1y2.classList.remove("player1");
  $x1y2.classList.remove("player2");
  $x1y3.classList.remove("player1");
  $x1y3.classList.remove("player2");
  $x2y1.classList.remove("player1");
  $x2y1.classList.remove("player2");
  $x2y2.classList.remove("player1");
  $x2y2.classList.remove("player2");
  $x2y3.classList.remove("player1");
  $x2y3.classList.remove("player2");
  $x3y1.classList.remove("player1");
  $x3y1.classList.remove("player2");
  $x3y2.classList.remove("player1");
  $x3y2.classList.remove("player2");
  $x3y3.classList.remove("player1");
  $x3y3.classList.remove("player2");
};
quiJoue();
