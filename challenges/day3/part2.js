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

let groups = []

for (let i = 0; i < lines.length; i++) {
    if (i % 3 === 0) groups.push([])
    groups[groups.length - 1].push(lines[i])
}

const commonBadges = groups.map(group => {
	const [elf1, elf2, elf3] = group
	const elf1Split = elf1.split("")
	const elf2Split = elf2.split("")
	const elf3Split = elf3.split("")
	return elf1Split.find(x => elf2Split.includes(x) && elf3Split.includes(x))
})

console.log(commonBadges)

let total = 0

commonBadges.forEach((x) => (total += parseInt(getPriority(x))))

console.log(total)
