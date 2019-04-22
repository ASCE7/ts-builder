export type IBuilder<T> = { [k in keyof T]: (value: T[k]) => IBuilder<T> } & {
  build(): T;
};

export class Builder {
  private builder: any;
  private state;

  of<T>(prototype?: Partial<T>): IBuilder<T> {
    this.state = prototype ? Object.assign({}, prototype) : {};

    var self = this;
    this.builder = (new Proxy(this, {
      get(target, p, receiver) {
        if (p === 'build') {
          return () => self.state;
        }

        return (value: any): any => {
          self.state[p] = value;
          return (self.builder as any) as IBuilder<T>;
        };
      }
    }) as any) as IBuilder<T>;

    return this.builder;
  }
}
