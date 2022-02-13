// answer q2
const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=90501186c5f8454aa57a9df8b93744c4";

const resultsContainer = document.querySelector(".results");

async function getRawApi() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    console.log(data);
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "error occurred";
  }
  resultsContainer.innerHTML = "";
  for (let i = 0; i < results.length; i++) {
    const totalTags = results[i].tags.length;
    if (i === 8) {
      break;
    }

    resultsContainer.innerHTML += `<div class="results">
          ${results[i].name} ${results[i].rating} ${results[i].tags.length} ${results[i].totalTags.length}
        </div>`;
  }
}

getRawApi();
