import { Eventing } from './Eventing';
import axios, { AxiosResponse, AxiosPromise } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => Promise<T>) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetch() {
    return axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        const promises: Promise<T>[] = response.data.map(async (value: K) => this.models.push(await this.deserialize(value)));

        return Promise.all(promises);
      });
  }
}