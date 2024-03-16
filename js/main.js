const API_URL = "https://dummyjson.com/products";
const productWrapper = document.querySelector(".product__wrapper");
const loading = document.querySelector(".loading");

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res.products))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}

fetchData(API_URL);

function createCard(data) {
  data.forEach(({ title, price, id, images, rating, discountPercentage }) => {
    let card = document.createElement("div");
    card.classList.add("product__card");
    card.innerHTML = `
        <div class="product__card">
              <div class="product__card-top">
                <img src=${images[0]} alt=" /" />
              </div>
              <div class="product__card-info">
                <div class="product__card-rating">
                  <img src="../images/rating.svg" alt=" /" />
                  <p>${rating}</p>
                </div>
                <p class="product__card-p">
                  ${title}
                </p>
                <div class="product__card-price">
                  <h2>${price}₽</h2>
                  <h2 class="product__card-price-h3">${discountPercentage}%</h2>
                </div>
              </div>
            </div>
    `;
    card.addEventListener("click", () => singleRoute(id));
    productWrapper.appendChild(card);
  });
}
function singleRoute(id) {
  window.open(`/pages/product.html?id=${id}`, "_self");
}
