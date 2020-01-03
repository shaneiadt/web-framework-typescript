import { User } from './models/User';
import { UserList } from './views/UserList';
import { UserEdit } from './views/UserEdit';

(async () => {
  const user = await User.buildUser({ id: 4 }, 'http://localhost:3000/users');
  const userRoot = document.getElementById('user');

  if (userRoot) {
    const userEdit = new UserEdit(userRoot, user);
    userEdit.render();
  }

  const userListRoot = document.getElementById('user-list');
  const collection = await User.buildCollection('http://localhost:3000/users');
  const fillCollection = await collection.fetch();

  if (fillCollection && userListRoot) {
    const userList = new UserList(collection, userListRoot);
    userList.render();
  }

})()