import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(private rootUrl: string) { }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl)
      .then((response: AxiosResponse) => {
        response.data.forEach((props: UserProps) => {
          const user = User.build(props);
          this.models.push(user);
        });
        this.events.trigger('change');
      });
  }
}