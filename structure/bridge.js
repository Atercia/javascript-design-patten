// 桥接模式
// 可将一个大类或一系列紧密相关的类拆分为抽象和实现两个独立的层次结构， 从而能在开发时分别使用。

// 抽象部分 （也被称为接口） 是一些实体的高阶控制层。

// 该层自身不完成任何具体的工作， 它需要将工作委派给实现部分层 （也被称为平台）。

// 类似于设备（实现平台）与遥控器（接口）

// 在实际的程序中， 抽象部分是图形用户界面 （GUI），

// 而实现部分则是底层操作系统代码 （API）， GUI 层调用 API 层来对用户的各种操作做出响应。

// 将一个类层次转化为多个相关的类层次， 避免单个类层次的失控

// 例如形状与颜色之间的耦合处理

class Device {
  volume = 5
  channel = 1
  isEnable = null
  name = "common device"
  enable() {}
  disable() {}
  getVolume() {}
  setVolume() {}
  getChannel() {}
  setChannel() {}
}

class Tv extends Device {
  name = "TV"
  enable() {
    this.isEnable = true
    console.info(this.name + " isEnalbe")
  }
  disable() {
    this.isEnable = false
    console.info(this.name + " isDisalbe")
  }
  getVolume() {
    return this.volume
  }
  setVolume(volume) {
    this.volume = volume
    console.info(this.name + " current volume:" + this.volume)
  }
  getChannel() {
    return this.channel
  }
  setChannel(channel) {
    this.channel = channel
    console.info(this.name + " current channel:" + this.channel)
  }
}
class Radio extends Device {
  name = "RADIO"
  enable() {
    this.isEnable = true
    console.info(this.name + " isEnalbe")
  }
  disable() {
    this.isEnable = false
    console.info(this.name + " isDisalbe")
  }
  getVolume() {
    return this.volume
  }
  setVolume(volume) {
    this.volume = volume
    console.info(this.name + " current volume:" + this.volume)
  }
  getChannel() {
    return this.channel
  }
  setChannel(channel) {
    this.channel = channel
    console.info(this.name + " current channel:" + this.channel)
  }
}

class RemoteControl {
  constructor(device) {
    this.device = device
  }
  togglePower() {
    let aim = this.device
    if (aim.isEnable) {
      aim.disable()
      console.info("已关闭设备")
      return
    }
    aim.enable()
    console.info("已开启设备")
  }
  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 1)
  }
  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 1)
  }
  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1)
  }
  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1)
  }
}

class AdvancedRemoteControl extends RemoteControl {
  constructor(device) {
    super(device)
  }
  mute() {
    this.device.setVolume(0)
  }
}

let tv = new Tv()
let remote = new AdvancedRemoteControl(tv)
remote.togglePower()
remote.volumeDown()
remote.volumeDown()
remote.volumeUp()
remote.volumeUp()
remote.channelDown()
remote.channelUp()
remote.togglePower()
