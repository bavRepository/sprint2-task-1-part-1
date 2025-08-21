import type { CounterProps } from '../../model/counter-reducer.ts'

const LOCAL_STORAGE_KEY = 'counter'

export const updateLSCounterData = (dataCounterObj: CounterProps, key: string = LOCAL_STORAGE_KEY) => {
  localStorage.setItem(key, JSON.stringify(dataCounterObj))
}

export const getCounterFromLS = (initialData: CounterProps): CounterProps => {
  let initialCounterData: CounterProps = initialData
  const storedCounter = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (storedCounter) {
    const parsedCounter: CounterProps = JSON.parse(storedCounter)
    initialCounterData = { ...parsedCounter }
  } else {
    updateLSCounterData(initialData)
  }
  return initialCounterData
}
