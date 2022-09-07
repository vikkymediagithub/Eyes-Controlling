alert(
    "- Desktop users try moving your mouse across the screen \n- Mobile users try to swipe your finger across the screen"
  );
      // Selecting the eye div
  let eye_ref = document.querySelectorAll(".eye");
  //mousemove for devices with mouse and touchmove for touchscreen devices
  let events = ["mousemove", "touchmove"];
  // Check for touch screen
  function is_touch_device() {
    try {
      document.createEvent("TouchEvent");
      return true;
    } catch (e) {
      return false;
    }
  }
  //Same function for both events
  events.forEach((eventType) => {
    document.body.addEventListener(eventType, (event) => {
      eye_ref.forEach((eye) => {
        /*
  getBoundingClientRect() method returns the position relative to the viewport.
  */
        let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;

        let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

        /*
    ClientX and Client Y return the position of client's cursor from top left of screen 
  */
      try{
        var x = !is_touch_device()
          ? event.clientX
          : event.touches[0].clientX;
        var y = !is_touch_device()
          ? event.clientY
          : event.touches[0].clientY;
}catch(e){

}
        /*
    Subtract x position of mouse from x position of eye 
    and y position of mouse from y position of eye  
    then we use atan2 (returns angle in radians)
  */
        let radian = Math.atan2(x - eyeX, y - eyeY);
        // Convert Radians to Degrees
        let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
        // Rotate the eye
        eye.style.transform = "rotate(" + rotationDegrees + "deg)";
      });
    });
  });