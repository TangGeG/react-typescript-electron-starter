import { createGlobalStyle } from './styled-components'
import { h } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  html,
  body,
  #root {
    height: 100%;
    background: ${h('bgPrimary')};
    color: ${h('fontPrimary')};
  }
`
