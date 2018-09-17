import countingSort, {
    createEmptyOccurenceArray,
    getOccurences,
    transformOccurenceArrayToIndex,
    indexesToSortedArray
} from './index'

let max, items, possibleOccurences, occurences, indexes, sortedItems
beforeEach(() => {
    max = 9
    items = [1,4,7,7,8,3,2,9]
    possibleOccurences = [
        0,  //0
        0,  //1
        0,  //2
        0,  //3
        0,  //4
        0,  //5
        0,  //6
        0,  //7
        0,  //8
        0   //9
    ]
    occurences = [
        0,  //0
        1,  //1
        1,  //2
        1,  //3
        1,  //4
        0,  //5
        0,  //6
        2,  //7
        1,  //8
        1   //9
    ]
    indexes = [
        0,  //0
        1,  //1
        2,  //2
        3,  //3
        4,  //4
        4,  //5
        4,  //6
        6,  //7
        7,  //8
        8   //9
    ]
    sortedItems = [1,2,3,4,7,7,8,9]
})

describe('createEmptyOccurenceArray', () => {
    it('should return an array with all possible occurences and their values being 0', () => {
        expect(createEmptyOccurenceArray(max)).toEqual(possibleOccurences)
    })
})

describe('getOccurences', () => {
    it('should create object of all ints that occur in the given list of items', () => {
        expect(getOccurences(items, possibleOccurences)).toEqual(occurences)
    })
    it('should not mutate possibleOccurences', () => {
        const originalPossibleOccurences = [...possibleOccurences]
        const calculatedOccurences = getOccurences(items, possibleOccurences)
        expect(originalPossibleOccurences).toEqual(possibleOccurences)
        expect(calculatedOccurences).not.toBe(possibleOccurences)
    })
})

describe('transformOccurenceArrayToIndex', () => {
    it('should take an occurence array and transform the values to be their indices', () => {
        expect(transformOccurenceArrayToIndex(occurences)).toEqual(indexes)
    })
})

describe('indexesToSortedArray', () => {
    it('should transofmr the indexes array to the sorted array', () => {
        expect(indexesToSortedArray(items, indexes)).toEqual(sortedItems)
    })
})

describe('countingSort', () => {
    it('should sort the array', () => {
        expect(countingSort(items, 0, max)).toEqual(sortedItems)
    })
})