const superHero = {};

superHero.name = "superman";

superHero.friends = { count: 5 };

console.log(superHero);

console.log(superHero.friends.count);

const { log } = console;

log(console);

const arr = [
  { name: "itay", id: 5 },
  { name: "omer", id: 4 },
  { name: "aviad", id: 1 },
];

const obj = {
  1: "aviad",
  4: "omer",
  5: "itay",
};

obj[67] = "snir";

log(Object.keys(obj));
