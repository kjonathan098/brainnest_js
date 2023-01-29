// Task 2-A
let squareSideLength = 9

const squareDiagonal = Math.sqrt(
	squareSideLength * squareSideLength +
		squareSideLength * squareSideLength
)

console.log(squareDiagonal)

// Task 2-B
const triangleLengths = {
	sideOne: 5,
	sideTwo: 6,
	sideThree: 7,
}

const semiPerimeter =
	(triangleLengths.sideOne +
		triangleLengths.sideTwo +
		triangleLengths.sideThree) /
	2

const triangleArea = Math.sqrt(
	semiPerimeter *
		(semiPerimeter - triangleLengths.sideOne) *
		(semiPerimeter - triangleLengths.sideTwo) *
		(semiPerimeter - triangleLengths.sideThree)
)
console.log(triangleArea)

// Task 2-C

let circleRadius = 4

let circumference = 2 * Math.PI * circleRadius
let surfaceArea = Math.PI * (circleRadius * circleRadius)

console.log(circumference, surfaceArea)
