let matchAnswers = [
  'Retrieving information already learned, but which is not currently in your conscious awareness',
  'Identifying items already learned',
  'Learning something more quickly when you learn it a second or third time',
  'The processing of information into the memory system',
  'The retention of encoded information over time',
  'The process of getting information out of memory storage',
  'The immediate, very brief recording of information collected by the senses',
  'Activated memory that holds a few items briefly',
  'The relatively permanent and limitless storehouse of the memory system',
  'The conscious, active processing of incoming auditory and visual/spatial information and information retrieved from permanent storage'
  ];
const orderArr = [0,1,2,3,4,5,6,7,8,9];
const letterArr = ['A','B','C','D','E','F','G','H','I','J'];

//Knuth Shuffle Algorithm
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
let answerKey = {
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: ""
};
//Scrambler button
function scrambler() {
  for (let i = 0; i < 10; i++){
    document.getElementById(i).innerHTML = "";
  }
  for (let i in matchAnswers){
    let j = parseInt(i) + 1;
    matchAnswers[i] += "^" + j;
  }
  let answers = shuffle(matchAnswers);
  for (let i in answers){
    let temp = answers[i].split("^");
    let keyVal = parseInt(temp[1]);
    temp = temp[0];
    answerKey[keyVal] = letterArr[i];
  document.getElementById(i).append(letterArr[i] + ")\t" + temp);
}
return answerKey;
}

function generateAnswerKey(){
  alert("1 = " + answerKey[1] + "\n2 = " + answerKey[2] + "\n3 = " + answerKey[3] + "\n4 = " + answerKey[4] + "\n5 = " + answerKey[5] + "\n6 = " + answerKey[6] + "\n7 = " + answerKey[7] + "\n8 = " + answerKey[8] + "\n9 = " + answerKey[9] + "\n10 = " + answerKey[10]);
}
