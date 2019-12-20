import { User } from './models/User';

const user = User.build({ id: 1, name: 'Newer Name', age: 0 });
console.log(user.get('name'));


user.on('save', () => console.log(user));
user.set({ name: 'Pauly D' });
user.save();

// console.log(user.get('name'));
// user.trigger('change');
// user.on('click', () => console.log('Click callback'));