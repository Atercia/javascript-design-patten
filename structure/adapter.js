class Provide310v {
  static providePower() {
    return 310
  }
}

class UsePower {
  static use(power) {
    if (power == 220) {
      console.log("POWER USE OK")
      return
    }
    console.error("POWER CAN'T USE")
  }
}

class Power220Adapter extends Provide310v {
  static providePower() {
    return 220
  }
}

UsePower.use(Provide310v.providePower())
UsePower.use(Power220Adapter.providePower())
