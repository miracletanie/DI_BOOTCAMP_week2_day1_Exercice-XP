const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length

//let myWatchedSeriesSentence = myWatchedSeries.toString();


const myWatchedSeriesSentence = myWatchedSeries[0] + "," + myWatchedSeries[1] + " and "  + myWatchedSeries[2];

console.log(myWatchedSeriesSentence);
console.log( "I watched ",myWatchedSeriesLength,"series:" + myWatchedSeriesSentence);

myWatchedSeries[2] = "friends"
console.log(myWatchedSeries);

myWatchedSeries.push('Jack Bouer');
myWatchedSeries.unshift('Rose');
delete myWatchedSeries[1];

console.log(myWatchedSeries[2].charAt(2));

console.log(myWatchedSeries);



