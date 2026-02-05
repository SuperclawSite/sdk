export class LongTermMemory {
  private memories: string[] = [];

  store(entry: string) {
    this.memories.push(entry);
  }

  getAll() {
    return this.memories;
  }
}
