angular.module('mixtape', ['audio','tracklist'])
  .controller('MixtapeController',function(audio,tracklist) {
  	this.file = tracklist.currentFile();

  	this.songSelect = function() {
  		audio.play(this.file);
  	}

  	this.songPause = function() {
  		audio.pause(this.file);
  	}

  	this.songNext = function() {
  		this.file = tracklist.nextFile();
  		audio.play(this.file);
  	}

  	this.songPrev = function() {
  		this.file = tracklist.prevFile()
  		audio.play(this.file);
  	}
  	
  });