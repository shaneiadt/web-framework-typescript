import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveModelClick,
    };
  }

  template = (): string => {
    console.log('model', this.model);
    console.log(this.model.get('age'))
    return `
      <div>
        <input id="user-name" placeholder="${this.model.get('name')}" />
        <button class="set-name">Change name</button>
        <button class="set-age">Set random age</button>
        <button class="save-model">Save</button>
      </div>
    `;
  }

  onSaveModelClick = (): void => {
    this.model.save();
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