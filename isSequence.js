/*

Given a substring and a string, determind if the substring is a sequence in the originak string

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isSubSequence(s, t){
    let i = 0
    let j = 0
    while(i < s.length && j < t.length){
        if(s[i] === t[j]){
            i++
        }
        j++
    }
    return i === s.length
}
//Test
console.log(isSubSequence("abc", "ahbgdc")) // true