import { Collection } from '../models/Collection'

export abstract class CollectionView<T, K> {
  constructor(public collection: Collection<T, K>, public parent: Element) { }

  abstract renderItem(model: T, itemElement: Element): void;

  render(): void {
    this.parent.innerHTML = '';
    const templateElement: HTMLTemplateElement = document.createElement('template');
    this.collection.models.forEach((item: T) => {
      const itemElement = document.createElement('div');
      this.renderItem(item, itemElement);
      templateElement.content.append(itemElement);
    });
  }
}
