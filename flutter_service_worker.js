'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7a81e29c1b282ff86b53c33116997f0a",
"index.html": "fc72a48ae689beaedfd100b920d875ad",
"/": "fc72a48ae689beaedfd100b920d875ad",
"main.dart.js": "58c9ec4989cd362e6e72d099d1539097",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e8bc7a226f736a252e0e14d2358aadd1",
".git/config": "8bff6f0a22387a99ab97887e9dc723e3",
".git/objects/68/f5ff2c11de37e711e769207b805775f249b1e4": "9d53775e987efaa5c1deabddb0d43383",
".git/objects/9b/bb9e921688513964a9a4c671dc784facf0a08c": "1319b5df82bbbd0e5bf3e686bd130e51",
".git/objects/04/2323f31174f6586fa5a895f9b2fee95d6dff2d": "7ce5ea6481c3581907705d0e38a1806c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/94/90ffc6d2e158b266f719d58365905c1c5060cb": "98801650050f9fa10870b4e56c89676a",
".git/objects/0e/5b4ab4f44e47c92dbcf3043f5364cc52368b82": "e484efc949ffb978a23365855893487e",
".git/objects/5a/5fa17bf81ad913937389a233cc2961a4e7abe9": "cd34dce616f455d807265c1c555c0411",
".git/objects/5a/c564b24755e59e4e62d29801165f7bb555526a": "96900fbda70d1b4477fe8fc36ef96a11",
".git/objects/5f/7cf9218cf1b35e542c73ac10db9083cf6c9af2": "f9cd26a5d5aeb465b7aae1a23159a182",
".git/objects/5f/4530419d0186b5d0fd9700353e495837f3bcc3": "1760bdfeb24eea97e599dae9ddddcd12",
".git/objects/b2/b473ecd4b714cb7684fe6352e351616b3eec80": "59f6df45457a707b908a22b4e43be0b9",
".git/objects/ac/05578a4a889d9dff555034fab5424bd7828a7a": "07dae83ee8d68e9bae13b68a49ecd63a",
".git/objects/d0/5307e70c3cb93d56eefb8334f6bdcf5adc072c": "def42e83cc107131c4369b92ac2763ba",
".git/objects/df/05a94554e304869675f4af6c9d121b564c9854": "b675b1d3ff2c500c1ff5c48b51492931",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c3273db46732bf46b50366ba6e08bf66ac1b19": "663b5e093acdad9a1eb49e10987ed247",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7f22999185b91b7e5fd242e485ec4777c50c84": "547e14df054e1e000e068a9daf726230",
".git/objects/4e/39f953cd6412dcbb174d738d19600c2c685a85": "b01b95d5f0772ec8b0543be28cf480cd",
".git/objects/20/030fcada88fa2fa27b545e3af4610b519d1e24": "d8d885b4a65404ee538ca7c2d07297ca",
".git/objects/18/1cbd1eb074a1f8b89165d22c6b132e69d308fd": "3f34d627cc91693109dc6b691cb6afda",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/62c688b71b287192a9640708419fafb40a7cc6": "f4e973cd08aad2a00f19f31affa0f733",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/eb84974c5787ca9c355b29e83d6e701dd02a35": "e5c494f2a5effd8732a6c5d68fa88d5a",
".git/objects/81/124854a15e15df7b866e9f20e05bd4dc2d5304": "6a1452a331b269cc84b41fc23f95ebd5",
".git/objects/43/dd8f42bec90404439cdd5fe49f4acf8de920d7": "3a07b0e7314c67c43390e7bd61a6930e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/373ec89562e03a72d82d79de781ae9d0c8c79b": "db3ce27d5319315d486ccd00719b8d8d",
".git/objects/62/dd61e5d0033f726c86fd74b00c7a1eb4a715c5": "b09ccd2e4879a9e9c3b859c34db42d2a",
".git/objects/98/67afb8e07341ce9fc95ddef99d85a85e467fa5": "799bf10ccb5ceeec9b7a7ae69ae835db",
".git/objects/3f/bdd623b4f8d2e8484bff13d4b21504b159f021": "82492726c012b931b8b706e1407e2c49",
".git/objects/5e/6f97f70fa2d868ceb0eb7fda03f93b71aaaaa0": "7fe51fd8056783c1fdadbe268189fa1b",
".git/objects/06/703ec80069e7c8ed571c9e2af2b3832b557bc0": "8d6d4e3db7fd29f390dda861874a1550",
".git/objects/99/d491b9810d692f4e04a3a7db88e2bb5f956e92": "19d4ddca02c14ecbf44452a5a57e7734",
".git/objects/52/ef6f37aa6ca1398d27aeea012ac649b7423844": "e6c36f4c3048789d0693bb21be88e2d1",
".git/objects/55/e2220fa41df781d49c587bf879f804d6913510": "09745ebd91539f88bfe7995175b24a10",
".git/objects/97/b7c31fc84d0e19a9ce986f0bce25d5b5b04bec": "9d7959266f9893eed0579c1d87c353d5",
".git/objects/0f/bf2dab0dc4c79a949bacd653d454d20414b6a2": "9a7c2d0537df43ec8a814dc9d7fb4bff",
".git/objects/bf/0ec6b41d582bb840da590f360adb6ca33bb272": "525056acffea2faa825a3b91502a8798",
".git/objects/b8/39bd7db7180510819602b4e715237e8954533b": "4a1463a4c4984696e50bce1c72e1ec39",
".git/objects/a9/64e1bd0264eb4f43e32445ba6aea1ffa94014f": "38a53a60f39f0efa207ac1aab282dd43",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/87b8dfa3e56c1299f4809ecbb096e8af7e583c": "a29c69727cdee209a37649f34cd6e23e",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/63484594c0fd6d1f429412aeebd57544fc68ee": "7e466802693c62597e2254fa5d30908a",
".git/objects/f0/e80ec18fca47a657704afef5483bcd75734ed8": "05a67b58ce3a3842e461aaa23ed52d52",
".git/objects/c5/2e775705ee871d699d374441673b915bbb2d64": "b5190646798102089dad44ca67443d2c",
".git/objects/f1/4f71c658e3b195f1c2ce907b72313df9adf65e": "7043cdf22539431683f2063340fc818e",
".git/objects/79/3e2a894fe957a7c37a98057bc6768f7fea558e": "4c35763848ce59dce1897ad813911e79",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/48/bd0308090da18df9f8bdf6c987eecede02d02e": "2271c6f360f17074db9c36b789c303b3",
".git/objects/23/e94e7bcc8b1872fda4c835201fb4b6ed90c0e0": "3b5871b6770eb80d9af91cf57b5657c5",
".git/objects/12/216d678ec3b5c45727705eaad8e79d10ff4116": "de6baf1010c9a04eb81aa792e2b67b01",
".git/objects/76/f67ad9c375a67c8c62b473a939723295b2155b": "9d256ae91b725fc90463a0e8446b2148",
".git/objects/47/6ea79fbb0a051a96cc218fbce776fe5b9771b6": "03aa9e9c865bcba4d7ebfdc4b61f24cc",
".git/objects/13/f167e33afa7eb10d00c201ebc9453b76b2558d": "0a506d366bd1d6cffff46190ee603ce8",
".git/objects/7f/e31289ce91cbc8e94d23e5b01413dce22f682d": "95fdec51b9cb1ed62ede0a2e7ab23cce",
".git/objects/25/9ed2f1a8a4fe511d82ed535c8e0a8843e01de5": "7d2ccb51cc12258fde2ff2b0d6f4da04",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e8317cdd197ed5b1d80ac4858a26ec21",
".git/logs/refs/heads/main": "e8317cdd197ed5b1d80ac4858a26ec21",
".git/logs/refs/remotes/origin/main": "f873a1e50de0779f740b79ac5226aae4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f26652fafc478bbe2d70917e8bfa0185",
".git/refs/remotes/origin/main": "f26652fafc478bbe2d70917e8bfa0185",
".git/index": "2967dcb28331865d5f4db6447bce5784",
".git/COMMIT_EDITMSG": "0c42258fbbb5312e0bdcc7a445cfe0f3",
"assets/AssetManifest.json": "3e0c159fefb0a5555416105713f91944",
"assets/NOTICES": "73f1f4bf5c9de8f5e30fa78196fad096",
"assets/FontManifest.json": "cc9327e91b38f60ce4f20e1120c6afa2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
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
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "cbd4e701269338259ee0b39a0b768167",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "885e5558c90864ddb72ad486f36470cc",
"assets/assets/fonts/RobotoCondensed-Italic.ttf": "d6fc5ec5403ec65bdaecfe44b7b84402",
"assets/assets/fonts/RobotoCondensed-BoldItalic.ttf": "c783051f11a8f369e8acc7adfcb5478d",
"assets/assets/fonts/RobotoCondensed-LightItalic.ttf": "f0177f3fd234ac8664509f19aef620fb",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "52ee8b598488b1ffbaa93e50cbd6a2f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
