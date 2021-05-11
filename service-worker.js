/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8b11b5dd18945bcf2e8a7c50da9411f2"
  },
  {
    "url": "api/helpers.html",
    "revision": "7fe787597603f62558e1c1a0c420db3f"
  },
  {
    "url": "api/index.html",
    "revision": "e7002ae86fc3d5f92feecd991d2eebd0"
  },
  {
    "url": "api/suspense.html",
    "revision": "c40def8366de27b4998f86fa3a44eaf5"
  },
  {
    "url": "assets/css/0.styles.5e1f57d9.css",
    "revision": "b001af44b6fab483ca36024b540cb778"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.42324f3c.js",
    "revision": "deeec376c60719266b8306bd53790ba0"
  },
  {
    "url": "assets/js/11.7405f3c4.js",
    "revision": "05981c78f3eedcd81a9f7e89045f9f59"
  },
  {
    "url": "assets/js/12.ac785721.js",
    "revision": "ea9242cb3d994ed30d5780118f6ebb69"
  },
  {
    "url": "assets/js/13.6d102842.js",
    "revision": "a72d75c97f5bf372f6c0e727038f19c7"
  },
  {
    "url": "assets/js/14.9e9c3106.js",
    "revision": "907992e7cbc95b56b427608b642f10bf"
  },
  {
    "url": "assets/js/15.402256ae.js",
    "revision": "1a190f85ba6647f76f2e9ed4e5ed3b38"
  },
  {
    "url": "assets/js/16.bc480d96.js",
    "revision": "2e22e1fbf9102bd46a88a664d9c03c9a"
  },
  {
    "url": "assets/js/17.6caf1345.js",
    "revision": "d5c686d90c62cc97074c4a6868219038"
  },
  {
    "url": "assets/js/18.e4fb0f4b.js",
    "revision": "7428059f7f222b63436f82fde5848f26"
  },
  {
    "url": "assets/js/19.7a22ef11.js",
    "revision": "ccddcb8c30851cc046e02025317b0328"
  },
  {
    "url": "assets/js/20.53c71037.js",
    "revision": "17ca3eba8e64385776379ee7e0eea0b0"
  },
  {
    "url": "assets/js/21.52750103.js",
    "revision": "3c07b87a13a1279b35273bf22840fd60"
  },
  {
    "url": "assets/js/22.54033aa1.js",
    "revision": "b8134dd8c03e26149eb179d127ad454b"
  },
  {
    "url": "assets/js/23.d05027d2.js",
    "revision": "68b67201f2d7b27e937c163aa72fd5e8"
  },
  {
    "url": "assets/js/24.20a800b4.js",
    "revision": "f2e84c0a2be686493d553dfb5e869710"
  },
  {
    "url": "assets/js/25.8179dd7e.js",
    "revision": "ff17d7b3d0ebf2021e0776444e695bd2"
  },
  {
    "url": "assets/js/3.e53887b8.js",
    "revision": "b1373341d7415c81afd71238eb7b89b4"
  },
  {
    "url": "assets/js/4.d77273b5.js",
    "revision": "afdfdbd798565cb4394d4529121ac9da"
  },
  {
    "url": "assets/js/5.7d2e5c78.js",
    "revision": "4467b0b8ce8d7f6208cc85661d8bbc32"
  },
  {
    "url": "assets/js/6.7c161206.js",
    "revision": "657e5bfbf4e353d83c448b21a51b0f80"
  },
  {
    "url": "assets/js/7.6dd24a86.js",
    "revision": "fee6bdeab2f2283d84f1eb0c57f5f8c5"
  },
  {
    "url": "assets/js/8.dd004d00.js",
    "revision": "bfc4c66bb5ca6c0e067cd8efd7e381ff"
  },
  {
    "url": "assets/js/9.cd2df33f.js",
    "revision": "ec2ebc94391eccde1ee99cdfb3771086"
  },
  {
    "url": "assets/js/app.8b17e2f3.js",
    "revision": "c95f7024de4e663e6b489fcff62d3b33"
  },
  {
    "url": "assets/js/vendors~docsearch.e9a84dcc.js",
    "revision": "4f8c7596d8fdda314beb0fa96f35f60c"
  },
  {
    "url": "examples/context.html",
    "revision": "c8e6c0f5233f5f02f6928d4e87aae9fe"
  },
  {
    "url": "examples/index.html",
    "revision": "c1705fefcc735ee2fe51e4f47f67a835"
  },
  {
    "url": "examples/pomodoro-timer.html",
    "revision": "3e3667a8d41c0794f4efbd731e6175f6"
  },
  {
    "url": "examples/suspense.html",
    "revision": "f64d8305287f44a6befe638958b665c7"
  },
  {
    "url": "examples/typeahead.html",
    "revision": "07ad32622c2cbf6c1a641827caa1881b"
  },
  {
    "url": "guide/context.html",
    "revision": "faa6ba8f8f00d946a2c8cd9aede5fdf7"
  },
  {
    "url": "guide/core-concepts.html",
    "revision": "2ed963fe19c923f8b2d246dc1dded663"
  },
  {
    "url": "guide/gotchas.html",
    "revision": "2c38bfa0169e32d9b4a997ea010c5112"
  },
  {
    "url": "guide/index.html",
    "revision": "0feb7684420bd428105e1f5d7eb25197"
  },
  {
    "url": "guide/migration.html",
    "revision": "004b288ea352a667affcac9c50a0272a"
  },
  {
    "url": "guide/motivation.html",
    "revision": "891b717f568c0df83a49712b5b73fa09"
  },
  {
    "url": "guide/react-independent-epics.html",
    "revision": "57ffd7bf815b92772c52880e657a84ca"
  },
  {
    "url": "guide/render-as-you-fetch-suspense.html",
    "revision": "8044790542fe4e5151a33ca5194b5de2"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "3898bcb83183b6253f87eb9d5e5b9c00"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "ab51839615e70a1a013c81cfd55e0fef"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "c4a1001f60be27aca3ea1bb5f8895c52"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "09e9640acece6fd035022a5c2379ba50"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "25a11c9ce7d49494fc02b25418105f89"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "8b84d4594e44362d08469deca1dce944"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "19b9fb409fda2e028390a9f8e8984697"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "3cc6c868e59ca7a433089b3ee766b858"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "a541b4572b31e5010483834f1f86aeb7"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "b073878d967c78c7c12959602f0d2f19"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "b63605624ed9101367684b2841eba5dc"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "09e9640acece6fd035022a5c2379ba50"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "85c6aaf71eba2d0d8752830d74189be7"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "7b7c6956ee4bdc383ee85ea5a6d531ed"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "7b7c6956ee4bdc383ee85ea5a6d531ed"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "c34f5f522034bc1eb330d1b23460c0e1"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "da6fddb2d053d9b61aabb2364bda7c5a"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "25a11c9ce7d49494fc02b25418105f89"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "7a7eab0e3303cfedb2004a2c4357e600"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "b3defe28047ba8d1fa3ea46f30299313"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "5fa1c24701e48383678a584ecd65b949"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "fbbd99f625d130297e3b281b52bdc1dc"
  },
  {
    "url": "index.html",
    "revision": "d454c6a485d42dcc77e0e6e69bb01a8e"
  },
  {
    "url": "logo.png",
    "revision": "62850ddbc13267344d89653ac2060d80"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
