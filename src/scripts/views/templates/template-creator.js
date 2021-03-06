import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
      <div class="card-single">
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}" class="img-card-single" />
        <div class="card-information">
            <h2 class="card-title">${restaurant.name}</h2>
            ${restaurant.categories.map((categorie) => `<span class="card-btn">${categorie.name}</span>`).join('')}
            <hr/>
            <h2>Kota</h2>
            <p>${restaurant.city}</p>
            <small>${restaurant.address}</small>
            <h2>Rating</h2>
            <p>${restaurant.rating}</p>
        </div>
        <div class="card-menus">
          <div class="foods">
            <h3>Daftar Makanan</h3>
            <ul>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
            </ul>
          </div>
          <div class="drinks">
            <h3>Daftar Minuman</h3>
            <ul>
              ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="card-overview">
            <h3>Deskripsi</h3>
            ${restaurant.description}
        </div>
        <div class="card-overview">
            <h3>Reviews</h3>
            ${restaurant.customerReviews.map((review) => ` <div class="review">
            <h4>${review.name}</h4>
            <span>${review.date}</span>
            <p>${review.review}</p>
        </div>`).join('')}
        </div>
      </div>
      `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card">
      <div class="card-wrapper">
          <span class="span">${restaurant.city}</span>
          <img alt="${restaurant.name}" class="card-img lazyload" data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
          <span class="card-rating">Rating: ${restaurant.rating}</span>
          <a href="#/detail/${restaurant.id}" class="card-link"><h3 class="card-title">${restaurant.name}</h3></a>
          <p class="card-description">
              ${restaurant.description}
          </p>
         <button class="btn-card"><a href="#/detail/${restaurant.id}" class="card-button">More</a></button>
      </div>
    </div>
  `;

const createEmptyRestaurant = `
    <div class="empty-restaurant">
      Nothing Restaurant
    </div>
    `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createEmptyRestaurant,
};
