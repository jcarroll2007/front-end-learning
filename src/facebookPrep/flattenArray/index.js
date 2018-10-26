// [1, [2, [3]]]


// [num, arr]

// export default function flattenArray(arr) {
//     return arr.reduce((flattened, item) => {
//         item = Array.isArray(item) ? flattenArray(item) : item
//         return flattened.concat(item)
//     }, [])
// }

// export default function flattenArray(arr, flattened = []) {
//   arr.forEach(item => {
//     Array.isArray(item) ? flattenArray(item, flattened) : flattened.push(item)
//   })
//   return flattened
// }


/**
 * Return the nested array item given the arr and indices
 */
function get(arr, indices) {
  let item = arr[indices[0]]
  indices.forEach((index, i) => {
    // skip the first index because we already set it on the first line of this function
    if (i !== 0) {
      item = item[index]
    }
  })
  return item
}

/**
 * Return true or false based on whether the nested item in arr exists or not
 */
function exists(arr, indices) {
  const indicesWithoutLast = [...indices]
  const lasti = indicesWithoutLast.pop()
  const lastArr = indicesWithoutLast.length > 0 ? get(arr, indicesWithoutLast) : arr
  return lasti <= lastArr.length - 1
}

export default function flattenArray(arr) {
  if (!Array.isArray(arr)) return
  let flat = []
  if (arr.length === 0) return flat

  const indices = [0]

  while (indices.length > 0) {
    if (!exists(arr, indices)) {
      indices.pop()
      if (indices.length !== 0) {
        indices.push(indices.pop() + 1)
      }
      continue
    }

    const item = get(arr, indices)
    if (Array.isArray(item)) {
      indices.push(0)
      continue
    }

    flat.push(item)
    indices.push(indices.pop() + 1)
  }

  return flat
}