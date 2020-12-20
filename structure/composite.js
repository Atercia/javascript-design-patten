// 让容器和对象可以被同样对待
// 能方便的获取子级们的数据

class Box {
  childrensList = []
  add(child) {
    this.childrensList.push(child)
  }
  remove(child) {
    this.childrensList = this.childrensList.filter((o) => o === child)
  }
  getSize() {
    let size = 0
    this.childrensList.forEach((o) => {
      size += o.getSize()
    })
    return size
  }
}

class Thing {
  constructor(size){
    this.size = size
  }
  getSize(){
    return this.size
  }
}
let boxA = new Box()
let boxB1 = new Box()
let boxB2 = new Box()
let boxC = new Box()

let thing1 = new Thing(5)
let thing2 = new Thing(15)
let thing3 = new Thing(5)
let thing4 = new Thing(25)

boxC.add(thing1)
boxB1.add(boxC)
boxB1.add(thing2)

boxB2.add(thing3)
boxB2.add(thing4)


boxA.add(boxB1)
boxA.add(boxB2)

console.info("SIZE_ALL",boxA.getSize())