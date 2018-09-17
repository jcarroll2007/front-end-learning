
export function getPivotAsLastItem(list) {
    return list.length - 1
}

export function swap(list, leftI, rightI) {
    const left = list[leftI]
    const right = list[rightI]
    list[leftI] = right
    list[rightI] = left
}

/**
 * [1,5,3,2,6,5,4]
 *  ^         ^ ^
 *  l         r p
 */
export function sortRelativeToPivot(list, startI, endI, pivotI) {
    if (list.length > 1) {
        let leftI = startI
        let rightI = endI === pivotI ? endI - 1 : endI
        const pivot = list[pivotI]
        while (leftI <= rightI) {
            console.log(leftI, rightI)
            let left = list[leftI]
            let right = list[rightI]
            if (left < pivot) {
                leftI++
                left = list[leftI]
            }
            if (right > pivot) {
                rightI--
                right = list[rightI]
            }
            if (left > pivot && right < pivot) {
                swap(list, leftI, rightI)
            }
        }
    }
    return list
}

export function createQuickSorter(getPivot=getPivotAsLastItem) {
    return () => {

    }
}

export default function quickSort(list) {

}