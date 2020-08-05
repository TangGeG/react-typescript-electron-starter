import React from 'react'
import { Observer } from 'mobx-react-lite'
import 'mobx-react-lite/batchingOptOut'
import { HashRouter, Route, Redirect } from 'react-router-dom'

import { appStore } from '@/store'

import { GlobalStyle, ThemeProvider } from '@/styles'
import { routes } from './routes'

export const App = () => (
  <Observer>
    {() => (
      <ThemeProvider theme={appStore.theme}>
        <GlobalStyle />
        <HashRouter>
          {routes.map(r => (
            <Route exact key={r.path} path={r.path} component={r.component} />
          ))}
          <Redirect path='/' exact to='/home' />
        </HashRouter>
      </ThemeProvider>
    )}
  </Observer>
)
