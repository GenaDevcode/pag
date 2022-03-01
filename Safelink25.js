function Login() {

    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    var a = prompt("Haga clic en cualquier anuncio y luego copie la URL del anuncio y péguelo aquí.");
  
   if (a.includes("https://" || usuario=="Genfans" && password=="user1")) {
   window.location="https://genfans.blogspot.com/2021/09/blog-post.html";
  } else if (a.includes("https://"|| usuario=="GenfansFree" && password=="12345")) {
  window.location="https://genfans.blogspot.com/2021/09/blog-post.html"; 
  }
     else {
alert("Porfavor ingrese, nombre de usuario y contraseña correctos y link de un anuncio.");
  }
}
