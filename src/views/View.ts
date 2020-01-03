import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;
  abstract eventsMap(): { [key: string]: () => void };

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
    this.model.on('save', () => {
      this.render();
    });
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let key in eventsMap) {
      const [event, selector] = key.split(':');

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(event, eventsMap[key]);
      });
    }
  }

  render = (): void => {
    this.parent.innerHTML = '';
    const templateElement: HTMLTemplateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}