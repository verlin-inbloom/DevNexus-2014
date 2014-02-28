angular.module('audio',[])
  .factory('audio',function($document) {
    var audioElement = $document[0].createElement('audio'); // <-- Magic trick here
    return {
      audioElement: audioElement,

      play: function(filename) {
        audioElement.src = filename;
        audioElement.play();     //  <-- Thats all you need
      },

      pause: function() {
        audioElement.pause();
      }
      
      // Exercise for the reader - extend this service to include other functions
      // like pausing, etc, etc.
    };
  });