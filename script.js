// let displayValue = '';

// function appendToDisplay(value) {
//   displayValue += value;
//   document.getElementById('display').value = displayValue;
// }

// function clearDisplay() {
//   displayValue = '';
//   document.getElementById('display').value = displayValue;
// }

// function calculate() {
//   try {
//     const result = eval(displayValue);
//     document.getElementById('display').value = result;
//     displayValue = '';
//   } catch (error) {
//     document.getElementById('display').value = 'Error';
//     displayValue = '';
//   }
// }


 let btnC = document.getElementById("btnC");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
    let btn9 = document.getElementById("btn9");
    let btn0 = document.getElementById("btn0");
    let btnDot = document.getElementById("btnDot");
    let btnEqual = document.getElementById("btnEqual");
    let btnPlus = document.getElementById("btnPlus");
    let btnMinus = document.getElementById("btnMinus");
    let btnDivide = document.getElementById("btnDivide");
    let btnMultiplication = document.getElementById("btnMultiplication");
    let display = document.getElementById("inpDis");

    var number = 0;
    let operator;

    btnPlus.addEventListener("click", function () {
      operator = "plus";
      if (typeof midNum == 'undefined') {
        number = display.value;
      } else {
        number = midNum;
      }
      display.value = ""
      console.log(number);
    });
    btnMinus.addEventListener("click", function () {
      operator = "minus";
      if (typeof midNum == 'undefined') {
        number = display.value;
      } else {
        number = midNum;
      }
      display.value = ""
      console.log(number);
    });
    btnDivide.addEventListener("click", function () {
      operator = "divide";
      if (typeof midNum == 'undefined') {
        number = display.value;
      } else {
        number = midNum;
      }
      display.value = ""
      console.log(number);
    });
    btnMultiplication.addEventListener("click", function () {
      operator = "multiply";
      if (typeof midNum == 'undefined') {
        number = display.value;
      } else {
        number = midNum;
      }
      display.value = ""
      console.log(number);
    });

    var midNum;
    function midCalculations(midNumber) {
      switch (operator) {
        case "plus":
          midNum = parseFloat(number) + parseFloat(midNumber);
          break;
        case "minus":
          midNum = parseFloat(number) - parseFloat(midNumber);
          break;
        case "divide":
          midNum = parseFloat(number) / parseFloat(midNumber);
          break;
        case "multiply":
          midNum = parseFloat(number) * parseFloat(midNumber);
          break;
        default:
          break;
      }
    }
    function selectOperator(num) {
      switch (operator) {
        case "plus":
          number = parseFloat(number) + parseFloat(num);
          break;
        case "minus":
          number = parseFloat(number) - parseFloat(num);
          break;
        case "divide":
          number = parseFloat(number) / parseFloat(num);
          break;
        case "multiply":
          number = parseFloat(number) * parseFloat(num);
          break;
      }
      console.log(number);
    }
    function displayOnScreen(num) {
      if (display.value == 0 && display.value != "0.") {
        display.value = num;
      } else {
        display.value = display.value + num;
      }
    }

    btnC.addEventListener("click", function () {
      display.value = "";
      number = 0;
      midNum = undefined;
      operator = undefined;
    });
    btnDot.addEventListener("click", function () {
      let dotCount = display.value.match(/\./g);
      if (dotCount && dotCount.length >= 1) {

      } else {
        if (display.value == "") {
          display.value = "0.";
        } else {
          display.value = display.value + ".";
        }
      }
    });
    btn0.addEventListener("click", function () {
      displayOnScreen(0);
      midCalculations(display.value);
    });
    btn1.addEventListener("click", function () {
      displayOnScreen(1);
      midCalculations(display.value);
    });
    btn2.addEventListener("click", function () {
      displayOnScreen(2);
      midCalculations(display.value);
    });
    btn3.addEventListener("click", function () {
      displayOnScreen(3);
      midCalculations(display.value);
    });
    btn4.addEventListener("click", function () {
      displayOnScreen(4);
      midCalculations(display.value);
    });
    btn5.addEventListener("click", function () {
      displayOnScreen(5);
      midCalculations(display.value);
    });
    btn6.addEventListener("click", function () {
      displayOnScreen(6);
      midCalculations(display.value);
    });
    btn7.addEventListener("click", function () {
      displayOnScreen(7);
      midCalculations(display.value);
    });
    btn8.addEventListener("click", function () {
      displayOnScreen(8);
      midCalculations(display.value);
    });
    btn9.addEventListener("click", function () {
      displayOnScreen(9);
      midCalculations(display.value);
    });
    btnEqual.addEventListener("click", function () {
      if (display.value == "") {
        selectOperator(0);
      } else {
        selectOperator(display.value);
      }

      if (isNaN(number)) {
        display.value = "Invalid"
        number = 0;
      } else {
        console.log("else");
        if (typeof midNum == 'undefined') {
          console.log("else if");
        } else {
          console.log("else else");
          display.value = number;
        }
      }
      operator = undefined;
      midNum = undefined;
    });
