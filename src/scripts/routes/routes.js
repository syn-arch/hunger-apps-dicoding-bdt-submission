import ListRestaurant from '../views/pages/list-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/likes';

const routes = {
    '/': ListRestaurant, // default page
    '/detail/:id': Detail,
    '/like': Like,
};

export default routes;
