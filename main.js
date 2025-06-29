 $(document).ready(function(){
           $('#one').click(function(){
             document.forms.display.value += 1;
           });
           $('#two').click(function(){
             document.forms.display.value += 2;
           });
           $('#three').click(function(){
             document.forms.display.value += 3;
           });
           $('#four').click(function(){
             document.forms.display.value += 4;
           });
           $('#five').click(function(){
             document.forms.display.value += 5;
           });
           $('#six').click(function(){
             document.forms.display.value += 6;
           });
           $('#seven').click(function(){
             document.forms.display.value += 7;
           });
           $('#eight').click(function(){
             document.forms.display.value += 8;
           });
           $('#nine').click(function(){
             document.forms.display.value += 9;
           });
           $('#zero').click(function(){
             document.forms.display.value += 0;
           });
           $('#add').click(function(){
             document.forms.display.value += '+';
           });
           $('#subtract').click(function(){
             document.forms.display.value += '-';
           });
           $('#multiply').click(function(){
             document.forms.display.value += '*';
           });
           $('#divide').click(function(){
             document.forms.display.value += '/';
           });
           $('#raise').click(function(){
             document.forms.display.value += '**';
           });
            $('#perc').click(function(){
             document.forms.display.value += '*0.01';
           });
            $('#pi').click(function(){
             document.forms.display.value += '*3.1415';
           });
           $('#sqrt').click(function() {
  let current = $('#display').val();

  // Make sure current is a valid number before calculating sqrt
  if (current && !isNaN(current)) {
    let result = Math.sqrt(parseFloat(current));
    $('#display').val(result);
  } else {
    alert('Please enter a valid number');
  }
});
          $('#clear').click(function() {
             let current = $('#display').val(); 
             if (current.length > 0) {  $('#display').val(current.slice(0, -1));
        }});
           $('#dot').click(function(){
             document.forms.display.value += '.';
           });
           $('#equal').click(function(){
             if (display.value == "") {
               alert("Please enter any numbers to calculate!");
             }else{
               document.forms.display.value =
               eval(document.forms.display.value);
             }
           });
           $('#b1').click(function(){
             document.forms.display.value += '(';
           });
           $('#b2').click(function(){
             document.forms.display.value += ')';
           });
           $('#cancel').click(function(){
             document.forms.display.value = "";
           });
         })
