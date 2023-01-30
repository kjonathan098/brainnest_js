const beats = {
	rock: 'scissors',
	scissors: 'paper',
	paper: 'rock',
}

function computerPlay() {
	let computerPick = Math.floor(Math.random() * 3)

	switch (computerPick) {
		case 0:
			computerPick = 'rock'
			break
		case 1:
			computerPick = 'scissors'
			break
		case 2:
			computerPick = 'paper'
	}
	return computerPick
}

// 4-C
function playRound(playerSelection, computerSelection) {
	playerSelection = playerSelection.toLowerCase()

	if (playerSelection === computerSelection) {
		return {
			message: `Draw! Both played ${playerSelection}`,
			winner: 0,
		}
	} else if (beats[playerSelection] === computerSelection) {
		return {
			message: `You Win! ${playerSelection} beats ${computerSelection}`,
			winner: 1,
		}
	} else {
		return {
			message: `You Lose! ${computerSelection} beats ${playerSelection}`,
			winner: 2,
		}
	}
}

// let playersSelection = 'RoCk'
// let computerSelection = computerPlay()

// const result = playRound(playersSelection, computerSelection)

// console.log(result.message)

// 4-e

const rounds = 5

function game() {
	let computerWins = 0
	let playerWins = 0

	for (let i = 0; i < rounds; i++) {
		let computerPick = computerPlay()
		let playerPick = 'rock'

		const roundResult = playRound(playerPick, computerPick)

		if (roundResult.winner === 1) {
			playerWins++
		} else if (roundResult.winner === 2) {
			computerWins++
		}

		const score = `the score is computer = ${computerWins} player = ${playerWins}`
		console.log(score)
	}
	if (playerWins === computerWins) {
		return `its a tie! ${playerWins} to ${computerWins}`
	} else if (playerWins > computerWins)
		return `Player beats computer ${playerWins} to ${computerWins}`
	else return `Computer beats player ${computerWins} to ${playerWins}`
}

const playRounds = game()
console.log(playRounds)
