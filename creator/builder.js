/*

建造者（生成器模式）让你能够分步骤创建复杂对象。 
生成器不允许其他对象访问正在创建中的产品。

摆脱海量参数构造函数的烦恼

将构造过程封装成director
将过程实现的各个部分封装到builder
客户端只需要以来director
*/
/*
假设有这样一个复杂对象，
在对其进行构造时需要对诸多成员变量和嵌套对象进行繁复的初始化工作。
这些初始化代码通常深藏于一个包含众多参数且让人基本看不懂的构造函数中；
甚至还有更糟糕的情况，
那就是这些代码散落在客户端代码的多个位置。
 */

/*有不同的陪玩，有不同的陪玩节目单可以生成*/
class Girl {
  constructor(name, style) {
    this.companionFlow = []
    this.name = name
    this.style = style || "看起来很普通的"
  }
  reset() {
    this.companionFlow = []
  }
  compainon() {
    console.info(this.style + this.name + "进入了房间")
    this.companionFlow.forEach((o) => {
      console.info(o)
    })
  }
  leave() {
    console.info(this.name + "说了谢谢，离开了")
  }
  sing(song) {
    this.companionFlow.push(this.name + "为您唱了一曲" + song)
  }
  dance(name) {
    this.companionFlow.push(this.name + "为您跳了一遍" + name)
  }
  playGame(name) {
    this.companionFlow.push(this.name + "陪玩了一会" + name)
  }
  massage() {
    this.companionFlow.push(this.name + "尝试为您按摩了一会")
  }
}

class GreatGirl extends Girl {
  constructor(name, style) {
    super(name, style)
  }
  leave() {
    console.info(this.name + "在临走前撒娇了，说下次还要一起")
    super.leave()
  }
  sing(song) {
    this.companionFlow.push(this.name + "为您激情演唱了一曲" + song)
  }
  dance(name) {
    this.companionFlow.push(this.name + "为您劲爆的跳了一遍" + name)
  }
  playGame(name) {
    this.companionFlow.push(this.name + "陪玩了您很久" + name)
  }
  massage() {
    this.companionFlow.push(this.name + "为您极度舒适的按摩了一会")
  }
}

class CompainonDirector {
  payMonthToGetServer(number, selectGirl) {
    // 管理者根据给钱多少，安排女孩提供什么样的服务
    console.info("顾客付费，安排了女孩匹配的服务内容流程")
    if (number <= 100) return this.basicServer(selectGirl)
    if (number < 500) return this.advancedServer(selectGirl)
  }
  basicServer(girl) {
    girl.reset()
    girl.sing("喜欢你")
    girl.dance("loveStyle")
    girl.playGame("LOL")

    girl.massage()
    girl.sing("东西")
    girl.sing("白羊")
  }
  advancedServer(girl) {
    girl.reset()
    girl.sing("Ferrari")
    girl.sing("Unstoppable")
    girl.dance("Life")
    girl.playGame("LOL")

    girl.massage()
    girl.sing("我爱你")
    girl.sing("烟火里的尘埃")
  }
}

// client

let director = new CompainonDirector()
let firstGirl = new Girl("小刘", "看起来有活力的")
let nextGirl = new GreatGirl("小张", "看起来很美丽的")
director.payMonthToGetServer(100, firstGirl)
firstGirl.compainon()
firstGirl.leave()

director.payMonthToGetServer(300, nextGirl)
nextGirl.compainon()
nextGirl.leave()
