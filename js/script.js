// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

/*
The quotes array holds the quote objects.  Each object contains two additional categories: season, and episode.  The quotes are from the TV show Futurama.
*/

const quotes = [
	{
		quote: 'Gimmie your biggest, strongest, cheapest drink.',
		source: 'Bender',
		citation: 'A Flight to Remember',
		year: 1999,
		season: 2,
		episode: 1
	},
	{
		quote: 'Wait, I’m having one of those things. You know a headache with pictures',
		source: 'Fry',
		citation: 'A Taste of Freedom, Season 5 Episode 4',
		year: 2002,
		season: 5,
		episode: 4
	},
	{
		quote: 'I really ought to do something, but I am already in my pajamas',
		source: 'Professor Farnsworth',
		citation: 'The Series Has Landed',
		year: 1999,
		season: 1,
		episode: 2
	},
	{
		quote: 'I have sweaty boot rash!',
		source: 'Leela',
		citation: 'The Farnsworth Parabox',
		year: 2003,
		season: 5,
		episode: 10
	},
	{
		quote: "I don't want you to worry about your jobs while you're away. That's why I'm firing you now.",
		source: 'Hermes',
		citation: 'War Is the H-Word',
		year: 2000,
		season: 3,
		episode: 1
	}
];

// Create the getRandomQuote function and name it getRandomQuote

/* 
getRandomQuote selects a random object based on the length property of the quotes array and assigns the object to the variable randomQuote. 
*/

function getRandomQuote(quotes) {
	let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuote;
}
// a random object is being returned and logged to the console.
console.log(getRandomQuote(quotes));

// alert(getRandomQuote.randomQuote);

// Create the printQuote funtion and name it printQuote

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener('click', printQuote, false);
