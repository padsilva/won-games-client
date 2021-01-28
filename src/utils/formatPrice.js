export const formatPrice = (price) =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
