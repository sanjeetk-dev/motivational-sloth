// motivationalSloth.js
const quotes = require('./quotes.json');

class MotivationalSloth {
  constructor() {
    this.quotes = quotes;
  }

  // Get a random quote based on the theme
  getQuote(theme = 'Life') {
    const themeQuotes = this.quotes[theme];
    
    // Check if the theme exists
    if (!themeQuotes) {
      console.warn(`Theme "${theme}" not found. Returning a quote from "Life".`);
      return this.getQuote('Life');
    }

    const randomIndex = Math.floor(Math.random() * themeQuotes.length);
    return `${themeQuotes[randomIndex]}`;
  }

  // Add custom sloth-style quote
  addCustomQuote(quote) {
    if (typeof quote !== 'string' || quote.trim() === '') {
      return "Please provide a valid quote.";
    }
    
    if (!this.quotes.Custom) {
      this.quotes.Custom = []; // Initialize if not present
    }
    
    this.quotes.Custom.push(quote);
    return "Your custom quote has been added!";
  }

  // Get available themes
  getThemes() {
    return Object.keys(this.quotes);
  }
}

module.exports = MotivationalSloth;
