import { User } from './models/User';

const user = new User({ name: 'New', age: 0 });

user.events.on('click', () => console.log('BOOM'));

user.events.trigger('click');

// user.save();
// user.fetch();

// setTimeout(() => {
//   user.set({
//     name: 'Shanesss'
//   });
//   user.save();
// }, 2000);