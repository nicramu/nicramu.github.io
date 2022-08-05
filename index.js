/*Downloaded from https://www.codeseek.co/Jeremboo/css-3d-card-moved-by-mobile-accelerometer-OyBaLa */

function getAccel(){
  DeviceMotionEvent.requestPermission().then(response => {
      if (response == 'granted') {
          console.log("accelerometer permission granted");
          // Do stuff here
      }
  });
}
getAccel();

var posX = document.getElementById("pos-x"),
    posY = document.getElementById("pos-y"),
    posZ = document.getElementById("pos-z"),
    card = document.getElementById("card-1")
;

if (typeof window.orientation !== 'undefined') {  

window.addEventListener('deviceorientation', function(event) {
  posX.innerHTML = event.beta;
  posY.innerHTML = event.gamma;
  posZ.innerHTML = event.alpha;
  rotateElement(35-event.beta,event.gamma);


  
});

function rotateElement(x,y){
  card.style.transform = "rotateX("+x/2+"deg) rotateY("+y/2+"deg)";
  card.style.webkitTransform = "rotateX("+x/2+"deg) rotateY("+y/2+"deg)";
}

}

else {  

window.addEventListener('mousemove', function(e) {
  rotateElement(-((45 * (e.y - window.innerHeight/2)) / window.innerHeight/2),
                (45 * (e.x - window.innerWidth/2)) / window.innerWidth/2);
}); 

function rotateElement(x,y){
  card.style.transform = "rotateX("+x+"deg) rotateY("+y+"deg)";
  card.style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg)";
}


}

