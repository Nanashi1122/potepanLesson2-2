/*global $*/
$(document).ready(function(){
  let result = 0;
  let display = "";
  let inputFlag = 0;
  // 0 初期値 1 数値 2 記号(+ - .以外） 3 記号(+) 4 記号(-) 5 記号(.)
  let integerZero = false;
  //計算記号後の０整数入力
  let minusFlag = false;
  //計算記号後のマイナス数字
  let decimalFlag = false;
  //小数点入力
  let resultFlag = false;
  //true 入力時画面初期化
  const maxLength = 23;
  
  
  $('#button-1').click(function(){
    if(resultFlag == true){
      allClear();
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("1");
      inputFlag = 1;
      return;
    }
     updateDisplay("1");
     inputFlag = 1;
  })
  $('#button-2').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("2");
      inputFlag = 1;
      return;
    }
    updateDisplay("2");
    inputFlag = 1;
  })
  $('#button-3').click(function(){
    if(resultFlag == true){
      allClear();
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("3");
      inputFlag = 1;
      return;
    }
    updateDisplay("3");
    inputFlag = 1;
  })
  $('#button-4').click(function(){
    if(resultFlag == true){
      allClear();
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("4");
      inputFlag = 1;
      return;
    }
    updateDisplay("4");
    inputFlag = 1;
  })
  $('#button-5').click(function(){
    if(resultFlag == true){
      allClear();
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("5");
      inputFlag = 1;
      return;
    }
    updateDisplay("5");
    inputFlag = 1;
  })
  $('#button-6').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("6");
      inputFlag = 1;
      return;
    }
    updateDisplay("6");
    inputFlag = 1;
  })
  $('#button-7').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("7");
      inputFlag = 1;
      return;
    }
    updateDisplay("7");
    inputFlag = 1;
  })
  $('#button-8').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("8");
      inputFlag = 1;
      return;
    }
    updateDisplay("8");
    inputFlag = 1;
  })
  $('#button-9').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 2 && integerZero == true){
      replaceZero("9");
      inputFlag = 1;
      return;
    }
    updateDisplay("9");
    inputFlag = 1;
  })
  $('#button-0').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 0){
      return;
    }else if(inputFlag == 2){
      if(integerZero == false){
        updateDisplay("0");
        integerZero = true;
        return;
      }else{
        return;
      }
    }
    updateDisplay("0");
    inputFlag = 1;
  })
  $('#button-00').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 0){
      return;
    }else if(inputFlag == 2){
      if(integerZero == false){
        updateDisplay("0");
        integerZero = true;
        return;
      }else{
        return;
      }
    }
    if(display.length >= maxLength - 1){
      updateDisplay("0");
      inputFlag = 1;
      return;
    }else{
      updateDisplay("00");
      inputFlag = 1;
    }
  })
  $('#button-plus').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 0){
      return;
    }else if(inputFlag >= 2){
      if(minusFlag == true){
        return;
      }
      replaceSymbol("+");
      inputFlag = 3;
      return;
    }
    updateDisplay("+");
    inputFlag = 3;
    integerZero = false;
    minusFlag = false;
    decimalFlag = false;
  })
  $('#button-minus').click(function(){
    if(resultFlag == true){
      allClear()
      resultFlag = false;
    }
    if(inputFlag == 2){
      updateDisplay("-");
      inputFlag = 4;
      minusFlag = true;
      return;
    }else if(inputFlag == 3){
      replaceSymbol("-");
      inputFlag = 4;
      return;
    }else if(inputFlag >= 4){
      return;
    }
    updateDisplay("-");
    inputFlag = 4;
    integerZero = false;
    minusFlag = false;
    decimalFlag = false;
  })
  $('#button-multiple').click(function(){
    if(resultFlag == true){
      allClear();
      resultFlag = false;
    }
    if(inputFlag == 0){
      return;
    }else if(inputFlag >= 2){
      if(minusFlag == true){
        return;
      }
      replaceSymbol("*");
      inputFlag = 2;
      return;
    }
    updateDisplay("*");
    inputFlag = 2;
    integerZero = false;
    minusFlag = false;
    decimalFlag = false;
  })
  $('#button-divide').click(function(){
    if(resultFlag == true){
      allClear();
      resultFlag = false;
    }
    if(inputFlag == 0){
      return;
    }else if(inputFlag >= 2){
      if(minusFlag == true){
        return;
      }
      replaceSymbol("/");
      inputFlag = 2;
      return;
    }
    updateDisplay("/");
    inputFlag = 2;
    integerZero == false;
    minusFlag = false;
    decimalFlag = false;
  })
  $('#button-point').click(function(){
    if(resultFlag == true){
      allClear();
      resultFlag = false;
    }
    if(inputFlag == 0 || inputFlag == 2 || inputFlag == 3 || inputFlag == 4){
      updateDisplay('0.');
      inputFlag = 5;
      decimalFlag = true;
      return;
    }else if(inputFlag == 5){
      return;
    }
    if(decimalFlag == false){
      updateDisplay(".");
      inputFlag = 5;
      decimalFlag = true;
    }else{
      return;
    }
  })
  $('#button-AC').click(function(){
    allClear();
    inputFlag = 0;
  })
  $('#button-equal').click(function(){
    resultDisplay();
    inputFlag = 0;
  })

  
  function updateDisplay(N){
    display += N;
    $('#display-number').html(display);
    if(display.length == maxLength){
      display = display.slice(0,-1);
    }
  }
  function replaceZero(N){
    display = display.slice(0,-1);
    display += N;
    $('#display-number').html(display);
  }
  function replaceSymbol(S){
    display = display.slice(0,-1);
    display += S;
    $('#display-number').html(display);
  }
  function allClear(){
    display = "";
    $("#display-number").html("0");
    integerZero = false;
    minusFlag = false;
    decimalFlag = false;
    resultFlag = false;
  }
  function resultDisplay(){
    result = eval(display);
    display = "";
    updateDisplay(result);
    inputFlag = 0;
    integerZero = false;
    minusFlag = false;
    decimalFlag = false;
    resultFlag = true;
  }
})