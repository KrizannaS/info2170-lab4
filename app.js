 
$(document).ready(function () { 
   $('#btn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        Search();
   });
});



function Search(){
 
$.ajax({
  type: "POST",
  url: "http://localhost/info2180-lab4/superheroes.php",
  dataType:"html",
  data: dataString,
  success: function(data) {
    alert(data);
    }
});

}