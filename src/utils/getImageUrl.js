export const getImageUrl = (url) =>
  process.env.NEXT_PUBLIC_IMAGE_HOST
    ? `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
    : url || null
