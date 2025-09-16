/**
 * Converts a number of bytes into a human-readable string (KB, MB, GB).
 * @param bytes Number of bytes
 * @returns Formatted string with appropriate unit
 */
export function formatSize(bytes: number): string {
  if (isNaN(bytes) || bytes < 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;
  let size = bytes;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  // Show up to 2 decimal places for non-integer values
  return `${size % 1 === 0 ? size : size.toFixed(2)} ${units[i]}`;
}
