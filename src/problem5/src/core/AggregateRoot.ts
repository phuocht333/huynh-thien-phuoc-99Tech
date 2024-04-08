import { Entity } from './Entity';

export abstract class AggregateRoot<T> extends Entity<T> {
  // private _domainEvents: IDomainEvent[] = [];

  get id(): string {
    return this._id;
  }

  // TODO Handle domain events => Difference entities will communicate via Domain Events => loose coupling the application

  // get domainEvents(): IDomainEvent[] {
  //   return this._domainEvents;
  // }

  // protected addDomainEvent(domainEvent: IDomainEvent): void { }

  // public clearEvents(): void { }
}
