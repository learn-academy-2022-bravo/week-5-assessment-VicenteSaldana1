// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest



// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
    it("takes in a string and returns a coded message.", () => {
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// Successful Failure 
//  FAIL  ./code-challenges.test.js
//   codedMessage
//   ✕ takes in a string and returns a coded message.
// ● codedMessage › takes in a string and returns a coded message.
//   ReferenceError: codedMessage is not defined


// b) Create the function that makes the test pass.
// Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// Pseudo Code 
// Create a function: codedMessage 
// input is a string 
// need to convert letters into numbers ---> create new variable that holds new values of each letter being replaced
// output is a string with coded message that includes replaced letters - HOF of .map to get back output of the same length
// according to google, there is a built in method of hasOwnProperty that can be applied in this situation 
// lastly, will need to use built-in method of .split followed by .join


const codedMessage = (message) => {
    const letters = {'a': 4, 'e': 3, 'i': 1, 'o': 0, 'A': 4, 'E': 3, 'I': 1, 'O': 0}
    const letter_checker = (words) => {
        return letters.hasOwnProperty(words)?
    letters[words]:words
    }
        return message.split('').map(letter_checker).join('')
}


// Output 
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.


describe("particular_words", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        expect(particular_words(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(particular_words(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// Successful Failure 
// ● particular_words › takes in an array of words and a single letter and returns all the words that contain that particular letter.
// ReferenceError: particular_words is not defined


// b) Create the function that makes the test pass.
// Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// Pseudo Code 
// create a method : particular_words 
// takes in two arguments (array, letter)
// use HOF .filter to iterate through the array of words, followed by toLowerCase and check to see if each word includes (letter) by using the built in method of .include() and passing in this parameter


const particular_words = (array, letter) => {
    return array.filter(value => value.toLowerCase().includes(letter))
}

// Test Result
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. (1 ms)
// particular_words
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
})

// Successful Failure 
// ● fullHouse › takes in a string and returns a coded message.
//     ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.
// Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// Pseudo Code 
// create a function : fullHouse 
// input is an array of numbers 
// function must determine whether or not the array is a full house, which equates to exactly one pair and one three of a kind. will need to iterate, for loop? 
// will need to create an empty array 
// conditional statement to determine pairs and three of a kind hands 
// output is a boolean value (true or false)

const fullHouse = (array) => {
    let cardArray = {}
    for(let x of array){
        cardArray[x] = (cardArray[x] || 0) + 1;
    }
    let values = Object.values(cardArray);
    if((values[0] === 2 && values[1] === 3) || (values[1] === 2 && values[0] === 3)){
      return true;
    }
    return false;
  }

//   Test Result
//   PASS  ./code-challenges.test.js
//   codedMessage
//     ✓ takes in a string and returns a coded message. (2 ms)
//   particular_words
//     ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter.
//   fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total

