// play noughts & crosses

var currentPlayer = "O";          // declare a currentPlayer variable "O"

function place(box) {             // create function place()
  if (box.innerText != "") return;
  box.innerText = currentPlayer;  // assign currentPlayer to box.innerText
  currentPlayer === "O" ? currentPlayer = "X" : currentPlayer = "O";

  checkNoughtsCross()
}

  //check winner    (1st edit)
  // function checkNoughtsCross() {
  //   var first = document.getElementById("0_0").innerText;
  //   console.log(first);
  //   var second = document.getElementById("1_0").innerText;
  //   console.log(second);
  //   var third = document.getElementById("2_0").innerText;
  //   console.log(third);
  //   if(first == "") return;
  //   if(first == second && first == third) {
  //       alert("Winner!");
  //   }
  // }
   
  // (2nd edit)
  // function checkNoughtsCross() {
  //   console.log('checkNoughtsCross function was called')
  //   for(var i = 0; i <= 2; i++) {
  //       var first = document.getElementById("0_" + i).innerText;
  //       var second = document.getElementById("1_" + i).innerText;
  //       var third = document.getElementById("2_" + i).innerText;
  //       if(first == "") continue;
  //       if(first == second && first == third) {
  //           alert("Winner!");
  //       }
  //     }
  //   }

  //   for(var i = 0; i <= 2; i++) {
  //     var first = document.getElementById(i + "_0").innerText;
  //     var second = document.getElementById(i + "_1").innerText;
  //     var third = document.getElementById(i + "_2").innerText;
  //     if(first == "") continue;
  //     if(first == second && first == third) {
  //         alert("Winner!");
  //     }
  //   }

  //   var firstD1 = document.getElementById("0_0").innerText;
  //   var secondD1 = document.getElementById("1_1").innerText;
  //   var thirdD1 = document.getElementById("2_2").innerText;
  //   if(firstD1 != "" && firstD1 == secondD1 && firstD1 ==thirdD1) {
  //       alert("Winner!");
  //   }

  //   var firstD2 = document.getElementById("0_2").innerText;
  //   var secondD2 = document.getElementById("1_1").innerText;
  //   var thirdD2 = document.getElementById("2_0").innerText;
  //   if(firstD2 != "" && firstD2 == secondD2 && firstD2 == thirdD2) {
  //       alert("Winner!");
  //   }

function checkNoughtsCross() {
  for(var i = 0; i <= 2; i++) {
      checkWinner(document.getElementById(i + "_0").innerText,
        document.getElementById(i + "_1").innerText,
        document.getElementById(i + "_2").innerText);
      checkWinner(document.getElementById("0_" + i).innerText,
        document.getElementById("1_" + i).innerText,
        document.getElementById("2_" + i).innerText);
    }
      checkWinner(document.getElementById("0_0").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_2").innerText);
      checkWinner(document.getElementById("0_2").innerText,
        document.getElementById("1_1").innerText,
        document.getElementById("2_0").innerText);
}

function checkWinner(first, second, third) {
  if(first != "" && first == second && first == third) {
      alert(third + " is the WINNER!");
    }
}