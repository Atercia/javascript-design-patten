const values = [1, 2, 3, 4, 5]
const total = values.reduce((total, num) => {
  console.info({ total, num })
  return total + num
})
const total_def = values.reduce((total, num) => {
  console.info({ total, num })
  return total + num
}, 5)
// console.info(total)
