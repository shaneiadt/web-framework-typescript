export class UserForm {
  constructor(public parent: Element) { }

  eventsMaps(): { [key: string]: () => void } {
    return {
      'click:button': () => console.log('CLICKED')
    };
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click me!</button>
      </div>
    `;
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}