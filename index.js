// 1) Beatles Loops returns an array of strings containing what instruments each instrument plays:

/* Create a function theBeatlesPlay, which accepts two parameters- an array of musicians and an array of instruments.
The body of the function should create an empty array stored in a variable. The function should also contain a for loop
which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store.
(Hint: Think about what the first index of an array is). The first time through the loop, the body of the loop should create
a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar".
This string should be added to the empty array you created. The loop should make the same sentence for every member of the
 musicians array. The function should return the array of new strings.*/

 function theBeatlesPlay(performer, instruments) {
      var bandMembers = [];
      for (var i = 0; i < performer.length; i++) {
        bandMembers.push(performer[i] + " plays " + instruments[i]);
      }

      return bandMembers;
 }

// Beatles Loops johnLennonFacts returns an array of strings with exclamation points:

/* Create a function johnLennonFacts. This function will accept one argument, an array of facts about John Lennon
(note that it might not be exactly the following facts):

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

Use a while loop to loop over the facts array and add "!!!" to the end of every fact. The function should return an
array of strings with exclamation points. */



function johnLennonFacts(facts){
  var results = [];
  var count = 0;
  while (count < facts.length) {
    results.push(facts[count] +  "!!!")
    count++;
 }
return results;

}



// Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :

// Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:

/* Create a function iLoveTheBeatles which accepts a number as a parameter. The body of the function should create a
variable that stores an empty array. Then, implement a do-while loop inside the function that adds "I love the Beatles!"
to the empty array. Then the loop should increment the number passed in as a parameter. The condition of the loop should
check to see that the parameter number is less than 15. The function should return the array with the strings "I love the
Beatles!" */

function iLoveTheBeatles(num) {
  var wordLove = [];
  do {
    wordLove.push("I love the Beatles!");
    num++
  } while (num < 15);
  return wordLove;
}
