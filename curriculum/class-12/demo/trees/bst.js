'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }

  insert(value) {
    // create node with the value
    // traverse the tree
    // if value > node.value ... go right, else go left
    // When I have an opening, put it there. (node.left/right = node);
  }

  preOrder() {
    let results = [];

    let _walk = (node) => {
      results.push(node.value);
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return results;
  }

  postOrder() {

    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
      results.push(node.value);
    };

    _walk(this.root);

    return results;

  }

  inOrder() {
    let results = [];

    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      results.push(node.value);
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return results;
  }

  levelOrder() {
    let results = [];
    let nodeQueue = [];

    nodeQueue.push(this.root);

    while(nodeQueue.length) {
      let current = nodeQueue.shift();
      results.push(current.value);
      if(current.left) { nodeQueue.push(current.left);}
      if(current.right) { nodeQueue.push(current.right); }
    }

    return results;
  }
}



let tree = new BinaryTree(ten);
tree.insert(10);
tree.insert(7);
tree.insert(4);
tree.insert(9);
tree.insert(12);
tree.insert(11);
tree.insert(15);

console.log('pre-order', tree.preOrder());
console.log('in-order', tree.inOrder());
console.log('post-order', tree.postOrder());
console.log('level-order', tree.levelOrder());
