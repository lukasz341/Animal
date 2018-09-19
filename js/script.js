function Animal(name,sound){
    this.name=name;
    this.sound=sound; 
  }
  
  Animal.prototype.event= function(){
   var self=this;
    function playMusic() {
      console.log(self.name);
    var audio = new Audio(self.sound);
    audio.play();
  }
    var button=document.getElementById(this.name);
    button.addEventListener("click", playMusic);
  }
  
  var cow =new Animal("cow","sound/cow.mp3");
  var duck=new Animal("duck","sound/duck.mp3");
  var chicken=new Animal("chicken","sound/chicken.mp3");
 
  cow.event();
  duck.event();
  chicken.event();