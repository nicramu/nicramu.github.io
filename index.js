/*Downloaded from https://www.codeseek.co/Jeremboo/css-3d-card-moved-by-mobile-accelerometer-OyBaLa */

window.onload = function () {

  let accelerometer = null;
  try {
    accelerometer = new Accelerometer({ frequency: 10 });
    accelerometer.onerror = (event) => {
      // Handle runtime errors.
      if (event.error.name === 'NotAllowedError') {
        console.log('Permission to access sensor was denied.');
      } else if (event.error.name === 'NotReadableError') {
        console.log('Cannot connect to the sensor.');
      }
    };
    accelerometer.onreading = (e) => {
      console.log(e);
    };
    accelerometer.start();
  } catch (error) {
    // Handle construction errors.
    if (error.name === 'SecurityError') {
      console.log('Sensor construction was blocked by the Permissions Policy.');
    } else if (error.name === 'ReferenceError') {
      console.log('Sensor is not supported by the User Agent.');
    } else {
      throw error;
    }
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

