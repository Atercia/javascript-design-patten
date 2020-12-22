// 装饰和代理有着相似的结构， 但是其意图却非常不同。
// 这两个模式的构建都基于组合原则，
// 也就是说一个对象应该将部分工作委派给另一个对象。
// 两者之间的不同之处在于代理通常自行管理其服务对象的生命周期，
// 而装饰的生成则总是由客户端进行控制。

// 适配器模式能为被封装对象提供不同的接口，
// 代理模式能为对象提供相同的接口，
// 装饰模式则能为对象提供加强的接口

// 分类
// 保护代理：用于对象应该有不同访问权限的情况。保护代理会帮被访问方过滤不合适请求。
// 虚拟代理
// 缓存代理
// 防火墙代理：控制网络资源的访问，保护主题不让“坏人”接近。
// 远程代理：为一个对象在不同的地址空间提供局部代表，在Java中，远程代理可以是另一个虚拟机中的对象。
// 智能引用代理：取代了简单的指针，它在访问对象时执行一些附加操作，比如计算一个对象被引用的次数。

// 写时复制代理：通常用于复制一个庞大对象的情况。
// -写时复制代理延迟了复制的过程，当对象被真正修改时，才对它进行复制操作。
// -写时复制代理是虚拟代理的一种变体，DLL（操作系统中的动态链接库）是其典型运用场景。

// 保护代理 - 条件筛选
class Girl {
  constructor(name) {
    this.name = name
  }
  sing() {
    console.log(this.name + "为您唱了一曲")
  }
  dance() {
    console.log(this.name + "为您跳了一遍")
  }
  playGame() {
    console.log(this.name + "陪玩了一会")
  }
  massage() {
    console.log(this.name + "尝试按摩了一会")
  }
}

class GirlProxy {
  constructor(girl) {
    this.girl = girl
  }
  provideServer(money) {
    if (money > 100) {
      this.girl.sing()
      this.girl.dance()
      this.girl.playGame()
    } else {
      console.log("NEED MORE MONEY")
    }
  }
}

console.info("\n保护代理 - 随时都有女孩，满足条件时提供服务\n")
let proxy = new GirlProxy(new Girl("小刘"))
proxy.provideServer(90)
proxy.provideServer(120)

class NewGirlProxy {
  girl = null
  getGril(name) {
    this.girl = new Girl(name)
    console.log("\n女孩已匹配到")
  }
  letGrilLeave() {
    console.log("\n女孩已经离开")
    this.girl = null
  }
  provideServer(money) {
    console.log("\n开始匹配女孩,当前金额为" + money)
    if (money > 100) {
      this.getGril("小胡")
      this.girl.sing()
      this.girl.dance()
      this.girl.playGame()
      this.letGrilLeave()
    } else {
      console.log("\n无满足条件的女孩可匹配，请增加金额")
    }
  }
}

console.info("\n缓存代理 - 只有条件满足时，才匹配女孩，然后提供服务\n")
let newProxy = new NewGirlProxy()
newProxy.provideServer(90)
newProxy.provideServer(120)
