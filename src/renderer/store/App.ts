import { observable, computed, action } from 'mobx'
import { ThemeMode } from '@/types'
import { theme } from '@/styles'

class App {
  @observable mode = ThemeMode.Light

  @computed
  get theme() {
    return theme[this.mode]
  }

  @action
  toggleTheme() {
    this.mode = this.mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light
  }
}

export const appStore = new App()
