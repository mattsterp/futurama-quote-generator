// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

/*
The quotes array holds the quote objects.  Each object contains two additioanl categories: season, and episode.
*/

var quotes = [
	{
		quote: 'Gimmie your biggest, strongest, cheapest drink.',
		source: 'Bender',
		citation: 'A Flight to Remember',
		year: '9/16/99',
		season: '2',
		episode: '1'
	},
	{
		quote: 'Wait, I’m having one of those things. You know a headache with pictures',
		source: 'Fry',
		citation: 'A Taste of Freedom, Season 5 Episode 4',
		year: 2002,
		season: '5',
		episode: '4'
	},
	{
		quote: 'I really ought to do something, but I am already in my pajamas',
		source: 'Professor Farnsworth',
		citation: 'The Series Has Landed',
		year: 1999,
		season: '1',
		episode: '2'
	},
	{
		quote: 'I have sweaty boot rash!',
		source: 'Leela',
		citation: 'The Farnsworth Parabox',
		year: 2003,
		season: '5',
		episode: '10'
	},
	{
		quote: "I don't want you to worry about your jobs while you're away. That's why I'm firing you now.",
		source: 'Hermes',
		citation: 'War Is the H-Word',
		year: 2000,
		season: '3',
		episode: '1'
	}
];

console.log(quotes[0]);
// Create the getRandomQuuote function and name it getRandomQuote

// Create the printQuote funtion and name it printQuote

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
