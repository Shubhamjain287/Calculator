 var a = document.form.Textview ;

// Taking Input From User for + , - , etc...

function input(num){
  a.value += num ;
}

// Clean Screen Function , Clean all the values of Calculator..

function Clean(){
  a.value = '0';
  a.value = '';
}

// Equal to Function Shows The Sum , multiplication , etc of all the numbers..

function Equal(){
   var exp = a.value ;
   if(exp) {
     try{ a.value = eval(exp);}
      catch(e){
         document.form.Textview.value = 'Syntax Error !';
      }
   }
  if(a.value == " "){
     a.value += '0';
  }
  if(a.value == 'Infinity'){
     document.form.Textview.value = "Can't Divide by 0";
  }
}

// Back Function Deletes the value 1 by 1 in the Calculator..

function Back(){
  a.value = a.value.substring(0,a.value.length-1);
}

// Show 0 only..

function Zero() {
    var z = document.form.Textview;
    if (z.value != " ") {
        z.value += '0';
    }
}
