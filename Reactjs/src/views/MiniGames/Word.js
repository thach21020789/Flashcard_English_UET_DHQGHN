import wordBank from './wordle-bank.txt';
export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

export const generateWordSet = async () => {
    let wordSet;
    let todayWord;
    await fetch(wordBank).then((response) => response.text()).then((result) => {
        const wordArr = result.split("\n");
        todayWord = wordArr[Math.floor(Math.random() * wordArr.length)].toUpperCase();
        wordSet = new Set(wordArr);
    });
    return { wordSet, todayWord };
}