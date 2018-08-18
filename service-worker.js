/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["images/android.svg","bb9a18ec2c445cbb03e4a4ac536f1757"],["images/banner.jpg","b3057e9fde39351f6a45d6c7f810962f"],["images/bg.jpg","af4ad13c5d935ee19e6f107fdf0f4867"],["images/favicon.ico","c16b3210edb7e61c6d6bcbcbed075e07"],["images/fork.png","d6b446fd9477dad996f1ff0667c5cc9e"],["images/github.svg","796f118d53d4d254d2a15df2549b997e"],["images/linkedin.svg","b0ebcc7da7990cd5f7abf586ed067c77"],["images/logos/android.png","b97b5aab330724e55689d61a7b31cf50"],["images/logos/angular.png","04a6566db32b48febf8597250ccfb848"],["images/logos/coffee.png","f2e18d85abf07cd12b40e57dd921a66c"],["images/logos/elixir.png","1527c377605c017e0e2e83ff3f80bbc5"],["images/logos/git.png","c16c4d88b107f26758dae74a7bd7db19"],["images/logos/go.png","caed046874b0d9f0beb6fea4130e4cda"],["images/logos/graphql.png","60ef4effdb38c85c8b80935f73f893db"],["images/logos/java.png","cb517cff5157344bcdb0e624a32926c4"],["images/logos/js.png","c37024876d499deaf23edf3f072c40ba"],["images/logos/laravel.png","87f51d2b2a54e5957630cdcfa753d8fd"],["images/logos/mongo.png","5cd888ed61faee47dddead7e7a09dea0"],["images/logos/mysql.png","e6d771ad09a461402492e86030bad32c"],["images/logos/node.png","cc5f54e393540e4e626933f2b71e4684"],["images/logos/phoenix.png","670ebe4095364482a3606caf294818ad"],["images/logos/php.png","ff29d4dd2d838d9a2474d0687a8b7a9c"],["images/logos/py.png","f69ed380e66aef16d4cb992d1c672a98"],["images/logos/react-native.png","8d9823efea70c5e971c0e9df8d938bf5"],["images/logos/react.png","dda403bfb957f46eedfd94d9fc710f7e"],["images/logos/redis.png","76e074d1de82c802131a71bcac84e85e"],["images/logos/ruby.png","7ac3c97394f7c348d869b97e2dbd7e01"],["images/mail.svg","2c61e774db615a956e94b524ba0c2efd"],["images/me.jpg","d4b789cd18766930aef65c749231d293"],["images/projects/atom-chat.jpg","aef8e6ec41d4ff192aa61b8a9342ad87"],["images/projects/atom-video.jpg","96d93fc461a7edfd9fa7e36ec20784c0"],["images/projects/brainballs.jpg","31488ef474873009341b2ec208ddaa01"],["images/projects/collision.jpg","6de2969f8fa53d76db0b47316dded463"],["images/projects/ithalgurme.jpg","a1c4d53f97696a210a7b93db70c9fb60"],["images/projects/jekyll-admin.jpg","6cb5fc279d0e29de495533a181caf386"],["images/projects/jquery-plugins.jpg","c1107046ea5f97bf07b731908c700b0f"],["images/projects/larahome.jpg","587c94680f9b6c2f2e5bcddf7937848e"],["images/projects/movie-stats.jpg","b69ed282e0207509b6a9081d74236add"],["images/projects/node-modules.jpg","54c0f99188314596b021b6025bdc904c"],["images/projects/personal.jpg","bab3e8b7476f89b6355e1b1a9625dda9"],["images/projects/random-movie.jpg","fc4a06fe4060f2bd86ce353a7dae0a74"],["images/projects/smartphones.jpg","561874c3a76d0320c5b56d556b120d8e"],["images/projects/spm.jpg","b59c9a114ce35ffc6f45a4b07d1a91f2"],["images/projects/tetris.jpg","510e1fab6acf4c79626686c44fbe7ec3"],["images/projects/transferdatca.jpg","93941042d1d8c53b56e415f5ffec3d90"],["images/projects/twitter-sentiment-analysis.jpg","3893703f7d1f9c2e99e1e9db6eff85db"],["images/projects/woodezza.jpg","8e9442989f7e3fe4457bcb15a8b3e899"],["images/twitter.svg","fbd1f5190d59f080b503b25b682c0a9c"],["index.html","550fc0141271acbc2fa56b64a387249b"],["static/css/main.4a64a36e.css","2d4047154e83a59ec01ec7307dbdfded"],["static/js/main.8fcb3c8b.js","f680bc51749b5e6bce0061aa62643789"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







