const name="gayatri"
const count=70
console.log(`hello name is ${name} my count is ${count}`)
const game=new String("gayatri");
console.log(game[0]);
console.log(game.__proto__);
console.log(game.charAt(3));
console.log(game.indexOf('t'));
const newstring=game.substring(0,4);
console.log(newstring);
const anotherstring=game.slice(-8,4);
console.log(anotherstring);
const newstringone="     hitesh     "
console.log(newstringone.trim());
const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','e'))
console.log(url.includes('hitesh'));
console.log(game.split('-'));