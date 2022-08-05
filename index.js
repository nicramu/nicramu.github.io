/*Downloaded from https://www.codeseek.co/Jeremboo/css-3d-card-moved-by-mobile-accelerometer-OyBaLa */

window.onload = function () {

  // Check if is IOS 13 when page loads.
  if ( window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function' ){

      // Everything here is just a lazy banner. You can do the banner your way.
      const banner = document.createElement('div')
      banner.innerHTML = `<div style="z-index: 1; position: absolute; width: 100%; background-color:#000; color: #fff"><p style="padding: 10px">Click here to enable DeviceMotion</p></div>`
      banner.onclick = ClickRequestDeviceMotionEvent // You NEED to bind the function into a onClick event. An artificial 'onClick' will NOT work.
      document.querySelector('body').appendChild(banner)
  }
}


function ClickRequestDeviceMotionEvent () {
  window.DeviceMotionEvent.requestPermission()
    .then(response => {
      if (response === 'granted') {
        window.addEventListener('devicemotion',
          () => { console.log('DeviceMotion permissions granted.') },
          (e) => { throw e }
      )} else {
        console.log('DeviceMotion permissions not granted.')
      }
    })
    .catch(e => {
      console.error(e)
    })
}

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

