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
export class User extends Model<UserProps> {
  static async buildUser(attrs: UserProps, rootUrl: string): Promise<User> {
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

  static async buildCollection(rootUrl: string): Promise<Collection<User, UserProps>> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json, rootUrl));
  }

  isAdminUser(): boolean {
    return this.get('id') === 1;
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}