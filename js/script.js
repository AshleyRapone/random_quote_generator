/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array - Holds objects that represent a quote with details
***/
let quotes = [
                { quote: "A mind needs books as a sword needs a whetstone, if it is to keep its edge.",
                  source: "Tyrion Lannister",
                  citation: "Game of Thrones",
                  year: 2011,
                  season: 6 }, 
                { quote: "People often claim to hunger for truth, but seldom like the taste when it's served up.",
                  source: "Tyrion Lannister",
                  citation: "Game of Thrones" }, 
                { quote: "When you tear out a man's tongue, you are not proving him a liar, you're only telling the world that you fear what he might say.",
                  source: "Tyrion Lannister",
                  citation: "Game of Thrones" }, 
                { quote: "Death is so terribly final, while life is full of possibilities.",
                  source: "Tyrion Lannister",
                  citation: "Game of Thrones" }, 
                { quote: "Why is it that when one man builds a wall, the next man immediately needs to know what's on the other side?",
                  source: "Tyrion Lannister",
                  citation: "Game of Thrones" }
]
/***
 * `getRandomQuote` function - Returns a random quote
***/
function getRandomQuote() {
  let quotesLength = quotes.length;
  let randomNumber = Math.floor(Math.random() * quotesLength);
  return quotes[randomNumber];
}

/***
 * `printQuote` function - Returns the html element containing the quote information as well as the background color
***/
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${ randomQuote.quote } </p><p class="source"> ${ randomQuote.source }`;
  if (randomQuote.citation) {
    html += `<span class="citation"> ${ randomQuote.citation } </span>`;
  }
  if (randomQuote.year) {
    html += `<span class="year"> ${ randomQuote.year } </span>`;
  }
  if (randomQuote.season) {
    html += `<span class="year">  Season ${ randomQuote.season } </span>`;
  }
  html += '</p>'
  document.body.style.backgroundColor = `rgb(${getRandomColor()[0]}, ${getRandomColor()[1]}, ${getRandomColor()[2]})`;
  return document.getElementById('quote-box').innerHTML = html;
}

/***
 * `getRandomColor` function - Returns red, green and blue numerical values in an array
***/
function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return [red, green, blue]
}
 
/***
 * click event listener for the print quote button - once the button is pressed the background and the quote information changes
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);