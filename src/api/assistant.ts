import { ContextManager } from "../context/contextManager";
import { ReasoningCore } from "../core/reasoning";
import { MemoryStore } from "../memory/memoryStore";

export function runAssistant(input: string) {
  const context = new ContextManager();
  const memory = new MemoryStore();
  const reasoning = new ReasoningCore(memory);

  context.update(input);
  const response = reasoning.think(context.get());

  console.log("🤖 Super Claw:", response);
}
