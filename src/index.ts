import { User } from './models/User';

const user = new User({ id: 1 });
// console.log(user.get('name'));

user.on('change', () => console.log(user));

user.fetch();
// user.set({ name: 'Pauly D' });

// console.log(user.get('name'));
// user.trigger('change');
// user.on('click', () => console.log('Click callback'));