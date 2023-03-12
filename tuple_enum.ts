// tuple -> 元祖 -> 固定类型 + 固定长度的数组
const teacherInfo: [string, string, number] = ['toimc', 'mal', 12]
// enum -> 枚举 -> 一组有名字的常量集合
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Gender {
  Male,
  Female,
}

console.log(Gender.Female)
console.log(Gender[1])
