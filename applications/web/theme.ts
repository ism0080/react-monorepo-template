interface ColorMap {
  primary: number
  secondary?: number
  colors: {
    [key: number]: string
  }
}

type ColorSet = string[]

interface ThemeConfiguration {
  colors?: string | ColorSet
  background?: string | ColorMap
}

export const darkTheme: ThemeConfiguration = {
  colors: [
    'b30096', // Purple
    '#ff0060', // Red
    '#ace400' // Lime
  ],
  background: {
    primary: 400,
    colors: {
      400: '#1c2367',
      600: '#191f55',
      800: '#121537'
    }
  }
}
