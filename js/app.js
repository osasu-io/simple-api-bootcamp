document.addEventListener("DOMContentLoaded", () => {
    const fetchBtn = document.getElementById("fetchBtn");
  
    fetchBtn.addEventListener("click", fetchData);
  
    function fetchData() {
      const nameInput = document.getElementById("pokemonName").value.toLowerCase();
      const image = document.getElementById("pokemonSprite");
      const weightElement = document.getElementById("pokemonWeight");
  
      if (!nameInput) {
        alert("Please enter a Pokémon name.");
        return;
      }
  
      fetch(`https://pokeapi.co/api/v2/pokemon/${nameInput}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Could not fetch resource");
          }
          return response.json();
        })
        .then((data) => {
          const spriteURL = data.sprites.front_default;
          const weight = data.weight;
  
          image.src = spriteURL;
          image.style.display = "block";
  
          weightElement.textContent = `Weight: ${weight}`;
        })
        .catch((error) => {
          console.error(error);
          image.style.display = "none";
          weightElement.textContent = "";
          alert("Pokémon not found!");
        });
    }
  });
  