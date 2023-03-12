// 基础类型
// boolean, number, string, symbol, null 和 undefined
// 对象类型 {} or object, [] or Array, function, Class类型

// string
const msg: string = 'hello ts!!'

let msg1: string = '123'
msg1 = '456'

const msgStr = `${msg} ${msg1}`

console.log(msgStr)

// boolean
const isDone: boolean = false

// object
const obj: object = {}
const obj1: {} = {}
const obj2: { msg: string; num: number } = {
  msg: 'hello',
  num: 123,
}
