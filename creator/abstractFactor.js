class ExpensiveCake {
  eat() {
    console.log("good cake")
  }
}
class ExpensiveMeat {
  eat() {
    console.log("good meat")
  }
}

class CheapCake {
  eat() {
    console.log("cheap cake")
  }
}
class CheapMeat {
  eat() {
    console.log("cheap meat")
  }
}

/**
 * @INTRO_抽象工厂
 */

class FoodFactory {
  createCake() {}
  createMeat() {}
}

class ExpensiveFoodFactory extends FoodFactory {
  createCake() {
    return new ExpensiveCake()
  }
  createMeat() {
    return new ExpensiveMeat()
  }
}
/**
 * @AIM test
 */
class CheapFoodFactory extends FoodFactory {
  createCake() {
    return new CheapCake()
  }
  createMeat() {
    return new CheapMeat()
  }
}

function todo() {
  let ef = new ExpensiveFoodFactory()
  ef.createCake().eat()
  ef.createMeat().eat()
  let cf = new CheapFoodFactory()
  cf.createCake().eat()
  cf.createMeat().eat()
}

todo()
