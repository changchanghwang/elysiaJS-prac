import { randomUUIDv7 } from "bun";
import { Constructable, Container } from "typedi";

export class Context {
  private _txId: string;

  get txId() {
    return this._txId;
  }

  private _dispose: () => void;

  dispose() {
    this._dispose();
  }

  private _get: <T>(type: Constructable<T>) => T;
  get<T>(type: Constructable<T>): T {
    return this._get(type);
  }

  private _set: <T>(type: Constructable<T>, instance: T) => void;
  set<T>(type: Constructable<T>, instance: T) {
    this._set(type, instance);
  }

  private _has: <T>(type: Constructable<T>) => boolean;
  has<T>(type: Constructable<T>): boolean {
    return this._has(type);
  }

  static of(txId: string) {
    return new Context(txId);
  }

  constructor(txId: string) {
    const containerId = randomUUIDv7();
    const container = Container.of(containerId);

    container.set(Context, this);

    this._txId = txId;

    this._dispose = () => {
      Container.reset(containerId);
    };

    this._get = <T>(type: Constructable<T>) => {
      return Container.get(type as Constructable<T>);
    };

    this._set = <T>(type: Constructable<T>, instance: T) => {
      Container.set(type, instance);
    };

    this._has = <T>(type: Constructable<T>) => {
      return Container.has(type);
    };
  }
}
