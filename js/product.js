const API_URL = "https://dummyjson.com/products";
const cardWrapper = document.querySelector(".single__all");
const loading = document.querySelector(".loading");

async function fetchSingleUser(api) {
  let params = new URLSearchParams(window.location.search);
  let id = params.get("id");
  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => singleUser(res))
    .catch((err) => console.log(err))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchSingleUser(API_URL);

function singleUser({
  title,
  price,
  id,
  images,
  rating,
  discountPercentage,
  description,
}) {
  let card = document.createElement("div");
  card.classList.add("single__all");
  card.innerHTML = `
              <div class="single__left">
              <img src=${images[0]} alt=" /" />
            </div>
            <div class="single__right">
              <h1>${title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                ut saepe nisi. Accusantium tempore quia praesentium eaque cumque
                architecto similique necessitatibus unde vero, magni ratione
                pariatur totam nobis voluptate itaque rerum voluptas corporis
                dolorem expedita!
              </p>
              <p>${description}</p>
              <div class="single__right-rating">
                <img src="../images/rating.svg" alt=" /" />${rating}
              </div>
              <h4>Цена:</h4>
              <div class="single__right-price">
                <h2>${price}</h2>
                <h3 class="product__card-price-h3">${discountPercentage}%</h3>
              </div>
              <button>Корзина</button>
            </div>
          `;
  cardWrapper.appendChild(card);
}
