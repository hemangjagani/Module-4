(function(){
var names = ["Hemang", "Rajesh", "Rahul", "Raj", "Karl", "Babu", "Shyam", "Bapu", "Lakhan", "Jessy"];

for (var i = 0; i < names.length; i++) {

  var firstLetter = names[i].toLowerCase().charAt(0)

  if (firstLetter=='h') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})()