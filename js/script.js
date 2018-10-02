function Animal(name,sound){
    this.name=name;
    this.sound=sound; 
  }
  

  Animal.prototype.event= function(){
   var self=this;
   var audio = new Audio(self.sound);
    function playMusic() {
    audio.play();
    button.classList.add(self.name);
  }

  function deleteClass(){
    button.classList.remove(self.name);
    audio.pause();
    audio.currentTime = 0;
  }

    var button=document.getElementById(this.name);
    button.addEventListener("click", playMusic);
    button.addEventListener("mouseout", deleteClass);
  }
  
  var cow =new Animal("cow","sound/cow.mp3");
  var duck=new Animal("duck","sound/duck.mp3");
  var chicken=new Animal("chicken","sound/chicken.mp3");
  var horse=new Animal("horse","sound/cow.mp3");
 
  cow.event();
  duck.event();
  chicken.event();
  horse.event();