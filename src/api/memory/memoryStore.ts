import { LongTermMemory } from "./longTerm";
import { ShortTermMemory } from "./shortTerm";

export class MemoryStore {
  longTerm = new LongTermMemory();
  shortTerm = new ShortTermMemory();

  save(data: string) {
    this.longTerm.store(data);
  }

  recall() {
    return this.longTerm.getAll();
  }
}
