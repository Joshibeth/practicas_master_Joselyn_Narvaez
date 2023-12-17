    const chakraElements = document.querySelectorAll('.chakra');
    const audioElement = document.querySelector('.audio__chakras');
  
    chakraElements.forEach(function(chakraElement) {
      chakraElement.addEventListener('mouseenter', function() {
        audioElement.play();
      });
  
      chakraElement.addEventListener('mouseleave', function() {
        audioElement.pause();
        audioElement.currentTime = 0;
      });
    });


    