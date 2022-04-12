class Group {
    
    constructor() {
        this.elems = {}
    }
    
    add(elem) {
        this.elems[elem] = 1         
    }

    delete(elem) {
        this.elems[elem] = null         
    }

    has(elem) {
        return (this.elems[elem] === 1)
    }
    static from(arr) {
        let g  = new Group()
        arr.forEach(elem => {
            g.add(elem)
        });
        return g
      }
  }
  



  // let group = Group.from([10, 20]);
  // console.log(group.has(10));
  // console.log(group.has(20));
  // // → true
  // console.log(group.has(30));
  // // → false
  // group.add(10);
  // group.delete(10);
  // console.log(group.has(10));
  // // → false



  module.exports = Group