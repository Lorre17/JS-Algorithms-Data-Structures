/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/

function reverseStringJSWay(text){
    return [...text].reverse().join('')
}

function reverseStringFPWay(text){
    const result = ""

    for (let i = text.length - 1; i >= 0; i--) {
        result += text[i]
    }

    return result
}

function reverseStringFPES6Way(text) {
  let result = "";

  for (let char of text) result = char + result;

  return result;
}

function reverseString(text){
    if(text === "")
        return ""
    else return reverseString(text.substr(1)) + text[0]
}

module.exports = reverseString;
