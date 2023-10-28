// 1 

function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const inputString = 'A man, a plan, a canal, Panama';
const result = isPalindrome(inputString);
console.log(result);

// 2

function fizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0){
            console.log('Fizz');
        } else if (i % 5 === 0){
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

// 3

function factorial(n) {
    if (n < 0) {
        return 'Factorial is undefined for negative numbers';
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

console.log(factorial(6));

// 5

function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacciRecursive(n - 1) + fibonacciRecursive (n - 2);
    }
}

console.log(fibonacciRecursive(5));

// 6 

function findMissingNumber(num) {
    let missingNumber = 0;

    for (let i = 0; i < num.length; i++) {
        missingNumber ^= num[i];
        missingNumber ^= i;
    }
    missingNumber ^= num.length;

    return missingNumber;
}
const num = [0,1,2,4]
console.log(findMissingNumber(num));

// 7

function reverseString(inputString) {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversed += inputString[i];
    }
    return reversed;
}

const originalString = 'devoleper';
const reversedString = reverseString(originalString);
console.log(reversedString);

// 10 

function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

const inputSentence = 'Animation software was introduced by jonathan gray';
const longestWord = findLongestWord(inputSentence);
console.log(longestWord);