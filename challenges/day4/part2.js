const fs = require("fs")
const raw = fs.readFileSync("input.txt", "utf-8")

const pairs = raw.split("\n").map((x) => x.split(","))

const toRangeArray = (rangeString) => {
    const [start, end] = rangeString.split("-").map((x) => parseInt(x))
    return [...Array(end - start + 1)].map((_, i) => start + i)
}

const rangeArrays = pairs.map((pair) => {
    return pair.map((elf) => {
        return toRangeArray(elf)
    })
})

const isOverlapping = rangeArrays.map((pair) => {
    const [a, b] = pair
    return a.some((x) => b.includes(x)) || b.some((x) => a.includes(x))
})

console.log(isOverlapping.filter((x) => x).length)
