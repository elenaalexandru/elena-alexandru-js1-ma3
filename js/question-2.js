const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=90501186c5f8454aa57a9df8b93744c4";
const resultsContainer = document.querySelector(".results");

async function getRawApi() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;
    console.log(results);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < results.length; i++) {
      if (i === 8) {
        break;
      }

      const totalTags = results[i].length;

      resultsContainer.innerHTML += `<div class="box">
          <p>
            ${results[i].name} ${results[i].rating} ${results[i].tags.length}
          </p>
        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "error occurred";
  }
}
getRawApi();
