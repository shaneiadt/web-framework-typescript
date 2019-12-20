import { User } from './models/User';

const user = new User({ name: 'Johnny', age: 55 });

console.log(user.get('name'));

user.on('change', () => console.log('user was changed - callback'));

user.set({ name: 'Pauly D' });

console.log(user.get('name'));
// user.trigger('change');
// user.on('click', () => console.log('Click callback'));