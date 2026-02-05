export function adaptThinkingStyle(input: string): string {
  if (input.includes("?")) return "analytical";
  if (input.length > 100) return "exploratory";
  return "concise";
}
