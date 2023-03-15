const result = document.getElementById("result");
const sound = document.getElementById("sound");
const searchBtn = document.getElementById("search-btn");
const inpWord = document.getElementById("inp-word");
const toggle = document.getElementById("toggle");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

//! show the results
searchBtn.addEventListener("click", () => {
  let word = inpWord.value;
  //   console.log(word);
  fetch(`${url}${word}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
        <div class="word">
            <h3>${word}</h3>
        </div>
        <div class="details">
            <p>${data[0].phonetic}</p>
        </div>
        <div class="part">
          <i class="fa-solid fa-star-of-life"></i>
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <img src="images/roystonlodge-rough-sketch-line.svg" alt="">
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>
        <div class="part">
          <i class="fa-solid fa-star-of-life"></i>
          <p>${data[0].meanings[1].partOfSpeech}</p>
          <img src="images/roystonlodge-rough-sketch-line.svg" alt="">
        </div>
        <p class="word-meaning">
            ${data[0].meanings[1].definitions[0].definition}
        </p>
        <p class="word-example">
            ${data[0].meanings[1].definitions[0].example || ""}
        </p>
        `;
      // sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h4 class="error">Couldn't Find The Word</h4>`;
    });
});

//! play sound when clicking icon
// function playSound() {
//   sound.play();
// }

//! press 'Enter' key to get movie details
inpWord.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
    inpWord.value = "";
    // searchList.classList.add("hide-search-list");
  }
});

//! change the mode to dark or light when clicking the toggle
toggle.onclick = () => {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    toggle.src = "images/toggle-on-switch-svgrepo-com.svg";
  } else {
    toggle.src = "images/toggle-off-switch-svgrepo-com.svg";
  }
};
