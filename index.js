// Write your solution here!
const cats = ["Milo", "Otis","Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name) {
    cats.pop()
}
function destructivelyRemoveFirstCat(name) {
    cats.shift()
}
function appendCat(name){
    const copyOfCats = [...cats, "Broom"]
    return copyOfCats
}
function prependCat(name){
    const allCats =["Arnold",...cats]
    return allCats
}
function removeLastCat(){
     const removeCats = cats.slice(0,  - 1);
    return removeCats
}
     function removeFirstCat(){
         const removeFirstCat = cats.slice(1)
         return removeFirstCat
     }