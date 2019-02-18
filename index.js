function theBeatlesPlay(musicians, instruments) {
  let array = [];
  var i = 0;
  for(i = 0; i < musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return array;
}

function johnLennonFacts(facts){
  let array = [];
  let i = 0;
  while(i < facts.length){
    array.push(`${facts[i]}!!!`)
    i++;
  }
  return array;
}

function iLoveTheBeatles (num){
  let array = [];
  let i = i + 1;
  do{array.push('I love the Beatles!')
} while(i <= num);
}
