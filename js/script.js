// Treehouse FSJS - Random Quote Generator
// The quotes are from th TV series Futuama.  I have added two aditional categroies for extra credit season,and episode.
var quotes = [
	{
		quote: 'Gimmie your biggest, strongest, cheapest drink.',
		source: 'Bender',
		citation: 'A Flight to Remember',
		year: 1999,
		season: 2,
		episode: 1
	},
	{
		quote: 'Wait, I’m having one of those things. You know a headache with pictures.',
		source: 'Fry',
		citation: 'A Taste of Freedom, Season 5 Episode 4',
		year: 2002,
		season: 5,
		episode: 4
	},
	{
		quote: 'I really ought to do something, but I am already in my pajamas.',
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

// returns a random quote object to be called in the printQuote function
function getRandomQuote(quotes) {
	let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	return randomQuote;
}

// Random background color generator called in printQuote function
function backgroundColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	rgbColor = 'rgb(' + r + ',' + g + ',' + b + ')';
	document.body.style.backgroundColor = rgbColor;
}

// The printQuote funtion calls getRandomQuote and return randomQuote to selectedQuoteString to concatinate the output.

function printQuote() {
	var randomQuote = getRandomQuote(quotes);
	var selectedQuoteString = '<p class="quote">' + randomQuote.quote + '</p>';
	selectedQuoteString += '<p class="source">' + randomQuote.source;
	// evaluate quote object for citation property
	if (randomQuote.citation) {
		selectedQuoteString += '<span class="citation">' + randomQuote.citation + '</span>';
	}
	// evaluate quote object for year property
	if (randomQuote.year) {
		selectedQuoteString += '<span class="year">' + randomQuote.year + '</span>';
	}
	// evaluate quote object for season property extra credit
	if (randomQuote.season) {
		selectedQuoteString += '<span class="season"> Season ,' + randomQuote.season + '</span>';
	}
	// evaluate quote object for episode property extra credit
	if (randomQuote.episode) {
		selectedQuoteString += '<span class="episode"> Episode ,' + randomQuote.episode + '</span>';
	}
	// appends the closing <p> tag to the string
	selectedQuoteString += '</p>';
	document.getElementById('quote-box').innerHTML = selectedQuoteString;
	backgroundColor();
}
// setInterval runs printQuote
setInterval(printQuote, 10000);
// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
