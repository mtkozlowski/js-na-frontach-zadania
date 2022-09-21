type Age = number;
type AgeStage = 'minor' | 'adult' | 'senior';

interface Address {
  street: string,
  no: number,
}

interface IUser {
  name: string,
  age: Age,
  email: string,
  address?: Address;
  hasAddress: () => Boolean,
  isAdult: (requiredAge: Age) => string,
}

class User implements IUser {
  name: string;
  age: Age;
  email: string;
  address?: Address;

  constructor(name: string, email: string, age: Age, address?: Address) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.address = address;
  }

  hasAddress(): Boolean {
    return Boolean(this.address);
  }

  isAdult(requiredAge: Age): AgeStage {
    return this.age >= requiredAge ? 'adult': 'minor';
  }
}

const user = new User('Andy', 'andy@mail-me-tommorow.com', 30, { street: 'Main Street', no: 1 });

console.log(`User ${user.name} is ${user.isAdult(18)}`)
console.log(`and has${user.hasAddress() ? '' : ' no'} address`)
