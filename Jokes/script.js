// Function to get and display a joke with a typing effect
function fetchAndDisplayJoke() {
  const jokeElement = document.getElementById("jokeElement");
  jokeElement.textContent = "Loading...";
  jokeElement.style.opacity = "0.7";

  fetch("https://v2.jokeapi.dev/joke/Dark?type=single")
    .then(response => response.json())
    .then(jokeData => {
      if (jokeData.error) {
        jokeElement.textContent = "Failed to fetch joke. Try again later.";
        jokeElement.style.opacity = "1";
        return;
      }

      const jokeText = jokeData.joke;
      let currentText = "";
      let index = 0;

      // Clear previous content
      jokeElement.textContent = "";

      // Add a slight delay before typing begins
      setTimeout(() => {
        // Typing effect
        const typeInterval = setInterval(() => {
          if (index < jokeText.length) {
            currentText += jokeText.charAt(index);
            jokeElement.textContent = currentText;
            index++;
          } else {
            clearInterval(typeInterval);
            // Add a subtle glow effect when the joke is fully typed
            jokeElement.style.textShadow = "0 0 8px rgba(255, 150, 100, 0.6)";
            setTimeout(() => {
              jokeElement.style.textShadow = "0 0 5px rgba(255, 255, 255, 0.5)";
            }, 1000);
          }
        }, 25);
      }, 300);
    })
    .catch(error => {
      jokeElement.textContent = "Failed to fetch joke. Try again later.";
      jokeElement.style.opacity = "1";
      console.error("Error fetching joke:", error);
    });
}

// Disable button during loading to prevent rapid clicking
function disableButtonDuringLoading() {
  const button = document.getElementById("refreshButton");
  button.disabled = true;
  button.style.opacity = "0.7";
  button.querySelector(".button-text").textContent = "LOADING...";

  setTimeout(() => {
    button.disabled = false;
    button.style.opacity = "1";
    button.querySelector(".button-text").textContent = "NEXT JOKE";
  }, 1500);
}

// Get a new joke when the page loads
document.addEventListener("DOMContentLoaded", () => {
  fetchAndDisplayJoke();

  // Add click event listener to the refresh button
  document.getElementById("refreshButton").addEventListener("click", () => {
    fetchAndDisplayJoke();
    disableButtonDuringLoading();
  });
});
