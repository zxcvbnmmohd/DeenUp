import type { Question } from "~/types"

const questions: Question[] = [
	{
		id: "1",
		question:
			"Which Economist divided Economics in two branches of micro and macro on the basis of economic activity?",
		options: ["Marshall", "Ricardo", "Ragnar Frish", "None of these"],
		correctAnswer: "None of these",
		userAnswer: "",
	},
	{
		id: "2",
		question: "Which of the following is studied under Micro Economics?",
		options: [
			"Individual unit",
			"Economic Aggregate",
			"National Income",
			"None of these",
		],
		correctAnswer: "None of these",
		userAnswer: "",
	},
	{
		id: "3",
		question: "‘Micros’, which means ‘Small’ belongs to:",
		options: ["Arabian word", "Greek word", "German word", "English worde"],
		correctAnswer: "Greek word",
		userAnswer: "",
	},
	{
		id: "4",
		question: "Which of the following statement is true?",
		options: [
			"Human wants are infinite",
			"Resources are limited",
			"Scarcity problem gives birth",
			"All of these",
		],
		correctAnswer: "Scarcity problem gives birth",
		userAnswer: "",
	},
	{
		id: "5",
		question: "Which is a central problem of an economy?",
		options: [
			"Allocation of Resources",
			"Optimum Utilisation of Resources",
			"Economic Development",
			"All of these",
		],
		correctAnswer: "All of these",
		userAnswer: "",
	},
	{
		id: "6",
		question: "Which of the following Is a type of economic activities?",
		options: [
			"Production",
			"Consumption",
			"Exchange and Investment",
			"All of these",
		],
		correctAnswer: "All of these",
		userAnswer: "",
	},
	{
		id: "7",
		question: "To which factor, economic problem is basically related to:",
		options: [
			"Choice",
			"Consumer’s Selection",
			"Firm Selection",
			"None of these",
		],
		correctAnswer: "Choice",
		userAnswer: "",
	},
	{
		id: "8",
		question: "Economy may be classified as:",
		options: ["Capitalist", "Socialist", "Mixed", "All of these"],
		correctAnswer: "All of these",
		userAnswer: "",
	},
	{
		id: "9",
		question:
			"Which economy has a co-existence of private and public sectors?",
		options: ["Capitalist", "Socialist", "Mixed", "All of these"],
		correctAnswer: "Mixed",
		userAnswer: "",
	},
	{
		id: "10",
		question:
			"A computer assisted method for the recording and analyzing of existing or hypothetical systems...",
		options: [
			"Data transmission",
			"Data flow",
			"Data capture",
			"None of the above",
		],
		correctAnswer: "Data flow",
		userAnswer: "",
	},
	{
		id: "11",
		question:
			"Any type of storage that is used for holding information between steps in its processing is",
		options: [
			"CPU",
			"Primary storage",
			"Intermediate storage",
			"Internal storage",
		],
		correctAnswer: "Intermediate storage",
		userAnswer: "",
	},
	{
		id: "12",
		question: "Production Possibility Curve is:",
		options: [
			"Concave to the axis",
			"Convex to the axis",
			"Parallel to the axis",
			"Vertical to the axis",
		],
		correctAnswer: "Concave to the axis",
		userAnswer: "",
	},
	{
		id: "13",
		question: "Mention the name of the curve which shows economic problem:",
		options: [
			"Production Curve",
			"Demand Curve",
			"Indifference Curve",
			"Production Possibility Curve",
		],
		correctAnswer: "Production Possibility Curve",
		userAnswer: "",
	},
	{
		id: "14",
		question: "Which of the following is studied under Macro Economics?",
		options: [
			"National Income",
			"Full. Employment",
			"Total Production",
			"All of these",
		],
		correctAnswer: "All of these",
		userAnswer: "",
	},
	{
		id: "15",
		question:
			"A program component that allows structuring of a program in an unusual way is known as",
		options: ["Correlation", "Coroutine", "Diagonalization", "Quene"],
		correctAnswer: "Correlation",
		userAnswer: "",
	},
]

const randomQuestions = (n: number): Question[] => {
	const shuffledQuestions = questions.sort(() => Math.random() - 0.5)
	return shuffledQuestions.slice(0, n)
}

export default questions

export { randomQuestions }
