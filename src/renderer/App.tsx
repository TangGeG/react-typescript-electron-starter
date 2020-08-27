import React from 'react'
import { Observer } from 'mobx-react-lite'
import 'mobx-react-lite/batchingOptOut'
import { HashRouter, Route, Redirect } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import { appStore } from '@/store'

import { GlobalStyle, ThemeProvider } from '@/styles'
import { routes } from './routes'

dayjs.locale('zh-cn')

export const App = () => (
  <Observer>
    {() => (
      <ConfigProvider locale={zhCN}>
        <ThemeProvider theme={appStore.theme}>
          <GlobalStyle />
          <HashRouter>
            {routes.map(r => (
              <Route exact key={r.path} path={r.path} component={r.component} />
            ))}
            <Redirect path='/' exact to='/home' />
          </HashRouter>
        </ThemeProvider>
      </ConfigProvider>
    )}
  </Observer>
)
