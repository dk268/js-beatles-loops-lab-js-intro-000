function theBeatlesPlay(musicianArray, instrumentArray) {
  var emptyArray = [];
  for (var i = 0; i < musicianArray.length; i++) {
    emptyArray[i] = `${musicianArray[i]} plays ${instrumentArray[i]};
    return emptyArray;
  }
}



function johnLennonFacts(factsArray){
  factsArray = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];
  var i = 0;
  while (i < factsArray.length) {
    factsArray[i] = `${factsArray[i]}!!!`
    i++
  }
}

function iLoveTheBeatles (number){
  var vapid = [];
  do {vapid[number]="I love the Beatles!";
      number++;}
    while (number < 15);
  }
