const fs = require("fs")
const packet = fs.readFileSync("input.txt", "utf8")

let checking = []

const characters = packet.split("")

const noMatch = (array) => {
	return array.every((item, i) => {
		return array.indexOf(item) === i
	})
	
}

characters.forEach((character, i) => {
    checking.push(character)

    if (checking.length === 4) {
        console.log(checking, i)
        debugger
        if (noMatch(checking)) {
            console.log(`Answer: ${i + 1}`)
            return
        }
        checking.shift()
    }
})
