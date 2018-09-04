export default function insertionSort(items) {
  if (!items) return
  if (items.length === 0) return items

  for(let i = 1; i < items.length; i++) {
    let j = i - 1
    let valToSort = items[i]
    let valToCompare = items[j]

    while(valToSort < valToCompare && j >= 0) {
      items[j + 1] = valToCompare
      j -= 1
      valToCompare = items[j]
    }

    items[j + 1] = valToSort
  }

  return items
}
