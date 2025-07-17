import { getInputSanitizer } from './getInputSanitizer';

export function buildProductsFilterFromQuery(
  query: URLSearchParams,
  excludeKeys: string[] = ['page', 'pageSize']
): Record<string, unknown > {
  const where: Record<string, unknown > = {};

  query.forEach((value, key) => {
    if (excludeKeys.includes(key)) return;

    const cleaner = getInputSanitizer(key);
    const cleaned = cleaner(value);

    // Parse number if possible
    if (!isNaN(Number(cleaned)) && cleaned.trim() !== '') {
      where[key] = Number(cleaned);
    } else if (cleaned === 'true' || cleaned === 'false') {
      where[key] = cleaned === 'true';
    } else {
      where[key] = {
        contains: cleaned,
        mode: 'insensitive',
      };
    }
  });

  return where;
}
