// 方便易用的接口 - 简化了客户端与复杂框架之间的交互

// 当你通过电话给商店下达订单时， 接线员就是该商店的所有服务和部门的外观。
//  接线员为你提供了一个同购物系统、 支付网关和各种送货服务进行互动的简单语音接口。

function func1() {
  console.info("func0")
}
function func2() {
  console.info("func1")
}
function func3() {
  console.info("func2")
}
function func4() {
  console.info("func3")
}

function facade() {
  func1()
  func2()
  func3()
  func4()
}
facade()