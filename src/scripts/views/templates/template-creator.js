import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
      <div class="card-single">
        <img src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}" alt="img" class="img-card-single" />
        <div class="card-information">
            <h2 class="card-title">${restaurant.name}</h2>
            <hr/>
            <h2>Kota</h2>
            <p>${restaurant.city}</p>
            <h2>Rating</h2>
            <p>${restaurant.rating}</p>
        </div>
        <div class="card-overview">
            <h3>Deskripsi</h3>
            ${restaurant.description}
        </div>
      </div>
      `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card">
      <div class="card-wrapper">
          <span class="span">${restaurant.city}</span>
          <img alt="${restaurant.name}" class="card-img" src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
          <span class="card-rating">Rating: ${restaurant.rating}</span>
          <a href="#/detail/${restaurant.id}" class="card-link"><h3 class="card-title">${restaurant.name}</h3></a>
          <p class="card-description">
              ${restaurant.description}
          </p>
          <a href="#/detail/${restaurant.id}" class="card-button">More</a>
      </div>
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
};
