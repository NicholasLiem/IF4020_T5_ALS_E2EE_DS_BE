
export class Point {
  public x : number
  public y : number

  constructor (x : number, y: number){
    this.x = x
    this.y = y
  }

  setValue = (x: number, y: number) => {
    this.x = x 
    this.y = y
  }

  copyPoint = (p : Point) => {
    this.x = p.x
    this.y = p.y
  }

  isSamePoint = (p : Point) => {
    return this.x === p.x && this.y === p.y
  }


}