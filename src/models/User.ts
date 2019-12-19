import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

interface Events {
  [key: string]: Callback[];
}

export class User {
  events: Events = {};

  constructor(private data: UserProps) { }

  get(propName: string): (string | number) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = {
      ...this.data,
      ...update
    };
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach(callback => callback());
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        console.log(res);
        this.set(res.data);
      });
  }

  save(): void {
    const id = this.get('id');
    const data = { ...this.data };

    if (id) {
      axios.patch(`http://localhost:3000/users/${id}`, data)
        .then((res: AxiosResponse): void => {
          console.log('UPDATED - SAVED', res);
          // this.set(res.data);
        });
    } else {
      axios.post(`http://localhost:3000/users`, data)
        .then((res: AxiosResponse): void => {
          console.log('POST - SAVED', res);
          // this.set(res.data);
        });
    }
  }
}