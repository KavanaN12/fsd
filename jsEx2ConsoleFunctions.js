// =====================================================
// 🧮 THE CALCULATOR (Reimagined Version)
// =====================================================

function squareNumber(num) {
    const result = num ** 2;
    console.log(`Squaring ${num} gives ${result}.`);
    return result;
}

function halfNumber(num) {
    const result = num / 2;
    console.log(`Half of ${num} equals ${result}.`);
    return result;
}

function percentOf(part, whole) {
    const percentage = ((part / whole) * 100).toFixed(2);
    console.log(`${part} represents ${percentage}% of ${whole}.`);
    return percentage;
}

function areaOfCircle(radius) {
    const area = Math.PI * radius ** 2;
    const roundedArea = Number(area.toFixed(2));
    console.log(`A circle with radius ${radius} has an area of ${roundedArea}.`);
    return roundedArea;
}

function processAll(num) {
    const half = halfNumber(num);
    const squared = squareNumber(half);
    const circleArea = areaOfCircle(squared);
    const ratio = percentOf(circleArea, squared);
    return ratio;
}

processAll(6);

// =====================================================
// 🔀 MIX UP STRINGS
// =====================================================

function mixUp(str1, str2) {
    const swapped1 = str2.slice(0, 2) + str1.slice(2);
    const swapped2 = str1.slice(0, 2) + str2.slice(2);
    return `${swapped1} ${swapped2}`;
}

console.log(mixUp('mix', 'pod'));
console.log(mixUp('dog', 'dinner'));

// =====================================================
// 💫 FIX START CHARACTER
// =====================================================

function fixStart(str) {
    const firstChar = str.charAt(0);
    const updated = str.slice(1).replaceAll(firstChar, '*');
    return firstChar + updated;
}

console.log(fixStart('babble'));

// =====================================================
// 🏊‍♀️ VERBING
// =====================================================

function verbing(word) {
    if (word.length < 3) return word;
    return word.endsWith('ing') ? `${word}ly` : `${word}ing`;
}

console.log(verbing('run'));
console.log(verbing('reading'));
console.log(verbing('go'));

// =====================================================
// 😎 NOT BAD SENTENCE FIXER
// =====================================================

function notBad(sentence) {
    const notPos = sentence.indexOf('not');
    const badPos = sentence.indexOf('bad');

    if (notPos !== -1 && badPos > notPos) {
        return sentence.slice(0, notPos) + 'good' + sentence.slice(badPos + 3);
    }
    return sentence;
}

console.log(notBad('This food is not that bad!'));
console.log(notBad('The day is not so bad!'));
console.log(notBad('This dinner is bad!'));

// =====================================================
// 🐾 THE PLURALIZER
// =====================================================

function pluralize(noun, number) {
    const exceptions = { sheep: 'sheep', goose: 'geese', fish: 'fish' };
    const pluralForm = exceptions[noun] || noun + 's';
    const result = number === 1 ? `${number} ${noun}` : `${number} ${pluralForm}`;
    console.log(result);
    return result;
}

pluralize('cat', 5);
pluralize('dog', 1);
pluralize('goose', 2);
pluralize('fish', 3);
pluralize('sheep', 4);

// =====================================================
// 🎨 THE ARRAY OF FAVORITES
// =====================================================

const favorites = ['blue', 'green', 'red', 'yellow', 'purple'];

favorites.forEach((color, i) => {
    const suffix = ['st', 'nd', 'rd'][i] || 'th';
    console.log(`My ${i + 1}${suffix} favorite color is ${color}.`);
});

// =====================================================
// 🔠 WORD GUESSING GAME (Lite Hangman)
// =====================================================

const word = ['C', 'O', 'D', 'E'];
let progress = Array(word.length).fill('_');
let guessed = new Set();
let reward = 0;
let strikes = 0;

function guessLetter(letter) {
    letter = letter.toUpperCase();
    if (guessed.has(letter)) {
        console.log(`You've already tried ${letter}.`);
        return;
    }

    guessed.add(letter);
    let correctGuess = false;
    let occurrences = 0;

    word.forEach((ch, i) => {
        if (ch === letter) {
            progress[i] = letter;
            correctGuess = true;
            occurrences++;
        }
    });

    console.log(progress.join(' '));

    if (correctGuess) {
        console.log(`Nice! You uncovered ${occurrences} letter(s).`);
        reward += occurrences * Math.floor(Math.random() * 100 + 20);
    } else {
        console.log(`${letter} isn't part of the word.`);
        reward -= Math.floor(Math.random() * 50 + 5);
        strikes++;
    }

    if (!progress.includes('_')) {
        console.log(`🎉 You solved it! Final reward: $${reward}`);
    } else if (strikes >= 6) {
        console.log(`❌ Too many misses! The word was "${word.join('')}".`);
    }
}

guessLetter('c');
guessLetter('o');
guessLetter('x');
guessLetter('d');
guessLetter('e');

// =====================================================
// 🍫 RECIPE CARD
// =====================================================

const recipe = {
    title: 'Choco Delight',
    servings: 4,
    ingredients: ['cocoa', 'milk', 'sugar', 'butter']
};

console.log(`Recipe: ${recipe.title}`);
console.log(`Serves: ${recipe.servings}`);
console.log('Ingredients:');
recipe.ingredients.forEach(item => console.log(`- ${item}`));

// =====================================================
// 📖 READING LIST
// =====================================================

const readingList = [
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', read: true },
    { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', read: false },
    { title: '1984', author: 'George Orwell', read: true }
];

readingList.forEach(book => {
    const message = book.read
        ? `✅ You’ve finished "${book.title}" by ${book.author}.`
        : `📚 You still need to read "${book.title}" by ${book.author}.`;
    console.log(message);
});

// =====================================================
// 🎬 MOVIE DATABASE
// =====================================================

const movie = {
    title: 'Interstellar',
    duration: 169,
    stars: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain']
};

function describeMovie(m) {
    console.log(`${m.title} runs for ${m.duration} minutes. Starring: ${m.stars.join(', ')}.`);
}

describeMovie(movie);

// =====================================================
// 💰 CASH REGISTER
// =====================================================

function cashRegister(cart) {
    return Object.values(cart).reduce((sum, price) => sum + parseFloat(price), 0);
}

const cart = {  
    banana: "1.25",
    Tshirt: "20.00",
    apple: "0.80",
    juice: "3.50",
    notebook: "5.30"
};

console.log(`Total bill: $${cashRegister(cart).toFixed(2)}`);

// =====================================================
// 💳 CREDIT CARD VALIDATION
// =====================================================

function validateCreditCard(cardNum) {
    const clean = cardNum.replace(/-/g, '');
    if (!/^\d+$/.test(clean)) return { valid: false, number: cardNum, error: 'contains_non_digits' };
    if (clean.length !== 16) return { valid: false, number: cardNum, error: 'invalid_length' };

    const digits = clean.split('').map(Number);
    const uniqueDigits = new Set(digits);

    if (uniqueDigits.size < 2) return { valid: false, number: cardNum, error: 'all_digits_same' };
    if (digits[15] % 2 !== 0) return { valid: false, number: cardNum, error: 'last_digit_odd' };
    if (digits.reduce((a, b) => a + b, 0) <= 16) return { valid: false, number: cardNum, error: 'sum_too_low' };

    return { valid: true, number: cardNum };
}

console.log(validateCreditCard('9999-9999-8888-0000'));
console.log(validateCreditCard('6666-6666-6666-1666'));
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));
