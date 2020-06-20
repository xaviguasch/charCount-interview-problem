// Write a function which takes in a string and returns counts of each character in the string.

function charCount(str) {
  const resultObj = {}

  let arrChars = str.toLowerCase().split('')

  arrChars.forEach((char) => {
    if (Object.keys(resultObj).includes(char)) {
      resultObj[char]++
    } else {
      resultObj[char] = 1
    }
  })

  return resultObj
}

console.log(charCount('Romino Rovirosa'))
