// https://juejin.cn/post/6854573212890562573

let output = null
/**
 * @AIM 数组交集\并集 overlap
 * @Set set可以去除重复
 */

let arr = [1, 2, 3]
let sub_arr = [3, 4, 5]

// 交集
let overlay = arr.filter((v) => {
  return sub_arr.indexOf(v) > -1
})
// 并集
let all = arr.concat(
  sub_arr.filter((v) => {
    return !arr.includes(v)
  })
)
// all = new Set(arr.concat(sub_arr))
// 差集
let diffTo = arr.filter((v) => {
  return !new Set(sub_arr).has(v)
})
// 补集
let diffEach = Array.from(
  new Set(
    arr.concat(sub_arr).filter((v) => {
      return !new Set(arr).has(v) || !new Set(sub_arr).has(v)
    })
  )
)

let res = { overlay, all, diffTo, diffEach }

/**
 * @AIM 去除重复
 */

//  普通数组
let wa1 = Array.from(new Set([1, 2, 3, 3, 4, 4])) //[1,2,3,4]
let way2 = [...new Set([1, 2, 3, 3, 4, 4])] //[1,2,3,4]

// 对象数组
let waitArr = [{ a: 1 }, { a: 2 }, { a: 2 }]
const qcArr = []
waitArr.forEach((item) => {
  !qcArr.some((v) => JSON.stringify(v) === JSON.stringify(item)) && qcArr.push(item)
})
res = qcArr

/**
 * @AIM 排序 a-b 签名一项小于后面一项时，保持
 */

waitArr = [1, 2, 3, 4]
waitArr.sort((a, b) => a - b) // [1, 2,3,4] 升序

waitArr = [
  { name: "Rom", age: 12 },
  { name: "Bob", age: 22 },
]
waitArr.sort((a, b) => {
  return a.age - b.age
}) //升序

/**
 * @AIM 最大值
 */
waitArr = [1, 2, 3, 4]

Math.max(...waitArr) //4
Math.max.apply(this, waitArr) //4

waitArr.reduce((prev, cur, curIndex, arr) => {
  return Math.max(prev, cur) // 对象的话可以加属性调用
}, 0) //4
