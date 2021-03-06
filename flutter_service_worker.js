'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "199cfcbf5ce38c82098345301bfa7f50",
"index.html": "f99199e5ec0ffd1e276f56589436564f",
"/": "f99199e5ec0ffd1e276f56589436564f",
"main.dart.js": "b0fd7fcd6e2fe7f4476dddd0d71cd8af",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e8bc7a226f736a252e0e14d2358aadd1",
"assets/AssetManifest.json": "678a384a9a2e0f54ec8f969d24987d3d",
"assets/NOTICES": "882ac0d7745a645c33e7fbdddc1d0514",
"assets/FontManifest.json": "cc9327e91b38f60ce4f20e1120c6afa2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/contact/contact_linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/images/contact/contact_github.png": "ec3a60c8c6539a07eb70b52f6737ea6e",
"assets/assets/images/contact/contact_stackoverflow.png": "5233a552c9ee105ed4533a4081c29f79",
"assets/assets/images/my_photo.png": "44311f094bc868c08044bccbd69ea0d7",
"assets/assets/images/inspiration.png": "a8cd1b5427cb94e784d21941d861353a",
"assets/assets/images/color_pallete.png": "47d5f8962db3ac5f04c9f71986577ca2",
"assets/assets/images/skills/skill_kotlin.png": "084bdf62c29bce08fa29b7a69312a37a",
"assets/assets/images/skills/skill_flutter.png": "4277d68f1efc7343b2e46f10bc70956e",
"assets/assets/images/skills/skill_git.png": "59863c6180caa67a7d0c00e13727a828",
"assets/assets/images/skills/skill_android.png": "549d0830da4a9dc0e04608256eedb6f9",
"assets/assets/images/projects_gifs/ref_clone_1.gif": "950d85a6cd49005fb0a5da5d0244bd60",
"assets/assets/images/projects_gifs/ref_clone_2.gif": "020cf58b784164d04d89b2c991554291",
"assets/assets/images/projects_gifs/ref_clone_3.gif": "3cdc58cd472866306014d8f3ae4a5f97",
"assets/assets/images/projects_gifs/mirrored_loading.gif": "1ffd0a7b92cd692a21404cba6d295ef0",
"assets/assets/images/projects_gifs/music_player.gif": "269b18d7e156119d54a26c77dc12a68a",
"assets/assets/images/projects_gifs/lightcone_bottom_navbar.gif": "53202067a181293b7ce3a91c9ac208bb",
"assets/assets/images/projects_gifs/memes.gif": "547deb955dad978a038856a06e1434d5",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "885e5558c90864ddb72ad486f36470cc",
"assets/assets/fonts/RobotoCondensed-Italic.ttf": "d6fc5ec5403ec65bdaecfe44b7b84402",
"assets/assets/fonts/RobotoCondensed-BoldItalic.ttf": "c783051f11a8f369e8acc7adfcb5478d",
"assets/assets/fonts/RobotoCondensed-LightItalic.ttf": "f0177f3fd234ac8664509f19aef620fb",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
