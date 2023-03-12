// 接口 -> ts中的接口是一种规范的定义，定义了某一批类所需要遵守的规范
// 接口一般首字母大写 I
// 可以定义任意的结构或者类型

interface Ipoint {
  x: number
  y: number
}

const point: Ipoint = {
  x: 1,
  y: 2,
}
