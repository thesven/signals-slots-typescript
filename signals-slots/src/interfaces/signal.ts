import { Slot } from "./slot";

export interface ISignal<T> {
  connect(slot: Slot<T>): void;
  disconnect(slot: Slot<T>): void;
  emit(data: T): void;
}
