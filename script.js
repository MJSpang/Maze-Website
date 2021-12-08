function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }
  
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity( elem, {
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    autoPlay:3500
  });
  
  // element argument can be a selector string
  //   for an individual element
  var flkty = new Flickity( '.main-carousel', {
    // options
  });