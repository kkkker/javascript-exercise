import Person from './person';
// TODO 20: 在这里写实现代码
export default class Teacher extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }

  introduce() {
    let str = `${super.introduce()} I am a Teacher. I teach `;
    if (typeof this.klass === 'number') {
      str += `Class ${this.klass}.`;
    } else {
      str += 'No Class.';
    }
    return str;
  }
}
