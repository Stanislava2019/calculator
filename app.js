function plus() {
  var num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseFloat(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseFloat(num2);
  
  result = num1+num2;
  //document.getElementById('out').innerHTML = result;
  document.getElementById('out').value = result;
 
}

function minus() {
  var num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseFloat(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseFloat(num2);

  result = num1-num2;
  document.getElementById('out').value = result;

}

function proiz() {
  var num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseFloat(num1);

  num2 = document.getElementById('n2').value;
  num2 = parseFloat(num2);
  result = num1 * num2;
  document.getElementById('out').value = result;


}
function del() {
  var num1, num2, result;
  num1 = document.getElementById('n1').value;
  num1 = parseFloat(num1);

  num2 = document.getElementById ('n2').value;
  num2 = parseFloat(num2);
  result = num1/num2;
  document.getElementById('out').value=result;
}

// var num1, num2, result;
//   num1 = document.getElementById('n1').value;
//   num1 = parseInt(num1);

//   num2 = document.getElementById('n2').value;
//   num2 = parseInt(num2);

//   function plus(){
//    result = num1+num2;
//   document.getElementById('out').value = result;
//   }
//   function minus(){
//     result = num1-num2;
//     document.getElementById('out').value = result;
//   }