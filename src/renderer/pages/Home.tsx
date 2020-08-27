import React from 'react'
import { observer } from 'mobx-react-lite'
import { Checkbox } from 'antd'

import { styled, h } from '@/styles'
import { appStore } from '@/store'
import { ThemeMode } from '@/types'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .ant-checkbox-wrapper {
    color: ${h('fontPrimary')};
    font-size: 20px;
  }
`

export const Home = observer(() => {
  return (
    <Wrapper>
      <Checkbox
        defaultChecked={appStore.mode === ThemeMode.Dark}
        onChange={() => appStore.toggleTheme()}>
        暗黑模式
      </Checkbox>
    </Wrapper>
  )
})
