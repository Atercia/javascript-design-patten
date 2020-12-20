// 如果你希望在无需修改代码的情况下即可使用对象， 且希望在运行时为对象新增额外的行为， 可以使用装饰模式。

// 封装器包含与目标对象相同的一系列方法，
// 它会将所有接收到的请求委派给目标对象。
// 但是， 封装器可以在将请求委派给目标前后对其进行处理，
//  所以可能会改变最终结果。

class BasicBed {
  getType() {
    console.info("基本床")
  }
}

class Decorator {
  wrapper = null
  type = ""
  constructor(bed) {
    this.wrapper = bed
  }
  getType() {
    this.wrapper.getType()
    console.info(this.type)
  }
}

class WaterDecorator extends Decorator {
  type = "带水床垫"
}
class WarmDecorator extends Decorator {
  type = "带加热器"
}
class MusicDecorator extends Decorator {
  type = "带音乐播放"
}

let bed = new BasicBed()
let waterBed = new WaterDecorator(bed)
let warmBed = new WarmDecorator(waterBed)
let musicBed = new MusicDecorator(warmBed)
musicBed.getType()
