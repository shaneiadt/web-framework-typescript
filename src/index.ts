import { User } from './models/User';

const user = new User({ id: 1, name: 'Newer Name', age: 0 });
// console.log(user.get('name'));

user.on('save', () => console.log(user));

user.save();
// user.set({ name: 'Pauly D' });

// console.log(user.get('name'));
// user.trigger('change');
// user.on('click', () => console.log('Click callback'));