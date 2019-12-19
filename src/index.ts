import { User } from './models/User';

const user = new User({
  name: 'Donny',
  age: 20
});

user.set({
  name: 'Shane',
})

console.log(user.get('age'));
console.log(user.get('name'));