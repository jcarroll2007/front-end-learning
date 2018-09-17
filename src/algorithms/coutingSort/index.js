// Generate the array of integers that occur in the given list
// and initialize they're value to 0
export function createEmptyOccurenceArray(max) {
    const possibleOccurences = []
    for (let i = 0; i <= max; i++) {
        possibleOccurences[i] = 0
    }
    return possibleOccurences
}

export function getOccurences(items, possibleOccurences) {
    const occurences = [...possibleOccurences]
    items.forEach(i => {
        occurences[i] = occurences[i] + 1
    })
    return occurences
}

export function transformOccurenceArrayToIndex(occurences) {
    return occurences.reduce((indexes, count = 0) => {
        const previousCount = indexes[indexes.length - 1] || 0
        indexes.push(previousCount + count)
        return indexes
    }, [])
}

export function indexesToSortedArray(items, indexes) {
    const sorted = []
    for(let i = items.length - 1; i >= 0; i--) {
        // get the current item to sort from the reverse traversal of
        // the original items
        const currentItem = items[i]
        // get the index to sort that item at
        const index = indexes[currentItem]
        // decrement the index for the next occurence (if it exists)
        indexes[currentItem] = indexes[currentItem] - 1
        // Indexes are base 1 (not base 0)
        sorted[index - 1] = currentItem
    }
    return sorted
}

export default function coutingSort(items, min, max) {
    const possibleOccurences = createEmptyOccurenceArray(max)
    const occurences = getOccurences(items, possibleOccurences)
    const indexes = transformOccurenceArrayToIndex(occurences)
    return indexesToSortedArray(items, indexes)
}