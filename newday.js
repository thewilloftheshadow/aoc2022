const fs = require("fs")

const main = async () => {
    const challenges = fs.readdirSync("challenges")
    await fs.mkdir(`./challenges/day${challenges.length + 1}`, () => {})
    await fs.writeFile(
        `./challenges/day${challenges.length + 1}/part1.js`,
        `const fs = require("fs")\nconst input = fs.readFileSync("input.txt", "utf8")\n\n`,
        () => {}
    )
    await fs.writeFile(`./challenges/day${challenges.length + 1}/part2.js`, "", () => {})
    await fs.writeFile(`./challenges/day${challenges.length + 1}/input.txt`, "", () => {})
    await fs.writeFile(
        `./challenges/day${challenges.length + 1}/README.md`,
        `# Day ${challenges.length + 1}\n\n\n\n| Day   | Part 1 | Part 2 |\n| ----- | ------ | ------ |\n| Day ${challenges.length + 1} | `,
        () => {}
    )

    console.clear()
    console.log(`Created day ${challenges.length + 1}!`)
}

main()
