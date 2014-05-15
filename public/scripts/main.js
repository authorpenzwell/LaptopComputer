
//

//jquery for updating the price 
$( document ).ready(function() {
   $('input[name="ss"]').on('change', function(){
        if ($(this).val()=='0') {
            var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice - 200;
            $("#price").text(cPrice);        
        } else  {
           var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice + 200;
            $("#price").text(cPrice);
        }
    });
   $('input[name="ms"]').on('change', function(){
        if ($(this).val()=='0') {
            var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice - 200;
            $("#price").text(cPrice);        
        } else  {
           var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice + 200;
            $("#price").text(cPrice);
        }
    });
   $('input[name="ds"]').on('change', function(){
        if ($(this).val()=='0') {
            var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice - 200;
            $("#price").text(cPrice);        
        } else  {
           var cPrice = parseInt(document.getElementById("price").innerHTML);
            cPrice = cPrice + 200;
            $("#price").text(cPrice);
        }
    });
});

