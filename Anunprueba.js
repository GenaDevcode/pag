$(document).ready(function (){
    $('.tombolripple').on('click', function (e){
        e.preventDefault();
        var a = prompt("Haga clic en cualquier anunci0 y luego copie la URL del anuncio y péguelo aquí.");
        var URLactual = window.location;

        if (a.includes(URLactual)){
      
            alert("ingresaste un enlace equivocado");
      } else if(a.includes("https://")) {
        
        window.location = this.href
      
      }
        
        else {
            alert("ingresaste un enlace equivocado");
        }
  
    })
})

