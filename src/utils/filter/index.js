export const parseQueryStringToWhere = ({ queryString, filterItems }) => {
  const obj = {}

  Object.keys(queryString)
    .filter((item) => item !== 'sort')
    .forEach((key) => {
      const item = filterItems?.find((item) => item.name === key)
      const isCheckbox = item?.type === 'checkbox'

      obj[key] = isCheckbox
        ? {
            name_contains: queryString[key]
          }
        : queryString[key]
    })

  return obj
}

export const parseQueryStringToFilter = ({ queryString, filterItems }) => {
  const obj = {}

  Object.keys(queryString).forEach((key) => {
    const item = filterItems?.find((item) => item.name === key)
    const isCheckbox = item?.type === 'checkbox'
    const isArray = Array.isArray(queryString[key])

    obj[key] = !isArray && isCheckbox ? [queryString[key]] : queryString[key]
  })

  return obj
}
