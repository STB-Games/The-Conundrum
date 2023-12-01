// Choose a cache name
const cacheName = 'cache-v1'

// List the files to precache
const precacheResources = [

  // Cliente
  './',
  './favicon.ico',
  './index.html',
  './main.css',
  './manifest.json',
  './sw.js',

  // Assets
  './assets/alavancas/alavancaAzul.png',
  './assets/alavancas/alavancaLaranja.png',
  './assets/alavancas/alavancaRosa.png',
  './assets/alavancas/alavancaVerde.png',
  './assets/alavancas/alavancaVermelha.png',
  './assets/botaoc/botaoBasilisco.png',
  './assets/botaoc/botaoBoitata.png',
  './assets/botaoc/botaoCorpo.png',
  './assets/botaoc/botaoCurupira.png',
  './assets/botaoc/botaoLobisomem.png',
  './assets/botaoc/botaocMedusa.png',
  './assets/botaoc/botaoVampiro.png',
  './assets/botaoc/botaoYeti.png',
  './assets/botaosala/Sala01.png',
  './assets/botaosala/Sala02.png',
  './assets/botaosala/Sala03.png',
  './assets/botaosala/Sala04.png',
  './assets/botaosala/Sala05.png',
  './assets/botaosala/Sala06.png',
  './assets/botaosala/Sala07.png',
  './assets/botaosala/Sala08.png',
  './assets/botoes/baixo.png',
  './assets/botoes/botaoCobra.png',
  './assets/botoes/botaoProx.png',
  './assets/botoes/botaoX.png',
  './assets/botoes/cima.png',
  './assets/botoes/direita.png',
  './assets/botoes/esquerda.png',
  './assets/botoes/interacao.png',
  './assets/botoes/setaD.png',
  './assets/botoes/setaE.png',
  './assets/Calvo/RodrigoSilva.png',
  './assets/cutscenes/balaoLivro.png',
  './assets/cutscenes/balaoMapa.png',
  './assets/cutscenes/characters.png',
  './assets/cutscenes/cutscene1img.png',
  './assets/cutscenes/cutscene2img.png',
  './assets/cutscenes/cutscene3img.png',
  './assets/cutscenes/cutsceneDELA.png',
  './assets/cutscenes/cutsceneDELE.png',
  './assets/cutscenes/finalBom.png',
  './assets/cutscenes/finalRuim.png',
  './assets/cutscenes/loadinganim.png',
  './assets/cutscenes/telamorte.png',
  './assets/livros/livroCobraT.png',
  './assets/logo/128.png',
  './assets/logo/192.png',
  './assets/logo/256.png',
  './assets/logo/384.png',
  './assets/logo/512.png',
  './assets/mapa/Mansao.json',
  './assets/mapa/mapaClosev5.png',
  './assets/mapa/PrincipalV2.png',
  './assets/Menina/SabrinaTorres.png',
  './assets/objetos/livroCobra.png',
  './assets/objetos/mapaMesa.png',
  './assets/portoes/portaAzul.png',
  './assets/portoes/portaLaranja.png',
  './assets/portoes/portaRosa.png',
  './assets/portoes/portaVerde.png',
  './assets/simbolos/conhecimento.png',
  './assets/simbolos/energia.png',
  './assets/simbolos/medo.png',
  './assets/simbolos/morte.png',
  './assets/simbolos/sangue.png',
  './assets/sons/alavancaInt.mp3',
  './assets/sons/clique.mp3',
  './assets/sons/credito.mp3',
  './assets/sons/erro.mp3',
  './assets/sons/HeilagVagga.mp3',
  './assets/sons/musicaTema.mp3',
  './assets/sons/paredeQuebrando.mp3',
  './assets/sons/portaAbrindo.mp3',
  './assets/sons/somCaindo.mp3',
  './assets/sons/somChuva.mp3',
  './assets/sons/somCobra.mp3',
  './assets/sons/somCoracao.mp3',
  './assets/sons/somFail.mp3',
  './assets/sons/somLivro.mp3',
  './assets/sons/somMonstro.mp3',
  './assets/sons/somRespirando.mp3',
  './assets/sons/vidroQuebrando.mp3',
  './assets/barraMedo.png',
  './assets/botaoinvisivelH.png',
  './assets/botaoinvisivelV.png',
  './assets/CapaJogo.png',
  './assets/CapaJogoPNG.png',
  './assets/CenaAbertura.png',
  './assets/cutsceneFinalFinal.png',
  './assets/favicon.png',
  './assets/Felipa-Regular.ttf',
  './assets/fogo.png',
  './assets/fonte.png',
  './assets/FullScreenICO.png',
  './assets/fundobordaA.png',
  './assets/fundobordaV.png',
  './assets/fundoborda2A.png',
  './assets/fundoborda2V.png',
  './assets/fundocinza.png',
  './assets/fundopreto.png',
  './assets/fundoTeste.png',
  './assets/mapaLab.png',
  './assets/olhoPiscando.png',
  './assets/quadrinhoSaida.png',
  './assets/telaQuadrinho.png',
  './assets/transparente.png',

  // Js

  './js/abertura.js',
  './js/axios.min.js',
  './js/CenaResposta1.js',
  './js/CenaResposta2.js',
  './js/characters.js',
  './js/config.js',
  './js/cutscene.js',
  './js/cutscene1.js',
  './js/cutscene2.js',
  './js/cutscene3.js',
  './js/cutsceneDELA.js',
  './js/cutsceneDELE.js',
  './js/cutsceneFinal1.js',
  './js/finalBom.js',
  './js/finalFeliz.js',
  './js/finalRuim.js',
  './js/gameOver.js',
  './js/index.js',
  './js/loading.js',
  './js/personagem.js',
  './js/phaser.min.js',
  './js/sala.js'
]

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!')
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)))
})

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!')
})

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request)
    })
  )
})
