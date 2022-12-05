const fs = require("fs")
const raw = fs.readFileSync("input.txt", "utf8")
const [cratesRaw, instructionsRaw] = raw.split("\n\n").map((x) => x.split("\n"))

const crates = cratesRaw.map((x) => x.match(/.{1,4}/g))
crates.forEach((x) => x.forEach((y, i) => (x[i] = y.trim())))

const stacks = []
crates.pop()
crates.reverse()

crates.map((row) => {
    row.map((crate, i) => {
        if (crate !== "") {
            if (!stacks[i]) stacks[i] = []
            stacks[i].push(crate)
        }
    })
})

debugger

instructions = instructionsRaw.map((x) => {
    const stripped = x.replace(/(move\s)|(from\s)|(to\s)/g, "")
    const [count, from, to] = stripped.trim().split(" ")
    return {
        count,
        from,
        to,
    }
})

instructions.map(instruction => {
	const {count, from, to} = instruction
	for(let i = 0; i < count; i++) {
		stacks[to - 1].push(stacks[from - 1].pop())
		console.log(instruction)
		console.log(stacks.map(x => x.join(" ")))
		debugger
	}
})

const stacksOnTop = stacks.map(x => x[x.length - 1]).join(" ")

console.log(stacksOnTop.replace(/\[\]\s/g, ""))