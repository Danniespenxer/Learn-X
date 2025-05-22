export function formatAiPrompt(msg: string): string {
  return `[USER] ${msg}\n[AI]`;
}