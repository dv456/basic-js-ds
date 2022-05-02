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

      let cur = this.roots
      while (cur) {


          if (cur.data <= data) {
              if (cur.right === null) {
                  cur.right = new Node(data);
                  return this;
              }
              cur = cur.right;
          }


          
          if (cur.data > data) {
            if (cur.left === null) {
                cur.left = new Node(data);
                return this;
            }
            cur = cur.left;
        }


      }
  }

  has(data) {
    if (this.roots === null) {
      return false;
  }
    let cur = this.roots
      while (cur ) {

        if (cur.data <= data) {
          if (cur.data === data) {
            return true;
         }
          if (cur.right === null) {
             return false;
          }
          cur = cur.right;
      }

      if (cur.data === data) {
          return true;
       }
        if (cur.left === null) {
            return false;
        }
        cur = cur.left;
    }
    
 }
 
  
  }

  find(data) {
    if (this.roots === null) {
      return false;
    }
    let cur = this.roots
    while (cur) {
  
      if (cur.data <= data) {
        if (cur.data === data) {
          return cur;
        }
        if (cur.right === null) {
          return null;
        }
        cur = cur.right;
      }
  
      if (cur.data > data) {
        if (cur.data === data) {
          return cur;
        }
        if (cur.left === null) {
          return null;
        }
        cur = cur.left;
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
    let current = this.roots;
    let minValue = this.roots.data;
    while (current.left !== null) {
        minValue = current.left.data;
        current = current.left;
    }
    return minValue;
}


max() {
    if (this.roots === null) {
        return null;
    }
    let current = this.roots;
    let maxValue = this.roots.data;
    while (current.right !== null) {
        maxValue = current.right.data;
        current = current.right;
    }
    return maxValue;
}

}





module.exports = {
  BinarySearchTree
};
