import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMaps(): { [key: string]: () => void } {
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

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMaps();

    for (let key in eventsMap) {
      const [event, selector] = key.split(':');

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(event, eventsMap[key]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}