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

user.on('click', () => console.log('CLICK CALLBACK'));
user.on('hover', () => console.log('HOVER CALLBACK'));
user.on('click', () => console.log('CLICK CALLBACK'));

user.trigger('hover');