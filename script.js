const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");
const button = document.querySelector(".btn");

// Fetch random quote from the updated API
async function fetchQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    quoteElement.textContent = data.quote;
    authorElement.textContent = `- ${data.author}`;
  } catch (error) {
    quoteElement.textContent =
      "Oops! Something went wrong. Please try again later.";
    authorElement.textContent = "";
  }
}

// Initial fetch
fetchQuote();

// Event listener for button
button.addEventListener("click", fetchQuote);
