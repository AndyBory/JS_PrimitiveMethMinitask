// 1. Напишите функцию, которая принимает строку и возвращает количество слов в ней.
const notWords = ['', '+',  '-', '*', '/', ',', '.', ':', ';', '(', ')'];

// function numberOfLines(str, disalowedWordsArray = notWords) {
//   const words = str.split(' ');
//   const filtered = words.filter((word) => !disalowedWordsArray.includes(word));
//   console.log(words);
//   return filtered.length;
// }

const numberOfLines = (str, disalowedWordsArray = notWords) => str.split(' ').filter((word) => !disalowedWordsArray.includes(word)).length;

const firstStr = '  test string * aest    / test new yes  hello  .  , ';
// console.log(firstStr);
console.log(numberOfLines(firstStr));


// 2. Напишите функцию, которая получает строку и возвращает размер самого большого слова в ней.

function sizeLargestWord (str) {
  const words = str.split(' ');
  // console.log(words);
  let size = words[0].length;
  // for(i = 1; i < words.length; i++) {
  //   if (words[i].length > size) {
  //     size = words[i].length
  //   }
  // }
  words.forEach(word => {
    if (word.length > size) {
      size = word.length;
    }
  });
  return size;
}
const secondStr = 'test string aest test new yes largestword      good';
console.log(sizeLargestWord(secondStr));