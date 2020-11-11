 
$(document).ready(function () { 
   $('#btn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        Search();
   });
});



function Search(){
 var searching=document.getElementById("myInput");
 var input = searching.value;
 searching.value="";

$.ajax({
  type: "POST",
  url: "http://localhost/info2180-lab4/superheroes.php?query=" + input ,
  success: function(data) {
    $("#result").html(data)
    }
  });


}