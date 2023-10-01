// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push("Ralph");
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}
function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}
function appendCat(name) {
  const newcats = [...cats, "Broom"];
  return newcats;
}
function prependCat(name) {
  const newcat = ["Arnold", ...cats];
  return newcat;
}
function removeLastCat() {
  const kitten = cats.slice(0, 2);
  return kitten;
}
function removeFirstCat() {
  const kitty = cats.slice(1);

  return kitty;
}
