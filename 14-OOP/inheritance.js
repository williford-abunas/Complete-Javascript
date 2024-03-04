const Person = function (firstName, birthYear) {
  this.firstName = firstName
  this.birthYear = birthYear
}

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear)
}

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear)
  this.course = course
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}`)
}

const mike = new Student('Mike', 2020, 'Math')
console.log(mike)
mike.introduce()
mike.calcAge()

//coding challenge 3
const Car = function (make, speed) {
  this.make = make
  this.speed = parseInt(speed)
}

Car.prototype.accelerate = function () {
  this.speed += 10
  console.log(`${this.make} going at ${this.speed} km/h`)
}

Car.prototype.brake = function () {
  this.speed -= 5
  console.log(`${this.make} braking at ${this.speed} km/h`)
}

const mazda = new Car('Mazda', 100)
console.log(mazda)
mazda.accelerate()

const EV = function (make, speed, charge) {
  Car.call(this, make, speed)
  this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo
}

EV.prototype.accelerate = function () {
  this.speed += 20
  this.charge -= this.charge * 0.01
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  )
}

const kia = new EV('Kia', 100, 50)

kia.chargeBattery(90)
console.log(kia)
kia.brake()
kia.accelerate()

//ES6 Classes
class PersonCl {
  constructor(fullName, age) {
    ;(this.fullName = fullName), (this.age = age)
  }

  calcYear = () => 2037 - this.age

  //setting property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name
    else alert(`${name} is not a full name!`)
  }

  get fullName() {
    return this._fullName
  }

  //Static
  static hey = function () {
    return 'Hey There!'
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, age, course) {
    //constructor of Parent. Always needs to happen first
    super(fullName, age)
    this.course = course
  }

  introduce = function () {
    console.log(`My name is ${this.fullName}`)
  }

  calcYear = function () {
    console.log(`I'm ${2037 - this.age} years old. Override.`)
  }
}

const kim = new StudentCl('Kim Jones', 2012, 'Art')
console.log(kim)
kim.introduce()
kim.calcYear()

//Class field syntax - dynamically binds this to the instance
//Use case - event handlers
//calcYear = () => console.log(2037 - this.age)

//Traditional - good for prototypal inheritance
//calcYear() {
//   console.log(2037 - this.age);
// }

const PersonProto = {
  calcYear() {
    console.log(2037 - this.birthYear)
  },

  init(fullName, birthYear) {
    ;(this.fullName = fullName), (this.birthYear = birthYear)
  },
}

const ben = Object.create(PersonProto)
ben.init('Ben', 1890)
console.log(ben)

const StudentProto = Object.create(PersonProto)
StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear)
  this.course = course
}

StudentProto.introduce = function () {
  console.log(`${this.fullName} taking ${this.course}`)
}

const pol = Object.create(StudentProto)
pol.init('Pol', 2010, 'Science')
console.log(pol)
pol.introduce()
pol.calcYear()

//ES6 Class
//4 Class Fields
//-1)Public fields
//-2)Private fields
//-3)Public methods
//-4)Private methods
class Account {
  //1)pUBLIC FIELDS (instances)
  locale = navigator.language

  //2)private fields
  #movements = []
  #pin
  constructor(owner, currency, pin) {
    ;(this.owner = owner),
      (this.currency = currency),
      (this.#pin = pin),
      //protected property
      // (this.#movements = []),
      // (this.locale = navigator.language)

      console.log(`Thanks for opening account, ${this.owner}`)
  }

  //3) Public methods
  getMovements() {
    return this.#movements
  }

  deposit(val) {
    this.#movements.push(val)
    return this
  }

  withdrawal(val) {
    this.deposit(-val)
    return this
  }

  // approveLoan(val) {
  //   return true
  // }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val)
      console.log(`Loan approved`)
      return this
    }
  }

  //4) private methods
  #approveLoan(val) {
    return true
  }
}

const acc1 = new Account('Will', 'Peso', 1111)
acc1.deposit(500)
acc1.withdrawal(150)
acc1.requestLoan(1000)
console.log(acc1)
console.log(acc1.getMovements())

//Chaining
acc1.deposit(50).deposit(35).requestLoan(100).withdrawal(1000)
console.log(acc1.getMovements())

//Coding challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make
    this.speed = parseInt(speed)
  }

  accelerate() {
    this.speed += 10
    console.log(`${this.make} going at ${this.speed} km/h`)
    return this
  }

  brake() {
    this.speed -= 5
    console.log(`${this.make} braking at ${this.speed} km/h`)
  }
}

class EVCl extends CarCl {
  #charge
  constructor(make, speed, charge) {
    super(make, speed)
    this.#charge = charge
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo
    console.log(`${this.make} charging to ${chargeTo}`)
    return this
  }

  brake() {
    this.speed -= 10
    console.log(`${this.make} braking at ${this.speed} km/h. Override.`)
    return this
  }
}

const ford = new EVCl('Ford', 100, 80)

ford.accelerate().accelerate().chargeBattery(40).brake().accelerate()
console.log(ford)

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed)
//   this.charge = charge
// }

// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo
// }

// EV.prototype.accelerate = function () {
//   this.speed += 20
//   this.charge -= this.charge * 0.01
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   )
// }