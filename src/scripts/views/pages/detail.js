import TheRestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonInitiator from '../../utils/like-button-iniator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <picture">
            <source class="hero-detail" media="(max-width: 600px)" srcset="/images/heros/hero-image_4-small.jpg" type="image/jpg">
            <img class="hero-detail" src="/images/heros/hero-image_4-large.jpg" alt=""></img>
        </picture>
        <div class="container-detail text-white">
            <h1 class="detail-title">Temukan Cinta Dalam Setiap Masakan</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nostrum dolorem..</p>
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
