export default function find00OldPerson(collection) {
  // TODO 4: 在这里写实现代码
  return collection.find(people => people.age <= 20 && people.age >= 10).name;
}
