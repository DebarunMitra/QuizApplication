let bar=document.getElementById('myLinks');
function barAccess()
{
 console.log('in');
 if(bar.style.display=="block")
 {
   console.log("none");
   bar.style.display="none";
 }
 else {
       console.log("block");
   bar.style.display="block";
 }
}
$(document).ready(function(){
 $('#myModal').modal('show');
/*  $(window).load(function(){
                $('#exampleModal').modal('show');
            });*/
       //     $('#myModal').on('click', function () {
         //     $('#myInput').trigger('focus')
           // })
     /*$(window).load(function(){
        $('#myModal').modal('show');
      });*/
});




 