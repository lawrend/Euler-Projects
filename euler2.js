//generate all F.S. numbers below 4,000,000
var countFab = [1,1];
var evenFab = [];
var newFab = 0;
var sumOfEvens = 0;

for (var f = 0; newFab < 4000000; f++) {newFab = countFab[f] + countFab[f+1];
countFab.push(newFab);}

//find all even F.S. numbers
for (var d = 0; d < countFab.length - 1; d++) {if (countFab[d] % 2 === 0) {evenFab.push(countFab[d]);}}

//sum of the evens
for (var s = 0; s < evenFab.length; s++) {sumOfEvens = sumOfEvens + evenFab[s];}

console.log(evenFab);
console.log(sumOfEvens);

