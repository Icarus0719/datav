interface I_Point {
  x: number,
  y: number,
  drawPoint: () => void,
  getDistance: (I_Point) => number
}
export class Point implements I_Point {
  constructor(private _x: number = 2, private _y: number = 3) {
  }
  drawPoint() {
    console.log('x:' + this._x, 'y:' + this._y)
  }
  getDistance(p: I_Point) {
    return Math.pow(p.x - this._x, 2) + Math.pow(p.y - this._y, 2)
  }
  set x(value) {
    this._x = value
  }
  get x() {
    return this._x
  }
  set y(value) {
    this._y = value
  }
  get y() {
    return this._y
  }
}