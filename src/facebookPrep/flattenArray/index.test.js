import flattenArray from './index'

const array = [
    [1,2,3],
    4,
    [5,6],
    7,8,9
]
const flattened = [1,2,3,4,5,6,7,8,9]
describe('flattenArray', () => {
    it('should flatten an array', () => {
        expect(flattenArray(array)).toEqual(flattened)
    })
})