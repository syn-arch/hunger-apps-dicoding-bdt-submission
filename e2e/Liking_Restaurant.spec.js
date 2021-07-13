/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
    I.see('Nothing Restaurant', '.empty-restaurant');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Nothing Restaurant', '.empty-restaurant');
    I.amOnPage('/');

    I.seeElement('.card-link');
    const firstRestaurant = locate('.card-link').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card-link');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Nothing Restaurant', '.empty-restaurant');
    I.amOnPage('/');

    I.seeElement('.card-link');
    const firstRestaurant = locate('.card-link').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.card');
    const likedRestaurantTitle = await I.grabTextFrom('.card-link');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

    const firstFavoriteRestaurant = locate('.card-link').first();
    I.click(firstFavoriteRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.see('Nothing Restaurant', '.empty-restaurant');
});
