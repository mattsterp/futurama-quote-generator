# Futurama Quote Generator 3000

## Project Guidelines 

In this project, you'll create an app that displays random famous quotes each time a button is clicked. You will select your own quotes from famous historical figures, artists, scientists, celebrities, etc..

##### Locate and select your own quotes.

##### Build the array of quote objects to store the quotes.

##### Add properties to the quote objects.

##### Create the getRandomQuote function.  

* Be sure to name the function getRandomQuote.
* The function should take in one parameter, that you can rightly call, array, since the argument that will later get passed into this function when it is invoked will be the array of quotes.
* The body of the function should select and return a random quote object from the quotes array. Remember the method for finding a random number? If not, that's okay. Check the resources list in these instructions, or revisit the material in the unit. Alternatively, try using Google to see if you can find what you need on the web. Even professional developers use Google several times a day, so it's good to start developing your Google skills now.
* Pro Tip: Remember, we target and select items in an array with "box notation". So array[0] will select the first item in an array, because, as you'll likely remember, arrays always begin with a first index of zero.

##### Create the printQuote function.

* Be sure to name the function printQuote. 
* In the body of this function:
  * getRandomQuote should be called on the array of quote objects, and the result stored in a variable.
  * A new empty string should be created and stored in a variable.
  * The required quote object properties, and the optional quote properties if they exist, should be appropriately concatenated to the new string you created using the following HTML template:

```
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
```
* The span elements that hold the citation and year properties should only be created if the current quote object has those properties. This is where your conditionals will come in handy.
* Finally the printQuote function should display the completed HTML string to the page by targeting the necessary DOM element and using the appropriate JavaScript method, like so:
```
document.getElementById('quote-box').innerHTML = stringOfQuoteProperties;
```
##### Extra credit 
* Add more properties to the quote object.
  * Season and episode properties have been added to the objects.
  * Use the new properties you've created to conditionally add to the string that gets printed to the screen.
* Random background color.
  * When the quote changes, randomly change the background color of the page.
* Auto-refresh the quote.
  * After a set amount of time, like 20 to 30 seconds, print a new quote to the page. Timing methods like setInterval() and setTimeout() can be helpful here. see the links in the “Additional Resources” section.