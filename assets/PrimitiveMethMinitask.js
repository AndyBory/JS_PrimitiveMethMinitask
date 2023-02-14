// 1. Напишите функцию, которая принимает строку и возвращает количество слов в ней.

function numberOfLines (str) {
  let words = str.trim().split(' ');
  console.log(words);
  return words.length;
}

const firstStr = '           test string aest test new yes 654654 hello     ';
console.log(numberOfLines(firstStr));


// 2. Напишите функцию, которая получает строку и возвращает размер самого большого слова в ней.

function sizeLargestWord (str) {
  const words = str.split(' ');
  console.log(words);
  let result = '';
  let size = 0;
  for(let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > size) {
      size = word.length
    }
  }
  return size;
}
const secondStr = '             test string aest test new yes largestword            ';
console.log(sizeLargestWord(secondStr));