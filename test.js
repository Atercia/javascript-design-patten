const debounce = function (fn, wait) {
  let timeout = null
  return function () {
    if (timeout !== null) console.log(clearTimeout(timeout)) // 如果多次触发将上次记录延迟清除掉
    timeout = setTimeout(() => {
      // console.info("TODO", arguments)
      fn.apply(this, arguments)
      // 或者直接 fn()
      timeout = null
    }, wait)
  }
}

function test(a, b, c) {
  console.info({ a, b, c })
}
let res = debounce(test, 1000, 1, 2, 3)

res(1, 2, 3)
res(1, 2, 3)
res(1, 2, 2)

// let t = 123
// console.log(clearTimeout(t))