import { Collection } from '../models/Collection'

export abstract class CollectionView<T, K> {
  constructor(public collection: Collection<T, K>, public parentElement: Element) { }

  abstract renderItem(model: T): void;

  render(): void {
    this.collection.models.forEach((item: T) => {
      this.renderItem(item);
    });
  }
}
