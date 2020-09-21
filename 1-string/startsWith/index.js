export default function collectCarNumberCount(collection) {
  // TODO 7: 在这里写实现代码
  return collection.reduce((acc, cur) => {
    if (cur.startsWith('粤A')) {
      return acc + 1;
    }
    return acc;
  }, 0);
}
