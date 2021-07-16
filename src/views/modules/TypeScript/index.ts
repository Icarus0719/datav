
import { Point } from './Point'
export const getText = () => {
  class NewPoint extends Point {
    public readonly _age: number
    constructor(public age: number = 18) {
      super(12, 34)
      this._age = age
    }
    drawNew() {
      super.drawPoint()
      console.log('erer')
    }
  }

  const point = new NewPoint()
  point.drawNew()
  console.log(point.age)
  // interface Person {
  //   name: string,
  //   age: number,
  //   bust?: number,
  //   [propname: string]: any
  // }

  // let arr: [string, string, number] = ['1', '2', 3]
  let text = {
    name: '霍建华开发商'
  }
  return text
}
getText()