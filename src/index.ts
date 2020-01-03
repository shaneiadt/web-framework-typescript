import { User } from './models/User';
import { UserList } from './views/UserList';
// import { UserForm } from './views/UserForm';
// import { UserEdit } from './views/UserEdit';

(async () => {
  // const user = await User.buildUser({ id: 4 }, 'http://localhost:3000/users');
  const root = document.getElementById('root');

  // if (root) {
  //   const userEdit = new UserEdit(root, user);
  //   userEdit.render();

  //   console.log({ userEdit });
  // }

  const collection = await User.buildCollection('http://localhost:3000/users');
  const fillCollection = await collection.fetch();

  if (fillCollection && root) {
    const userList = new UserList(collection, root);
    userList.render();
  }

})()