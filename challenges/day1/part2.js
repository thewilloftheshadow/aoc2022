// read input.txt file
const fs = require("fs")
const input = fs.readFileSync("input.txt", "utf8")

const elfs = input
    .split(`\n\n`)
    .map((elf) =>
        elf.split(`\n`).map((x) => {
            const count = parseInt(x, 10)
            return count
        })
    )
    .map((x) => {
        return x.reduce((a, b) => a + b, 0)
    })

elfs.sort((a, b) => b - a)

console.log(`The sum of the first 3 elfs is ${elfs[0] + elfs[1] + elfs[2]}`)
