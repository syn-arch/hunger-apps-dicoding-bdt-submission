import TheRestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const ListRestaurant = {
    async render() {
        return `
        <picture">
            <source class="hero" media="(max-width: 600px)" srcset="/images/heros/hero-image_4-small.jpg" type="image/jpg">
            <img class="hero" src="/images/heros/hero-image_4-large.jpg" alt=""></img>
        </picture>
        <div class="container text-white">
            <h1>Selamat Datang</h1>
            <h2>Rasakan masakan yang akan kamu ingat seumur hidupmu</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum dolorem, dignissimos maxime iusto
                consequuntur aliquam quae aspernatur nam quos hic accusantium ratione laboriosam totam adipisci quis
                excepturi eum obcaecati.</p>
            <a href="#" class="btn">
                EXPLORE
            </a>
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
        const restaurants = await TheRestaurantDbSource.listRestaurants();
        const restaurantsContainer = document.querySelector('.cards');

        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default ListRestaurant;
