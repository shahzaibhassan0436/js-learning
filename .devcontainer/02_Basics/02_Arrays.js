const pubg_char = ["Carlo", "Sara", "Andy"]
const dc_heros = [ "superman", "flash", "batman"]

//pubg_char.push(dc_heros)


// console.log(pubg_char);   
// console.log(pubg_char[3][1]);   

// pubg_char.concat(dc_heros)
// console.log(pubg_char);

const allHeros = pubg_char.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...pubg_char, ...dc_heros]
//console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Shahzaib"));
console.log(Array.from("Shahzaib"));
console.log(Array.from({name: "Shahzaib"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
