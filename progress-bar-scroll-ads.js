//progress.js demo edition
function updateDCPAProgress(top, bottom, col1, col2, range, time, skip, remaining, type, modal, adstime, afterads) {
	  var selectRange = range;
	  var selectRange2 = selectRange + 30;
	  
	  var percent = Math.ceil(top / bottom * 100) + '%';
	  var normal = Math.ceil(top / bottom * 100);
	  
	  document.getElementById('progressAd').style.width = percent;
		  
		  if (normal >= selectRange && normal <= selectRange2) { //if in range

				const element = document.querySelector("#progressModal");
				if(element.classList.contains("active") == false && element.classList.contains("clicked") == false){
					//if in ads
					element.classList.add('active');
					document.body.style.overflow = "hidden";
					document.querySelector("#progressAd").style.backgroundColor = col2;
				
					if (type == 2 ) {
						//if youtube style ad button
						var timeleft = time;
						var downloadTimer = setInterval(function(){
						  document.getElementById("progressSkipper").innerHTML = timeleft + " " + remaining;
						  timeleft--;
						  if(timeleft == -2){
							clearInterval(downloadTimer);
							document.getElementById("progressSkipper").innerHTML = skip;
								document.querySelector('.pClose').onclick = function() {

									document.querySelector("#progressContainer").style.display = "none";
									element.classList.remove('active');
									element.classList.add('clicked');
									document.body.style.overflow = "visible";
									document.querySelector("#progressAd").style.backgroundColor = col1;
								}
						  }
						}, 1000);
					}
				}
			}
}