import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    private rootUrl: string,
    public deserialize: (json: K) => Promise<T>) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        const promises: Promise<T>[] = response.data.map(async (value: K) => this.models.push(await this.deserialize(value)));

        Promise.all(promises)
          .then(() => this.events.trigger('change'));
      });
  }
}