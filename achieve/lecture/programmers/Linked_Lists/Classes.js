class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);
console.log(square.area);

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName;
p1.distance;
p2.displayName;
p2.distance;

console.log(Point.displayName);
console.log(Point.distance(p1, p2));

class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak();
let speak = obj.speak;
speak();

Animal.eat();
let eat = Animal.eat;
eat();

function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

let obj = new Animal();
let speak = obj.speak;
speak();

let eat = Animal.eat;
eat();

class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${tihs.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak();

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion("Fuzzy");
l.speak();

var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };

class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
