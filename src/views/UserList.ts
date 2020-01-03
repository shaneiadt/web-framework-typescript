import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';
import { UserShow } from './UserShow';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(item: User): void {
    const isParentEmpty = false;
    new UserShow(this.parent, item).render(isParentEmpty);
  }
}