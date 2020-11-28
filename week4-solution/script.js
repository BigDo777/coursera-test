(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i = 0; i < names.length; i++) {
    name = names[i]
    var firstLetter = name.charAt(0)

    if (firstLetter == "J" || firstLetter.toLowerCase() == "j") {
      byeSpeaker.speak();
      } else {
      helloSpeaker.speak();
    }
  }

})(window);
