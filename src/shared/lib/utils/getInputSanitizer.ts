export function getInputSanitizer(columnId: string): (val: string) => string {
  switch (columnId) {
    case 'price':
    case 'discountPercentage':
    case 'rating':
      return (val) => val.replace(/[^\d.]/g, ''); // Only keep numbers and dots
    case 'sku':
      return (val) => val.toUpperCase(); // Normalize SKU inputs
    case 'title':
    case 'brand':
      return (val) => val.trim(); // Trim whitespace
    default:
      return (val) => val;
  }
}
