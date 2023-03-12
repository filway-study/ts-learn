const pushArr = <T>(arr: T[], item: T): T[] => {
  arr.push(item)
  return arr
}

const arr: number[] = pushArr([1, 2, 3], 4)
