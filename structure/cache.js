// flyWeight - 享元模式是用时间来换空间 - 封装了内部状态和外部状态，耗时间来改变外部状态。
// 通过将内部状态设置成缓存，耗时查询缓存再加上新外部状态，来生成新的对象

// 对象的常量数据通常被称为内在状态， 其位于对象中， 其他对象只能读取但不能修改其数值。
// 而对象的其他状态常常能被其他对象 “从外部” 改变， 因此被称为外在状态。
// 我们将一个仅存储内在状态的对象称为享元。

// （内部状态 ：性别；外部状态 ：衣服）
// 50件衣服需要男女模特试穿，不使用享元模式的时候，是生成50位男模特和50位女模特，同时试穿
// 使用享元模式的时候，是生成1位男模特和1位女模特，分50次试穿

class Child {
  constructor(name, sex, height, weight) {
    this.child = { name, sex, height, weight }
  }
  setDress(dressName) {
    this.child.dressName = dressName
  }
  getName() {
    return this.child.name
  }
  getPhoto() {
    console.info(
      "模特" + this.child.name + "拍摄了" + this.child.dressName + "服饰照片"
    )
  }
}

class ChildFactory {
  childs = []
  constructor(childs) {
    this.childs = childs
  }

  getChild(name) {
    let res = this.childs.find((o) => {
      return o.getName() === name
    })
    // console.info({ res, name })
    return res
  }
}

let childLiu = new Child("小刘", "女", "160cm", "45kg")
let childHu = new Child("小胡", "女", "172cm", "51kg")
let childFactory = new ChildFactory([childLiu, childHu])

let girl = childFactory.getChild("小胡")
// 不再创建模特，而是获取现有缓存的模特对象，节省了内存

girl.setDress("JK")
girl.getPhoto()
girl.setDress("汉服")
girl.getPhoto()
let girl2 = childFactory.getChild("小刘")
girl2.setDress("lo裙")
girl2.getPhoto()
