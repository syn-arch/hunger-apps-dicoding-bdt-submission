import 'regenerator-runtime/runtime';
import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';
import { cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing/registerRoute';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { clientsClaim, setCacheNameDetails } from 'workbox-core';
import CONFIG from './globals/config';

setCacheNameDetails({
    prefix: CONFIG.CACHE_NAME,
    precache: 'precache',
    runtime: 'runtime',
});

precacheAndRoute(
    [
        ...self.__WB_MANIFEST,
        {
            url:
                'https://fonts.googleapis.com/css?family=Poppins:400,700,900',
            revision: 1,
        },
    ],
    {
        ignoreURLParametersMatching: [/.*/],
    },
);

registerRoute(
    /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail|review|search))/,
    new StaleWhileRevalidate({
        cacheName: 'restaurant-data',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // lama waktu cache 30 Days
            }),
        ],
    }),
);

registerRoute(
    ({ request }) => request.destination === 'image',
    new CacheFirst({
        cacheName: 'image-data',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // lama waktu cache 30 Days
            }),
        ],
    }),
);

self.skipWaiting();
clientsClaim();

cleanupOutdatedCaches();
