class Singleton {
  static instance = null
  static _createInstance() {
    this.instance = { name: "单例对象" }
    return this.instance
  }
  static getInstance() {
    if (this.instance) return this.instance
    return this._createInstance()
  }
}

let obj1 = Singleton.getInstance()
let obj2 = Singleton.getInstance()
console.info(obj1 !== obj2, obj1, obj2)
