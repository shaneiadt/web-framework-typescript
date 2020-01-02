import { User } from './models/User';
import { UserForm } from './views/UserForm';

const userForm = new UserForm(document.getElementById('root'));

userForm.render();

// const collection = User.buildCollection();

// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();