const url = "https://rickandmortyapi.com/api/character";

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    loadingData(true);

    const res = await fetch(url);
    const data = await res.json();

    pintarCard(data);
  } catch (error) {
    console.log(error);
  } finally {
    loadingData(false);
  }
};

const pintarCard = (data) => {
  const cards = document.querySelector("#card-dinamicas");
  const templateCard = document.querySelector("#template-card");
  const fragment = document.createDocumentFragment();
  data.results.forEach((element) => {
    console.log(element.image);

    const clone = templateCard.content.cloneNode(true);
    clone.querySelector("h5").textContent = element.name;
    clone.querySelector("p.text-secondary").textContent = element.species;
    clone.querySelector("img.card-img-top").setAttribute("src", element.image);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

const loadingData = (estado) => {
  const loading = document.querySelector("#sectionLoading");

  if (estado) {
    loading.classList.remove("d-none");
  } else {
    loading.classList.add("d-none");
  }
};
