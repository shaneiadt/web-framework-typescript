import { User } from './models/User';

const user = new User({ name: 'Johnny', age: 55 });

user.on('click', () => console.log('Click callback'));