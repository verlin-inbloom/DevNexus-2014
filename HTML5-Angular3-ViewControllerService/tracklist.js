angular.module('tracklist',[])
  .factory('tracklist', function() {
    var files = ['04 Kiss Kiss Kiss.mp3','06 Rock To It.mp3'];
    var indexPos = 0;    
    return {
      currentFile : function() {
      	return files[indexPos];
      },
      nextFile : function() {
      	indexPos = indexPos + 1;
      	if (indexPos === files.length) {
      		indexPos = 0;
      	}
      	return files[indexPos];
      },
      prevFile : function() {
      	indexPos = indexPos - 1;
      	if (indexPos === -1) {
      		indexPos = files.length - 1;
      	}
      	return files[indexPos];
      }
    };
  });