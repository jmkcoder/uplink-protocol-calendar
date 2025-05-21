/**
 * Mock implementation of core types from @uplink-protocol/core
 * This allows us to develop without direct dependency on the library
 */

export class Binding<T> {
  private _value: T;

  constructor(initialValue: T) {
    this._value = initialValue;
  }

  public get value(): T {
    return this._value;
  }

  public set(newValue: T): void {
    this._value = newValue;
  }
}

export class EventEmitter<T> {
  private _listeners: ((data: T) => void)[] = [];

  public on(listener: (data: T) => void): void {
    this._listeners.push(listener);
  }

  public off(listener: (data: T) => void): void {
    this._listeners = this._listeners.filter(l => l !== listener);
  }

  public emit(data: T): void {
    this._listeners.forEach(listener => listener(data));
  }
}

export interface TypedController {
  bindings: Record<string, Binding<any>>;
  methods?: Record<string, (...args: any[]) => any>;
  events?: Record<string, EventEmitter<any>>;
}

export interface ControllerAdapter {
  registerController: (controller: TypedController) => void;
}
