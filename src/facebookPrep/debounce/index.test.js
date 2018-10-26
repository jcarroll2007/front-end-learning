import debounce from './index'

it('should wait to call the function during the delay', () => {
  const mock = jest.fn()
  jest.useFakeTimers()
  const debounced = debounce(mock, 2000)
  debounced()
  expect(mock).not.toHaveBeenCalled()
  debounced()
  expect(mock).not.toHaveBeenCalled()
  jest.runTimersToTime(1999)
  expect(mock).not.toHaveBeenCalled()
  debounced()
  jest.runTimersToTime(1999)
  expect(mock).not.toHaveBeenCalled()
  jest.runTimersToTime(1)
  expect(mock).toHaveBeenCalledTimes(1)
})
