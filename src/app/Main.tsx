import { MainPageStyled } from './MainPage_styles.ts'
import { Counter } from '../components/counter/Counter.tsx'
import { Controller } from '../components/controller/Controller.tsx'

export const Main = () => {
  return (
    <MainPageStyled>
      <Controller />
      <Counter />
    </MainPageStyled>
  )
}
