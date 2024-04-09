import { generateUID } from "../utils";

export abstract class Entity<T> {
  protected readonly _id: string;
  protected readonly _props: T;

  public get props(): T {
    return this._props;
  }

  constructor(props: T, id?: string) {
    this._id = id ? id : generateUID();
    this._props = props;
  }
}
