class Cake {
  eat() {
    console.log("good cake");
  }
}
class Meat {
  eat() {
    console.log("good meat");
  }
}

export function foodFactor(type) {
  switch (type) {
    case "cake":
      return new Cake();
      break;
    case "meat":
      return new Meat();
      break;

    default:
      console.info("NO_SUCH_FOOD");
      break;
  }
}
console.info("————————————————————————————————————————\n\n\n\n\n\n");
foodFactor("cake").eat();
foodFactor("meat").eat();
foodFactor("other")?.eat();
console.info("\n\n\n\n\n\n————————————————————————————————————————");
