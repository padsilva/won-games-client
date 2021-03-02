const APP_KEY = 'WONGAMES'

export const getStorageItem = (key) => {
  // no Next via Server/Static nao tem window
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data)
}

export const setStorageItem = (key, value) => {
  // no Next via Server/Static nao tem window
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
