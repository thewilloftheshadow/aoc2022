const points = {
	chosen: {
		rock: 1, paper: 2, scissors: 3
	},
	result: {
		lose: 0, draw: 3, win: 6
	}
}

const fs = require("fs")
const input = fs.readFileSync("input.txt", "utf8")
const guide = input.split(`\n`).map(x => {
	return {
		them: x.split(` `)[0],
		me: x.split(` `)[1]
	}
})

const guideToItem = (guide) => {
	if (guide === "A") return "rock"
	if (guide === "B") return "paper"
	if (guide === "C") return "scissors"
	if (guide === "X") return "rock"
	if (guide === "Y") return "paper"
	if (guide === "Z") return "scissors"
}

const getWinner = (them, me) => {
	if (them === me) return "draw"
	if (them === "rock" && me === "paper") return "win"
	if (them === "rock" && me === "scissors") return "lose"
	if (them === "paper" && me === "rock") return "lose"
	if (them === "paper" && me === "scissors") return "win"
	if (them === "scissors" && me === "rock") return "win"
	if (them === "scissors" && me === "paper") return "lose"
}

let finalScore = 0

guide.forEach((round) => {
	const them = guideToItem(round.them)
	const me = guideToItem(round.me)
	const winner = getWinner(them, me)
	finalScore += points.chosen[me]
	finalScore += points.result[winner]
})


console.log(finalScore)