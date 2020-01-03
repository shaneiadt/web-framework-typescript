import { CollectionView } from './CollectionView';
import { User, UserProps } from '../models/User';

export class UserList extends CollectionView<User, UserProps> {
  renderItem(item: User): void {
    const templateElement: HTMLTemplateElement = document.createElement('template');
    templateElement.innerHTML = `
      <div>
        <div>User name: ${item.get('name')}</div>
        <div>User age: ${item.get('age')}</div>
      </div>
      <br/>
    `;
    this.parentElement.append(templateElement.content);
  }
}