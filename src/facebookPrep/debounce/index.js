/**
 * This function receives a callback function
 * and a timeout. When the function is first called,
 * it will start the timeout and then call the callback
 * if no other calls are made to the return function
 * within the alotted timeout.
 */
export default function debounce(fn, timeout) {
  let currentTimeout
  return function startTimeout(...args) {
    if (currentTimeout) clearTimeout(currentTimeout)
      // console.log('got here')
    currentTimeout = setTimeout(() => {
      currentTimeout = null
      // console.log('================')
      fn(...args)
    }, timeout)
  }
}
