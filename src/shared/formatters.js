export function toCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export function toShortDate(date) {
  return new Date(date).toLocaleDateString();
}
