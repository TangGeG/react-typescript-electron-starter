import React from 'react'
import { observer } from 'mobx-react-lite'
import { styled } from '@/styles'
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
`

export const Home = observer(() => {
  return (
    <Wrapper>
      <h1>Home</h1>
      <p>
        <label>
          暗黑模式:&nbsp;&nbsp;
          <input
            type='checkbox'
            defaultChecked={appStore.mode === ThemeMode.Dark}
            onClick={() => {
              appStore.toggleTheme()
            }}
          />
        </label>
      </p>
    </Wrapper>
  )
})
