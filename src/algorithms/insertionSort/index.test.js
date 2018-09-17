import insertionSort from './index'

const testCases = [
  [4,5,12,6,3,7,1,8,9],
  [0],
  [],
  [432671463271432, 4]
]

describe('Insertion Sort', () => {
  let testCases
  beforeEach(() => {
    testCases = [
      [4,5,12,6,3,7,1,8,9],
      [0],
      [],
      [432671463271432, 4],
      [4,4,4,5,2,3,6,65,3,2,1,3,4,5,6,6,3,4,5,4],
      [-2,3,4,5,-5]
    ]
  })

  it('should return the same array', () => {
    expect(insertionSort(testCases[0])).toBe(testCases[0])
  })

  it('should return the array sorted', () => {
    testCases.forEach(testCase =>
      expect(insertionSort([...testCase]))
        .toEqual(testCase.sort((a, b) => a - b))
    )

    expect(insertionSort([...testCases[0]])).toEqual(testCases[0].sort((a, b) => a - b))
  })
})
