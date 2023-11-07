import { ISignal } from "../interfaces/signal";
import { Slot } from "../interfaces/slot";

export class Signal<T> implements ISignal<T> {
  private slots: Slot<T>[] = [];

  connect(listener: (arg: T) => void): void {
    this.slots.push(listener);
  }

  disconnect(slot: (arg: T) => void): void {
    const index = this.slots.indexOf(slot);
    if (index !== -1) {
      this.slots.splice(index, 1);
    }
  }

  emit(arg: T): void {
    for (const slot of this.slots) {
      slot(arg);
    }
  }
}
