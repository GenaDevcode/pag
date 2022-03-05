$(document).ready(function (){
    $('.tombolripple').on('click', function (e){
        e.preventDefault();
        var a = prompt("Haga clic en cualquier anunci0 y luego copie la URL del anuncio y péguelo aquí.");

        if (a.includes("https://pruebasderecetasmama.blogspot.com"  )){
      
            alert("ingresaste un enlace equivocado");
      } else if(a.includes("https://")) {
        
            document.getElementById('downloadf').disabled = false;
      
      }
        
        else {
            alert("ingresaste un enlace equivocado");
        }
  
    })
})