import * as crypto from 'crypto';

export function isEmpty(value: any): boolean {
  if (value == null) return true; // null or undefined
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

export function delay(ms: number = 3000): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createHash(key: string): string {
  return crypto.createHash('sha256').update(key).digest('hex').slice(0, 15);
}

export function generateHashedCacheKey(
  path: string,
  query: Record<string, any>,
) {
  const sorted = Object.keys(query)
    .sort()
    .map((key) => `${key}:${query[key]}`)
    .join('|');

  const hash = createHash(`${path}:${sorted}`);
  return hash;
}
