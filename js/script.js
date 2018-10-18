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
    button.addEventListener('click', playMusic);
    button.addEventListener('mouseout', deleteClass);
  }
  
  var cow=new Animal('cow','sound/cow.mp3');
  var duck=new Animal("duck","sound/duck.mp3");
  var chicken=new Animal("chicken","sound/chicken.mp3");
  var horse=new Animal("horse","sound/horse.mp3");
  var rooster=new Animal("rooster","sound/rooster.mp3");
  var pig=new Animal("pig", "sound/pig.mp3");
  var farmer=new Animal("farmer", "sound/farmer.wav");
  var cat=new Animal("cat", "sound/cat.wav");
  var tractor=new Animal("tractor", "sound/tractor.mp3");
 
  cow.event();
  duck.event();
  chicken.event();
  horse.event();
  rooster.event();
  pig.event();
  farmer.event();
  cat.event();
  tractor.event();


  function Dog(){
    var audio = new Audio("sound/dog.mp3");
     function playDog() {
     audio.play();
     buttoncat.classList.add("cat");
     buttondog.classList.add("dog");
   }
 
   function deleteDog(){
     buttondog.classList.remove("dog");
     audio.pause();
     audio.currentTime = 0;
   }
    var buttoncat=document.getElementById("cat");
    var buttondog=document.getElementById("dog");
 
     buttondog.addEventListener('click', playDog);
     buttondog.addEventListener('mouseout', deleteDog);
   }

   Dog();