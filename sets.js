// union set
const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

console.log("set a", a);
console.log("set b", b);

// set a and b combined with no duplicates
const union = new Set([...a, ...b]);

console.log("union set ", union);
// intersection set a and b both contain
const intersection = new Set([...a].filter(x => b.has(x)));

console.log("intersetion set ", intersection);

// diffrence set a differs from set b returns elemenst unique to a
const difference = new Set([...a].filter(x => !b.has(x)));

console.log("difference set ", difference);
