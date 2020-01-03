import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';
export class User extends Model<UserProps> {
  static async buildUser(attrs: UserProps): Promise<User> {
    const { id } = attrs;
    const apiSync = new ApiSync<UserProps>(rootUrl);

    if (!id) {
      return new User(
        new Attributes<UserProps>(attrs),
        new Eventing(),
        apiSync
      );
    }

    const { data } = await apiSync.fetch(id);

    return new User(
      new Attributes<UserProps>(data),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    );

  }

  static async buildCollection(): Promise<Collection<User, UserProps>> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json));
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}