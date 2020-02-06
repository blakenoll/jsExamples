class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(name);
  }

  breathFirstSearch(array) {
    let queue = [this];
    while (queue.length > 0) {
      let current = queue.shift();
      array.push(current.name);
      current.children.forEach(child => queue.push(child));
    }
    return array;
  }

  depthFirstSearch(array) {
    array.push(this);
    this.children.forEach(child => child.depthFirstSearch(array));
    return array;
  }
}

const root = new Node("blah");

root.children.push(new Node("boo"));
root.children.push(new Node("poo"));
root.children.push(new Node("stoo"));

root.children[0].children.push(new Node("haha"));
root.children[0].children.push(new Node("bahaha"));

const a = [];

root.depthFirstSearch(a);

console.log(a); // blah boo haha bahaha poo stoo
