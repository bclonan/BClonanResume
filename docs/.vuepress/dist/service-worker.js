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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d654cf67992368f6591ce24f28ccdc19"
  },
  {
    "url": "assets/css/1.styles.f07b7644.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/2.styles.48df321d.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.65de6b04.css",
    "revision": "2a0bf7716a5b4cf315733e4d691ff3bc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f07b7644.js",
    "revision": "3051f7f8e9b9ca1052ec0b586cf83e31"
  },
  {
    "url": "assets/js/10.26bab391.js",
    "revision": "1b7f528f1b6c4051cae0d93ebf86fd0d"
  },
  {
    "url": "assets/js/11.3019a94a.js",
    "revision": "b670883a3dcafa2cb28012b55312c4a2"
  },
  {
    "url": "assets/js/12.f07f4a74.js",
    "revision": "32a374a7de469be7caa99f7765137403"
  },
  {
    "url": "assets/js/2.48df321d.js",
    "revision": "fe333b391aa7529e7228c22d5c70f516"
  },
  {
    "url": "assets/js/3.84bec746.js",
    "revision": "5196aa4b2a41bea86629eea2e459347c"
  },
  {
    "url": "assets/js/4.545a9621.js",
    "revision": "f2c86b6081d340a058e2936000f14a39"
  },
  {
    "url": "assets/js/5.9d39d305.js",
    "revision": "1c7509c246f946f92436034a7eb1ac8f"
  },
  {
    "url": "assets/js/6.9b9d5ff4.js",
    "revision": "ecfe601f40c52cecc62a07561e5aa1a7"
  },
  {
    "url": "assets/js/7.b6a9c08a.js",
    "revision": "17ce4fcbb4bb273ec9bf05c470ae9d22"
  },
  {
    "url": "assets/js/8.2ab798c3.js",
    "revision": "00d1ec3d215e782e3e8a1b3e4ab73fd5"
  },
  {
    "url": "assets/js/9.aca44175.js",
    "revision": "c9dbae896e08be27af50ebacb2546cf5"
  },
  {
    "url": "assets/js/app.65de6b04.js",
    "revision": "b62f650a336da628b74d3c65ea6e7e24"
  },
  {
    "url": "contact/index.html",
    "revision": "34c7ab74710bc343579a62c5c43d381b"
  },
  {
    "url": "documents/index.html",
    "revision": "dc19db585ad777647ba9dc9f7b5fc7ac"
  },
  {
    "url": "index.html",
    "revision": "f8d6d7e80eaf3ee5b121ed438d0edd9f"
  },
  {
    "url": "platform/functionality.html",
    "revision": "7f829951783b56ec0e54bb7a3b1ddd4f"
  },
  {
    "url": "platform/index.html",
    "revision": "b47f1739aa593a8f5bed0842dc2ff910"
  },
  {
    "url": "platform/Introduction.html",
    "revision": "6f4f57bb21a5f17a4b9db669752c8661"
  },
  {
    "url": "platform/proposedTechnologies.html",
    "revision": "1b40f10b4cfd45a8c213a90097b167c7"
  },
  {
    "url": "platform/roadMap.html",
    "revision": "1a4b4b5e271ad68dae5f86a827eda937"
  },
  {
    "url": "platform/styleGuide.html",
    "revision": "d34c9b9f880ddbe64917fbcf6f5787fc"
  },
  {
    "url": "platform/timeline.html",
    "revision": "1496987283b5b5b2d4f00802cb7f275d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
