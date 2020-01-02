import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.randomAge': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input id="user-name" value="${this.model.get('name')}" />
        <button class="set-name">Change name</button>
        <button class="randomAge">Set random age</button>
      </div>
    `;
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  }

  onSetNameClick = (): void => {
    const input: HTMLInputElement | null = this.parent.querySelector('#user-name');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

}