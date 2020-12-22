class Manager {
  nextManager = null
  constructor(name) {
    this.name = name
  }
  setNextManager(manager) {
    this.nextManager = manager
  }
  judging(thingName) {
    let num = Math.random()

    if (num < 0.3) {
      console.info(thingName + "被" + this.name + "驳回")
      console.info(thingName + "驳回")
      return false
    }
    console.info(thingName + "被" + this.name + "通过")
    if (!this.nextManager) {
      console.info(thingName + "的最终审批结果：通过")
      return true
    }
    console.info("传递给下一级\n")
    return this.nextManager.judging(thingName)
  }

  getName() {
    return this.name
  }
  getNextManagerInfo(arr) {
    arr.push(this.getName())
    if (this.nextManager) {
      this.nextManager.getNextManagerInfo(arr)
    }
  }
}

// chain 1
let manager1 = new Manager("分公司主管")
let manager2 = new Manager("总公司主管")
let manager3 = new Manager("股东会")
manager1.setNextManager(manager2)
manager2.setNextManager(manager3)

console.info("获取审批流信息：\n")
let arr = []
manager1.getNextManagerInfo(arr)
console.info(JSON.stringify(arr))

console.info("获取审批最终结果：\n")
manager1.judging("申请物资")
