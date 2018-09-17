import quickSort, {
    getPivotAsLastItem,
    sortRelativeToPivot,
    swap
} from './index'

const testList = [1,4,2-,1,5,6,7-,37,9,4,3,8]

describe('getPivotAsLastItem', () => {
    it('should return the pivot index as the last item in the array', () => {
        const pivotIndex = getPivotAsLastItem(testList)
        expect(pivotIndex).toEqual(testList.length - 1)
        expect(testList[pivotIndex]).toEqual(testList[testList.length - 1])
    })
})

// describe('sortRelativeToPivot', () => {
//     it('partition list and sort based on the pivot index', () => {
//         const partitioned = sortRelativeToPivot(testList, 0, testList.length - 1, testList.length -1)
//         expect(partitioned).toEqual([1,4,2,1,5,6,7,4,3,8,9,37])
//     })
// })

describe('swap', () => {
    it('should swap elements', () => {
        const left = 2
        const right = 6
        const list = [...testList]
        const testListWithSwapped = [1,4,7,1,5,6,2,37,9,4,3,8]
        swap(list, left, right)
        expect(list).toEqual(testListWithSwapped)
    })
})
