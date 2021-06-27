import TheRestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-iniator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="detail-restaurant" class="hero-detail"></div>
        <div class="container-detail text-white">
            <h1>Temukan Cinta Dalam Setiap Masakan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum dolorem, dignissimos maxime iusto
                consequuntur aliquam quae aspernatur nam quos hic accusantium ratione laboriosam totam adipisci quis
                excepturi eum obcaecati.</p>
        </div>
    
        <div class="restaurant">

        </div>
        <div id="likeButtonContainer"></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const Restaurant = await TheRestaurantDbSource.detailRestaurant(url.id);
        const RestaurantContainer = document.querySelector('.restaurant');
        RestaurantContainer.innerHTML = createRestaurantDetailTemplate(Restaurant);

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: Restaurant.id,
                name: Restaurant.name,
                city: Restaurant.city,
                rating: Restaurant.rating,
                description: Restaurant.description,
                pictureId: Restaurant.pictureId,
            },
        });
    },
};

export default Detail;
