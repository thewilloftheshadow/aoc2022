const fs = require("fs")
const input = fs.readFileSync("input.txt", "utf8")
const lines = input.split("\n")

// empty space for 0, a for 1
const priorities = [
    " ",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]

const getPriority = (char) => {
    return priorities.indexOf(char)
}

const backpacks = lines.map((line) => {
    return [line.slice(0, line.length / 2), line.slice(line.length / 2)]
})

const matches = backpacks.map((compartments) => {
    const [left, right] = compartments
    const leftSplit = left.split("")
    const rightSplit = right.split("")
    return getPriority(leftSplit.find((char) => rightSplit.includes(char)))
})

let total = 0

matches.forEach((x) => (total += parseInt(x)))

console.log(total)
