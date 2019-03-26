/* eslint-disable */
const CACHE_NAME = "cosound-cache-v1";

let urlsToCache = [
  "/",
  "https://fonts.googleapis.com/css?family=Montserrat:400,500,700",
  "https://cosound.geekydev.com/backend/api/countries",
  "https://cosound.geekydev.com/backend/api/genres"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache =>
        fetch("asset-manifest.json")
          .then(response => response.json())
          .then(assets => {
            Object.keys(assets).map((item, index) => {
              urlsToCache = [...urlsToCache, assets[item]];
            });
            cache.addAll(urlsToCache);
          })
      )
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches
      .keys()
      .then(keyList =>
        Promise.all(
          keyList.map(key => {
            if (!cacheWhitelist.includes(key)) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

function requestFailingWithNotFoundStrategy({ event }) {
  return fetch(event.request).catch(() => {
    const body = JSON.stringify({
      error: "Sorry, you are offline. Please, try later."
    });
    const headers = { "Content-Type": "application/json" };
    const response = new Response(body, {
      status: 404,
      statusText: "Not Found",
      headers
    });
    return response;
  });
}

function isRequestForStatic(request) {
  return /.(png|jpg|jpeg|gif|css|js)$/.test(request.url);
}

function isSideEffectRequest(request) {
  return ["POST", "PUT", "DELETE"].includes(request.method);
}

function isRequestForAPost(request) {
  return request.url.match(/\/posts\/[1-9a-z-]+/);
}

function cacheFailingToCacheableRequestStrategy({ event, cache }) {
  return cache
    .match(event.request)
    .then(throwOnError)
    .catch(() =>
      fetch(event.request)
        .then(throwOnError)
        .then(response => {
          cache.put(event.request, response.clone());
          return response;
        })
    );
}

function throwOnError(response) {
  if (
    (response.status >= 200 && response.status < 300) ||
    response.status === 0
  ) {
    return response;
  }
  throw new Error(response.statusText);
}

function requestFailingToCacheStrategy({ event, cache }) {
  return fetch(event.request).catch(() => cache.match(event.request));
}

function cacheableRequestFailingToCacheStrategy({ event, cache }) {
  return fetch(event.request)
    .then(throwOnError) // do not cache errors
    .then(response => {
      cache.put(event.request, response.clone());
      return response;
    })
    .catch(() => cache.match(event.request));
}

self.addEventListener("fetch", event => {
  if (isSideEffectRequest(event.request)) {
    event.respondWith(requestFailingWithNotFoundStrategy({ event }));
    return;
  }

  if (isRequestForStatic(event.request)) {
    event.respondWith(
      caches
        .open(CACHE_NAME)
        .then(cache => cacheFailingToCacheableRequestStrategy({ event, cache }))
    );
    return;
  }

  if (isRequestForAPost(event.request)) {
    event.respondWith(
      caches
        .open(CACHE_NAME)
        .then(cache => requestFailingToCacheStrategy({ event, cache }))
    );
    return;
  }

  event.respondWith(
    caches
      .open(CACHE_NAME)
      .then(cache => cacheableRequestFailingToCacheStrategy({ event, cache }))
  );
});

self.addEventListener("message", event => {
  const command = event.data;
  switch (command.type) {
    case "READ_OFFLINE": {
      const request = new Request(command.payload);
      fetch(request)
        .then(throwOnError)
        .then(response => {
          caches.open(CACHE_NAME).then(cache => cache.put(request, response));
        });
    }
  }
});
