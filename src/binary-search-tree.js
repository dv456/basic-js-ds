const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
        this.roots = null;
        this.arrData = []
        this.size = 0
  }

  root() {
    return this.roots
  }

  getData(data) {
    return this.arrData
  }

  add(data) {
        this.arrData[this.size] = data
        this.size++
      if (this.roots === null) {
          this.roots = new Node(data);
          return this;
      }

      let c = this.roots
      while (c) {
          if (c.data <= data) {
              if (c.right === null) {
                  c.right = new Node(data);
                  return this;
              }
              c = c.right;
          }
          if (c.data > data) {
            if (c.left === null) {
                c.left = new Node(data);
                return this;
            }
            c = c.left;
        }
      }
  }

  has(data) {
    if (this.roots === null) {
      return false;
  }
    let c = this.roots
      while (c ) {

        if (c.data <= data) {
          if (c.data === data) {
            return true;
         }
          if (c.right === null) {
             return false;
          }
          c = c.right;
      }

      if (c.data > data) {
        if (c.data === data) {
          return true;
       }
        if (c.left === null) {
            return false;
        }
        c = c.left;
    }    
 }
 
  
  }
  find(data) {
    if (this.roots === null) {
      return false;
    }
    let c = this.roots
    while (c) {
  
      if (c.data <= data) {
        if (c.data === data) {
          return c;
        }
        if (c.right === null) {
          return null;
        }
        c = c.right;
      }  
      if (c.data > data) {
        if (c.data === data) {
          return c;
        }
        if (c.left === null) {
          return null;
        }
        c = c.left;
      }
    }
  }
  clear(count, arrData) {
    let curNum = arrData[count]
    this.add(curNum)
    return this
  }

  remove(data) {
    
    if (this.has(data) === false) {
        return null;
    }this.roots = null;
    let count = 0;
    let size = this.size
    let arrData = this.arrData
    this.arrData = []
    this.size = 0
    while (size != count) {
        if(data === arrData[count]) {}
        else {this.clear(count, arrData)}
        count++
    }

     
  }

  min() {
    if (this.roots === null) {
        return null;
    }
    let c = this.roots;
    let minValue = this.roots.data;
    while (c.left !== null) {
        minValue = c.left.data;
        c = c.left;
    }
    return minValue;
}

max() {
    if (this.roots === null) {
        return null;
    }
    let c = this.roots;
    let maxValue = this.roots.data;
    while (c.right !== null) {
        maxValue = c.right.data;
        c = c.right;
    }
    return maxValue;
}
}

module.exports = {
  BinarySearchTree
};
