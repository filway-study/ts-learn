// 基本的用法
function add(arg1: number, arg2: number): number {
  return arg1 + arg2
}

// 可选参数
function add1(arg1: number, arg2?: number): number {
  return arg1 + (arg2 || 0)
}

// 默认参数
function add2(arg1: number, arg2: number = 0): number {
  return arg1 + arg2
}

// 剩余参数
function add3(arg1: number, ...arg2: number[]): number {
  return arg1 + arg2.reduce((a, b) => a + b)
}

// 函数重载
function add4(arg1: number, arg2: number): number
function add4(arg1: string, arg2: string): string
function add4(arg1: any, arg2: any): any {
  return arg1 + arg2
}

console.log(add(1, 2))
console.log(add1(1))
console.log(add2(1))
console.log(add3(1, 2, 3, 4, 5))
console.log(add4(1, 2))
console.log(add4('1', '2'))
