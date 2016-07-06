/* Simple implementation of Bubble sort algorithm using TypeScript through iterating loops.
 * July 2016
 */

//set the size of the array
var range: number = 10;

//array to be sorted
var vet: Array<number> = new Array<number>(range);

//generates random int from an interval
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var i: number;
var j: number;
var x: number; //for swap

//populating the array with unsorted elements
for (i = 0; i < range; i++) {
	vet[i] = randomIntFromInterval(0, 99);
}

console.log(vet);

//sorting the array
for (i = 0; i < range; i++) {
	for (j = 0; j < range - i; j++) {
		if (vet[j] >= vet[j + 1]) {
			x = vet[j];
			vet[j] = vet[j + 1];
			vet[j + 1] = x;
		}
	}
}

console.log(vet);