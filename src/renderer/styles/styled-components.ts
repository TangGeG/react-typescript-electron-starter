import * as styledComponents from 'styled-components'
import { ThemeType } from './theme'

const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeType>

export { ThemeProvider, styled, css, createGlobalStyle }
