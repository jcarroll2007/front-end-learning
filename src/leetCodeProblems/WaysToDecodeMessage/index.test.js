import numWays from './index'

it('should decode the message', () => {
    expect(numWays('12')).toEqual(2)
    expect(numWays('22')).toEqual(2)
    expect(numWays('222')).toEqual(3)
    expect(numWays('02')).toEqual(0)
})