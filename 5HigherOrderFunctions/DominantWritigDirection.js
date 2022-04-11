
var utils = require('./TextScripts.js');


function dominantDirection(text) {
    let total = utils.countBy(text, char => {
        let script = utils.characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    })

    let direction = total.reduce((prev, next) => {
        return (prev.count > next.count) ? prev : next
    }, { name: "none", count: 0 })
    return direction.name
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl