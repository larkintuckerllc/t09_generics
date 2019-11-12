const identity = <T>(item: T): T => item;

interface Point<T> {
  x: T;
  y: T;
}

const pointToX = <T>(point: Point<T>): T => point.x;

class PointClass<T> {
  x: T;

  y: T;

  constructor(x: T, y: T) {
    this.x = x;
    this.y = y;
  }

  getX(): T {
    return this.x;
  }
}

// IN FUNCTION
const x = identity(0); // number
const y = identity('hello'); // string

// IN STRUCT
const integer = { x: 5, y: 10 };
const str = { x: 'hello', y: 'world' };
const integerX = pointToX(integer); // number
const strX = pointToX(str); // string

// IN METHOD
const integerClass = new PointClass(5, 10);
const strClass = new PointClass('hello', 'world');
const integerClassX = integerClass.getX(); // number
const strClassX = strClass.getX(); // string

// IN METHOD SPECIFIC TYPE
// NO IDEA HOW TO IMPLMENT IN TYPESCRIPT
