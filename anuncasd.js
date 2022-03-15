 /**
     * Array con las imagenes y enlaces que se iran mostrando en la web
     */
    var imagenes=new Array(
        ['https://blogger.googleusercontent.com/img/a/AVvXsEhMNQmAbUmd5x-SbKni8Fxe6cMcTNQBrAvmu-oRAs2u4FSAkn48IdROVRtPAI0B-yhZiFGdw8Xg0cScT37XRORMW0-84siy9Dz607TRO7r6K6VN9D5muuZLzCBsKiVCNiR5GoVlzuaI7yik8Lr-wMs05cjnQ1cDazA-8LDnt76cnG0GvkTwZx2SzPA','https://comoentraraonlyfansgratis.blogspot.com/'],
        ['https://blogger.googleusercontent.com/img/a/AVvXsEjYLngpKTvvuYIrHnOgasNCzRHHz7gkoPbzxgO96KXlM11sCb91WYXaxRQonyFGhkVheTj2vOy3ULTdpa9S5F3S-W01TF4DJu700imLHMAKbcLRImmj6t_uVWe4-4GNC1ZhbUb6rBjZ0SQ6XQGnCpayHk8lcd5p9vRLq1EDf5jftphtl2BXM4TmyNc0','https://genapackyt.blogspot.com'],
        ['https://blogger.googleusercontent.com/img/a/AVvXsEgQRX_X94k11il0sXekjUbJqZsepJmDsLYxkWrvXbpOG3qsPvFQPQHxZUcd8CI-CCBHyd-sIk4zAFo5QzlmRLTVQslInKapqiDq5mh6ZVOnc7P82VGC0cOdURtMGuXJiRv8A9wVr0UNBr-ZrDfBNmTO_-DW6hV1nZHEOj4ow-ovj6g59qa359cW6DVR','https://hardcore-download-music.blogspot.com'],
        ['https://blogger.googleusercontent.com/img/a/AVvXsEirSjS-bgmehmKSsUnjR9Sm60PbG6zocolMtKj4ndpcFX1BVvlGOYy1WBIPKe6XtlOd2nP2TntI48NV9RyyC49EVi-EPItgb9hZUS5-LROHBneEUcDZFxjhDVxQZR66xoicyVtLtkBL4Y6Zf4t0eGlQMd4dswHYvW8JIZuHvr659D2cQCQuWvFY4Pd2','https://genaappspro.blogspot.com']
    );
    var contador=0;
 
    /**
     * Funcion para cambiar la imagen y link
     */
    function rotarImagenes()
    {
        // cambiamos la imagen y la url
        contador++
        document.getElementById("imagenas").src=imagenes[contador%imagenes.length][0];
        document.getElementById("linkas").href=imagenes[contador%imagenes.length][1];
    }
 
    /**
     * Función que se ejecuta una vez cargada la página
     */
    onload=function()
    {
        // Cargamos una imagen aleatoria
        rotarImagenes();
 
        // Indicamos que cada 5 segundos cambie la imagen
        setInterval(rotarImagenes,7000);
    }