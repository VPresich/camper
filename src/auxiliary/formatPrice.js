export default function formatPrice(price) {
  return `€ ${price.toFixed(2).replace(".", ",")}`;
}
