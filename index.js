// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
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
    const copyCats = cats.slice();
    copyCats.push(name);
    return copyCats;
}

function prependCat(name) {
    const copyCats = cats.slice();
    copyCats.unshift(name);
    return copyCats;
}

function removeLastCat() {
    const copyCats = cats.slice();
    copyCats.pop();
    return copyCats;
}

function removeFirstCat() {
    const copyCats = cats.slice();
    copyCats.shift();
    return copyCats;
}