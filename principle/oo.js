// objectOrientation
// TODO
// https://blog.csdn.net/qq_29722281/article/details/96979042 多继承实现
// class ParentA {
//     func(){
//         console.info('ParentA')
//     }
//     funcA(){

//         console.info('funParentA')
//     }
// }
// class ParentB {
//     func(){
//         console.info('ParentB')
//     }
//     funcB(){
//         console.info('funcParentB')
//     }
// }
// class Child extends ParentA ParentB{
//     funcC(){
//         console.info("funcChild")
//     }
// }
// let obj = new Child()
// obj.func()
// obj.funcA()
// obj.funcB()
// obj.funcC()
let ab = {
  1: 321,
  2: [342, 32, 32],
  3: 432,
}
for (let val of Object.values(ab)) {
  console.info(val)
}
