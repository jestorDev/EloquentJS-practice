const Group = require('./Group');
class GroupIterator {
    constructor(group) {
        this.i  = 0 ;
        this.group = group;
        
    }

    next() {

        let gKeys= Object.keys(this.group.elems)

        //console.log("i: " , this.i , "v :" , gKeys[this.i] , " r : " ,this.group.elems[gKeys[this.i]] );
        

        while (this.group.elems[gKeys[this.i]] !== 1 ) {
            this.i++
            if (this.group.elems[gKeys[this.i]]  === undefined)  
                return {done :true}
        }

        let valueNext =  gKeys[this.i]

        this.i++
        return {
            value :valueNext,
            done:false
        }
    }
}

Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this)
}


let groupT = Group.from([10, 15, 20, 25, 35, 45]);
groupT.delete(15);
groupT.delete(20);
groupT.delete(45);

console.log("-----------------------------");

for (let value of groupT) {
    console.log(value);
  }
console.log("-----------------------------");
