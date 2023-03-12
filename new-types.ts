// any -> es5 var
let a: any

a = 123
a = '123'
a = true
a = {}
a = []
a = () => {}

// void -> 没有类型
// never -> 永远不存在的值或者类型
// unknown -> 未知类型
let b: void
let c: never
let d: unknown

b = undefined

if (typeof d === 'number') {
  d.toFixed(2)
} else if (typeof d === 'string') {
  d.toLocaleUpperCase()
} else if (typeof d === 'object' && d instanceof Array) {
  d.map((item) => item)
}

c = (() => {
  throw new Error('error')
})()
