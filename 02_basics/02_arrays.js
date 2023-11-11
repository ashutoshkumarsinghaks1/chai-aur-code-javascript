const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
/*
marvel_heros.push(dc_heros);
console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros[3][1]); // flash


marvel_heros.concat(dc_heros);
console.log(marvel_heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
*/
// concat
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// spread

const all_new_heros = [...marvel_heros, ...dc_heros]; // sperad operator we use ...
console.log(all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// output:[
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from("Ashu")); //['A','s','h','u']
console.log(Array.from({ name: "Hitesh" })); // [] empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
