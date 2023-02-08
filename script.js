$(document).ready(()=>{
    //funcion para mostrar la imagen oculta
    $('.mostrar').click(function() {
        var i = 0;
        var parar = setInterval(mostrarImg, 600);
            
        function mostrarImg(){
          if(i < $("li").length){
            $("li").eq(i).fadeIn(400);
            i++;
          }
          else
            clearInterval(parar);
        }     
    });



    //funcion para ocultar la immagen
    $('.ocultar').click(function() {
        var i = 7;
        var parar = setInterval(ocultarImg, 600);
            
        function ocultarImg(){
          if($("li").length >= i){
            $("li").eq(i).fadeOut(400);
            i--;
          }
          else
            clearInterval(parar);
        }     
    });
 
}
);