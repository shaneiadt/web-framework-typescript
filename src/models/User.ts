interface UserProps {
  name?: string,
  age?: number
}

type Callback = () => void;

export class User {
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

  }

  trigger(eventName: string): void {

  }
}