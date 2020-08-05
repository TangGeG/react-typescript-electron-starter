import { ThemeMode } from '@/types'

export const theme = {
  [ThemeMode.Light]: { bgPrimary: '#ffffff', fontPrimary: '#333333' },
  [ThemeMode.Dark]: {
    bgPrimary: '#212121',
    fontPrimary: '#eeeeee',
  },
}

export type ThemeType = typeof theme[ThemeMode.Light]

export const h = (key: keyof ThemeType) => ({
  theme,
}: {
  theme: ThemeType
}) => {
  return theme[key]
}
