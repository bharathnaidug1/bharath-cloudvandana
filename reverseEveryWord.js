const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", function (sentence) {
    const reversedSentence = reverseWordsInSentence(sentence);
    console.log("Reversed sentence: " + reversedSentence);
    rl.close();
});

function reverseWordsInSentence(sentence) {
    const words = sentence.split(" ");

    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });

    return reversedWords.join(" ");
}