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
		goal: x.split(` `)[1]
	}
})

const guideToItem = (guide) => {
	if (guide === "A") return "rock"
	if (guide === "B") return "paper"
	if (guide === "C") return "scissors"
}

const guideToGoal = (guide) => {
	if (guide === "X") return "lose"
	if (guide === "Y") return "draw"
	if (guide === "Z") return "win"
}

const getItemToWin = (them, goal) => {
	if (goal === "draw") return them
	if (goal === "lose") {
		if (them === "rock") return "scissors"
		if (them === "paper") return "rock"
		if (them === "scissors") return "paper"
	}
	if (goal === "win") {
		if (them === "rock") return "paper"
		if (them === "paper") return "scissors"
		if (them === "scissors") return "rock"
	}
}

let finalScore = 0

guide.forEach((round) => {
	const them = guideToItem(round.them)
	const goal = guideToGoal(round.goal)
	const itemToThrow = getItemToWin(them, goal)
	finalScore += points.chosen[itemToThrow]
	finalScore += points.result[goal]
})


console.log(finalScore)