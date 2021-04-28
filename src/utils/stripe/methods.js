const fetcher = async ({ url, body, token }) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body
  })

  return await response.json()
}

export const createPaymentIntent = async ({ items, token }) =>
  fetcher({
    url: '/orders/create-payment-intent',
    body: JSON.stringify({ cart: items }),
    token
  })

export const createPayment = async ({ items, paymentIntent, token }) =>
  fetcher({
    url: '/orders',
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method
    }),
    token
  })
