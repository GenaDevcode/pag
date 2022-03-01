
$(document).ready(function (){
    $('.tombolripple').on('click', function (e){
        e.preventDefault();
        var a = prompt("Haga clic en cualquier anunci0 y luego copie la URL del anunci0 y péguelo aquí.");
  //GenDevCode
   if (a.includes("https://")) {
   window.location = this.href
  } else {
   alert("Ingresaste un enlace equivocado");
  }
  
    })
})

