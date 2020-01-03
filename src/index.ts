import { User } from './models/User';
import { UserForm } from './views/UserForm';

(async () => {
  const user = await User.buildUser({ id: 4 });
  const root = document.getElementById('root');

  if (root) {
    const userForm = new UserForm(root, user);
    userForm.render();
  }

  const collection = await User.buildCollection();

  collection.on('change', () => {
    console.log(collection);
  });

  collection.fetch();
})()


