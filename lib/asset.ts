// Prefix paths under /public with the GitHub Pages base path.
export function asset(path: string): string {
  if (!path || /^(https?:|mailto:|data:)/.test(path)) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
