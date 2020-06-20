// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  const resultObj = {}

  const arrChars = str.toLowerCase().split('')

  arrChars.forEach((char) => {
    if (/[a-z0-9]/.test(char)) {
      // if (resultObj[char] > 0) {
      if (Object.keys(resultObj).includes(char)) {
        resultObj[char]++
      } else {
        resultObj[char] = 1
      }
    }
  })

  return resultObj
}

console.log(charCount('Romino Rovirosa'))
