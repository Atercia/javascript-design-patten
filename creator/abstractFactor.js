class expensiveCake {
  eat() {
    console.log("good cake")
  }
}
class expensiveMeat {
  eat() {
    console.log("good meat")
  }
}

class cheapCake {
  eat() {
    console.log("cheap cake")
  }
}
class cheapMeat {
  eat() {
    console.log("cheap meat")
  }
}

/**
 * @INTRO_抽象工厂
 */

class foodFactor {
  createCake() {}
  createMeat() {}
}

class ExpensiveFoodFactor extends foodFactor {
  createCake() {
    return new expensiveCake()
  }
  createMeat() {
    return new expensiveMeat()
  }
}
class CheapFoodFactor extends foodFactor {
  createCake() {
    return new cheapCake()
  }
  createMeat() {
    return new cheapMeat()
  }
}

function todo() {
  let ef = new ExpensiveFoodFactor()
  ef.createCake().eat()
  ef.createMeat().eat()
  let cf = new CheapFoodFactor()
  cf.createCake().eat()
  cf.createMeat().eat()
}

todo()
