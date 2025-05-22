export function focusFirstInput() {
  const input = document.querySelector("input, textarea, select") as HTMLElement;
  if (input) input.focus();
}
 