export function wrapText(value: string, width: number): string[] {
  if (typeof value !== 'string' || !Number.isSafeInteger(width) || width < 1)
    throw new RangeError('Expected text and positive integer width');
  const words = value.trim().split(/\s+/u).filter(Boolean);
  const lines: string[] = [];
  let line = '';
  for (const word of words) {
    if (!line) line = word;
    else if (Array.from(line).length + 1 + Array.from(word).length <= width) line += ' ' + word;
    else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}
