let _val = null
let obj = {
  val: null,
}
Object.defineProperty(obj, "val", {
  get() {
    console.info("GET")
    return _val
  },
  set(val) {
    console.info("SET")
    _val = val
  },
})

obj.val = "newVal"
console.info(obj.val)
