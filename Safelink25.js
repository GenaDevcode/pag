function Login(){

    var done=0; 
    var usuario=document.login.usuario.value; 
    var password=document.login.password.value; 
    
    
     if (usuario=="Genfans" && password=="user1") { 
    window.location="https://genfans.blogspot.com/2021/09/blog-post.html"; 
    } else if
    (usuario=="GenfansFree" && password=="12345") { 
    window.location="https://genfans.blogspot.com/2021/09/blog-post.html"; 
    } 
      
      else {
          alert("Porfavor ingrese, nombre de usuario y contraseña correctos.");
      }
      
    }
