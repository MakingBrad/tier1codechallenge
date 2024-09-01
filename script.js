// 1. Create a variable named highScore and assign it a number value of 29.
let highScore = 29;

// 2. Make a new empty array called myScrabbleTiles.
myScrabbleTiles =[];

// 3. Put these 6 tile objects into myScrabbleTiles.
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
myScrabbleTiles = [
  { tile: 'N', score: 1 },
  { tile: 'K', score: 5 },
  { tile: 'Z', score: 10 },
  { tile: 'X', score: 8 },
  { tile: 'D', score: 2 },
  { tile: 'A', score: 1 },
]

// 4. Remove the last tile from myScrabbleTiles and save it in a variable named removedTile.

let indexOfLast = myScrabbleTiles.length-1

let removedTile=myScrabbleTiles[indexOfLast];

myScrabbleTiles.pop()



// 5. Add the following new tile object to myScrabbleTiles.

myScrabbleTiles.push(  { tile: 'F', score : 4 });



// 6. Complete this function. It expects to receive an array of tile objects. The function will 
//    use a loop to calculate the sum of the tile objects' scores. The function should return
//    the total sum.
function calculateScore(array) {
  let totalSum=0
  for (let i = 0; i < myScrabbleTiles.length; i++) {
    totalSum = totalSum + myScrabbleTiles[i].score;
    
  }
return totalSum
}


// 7. Use the function above to calculate the total score for myScrabbleTiles and assign that value
//    to a new variable called myScore.
let myScore = calculateScore(myScrabbleTiles);


// 8. Write code to check whether or not your score is higher than the highScore.
//    If your score is higher, change highScore to the new high score.
if (myScore>highScore) {
  highScore=myScore
}else{}//do nothing

// DONE!




// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    highScore: typeof highScore !== 'undefined' ? highScore : undefined,
    myScrabbleTiles: typeof myScrabbleTiles !== 'undefined' ? myScrabbleTiles : undefined,
    removedTile: typeof removedTile !== 'undefined' ? removedTile : undefined,
    calculateScore: typeof calculateScore !== 'undefined' ? calculateScore : undefined,
    myScore: typeof myScore !== 'undefined' ? myScore : undefined,
  }
} catch (e) {
  // Do nothing
}
