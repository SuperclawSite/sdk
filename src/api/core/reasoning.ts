import { MemoryStore } from "../memory/memoryStore";

export class ReasoningCore {
  constructor(private memory: MemoryStore) {}

  think(context: string): string {
    if (context.toLowerCase().includes("remember")) {
      this.memory.save(context);
      return "Got it. I’ll remember that.";
    }

    return "I understand. Let’s keep building on this.";
  }
}
