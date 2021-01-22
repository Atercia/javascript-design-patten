let time = 3420
console.time()
const t1 = {
  10: true,
  60: !(time % 60),
  180: !(time % 180),
  280: !(time % 280),
}
console.timeEnd()
console.time()
time=3588
const t2 = {
  10: true,
  60: !(time % 60),
  180: !(time % 180),
  280: !(time % 280),
}
console.timeEnd()

console.info(t1,t2)
