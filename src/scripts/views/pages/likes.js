import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createEmptyRestaurant, createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <picture">
      <source class="hero-detail" media="(max-width: 600px)" srcset="/images/heros/hero-image_4-small.jpg" type="image/jpg">
      <img class="hero-detail" src="/images/heros/hero-image_4-large.jpg" alt=""></img>
    </picture>
      <div class="container-detail text-white">
          <h1>Simpan Restaurant Terbaikmu Disini</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum dolorem, dignissimos maxime iusto
              consequuntur aliquam quae aspernatur nam quos hic accusantium ratione laboriosam totam adipisci quis
              excepturi eum obcaecati.</p>
      </div>
  
      <div class="container-card">
          <h2 class="text-center explore">EXPLORE RESTAURANT</h2>
          <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut assumenda nihil
              exercitationem deserunt magnam corrupti non ea earum.</p>

          <div class="cards">

          </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    const restaurantsContainer = document.querySelector('.cards');

    if (restaurants.length >= 1) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = createEmptyRestaurant;
    }
  },
};

export default Like;
