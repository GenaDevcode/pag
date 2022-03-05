$(document).ready(function (){
    $('.tombolripple').on('click', function (e){
        e.preventDefault();
        var a = prompt("Haga clic en cualquier anunci0 y luego copie la URL del anuncio y péguelo aquí.");

        if (a.includes("https://el-blog-gen.blogspot.com"  )){
      
            alert("ingresaste un enlace equivocado");
      } else if(a.includes("https://")) {
        
        window.location = this.href
      
      }
        
        else {
            alert("ingresaste un enlace equivocado");
        }
  
    })
})