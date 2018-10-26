// Problem can be found here https://www.youtube.com/watch?v=qli-JCrSwuk

export default function numWays(s) {
    return helper(s, s.length)
}

export function helper(s, i, memo={}) {
    if (i === 0) return 1

    // how many characters are left?
    const currentChar = s.length - i
    if (s[currentChar] === '0') return 0

    if (memo[i] != null)
        return memo[i]

    let result = helper(s, i - 1)
    if (i >= 2 && parseInt(s.substring(currentChar, currentChar + 2)) <= 26) result += helper(s, i -2)
    memo[i] = result
    return result
}