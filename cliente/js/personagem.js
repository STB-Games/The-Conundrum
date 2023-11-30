export default class personagem extends Phaser.Scene {
  constructor () {
    super('personagem')

    this.animationKey = undefined
    this.validacao = 0
    this.balaoLivroCollider = null
    this.balaoLivro = null
    this.balaoMapaCollider = null
    this.balaoMapa = null
    this.colisaoAtiva = 0
  }

  preload () {
    /* Tilemap */
    this.load.tilemapTiledJSON('Mansao', './assets/mapa/Mansao.json')

    /* Tilesets */
    this.load.image('Principal', './assets/mapa/mapaClosev5.png')
    this.load.image('PrincipalV2', './assets/mapa/PrincipalV2.png')

    // Joystick

    this.load.plugin('rexvirtualjoystickplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true)

    this.load.image('transparente', 'assets/transparente.png')

    // Quadrinho

    this.load.image('telaQuadrinho', '../assets/telaQuadrinho.png', {

      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('balaoMapa', '../assets/cutscenes/balaoMapa.png', {

      frameWidth: 180,
      frameHeight: 120
    })

    this.load.image('balaoLivro', '../assets/cutscenes/balaoLivro.png', {

      frameWidth: 180,
      frameHeight: 120
    })

    this.load.image('botaoX', '../assets/botoes/botaoX.png', {

      frameWidth: 32,
      frameHeight: 32
    })

    this.load.image('setaD', '../assets/botoes/setaD.png', {

      frameWidth: 48,
      frameHeight: 48
    })

    this.load.image('setaE', '../assets/botoes/setaE.png', {

      frameWidth: 48,
      frameHeight: 48
    })

    this.load.image('livroCobra1', '../assets/livros/livroCobra1.png', {

      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('livroCobra2', '../assets/livros/livroCobra2.png', {

      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('livroCobra3', '../assets/livros/livroCobra3.png', {

      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('livroCobra4', '../assets/livros/livroCobra4.png', {

      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('livroCobra5', '../assets/livros/livroCobra5.png', {

      frameWidth: 800,
      frameHeight: 450
    })

    this.load.spritesheet('livroCobraT', '../assets/livros/livroCobraT.png', {

      frameWidth: 800,
      frameHeight: 450
    })

    // Medo

    this.load.spritesheet('barraMedo', '../assets/barraMedo.png', {
      frameWidth: 190,
      frameHeight: 60
    })

    this.load.spritesheet('fogo', '../assets/fogo.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    // Porta

    this.load.spritesheet('portaVerdeSobe', '../assets/portoes/portaVerde.png', {
      frameWidth: 96,
      frameHeight: 96
    })

    this.load.spritesheet('portaLaranjaSobe', '../assets/portoes/portaLaranja.png', {
      frameWidth: 96,
      frameHeight: 96
    })

    this.load.spritesheet('portaAzulSobe', '../assets/portoes/portaAzul.png', {
      frameWidth: 96,
      frameHeight: 96
    })

    this.load.spritesheet('portaRosaSobe', '../assets/portoes/portaRosa.png', {
      frameWidth: 96,
      frameHeight: 96
    })

    // Alavanca

    this.load.spritesheet('alavancaVerde', '../assets/alavancas/alavancaVerde.png', {
      frameWidth: 64,
      frameHeight: 32
    })

    this.load.spritesheet('alavancaLaranja', '../assets/alavancas/alavancaLaranja.png', {
      frameWidth: 64,
      frameHeight: 32
    })

    this.load.spritesheet('alavancaAzul', '../assets/alavancas/alavancaAzul.png', {
      frameWidth: 64,
      frameHeight: 32
    })

    this.load.spritesheet('alavancaVermelho', '../assets/alavancas/alavancaVermelha.png', {
      frameWidth: 64,
      frameHeight: 32
    })

    this.load.spritesheet('alavancaRosa', '../assets/alavancas/alavancaRosa.png', {
      frameWidth: 64,
      frameHeight: 32
    })

    // Objetos

    this.load.spritesheet('livroCobra', '../assets/objetos/livroCobra.png', {
      frameWidth: 32,
      frameHeight: 24
    })

    this.load.spritesheet('mapaMesa', '../assets/objetos/mapaMesa.png', {
      frameWidth: 32,
      frameHeight: 15
    })

    this.load.spritesheet('olhoPiscando', './assets/olhoPiscando.png', {
      frameWidth: 24,
      frameHeight: 8
    })

    this.load.spritesheet('bolaAnim', './assets/objetos/bolaAnim.png', {
      frameWidth: 16,
      frameHeight: 16
    })
    // EndGame

    this.load.image('monster', '../assets/botaoinvisivelH.png', {
      frameWidth: 100,
      frameHeight: 16
    })

    /* Sabrina Torres */

    this.load.spritesheet('Sabrina', '../assets/Menina/SabrinaTorres.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /* Rodrigo Silva */

    this.load.spritesheet('Rodrigo', '../assets/Calvo/RodrigoSilva.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })

    this.load.image('mapaLab', './assets/mapaLab.png', {
      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('fundoP', './assets/fundopreto.png')

    this.load.image('fonte', './assets/fonte.png', {
      frameWidth: 75,
      frameHeight: 75
    })

    /* Botões */

    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('botaoCobra', '../assets/botoes/botaoCobra.png', {
      frameWidth: 35,
      frameHeight: 35
    })

    this.load.spritesheet('interacao', '../assets/botoes/interacao.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('esquerda', '../assets/botoes/esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('baixo', '../assets/botoes/baixo.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    // Sons

    this.load.audio('vidroQuebrando', '../assets/sons/vidroQuebrando.mp3')
    this.load.audio('paredeQuebrando', '../assets/sons/paredeQuebrando.mp3')
    this.load.audio('audioAlavanca', '../assets/sons/alavancaInt.mp3')
    this.load.audio('audioLivro', '../assets/sons/somLivro.mp3')
    this.load.audio('audioFail', '../assets/sons/somFail.mp3')
    this.load.audio('audioPorta', '../assets/sons/portaAbrindo.mp3')
    this.load.audio('audioCobra', '../assets/sons/somCobra.mp3')
    this.load.audio('audioChuva', '../assets/sons/somChuva.mp3')
    this.load.audio('audioCaindo', '../assets/sons/somCaindo.mp3')
    this.load.audio('audioMonstro', '../assets/sons/somMonstro.mp3')
    this.load.audio('audioCoracao', '../assets/sons/somCoracao.mp3')
    this.load.audio('audioRespirando', '../assets/sons/somRespirando.mp3')
    this.load.audio('musicaFoda', '../assets/sons/HeilagVagga.mp3')
    this.load.audio('musicaTema', '../assets/sons/musicaTema.mp3')

    // Símbolos

    this.load.spritesheet('conhecimento', './assets/simbolos/conhecimento.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('energia', './assets/simbolos/energia.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('morte', './assets/simbolos/morte.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('sangue', './assets/simbolos/sangue.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('medoS', './assets/simbolos/medo.png', {
      frameWidth: 96,
      frameHeight: 96
    })
  }

  create () {
    // Sons

    this.audioVidro = this.sound.add('vidroQuebrando')
    this.audioParede = this.sound.add('paredeQuebrando')
    this.audioAlavanca = this.sound.add('audioAlavanca')
    this.audioLivro = this.sound.add('audioLivro')
    this.audioFail = this.sound.add('audioFail')
    this.audioPorta = this.sound.add('audioPorta')
    this.audioCobra = this.sound.add('audioCobra')
    this.audioChuva = this.sound.add('audioChuva')
    this.audioCaindo = this.sound.add('audioCaindo')
    this.audioMonstro = this.sound.add('audioMonstro')
    this.audioCoracao = this.sound.add('audioCoracao')
    this.audioRespirando = this.sound.add('audioRespirando')
    this.musicaFoda = this.sound.add('musicaFoda')
    this.audioTema = this.sound.add('musicaTema')
    this.sound.stopByKey('musicaTema')

    /* Tilemap */
    this.mapa = this.make.tilemap({
      key: 'Mansao'
    })

    this.audioChuva.play()
    this.audioChuva.loop = true

    /* Tilesets */
    this.tileset_Principal = this.mapa.addTilesetImage('Principal', 'Principal')
    this.tileset_PrincipalV2 = this.mapa.addTilesetImage('PrincipalV2', 'PrincipalV2')

    /* Camadas (layers) */
    this.chao = this.mapa.createLayer(
      'chao',
      [
        this.tileset_Principal,
        this.tileset_PrincipalV2
      ]
    )

    this.Cchao = this.mapa.createLayer(
      'Cchao',
      [
        this.tileset_Principal,
        this.tileset_PrincipalV2
      ]
    )

    this.CnaCchao = this.mapa.createLayer(
      'CnaCchao',
      [
        this.tileset_Principal,
        this.tileset_PrincipalV2
      ]
    )

    this.moveis = this.mapa.createLayer(
      'moveis',
      [
        this.tileset_Principal,
        this.tileset_PrincipalV2
      ]
    )

    this.Cmoveis = this.mapa.createLayer(
      'Cmoveis',
      [
        this.tileset_Principal,
        this.tileset_PrincipalV2
      ]
    )

    this.Cparede = this.mapa.createLayer(
      'Cparede',
      [
        this.tileset_Principal,
        this.tileset_PrincipalV2
      ]
    )

    // PORTA

    this.bloqueioSobe = this.physics.add.sprite(972, 5780, 'portaRosaSobe')
    this.bloqueioSobe.body.setAllowGravity(true)
    this.bloqueioSobe.setImmovable(true)
    this.bloqueioSobe.disableBody(true, true)

    this.bloqueioSobe1 = this.physics.add.sprite(1888, 4100, 'portaRosaSobe')
    this.bloqueioSobe1.body.setAllowGravity(true)
    this.bloqueioSobe1.setImmovable(true)
    this.bloqueioSobe1.disableBody(true, true)

    this.bloqueioSobe2 = this.physics.add.sprite(1246, 4347, 'portaRosaSobe')
    this.bloqueioSobe2.body.setAllowGravity(true)
    this.bloqueioSobe2.setImmovable(true)
    this.bloqueioSobe2.disableBody(true, true)
    this.bloqueioSobe2.enableBody(true, 1246, 4347, false, false)

    this.portaVerdeSobe = this.physics.add.image(5104, 4833, 'portaVerdeSobe')
    this.portaVerdeSobe.body.setAllowGravity(true)
    this.portaVerdeSobe.setImmovable(true)

    this.portaVerdeSobe1 = this.physics.add.image(2300, 6100, 'portaVerdeSobe')
    this.portaVerdeSobe1.body.setAllowGravity(true)
    this.portaVerdeSobe1.setImmovable(true)

    this.portaLaranjaSobe = this.physics.add.image(4144, 3893, 'portaLaranjaSobe')
    this.portaLaranjaSobe.body.setAllowGravity(true)
    this.portaLaranjaSobe.setImmovable(true)

    this.portaLaranjaSobe1 = this.physics.add.image(2300, 6100, 'portaLaranjaSobe')
    this.portaLaranjaSobe1.body.setAllowGravity(true)
    this.portaLaranjaSobe1.setImmovable(true)

    this.portaAzulSobe = this.physics.add.image(3632, 5136, 'portaAzulSobe')
    this.portaAzulSobe.body.setAllowGravity(true)
    this.portaAzulSobe.setImmovable(true)

    this.portaAzulSobe1 = this.physics.add.image(2300, 6100, 'portaAzulSobe')
    this.portaAzulSobe1.body.setAllowGravity(true)
    this.portaAzulSobe1.setImmovable(true)

    this.portaRosaSobe = this.physics.add.sprite(4305, 5233, 'portaRosaSobe')
    this.portaRosaSobe.body.setAllowGravity(true)
    this.portaRosaSobe.setImmovable(true)

    // ALAVANCA

    this.alavancaVerde = this.add.sprite(3116, 4904, 'alavancaVerde', 1)
    this.alavancaVerdeCollider = this.add.rectangle(3116, 4944, 1, 1, 1) // O retângulo invisível que corresponde ao alavancaVerde
    this.physics.world.enable(this.alavancaVerdeCollider) // Habilita a física para o retângulo
    this.alavancaVerdeCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.alavancaLaranja = this.add.sprite(4924, 4889, 'alavancaLaranja', 1)
    this.alavancaLaranjaCollider = this.add.rectangle(4924, 4929, 1, 1, 1) // O retângulo invisível que corresponde ao alavancaLaranja
    this.physics.world.enable(this.alavancaLaranjaCollider) // Habilita a física para o retângulo
    this.alavancaLaranjaCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.alavancaAzul = this.add.sprite(3477, 5480, 'alavancaAzul', 1)
    this.alavancaAzulCollider = this.add.rectangle(3477, 5520, 1, 1, 1) // O retângulo invisível que corresponde ao alavancaAzul
    this.physics.world.enable(this.alavancaAzulCollider) // Habilita a física para o retângulo
    this.alavancaAzulCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.alavancaVermelho = this.add.sprite(4259, 3520, 'alavancaVermelho', 1)
    this.alavancaVermelhoCollider = this.add.rectangle(4259, 3568, 1, 1, 1) // O retângulo invisível que corresponde ao alavancaVermelho
    this.physics.world.enable(this.alavancaVermelhoCollider) // Habilita a física para o retângulo
    this.alavancaVermelhoCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.alavancaRosa = this.add.sprite(2619, 409, 'alavancaRosa', 1)
    this.alavancaRosaCollider = this.add.rectangle(2619, 449, 1, 1, 1) // O retângulo invisível que corresponde ao alavancaRosa
    this.physics.world.enable(this.alavancaRosaCollider) // Habilita a física para o retângulo
    this.alavancaRosaCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    // BOTAO COBRA

    this.botaoCobra1 = this.add.sprite(1138, 2044, 'botaoCobra')
    this.botaoCobra1Collider = this.add.rectangle(1138, 2044, 1, 1) // O retângulo invisível que corresponde ao botaoCobra1
    this.physics.world.enable(this.botaoCobra1Collider) // Habilita a física para o retângulo
    this.botaoCobra1Collider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.botaoCobra2 = this.add.sprite(1038, 2044, 'botaoCobra')
    this.botaoCobra2Collider = this.add.rectangle(1038, 2044, 1, 1) // O retângulo invisível que corresponde ao botaoCobra2
    this.physics.world.enable(this.botaoCobra2Collider) // Habilita a física para o retângulo
    this.botaoCobra2Collider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.botaoCobra3 = this.add.sprite(938, 2044, 'botaoCobra')
    this.botaoCobra3Collider = this.add.rectangle(938, 2044, 1, 1) // O retângulo invisível que corresponde ao botaoCobra3
    this.physics.world.enable(this.botaoCobra3Collider) // Habilita a física para o retângulo
    this.botaoCobra3Collider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.botaoCobra4 = this.add.sprite(838, 2044, 'botaoCobra')
    this.botaoCobra4Collider = this.add.rectangle(838, 2044, 1, 1) // O retângulo invisível que corresponde ao botaoCobra4
    this.physics.world.enable(this.botaoCobra4Collider) // Habilita a física para o retângulo
    this.botaoCobra4Collider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.botaoCobra5 = this.add.sprite(738, 2044, 'botaoCobra')
    this.botaoCobra5Collider = this.add.rectangle(738, 2044, 1, 1) // O retângulo invisível que corresponde ao botaoCobra5
    this.physics.world.enable(this.botaoCobra5Collider) // Habilita a física para o retângulo
    this.botaoCobra5Collider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    // OBJETOS INTERATIVOS

    this.livro = this.add.sprite(2427, 584, 'livroCobra')
    this.livroCollider = this.add.rectangle(2390, 579, 1, 1) // O retângulo invisível que corresponde ao livro
    this.physics.world.enable(this.livroCollider) // Habilita a física para o retângulo
    this.livroCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.mapaMesa = this.add.sprite(2806, 2124, 'mapaMesa')
    this.mapaMesaCollider = this.add.rectangle(2806, 2100, 1, 1) // O retângulo invisível que corresponde ao mapaMesa
    this.physics.world.enable(this.mapaMesaCollider) // Habilita a física para o retângulo
    this.mapaMesaCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.fonteEnigma = this.physics.add.image(1214, 5475, 'fonte')
    this.fonteEnigma.body.setAllowGravity(true)
    this.fonteEnigma.setImmovable(true)

    this.fonteEnigmaCollider = this.add.rectangle(1214, 5475, 80, 80) // O retângulo invisível que corresponde ao fonteEnigma
    this.physics.world.enable(this.fonteEnigmaCollider) // Habilita a física para o retângulo
    this.fonteEnigmaCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.balaoLivroCollider = this.add.rectangle(2619, 424, 30, 1, 1) // O retângulo invisível que corresponde ao balaoLivro
    this.physics.world.enable(this.balaoLivroCollider) // Habilita a física para o retângulo
    this.balaoLivroCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.balaoMapaCollider = this.add.rectangle(2811, 1980, 50, 1) // O retângulo invisível que corresponde ao balaoMapa
    this.physics.world.enable(this.balaoMapaCollider) // Habilita a física para o retângulo
    this.balaoMapaCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.fimdojogo = this.add.sprite(1246, 4408, 'monster')
    this.fimdojogoCollider = this.add.rectangle(1246, 4408, 200, 200) // O retângulo invisível que corresponde ao fimdojogo
    this.physics.world.enable(this.fimdojogoCollider) // Habilita a física para o retângulo
    this.fimdojogoCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.olhoPiscando = this.add.sprite(1079, 3790, 'olhoPiscando')

    this.fogo = this.add.sprite(706, 2340, 'fogo')

    this.sangue = this.add.sprite(1110, 5475, 'sangue')
    this.sangue.setVisible(false)

    this.morte = this.add.sprite(1215, 5571, 'morte')
    this.morte.setVisible(false)

    this.energia = this.add.sprite(1311, 5475, 'energia')
    this.energia.setVisible(false)

    this.conhecimento = this.add.sprite(1215, 5372, 'conhecimento')
    this.conhecimento.setVisible(false)

    this.medo = this.add.sprite(1218, 5255, 'medoS')
    this.medo.setVisible(false)

    /* Full Screen */

    const telaCheia = this.add
      .sprite(770, 30, 'tela-cheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          telaCheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          telaCheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)

    // Medo no canto superior esquerdo

    this.spritesheet = this.add.sprite(110, 38, 'barraMedo')
      .setScrollFactor(0, 0)

    /* Animação */

    const effect = this.alavancaAzul.preFX.addShine(0.5, 0.5, 3, false)
    const effect1 = this.alavancaLaranja.preFX.addShine(0.5, 0.5, 3, false)
    const effect2 = this.alavancaVermelho.preFX.addShine(0.5, 0.5, 3, false)
    const effect3 = this.alavancaVerde.preFX.addShine(0.5, 0.5, 3, false)
    const effect4 = this.mapaMesa.preFX.addShine(0.5, 0.5, 3, false)
    const effect5 = this.livro.preFX.addShine(0.5, 0.5, 3, false)
    const effect6 = this.botaoCobra1.preFX.addShine(0.5, 0.5, 3, false)
    const effect7 = this.botaoCobra2.preFX.addShine(0.5, 0.5, 3, false)
    const effect8 = this.botaoCobra3.preFX.addShine(0.5, 0.5, 3, false)
    const effect9 = this.botaoCobra4.preFX.addShine(0.5, 0.5, 3, false)
    const effect10 = this.botaoCobra5.preFX.addShine(0.5, 0.5, 3, false)
    const effect11 = this.fonteEnigma.preFX.addShine(0.5, 0.5, 3, false)

    const botaoX = this.add.image(765, 35, 'botaoX')
    const setaD = this.add.image(750, 225, 'setaD')
    const setaE = this.add.image(50, 225, 'setaE')

    /* Personagem */

    // Variável para rastrear o frame da barra de medo
    this.medoFrame = 0
    let sequenciaAtual = []
    const sequenciaCorreta = [4, 2, 5, 1, 3]

    /* Colisão */

    if (this.game.jogadores.primeiro === this.game.socket.id) {
      this.local = 'Rodrigo'
      this.remoto = 'Sabrina'
      this.personagem = this.physics.add.sprite(948, 1088, this.local, 1)
      this.personagemRemoto = this.add.sprite(844, 1088, this.remoto, 1)
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
      this.local = 'Sabrina'
      this.remoto = 'Rodrigo'
      this.personagemRemoto = this.add.sprite(948, 1088, this.remoto, 1)
      this.personagem = this.physics.add.sprite(844, 1088, this.local, 1)

      navigator.mediaDevices.getUserMedia({ video: false, audio: true })
        .then((stream) => {
          this.game.localConnection = new RTCPeerConnection(this.game.ice_servers)

          this.game.localConnection.onicecandidate = ({ candidate }) =>
            candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

          this.game.localConnection.ontrack = ({ streams: [stream] }) =>
            this.game.audio.srcObject = stream

          stream.getTracks()
            .forEach((track) => this.game.localConnection.addTrack(track, stream))

          this.game.localConnection.createOffer()
            .then((offer) => this.game.localConnection.setLocalDescription(offer))
            .then(() => this.game.socket.emit('offer', this.game.sala, this.game.localConnection.localDescription))

          this.game.midias = stream
        })
        .catch((error) => console.error(error))
    }

    this.game.socket.on('offer', (description) => {
      this.game.remoteConnection = new RTCPeerConnection(this.game.ice_servers)

      this.game.remoteConnection.onicecandidate = ({ candidate }) =>
        candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

      this.game.remoteConnection.ontrack = ({ streams: [midia] }) =>
        this.game.audio.srcObject = midia

      this.game.midias.getTracks()
        .forEach((track) => this.game.remoteConnection.addTrack(track, this.game.midias))

      this.game.remoteConnection.setRemoteDescription(description)
        .then(() => this.game.remoteConnection.createAnswer())
        .then((answer) => this.game.remoteConnection.setLocalDescription(answer))
        .then(() => this.game.socket.emit('answer', this.game.sala, this.game.remoteConnection.localDescription))
    })

    this.game.socket.on('answer', (description) =>
      this.game.localConnection.setRemoteDescription(description)
    )

    this.game.socket.on('candidate', (candidate) => {
      const conn = this.game.localConnection || this.game.remoteConnection
      conn.addIceCandidate(new RTCIceCandidate(candidate))
    })

    // Defina as dimensões da hitbox
    const hitboxWidth = 24
    const hitboxHeight = 60
    const offsetX = (this.personagem.width - hitboxWidth) / 2
    const offsetY = this.personagem.height - hitboxHeight

    // Configure a hitbox
    this.personagem.setSize(hitboxWidth, hitboxHeight, true)
    this.personagem.setOffset(offsetX, offsetY)
    this.personagem.setCollideWorldBounds(true)

    /* baloes */

    this.balaoLivro = this.add.sprite(2520, 368, 'balaoLivro')
    this.balaoLivro.setVisible(false)

    this.balaoMapa = this.add.sprite(2693, 1892, 'balaoMapa')
    this.balaoMapa.setVisible(false)

    // alavanca

    let alavancaState = 0
    let alavancaState1 = 0
    let alavancaState2 = 0
    let alavancaState3 = 0
    let alavancaState4 = 0

    this.BotãoInt = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (alavancaState === 0) {
          this.alavancaVerde.setFrame(0)
          alavancaState = 1
          this.audioAlavanca.play()
          this.portaVerdeSobe.x = 2300
          this.portaVerdeSobe.y = 6100
          this.portaVerdeSobe1.x = 3247
          this.portaVerdeSobe1.y = 4824
          console.log('Alavanca state atual %d', alavancaState)
        } else {
          this.alavancaVerde.setFrame(1)
          alavancaState = 0
          this.audioAlavanca.play()
          this.portaVerdeSobe.x = 5106
          this.portaVerdeSobe.y = 4833
          this.portaVerdeSobe1.x = 2300
          this.portaVerdeSobe1.y = 6100
          console.log('Alavanca state atual %d', alavancaState)
        }
      })

      .setScrollFactor(0, 0)

    this.BotãoInt1 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (alavancaState1 === 0) {
          this.alavancaLaranja.setFrame(0)
          alavancaState1 = 1
          this.audioAlavanca.play()
          this.portaLaranjaSobe.x = 2300
          this.portaLaranjaSobe.y = 6100
          this.portaLaranjaSobe1.x = 5103
          this.portaLaranjaSobe1.y = 4490
          console.log('Alavanca state atual %d', alavancaState)
        } else {
          this.alavancaLaranja.setFrame(1)
          alavancaState1 = 0
          this.audioAlavanca.play()
          this.portaLaranjaSobe.x = 4148
          this.portaLaranjaSobe.y = 3893
          this.portaLaranjaSobe1.x = 2300
          this.portaLaranjaSobe1.y = 6100
          console.log('Alavanca state atual %d', alavancaState)
        }
      })

      .setScrollFactor(0, 0)

    this.BotãoInt2 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (alavancaState2 === 0) {
          this.alavancaAzul.setFrame(0)
          alavancaState2 = 1
          this.audioAlavanca.play()
          this.portaAzulSobe.x = 2300
          this.portaAzulSobe.y = 6100
          this.portaAzulSobe1.x = 4592
          this.portaAzulSobe1.y = 4920
          console.log('Alavanca state atual %d', alavancaState)
        } else {
          this.alavancaAzul.setFrame(1)
          alavancaState2 = 0
          this.audioAlavanca.play()
          this.portaAzulSobe.x = 3632
          this.portaAzulSobe.y = 5136
          this.portaAzulSobe1.x = 2300
          this.portaAzulSobe1.y = 6100
          console.log('Alavanca state atual %d', alavancaState)
        }
      })

      .setScrollFactor(0, 0)

    this.BotãoInt3 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (alavancaState3 === 0) {
          this.game.socket.emit('artefatos-publicar', this.game.sala, { portaVermelha: true })
          this.alavancaVermelho.setFrame(0)
          alavancaState3 = 1
          this.BotãoInt3.destroy()
          this.time.delayedCall(2000, () => {
            this.audioMonstro.play()
          })
          this.time.delayedCall(3000, () => {
            this.audioAlavanca.play()
            this.audioVidro.play()
            this.audioParede.play()
            this.audioCaindo.play()
            this.criarTeleporte(2075, 948, 'C1toHallD', {
              if () {
                this.audioRespirando.play()
              }
            })
            this.startMedoTimer()
            this.medoFrame += 1
            this.spritesheet.setFrame(this.medoFrame)
          })
        }
      })

      .setScrollFactor(0, 0)

    this.BotãoInt4 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setScrollFactor(0, 0)

    function funcaobot4 () {
      this.BotãoInt4.setInteractive().on('pointerdown', () => {
        if (alavancaState4 === 0) {
          this.game.socket.emit('artefatos-publicar', this.game.sala, { portaRosa: true })
          this.audioAlavanca.play()
          this.alavancaRosa.setFrame(0)
          alavancaState4 = 1
          this.portaRosaSobe.destroy()
          this.BotãoInt4.destroy()
          console.log('Alavanca state atual %d', alavancaState)
        }
      })
    }

    // Puzzle Cobra

    function checkSequence () {
      if (sequenciaAtual.toString() === sequenciaCorreta.toString()) {
        this.game.socket.emit('artefatos-publicar', this.game.sala, { alavancaRosa: true })
        console.log('Você acertou a sequência!')
        sequenciaAtual = []

        this.botaoIntCobra1.destroy()
        this.botaoIntCobra2.destroy()
        this.botaoIntCobra3.destroy()
        this.botaoIntCobra4.destroy()
        this.botaoIntCobra5.destroy()

        this.validacao = 1

        this.BotãoInt4.setInteractive()

        funcaobot4.call(this)

        const effect17 = this.alavancaRosa.preFX.addShine(2, 0.5, 3, false)

        this.audioCobra.play()
      } else if (sequenciaAtual.length === sequenciaCorreta.length) {
        console.log('Resetando sequencial atual')
        sequenciaAtual = []

        this.botaoCobra1.setVisible(true)
        this.botaoCobra2.setVisible(true)
        this.botaoCobra3.setVisible(true)
        this.botaoCobra4.setVisible(true)
        this.botaoCobra5.setVisible(true)

        this.validacao = 0

        this.audioAlavanca.play()
        this.audioFail.play()
      }
    }

    this.botaoIntCobra1 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.botaoCobra1.visible === true) {
          this.botaoCobra1.setVisible(false)
          sequenciaAtual.push(1)
          console.log(sequenciaAtual)
          this.audioAlavanca.play()
        } else {
          this.botaoCobra1.setVisible(true)
        }

        checkSequence.call(this)
      })

      .setScrollFactor(0, 0)

    this.botaoIntCobra2 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.botaoCobra2.visible === true) {
          this.botaoCobra2.setVisible(false)
          sequenciaAtual.push(2)
          console.log(sequenciaAtual)
          this.audioAlavanca.play()
        } else {
          this.botaoCobra2.setVisible(true)
        }

        checkSequence.call(this)
      })

      .setScrollFactor(0, 0)

    this.botaoIntCobra3 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.botaoCobra3.visible === true) {
          this.botaoCobra3.setVisible(false)
          sequenciaAtual.push(3)
          console.log(sequenciaAtual)
          this.audioAlavanca.play()
        } else {
          this.botaoCobra3.setVisible(true)
        }

        checkSequence.call(this)
      })

      .setScrollFactor(0, 0)

    this.botaoIntCobra4 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.botaoCobra4.visible === true) {
          this.botaoCobra4.setVisible(false)
          sequenciaAtual.push(4)
          console.log(sequenciaAtual)
          this.audioAlavanca.play()
        } else {
          this.botaoCobra4.setVisible(true)
        }

        checkSequence.call(this)
      })

      .setScrollFactor(0, 0)

    this.botaoIntCobra5 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.botaoCobra5.visible === true) {
          this.botaoCobra5.setVisible(false)
          sequenciaAtual.push(5)
          console.log(sequenciaAtual)
          this.audioAlavanca.play()
        } else {
          this.botaoCobra5.setVisible(true)
        }

        checkSequence.call(this)
      })

      .setScrollFactor(0, 0)

    // Objetos

    this.botaoLivro = this.add.sprite(735, 400, 'interacao')
      .setInteractive()
      .on('pointerdown', () => {
        this.audioLivro.play()
        this.botaoLivro.setVisible(false)
        this.livroCobraT.setVisible(true)
        this.setaD.setVisible(true)
        this.setaE.setVisible(true)
        const botaoX = this.add.image(770, 30, 'botaoX')
          .setScrollFactor(0, 0)
        botaoX.setInteractive()
        botaoX.on('pointerdown', function () {
          // Excluir a imagem quando clicada
          this.livroCobraT.setVisible(false)
          this.setaD.setVisible(false)
          this.setaE.setVisible(false)
          this.botaoLivro.setVisible(true)
          botaoX.destroy()
          telaCheia.setVisible(true)
        }, this)
      })

      .setScrollFactor(0, 0)

    // Adicione o livroCobraT (inicialmente invisível)
    this.livroCobraT = this.add.sprite(400, 225, 'livroCobraT', 0).setVisible(false).setScrollFactor(0, 0)

    // Adicione a setaD
    this.setaD = this.add.sprite(750, 225, 'setaD', 0).setVisible(false).setInteractive().on('pointerdown', () => {
      // Lógica quando a setaD é clicada
      if (this.livroCobraT.frame.name < 4) {
        this.livroCobraT.setFrame(this.livroCobraT.frame.name + 1)
      }
    })

      .setScrollFactor(0, 0)

    // Adicione a setaE
    this.setaE = this.add.sprite(50, 225, 'setaE', 0).setVisible(false).setInteractive().on('pointerdown', () => {
      // Lógica quando a setaE é clicada
      if (this.livroCobraT.frame.name > 0) {
        this.livroCobraT.setFrame(this.livroCobraT.frame.name - 1)
      }
    })

      .setScrollFactor(0, 0)

    this.botaoMesa = this.add.sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.audioLivro.play()
        const preto = this.add.image(400, 225, 'fundoP')
          .setScrollFactor(0, 0)
        const mapaLab = this.add.image(400, 225, 'mapaLab')
          .setScrollFactor(0, 0)
        const botaoX = this.add.image(770, 30, 'botaoX')
          .setScrollFactor(0, 0)
        telaCheia.setVisible(false)
        botaoX.setInteractive()
        botaoX.on('pointerdown', function () {
          // Excluir a imagem quando clicada
          mapaLab.destroy()
          preto.destroy()
          botaoX.destroy()
          telaCheia.setVisible(true)
        }, this)
      })

      .setScrollFactor(0, 0)

    this.botaoFonte = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.game.socket.emit('artefatos-publicar', this.game.sala, { fontePressionada: true })
        this.musicaFoda.play()
        this.botaoFonte.destroy()
        this.audioChuva.stop()

        this.bloqueioSobe.enableBody(true, 972, 5780, false, false)

        this.time.delayedCall(8500, () => {
          this.sangue.setVisible(true)
          this.sangue.setFrame(1)

          this.time.delayedCall(1000, () => {
            this.sangue.setFrame(2)

            this.time.delayedCall(1000, () => {
              this.sangue.setFrame(3)

              this.time.delayedCall(1000, () => {
                this.sangue.setFrame(4)

                this.time.delayedCall(1000, () => {
                  this.sangue.setFrame(5)

                  this.time.delayedCall(1000, () => {
                    this.sangue.setFrame(6)

                    this.time.delayedCall(1000, () => {
                      this.sangue.setFrame(7)

                      this.time.delayedCall(1000, () => {
                        this.sangue.setFrame(8)

                        this.time.delayedCall(1000, () => {
                          this.sangue.setFrame(9)

                          this.time.delayedCall(1000, () => {
                            this.morte.setVisible(true)
                            this.morte.setFrame(1)

                            this.time.delayedCall(1000, () => {
                              this.morte.setFrame(2)
                              this.startMedoTimer()
                              this.medoFrame += 1
                              this.spritesheet.setFrame(this.medoFrame)

                              this.time.delayedCall(1000, () => {
                                this.morte.setFrame(3)

                                this.time.delayedCall(1000, () => {
                                  this.morte.setFrame(4)

                                  this.time.delayedCall(1000, () => {
                                    this.morte.setFrame(5)

                                    this.time.delayedCall(1000, () => {
                                      this.morte.setFrame(6)

                                      this.time.delayedCall(1000, () => {
                                        this.morte.setFrame(7)

                                        this.time.delayedCall(1000, () => {
                                          this.morte.setFrame(8)

                                          this.time.delayedCall(1000, () => {
                                            this.morte.setFrame(9)

                                            this.time.delayedCall(1000, () => {
                                              this.energia.setVisible(true)
                                              this.energia.setFrame(1)

                                              this.time.delayedCall(1000, () => {
                                                this.energia.setFrame(2)

                                                this.time.delayedCall(1000, () => {
                                                  this.energia.setFrame(3)

                                                  this.time.delayedCall(1000, () => {
                                                    this.energia.setFrame(4)
                                                    this.startMedoTimer()
                                                    this.medoFrame += 1
                                                    this.spritesheet.setFrame(this.medoFrame)

                                                    this.time.delayedCall(1000, () => {
                                                      this.energia.setFrame(5)

                                                      this.time.delayedCall(1000, () => {
                                                        this.energia.setFrame(6)

                                                        this.time.delayedCall(1000, () => {
                                                          this.energia.setFrame(7)

                                                          this.time.delayedCall(1000, () => {
                                                            this.energia.setFrame(8)

                                                            this.time.delayedCall(1000, () => {
                                                              this.energia.setFrame(9)

                                                              this.time.delayedCall(1000, () => {
                                                                this.conhecimento.setVisible(true)
                                                                this.conhecimento.setFrame(1)

                                                                this.time.delayedCall(1000, () => {
                                                                  this.conhecimento.setFrame(2)

                                                                  this.time.delayedCall(1000, () => {
                                                                    this.conhecimento.setFrame(3)

                                                                    this.time.delayedCall(1000, () => {
                                                                      this.conhecimento.setFrame(4)

                                                                      this.time.delayedCall(1000, () => {
                                                                        this.conhecimento.setFrame(5)

                                                                        this.time.delayedCall(1000, () => {
                                                                          this.conhecimento.setFrame(6)
                                                                          this.startMedoTimer()
                                                                          this.medoFrame += 1
                                                                          this.spritesheet.setFrame(this.medoFrame)

                                                                          this.time.delayedCall(1000, () => {
                                                                            this.conhecimento.setFrame(7)

                                                                            this.time.delayedCall(1000, () => {
                                                                              this.conhecimento.setFrame(8)

                                                                              this.time.delayedCall(1000, () => {
                                                                                this.conhecimento.setFrame(9)

                                                                                this.time.delayedCall(1000, () => {
                                                                                  const telaQuadrinho = this.add.image(400, 225, 'telaQuadrinho')
                                                                                    .setScrollFactor(0, 0)
                                                                                  const botaoX = this.add.image(765, 35, 'botaoX')
                                                                                    .setScrollFactor(0, 0)
                                                                                  telaCheia.setVisible(false)
                                                                                  botaoX.setInteractive()
                                                                                  botaoX.on('pointerdown', function () {
                                                                                    // Excluir a imagem quando clicada
                                                                                    telaQuadrinho.destroy()
                                                                                    botaoX.destroy()
                                                                                    telaCheia.setVisible(true)
                                                                                  }, this)
                                                                                    .setScrollFactor(0, 0)
                                                                                  const effect12 = this.sangue.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect13 = this.morte.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect14 = this.energia.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect15 = this.conhecimento.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect16 = this.medo.preFX.addShine(2, 0.5, 3, false)
                                                                                  this.medo.setVisible(true)

                                                                                  this.bloqueioSobe.disableBody(true, true)

                                                                                  this.bloqueioSobe1.enableBody(true, 1888, 4100, false, false)

                                                                                  this.bloqueioSobe2.disableBody(true, true)

                                                                                  this.time.delayedCall(1000, () => {
                                                                                    this.audioChuva.play()
                                                                                    this.audioChuva.loop = true
                                                                                  })
                                                                                })
                                                                              })
                                                                            })
                                                                          })
                                                                        })
                                                                      })
                                                                    })
                                                                  })
                                                                })
                                                              })
                                                            })
                                                          })
                                                        })
                                                      })
                                                    })
                                                  })
                                                })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
      .setScrollFactor(0, 0)

    this.botaofimdojogo = this.add.sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.audioPorta.play()
        this.cutsceneFinal123()
      })
      .setScrollFactor(0, 0)

    this.teleportes = this.physics.add.group()

    // teleporte, x e y com key
    this.criarTeleporte(1512, 932, 'HalltoC1')
    this.criarTeleporte(2072, 948, 'C1toHall')

    this.criarTeleporte(3336, 936, 'C1toC2')
    this.criarTeleporte(3832, 948, 'C2toC1')

    this.criarTeleporte(4078, 820, 'C2toCobra')
    this.criarTeleporte(1453, 2471, 'CobratoC2')

    this.criarTeleporte(4940, 936, 'C2toC3')
    this.criarTeleporte(2424, 2604, 'C3toC2')

    this.criarTeleporte(3278, 2484, 'C3tolab')
    this.criarTeleporte(4305, 5416, 'labtoC3')

    this.criarTeleporte(1864, 4100, 'HallDtoC1')

    this.criarTeleporte(1082, 3816, 'HallDtoSecret')
    this.criarTeleporte(972, 5748, 'SecrettoHallD')

    this.criarTeleporte(3278, 2484, 'C3tolab')
    this.criarTeleporte(4305, 5416, 'labtoC3')

    // botão oculto
    this.BotãoInt.setVisible(false)
    this.BotãoInt1.setVisible(false)
    this.BotãoInt2.setVisible(false)
    this.BotãoInt3.setVisible(false)
    this.BotãoInt4.setVisible(false)

    this.anims.create({
      key: 'olhoPiscando',
      frames: this.anims.generateFrameNumbers('olhoPiscando', {
        start: 0,
        end: 12
      }),
      frameRate: 5,
      repeat: -1
    })

    this.olhoPiscando.anims.play('olhoPiscando')

    this.anims.create({
      key: 'personagem-frente',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 4
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 5,
        end: 10
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-direita',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 11,
        end: 16
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-costa',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 17,
        end: 22
      }),
      frameRate: 4,
      repeat: -1
    })

    /* livro */

    this.anims.create({
      key: 'livro',
      frames: this.anims.generateFrameNumbers('livroCobraT', {
        start: 0,
        end: 4
      }),
      frameRate: 0,
      repeat: 0
    })

    /* Animação dos Personagens IDLE */

    this.anims.create({
      key: 'personagem-idle-frente',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 23,
        end: 23
      }),
      frameRate: 0,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 24,
        end: 24
      }),
      frameRate: 0,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-direita',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 25,
        end: 25
      }),
      frameRate: 0,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-costa',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 26,
        end: 26
      }),
      frameRate: 0,
      repeat: -1
    })

    // Barra de Medo

    this.anims.create({
      key: 'medo',
      frames: this.anims.generateFrameNumbers('barraMedo', {
        start: 0,
        end: 3
      }),
      frameRate: 4,
      repeat: 0
    })

    // Configuração do joystick para 8 direções

    this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
      x: 90,
      y: 375,
      radius: 70,
      base: this.add.circle(0, 0, 50, 0x790000, 60),
      thumb: this.add.circle(0, 0, 25, 0xcccccc, 19),
      dir: '8dir', // configuração para 8 direções
      forceMin: 16
    }).on('pointerup', () => {
      this.personagem.setVelocity(0, 0) // parar o personagem quando o joystick é solto
    })

    /* Colisões por camada */
    this.chao.setCollisionByProperty({ colisao: true })
    this.Cchao.setCollisionByProperty({ colisao: true })
    this.CnaCchao.setCollisionByProperty({ colisao: true })
    this.moveis.setCollisionByProperty({ colisao: true })
    this.Cmoveis.setCollisionByProperty({ colisao: true })
    this.Cparede.setCollisionByProperty({ colisao: true })

    /* Colisão entre personagem 1 e mapa (por layer) */
    this.physics.add.collider(this.personagem, this.chao, null, null, this)
    this.physics.add.collider(this.personagem, this.Cchao, null, null, this)
    this.physics.add.collider(this.personagem, this.CnaCchao, null, null, this)
    this.physics.add.collider(this.personagem, this.moveis, null, null, this)
    this.physics.add.collider(this.personagem, this.Cmoveis, null, null, this)
    this.physics.add.collider(this.personagem, this.Cparede, null, null, this)

    /* Colisão com os limites da cena */
    this.personagem.setCollideWorldBounds(true)

    /* Cena (1920x1920) maior que a tela (80x450) */
    this.cameras.main.setBounds(0, 0, 22912, 10240)
    this.physics.world.setBounds(0, 0, 22912, 10240)
    this.cameras.main.startFollow(this.personagem)

    this.game.socket.on('estado-notificar', ({ cena, x, y, frame }) => {
      this.personagemRemoto.x = x
      this.personagemRemoto.y = y
      this.personagemRemoto.setFrame(frame)
    })

    this.physics.add.collider(this.personagem, this.bloqueioSobe)
    this.physics.add.collider(this.personagem, this.bloqueioSobe1)
    this.physics.add.collider(this.personagem, this.bloqueioSobe2)
    this.physics.add.collider(this.personagem, this.portaVerdeSobe)
    this.physics.add.collider(this.personagem, this.portaVerdeSobe1)
    this.physics.add.collider(this.personagem, this.portaLaranjaSobe)
    this.physics.add.collider(this.personagem, this.portaLaranjaSobe1)
    this.physics.add.collider(this.personagem, this.portaAzulSobe)
    this.physics.add.collider(this.personagem, this.portaAzulSobe1)
    this.physics.add.collider(this.personagem, this.portaRosaSobe)
    this.physics.add.collider(this.personagem, this.fonteEnigma)

    this.game.socket.on('artefatos-notificar', (artefatos) => {
      if (artefatos.alavancaRosa) {
        this.botaoIntCobra1.destroy()
        this.botaoIntCobra2.destroy()
        this.botaoIntCobra3.destroy()
        this.botaoIntCobra4.destroy()
        this.botaoIntCobra5.destroy()
        this.validacao = 1
        this.BotãoInt4.setInteractive()
        this.audioCobra.play()
        const effect17 = this.alavancaRosa.preFX.addShine(2, 0.5, 3, false)
        funcaobot4.call(this)
        console.log('poggers')
      }
    })
    this.game.socket.on('artefatos-notificar', (artefatos) => {
      if (artefatos.portaRosa) {
        this.portaRosaSobe.destroy()
        this.alavancaRosa.setFrame(0)
        this.BotãoInt4.destroy()
        console.log('Alavanca state atual %d', alavancaState)
      }
    })
    this.game.socket.on('artefatos-notificar', (artefatos) => {
      if (artefatos.portaVermelha) {
        this.alavancaVermelho.setFrame(0)
        alavancaState3 = 1
        this.BotãoInt3.destroy()
        this.time.delayedCall(2000, () => {
          this.audioMonstro.play()
        })
        this.time.delayedCall(3000, () => {
          this.audioAlavanca.play()
          this.audioVidro.play()
          this.audioParede.play()
          this.audioCaindo.play()
          this.criarTeleporte(2075, 948, 'C1toHallD', {
            if () {
              this.audioRespirando.play()
            }
          })
        })
      }
    })
    this.game.socket.on('artefatos-notificar', (artefatos) => {
      if (artefatos.fontePressionada) {
        this.audioLivro.play()
        this.musicaFoda.play()
        this.botaoFonte.destroy()
        this.audioChuva.stop()

        this.bloqueioSobe.enableBody(true, 972, 5780, false, false)

        this.time.delayedCall(8500, () => {
          this.sangue.setVisible(true)
          this.sangue.setFrame(1)

          this.time.delayedCall(1000, () => {
            this.sangue.setFrame(2)

            this.time.delayedCall(1000, () => {
              this.sangue.setFrame(3)

              this.time.delayedCall(1000, () => {
                this.sangue.setFrame(4)

                this.time.delayedCall(1000, () => {
                  this.sangue.setFrame(5)

                  this.time.delayedCall(1000, () => {
                    this.sangue.setFrame(6)

                    this.time.delayedCall(1000, () => {
                      this.sangue.setFrame(7)

                      this.time.delayedCall(1000, () => {
                        this.sangue.setFrame(8)

                        this.time.delayedCall(1000, () => {
                          this.sangue.setFrame(9)

                          this.time.delayedCall(1000, () => {
                            this.morte.setVisible(true)
                            this.morte.setFrame(1)

                            this.time.delayedCall(1000, () => {
                              this.morte.setFrame(2)
                              this.startMedoTimer()
                              this.medoFrame += 1
                              this.spritesheet.setFrame(this.medoFrame)

                              this.time.delayedCall(1000, () => {
                                this.morte.setFrame(3)

                                this.time.delayedCall(1000, () => {
                                  this.morte.setFrame(4)

                                  this.time.delayedCall(1000, () => {
                                    this.morte.setFrame(5)

                                    this.time.delayedCall(1000, () => {
                                      this.morte.setFrame(6)

                                      this.time.delayedCall(1000, () => {
                                        this.morte.setFrame(7)

                                        this.time.delayedCall(1000, () => {
                                          this.morte.setFrame(8)

                                          this.time.delayedCall(1000, () => {
                                            this.morte.setFrame(9)

                                            this.time.delayedCall(1000, () => {
                                              this.energia.setVisible(true)
                                              this.energia.setFrame(1)

                                              this.time.delayedCall(1000, () => {
                                                this.energia.setFrame(2)

                                                this.time.delayedCall(1000, () => {
                                                  this.energia.setFrame(3)

                                                  this.time.delayedCall(1000, () => {
                                                    this.energia.setFrame(4)
                                                    this.startMedoTimer()
                                                    this.medoFrame += 1
                                                    this.spritesheet.setFrame(this.medoFrame)

                                                    this.time.delayedCall(1000, () => {
                                                      this.energia.setFrame(5)

                                                      this.time.delayedCall(1000, () => {
                                                        this.energia.setFrame(6)

                                                        this.time.delayedCall(1000, () => {
                                                          this.energia.setFrame(7)

                                                          this.time.delayedCall(1000, () => {
                                                            this.energia.setFrame(8)

                                                            this.time.delayedCall(1000, () => {
                                                              this.energia.setFrame(9)

                                                              this.time.delayedCall(1000, () => {
                                                                this.conhecimento.setVisible(true)
                                                                this.conhecimento.setFrame(1)

                                                                this.time.delayedCall(1000, () => {
                                                                  this.conhecimento.setFrame(2)

                                                                  this.time.delayedCall(1000, () => {
                                                                    this.conhecimento.setFrame(3)

                                                                    this.time.delayedCall(1000, () => {
                                                                      this.conhecimento.setFrame(4)

                                                                      this.time.delayedCall(1000, () => {
                                                                        this.conhecimento.setFrame(5)

                                                                        this.time.delayedCall(1000, () => {
                                                                          this.conhecimento.setFrame(6)
                                                                          this.startMedoTimer()
                                                                          this.medoFrame += 1
                                                                          this.spritesheet.setFrame(this.medoFrame)

                                                                          this.time.delayedCall(1000, () => {
                                                                            this.conhecimento.setFrame(7)

                                                                            this.time.delayedCall(1000, () => {
                                                                              this.conhecimento.setFrame(8)

                                                                              this.time.delayedCall(1000, () => {
                                                                                this.conhecimento.setFrame(9)

                                                                                this.time.delayedCall(1000, () => {
                                                                                  const telaQuadrinho = this.add.image(400, 225, 'telaQuadrinho')
                                                                                    .setScrollFactor(0, 0)
                                                                                  const botaoX = this.add.image(765, 35, 'botaoX')
                                                                                    .setScrollFactor(0, 0)
                                                                                  telaCheia.setVisible(false)
                                                                                  botaoX.setInteractive()
                                                                                  botaoX.on('pointerdown', function () {
                                                                                    // Excluir a imagem quando clicada
                                                                                    telaQuadrinho.destroy()
                                                                                    botaoX.destroy()
                                                                                    telaCheia.setVisible(true)
                                                                                  }, this)
                                                                                    .setScrollFactor(0, 0)
                                                                                  const effect12 = this.sangue.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect13 = this.morte.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect14 = this.energia.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect15 = this.conhecimento.preFX.addShine(2, 0.5, 3, false)
                                                                                  const effect16 = this.medo.preFX.addShine(2, 0.5, 3, false)
                                                                                  this.medo.setVisible(true)

                                                                                  this.bloqueioSobe.disableBody(true, true)

                                                                                  this.bloqueioSobe1.enableBody(true, 1888, 4100, false, false)

                                                                                  this.bloqueioSobe2.disableBody(true, true)

                                                                                  this.time.delayedCall(1000, () => {
                                                                                    this.audioChuva.play()
                                                                                    this.audioChuva.loop = true
                                                                                  })
                                                                                })
                                                                              })
                                                                            })
                                                                          })
                                                                        })
                                                                      })
                                                                    })
                                                                  })
                                                                })
                                                              })
                                                            })
                                                          })
                                                        })
                                                      })
                                                    })
                                                  })
                                                })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
          .setScrollFactor(0, 0)
      }
    })
  }

  update () {
    const cursorKeys = this.joystick.createCursorKeys()

    if (cursorKeys) {
      // defina a velocidade do personagem com base nas teclas pressionadas
      const speed = 150 // velocidade do personagem
      let velocityX = 0
      let velocityY = 0

      if (cursorKeys.up.isDown) {
        velocityY = -speed
        this.animationKey = 'personagem-costa'
      } else if (cursorKeys.down.isDown) {
        velocityY = speed
        this.animationKey = 'personagem-frente'
      }

      if (cursorKeys.left.isDown) {
        velocityX = -speed
        this.animationKey = 'personagem-esquerda'
      } else if (cursorKeys.right.isDown) {
        velocityX = speed
        this.animationKey = 'personagem-direita'
      }

      // Verifique se o personagem está parado
      if (velocityX === 0 && velocityY === 0) {
        // personagem parado, determine a animação de "idle" com base na direção em que ele andava
        if (this.animationKey === 'personagem-direita') {
          this.animationKey = 'personagem-idle-direita'
        } else if (this.animationKey === 'personagem-esquerda') {
          this.animationKey = 'personagem-idle-esquerda'
        } else if (this.animationKey === 'personagem-frente') {
          this.animationKey = 'personagem-idle-frente'
        } else if (this.animationKey === 'personagem-costa') {
          this.animationKey = 'personagem-idle-costa'
        }
      }

      // (idle) de frente por padrão
      if (!this.animationKey) {
        this.animationKey = 'personagem-idle-frente'
      }

      this.personagem.anims.play(this.animationKey, true)

      // normalizar a velocidade nas diagonais para evitar movimento mais rápido (chatgpt)
      if (velocityX !== 0 && velocityY !== 0) {
        velocityX *= Math.sqrt(0.5)
        velocityY *= Math.sqrt(0.5)
      }

      this.personagem.setVelocity(velocityX, velocityY)
    }

    try {
      this.game.socket.emit('estado-publicar', this.game.sala, {
        cena: 'personagem',
        x: this.personagem.x,
        y: this.personagem.y,
        frame: this.personagem.frame.name
      })
    } catch (error) {
      console.error(error)
    }

    // Verifica a sobreposição entre o personagem e o alavancaVerdeCollider
    const isOverlapping = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.alavancaVerdeCollider.getBounds()
    )

    if (isOverlapping) {
      this.BotãoInt.setVisible(true)
    } else {
      this.BotãoInt.setVisible(false)
    }

    const isOverlapping1 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.alavancaLaranjaCollider.getBounds()
    )

    if (isOverlapping1) {
      this.BotãoInt1.setVisible(true)
    } else {
      this.BotãoInt1.setVisible(false)
    }

    const isOverlapping2 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.alavancaAzulCollider.getBounds()
    )

    if (isOverlapping2) {
      this.BotãoInt2.setVisible(true)
    } else {
      this.BotãoInt2.setVisible(false)
    }

    const isOverlapping3 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.alavancaVermelhoCollider.getBounds()
    )

    if (isOverlapping3) {
      this.BotãoInt3.setVisible(true)
    } else {
      this.BotãoInt3.setVisible(false)
    }

    const isOverlapping4 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.alavancaRosaCollider.getBounds()
    )

    if (isOverlapping4 && this.validacao === 1) {
      this.BotãoInt4.setVisible(true)
    } else {
      this.BotãoInt4.setVisible(false)
    }

    // Puzzle Cobra

    const botaoCobra1 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.botaoCobra1Collider.getBounds()
    )

    if (botaoCobra1) {
      this.botaoIntCobra1.setVisible(true)
    } else {
      this.botaoIntCobra1.setVisible(false)
    }

    const botaoCobra2 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.botaoCobra2Collider.getBounds()
    )

    if (botaoCobra2) {
      this.botaoIntCobra2.setVisible(true)
    } else {
      this.botaoIntCobra2.setVisible(false)
    }

    const botaoCobra3 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.botaoCobra3Collider.getBounds()
    )

    if (botaoCobra3) {
      this.botaoIntCobra3.setVisible(true)
    } else {
      this.botaoIntCobra3.setVisible(false)
    }

    const botaoCobra4 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.botaoCobra4Collider.getBounds()
    )

    if (botaoCobra4) {
      this.botaoIntCobra4.setVisible(true)
    } else {
      this.botaoIntCobra4.setVisible(false)
    }

    const botaoCobra5 = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.botaoCobra5Collider.getBounds()
    )

    if (botaoCobra5) {
      this.botaoIntCobra5.setVisible(true)
    } else {
      this.botaoIntCobra5.setVisible(false)
    }

    // Objetos

    const livro = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.livroCollider.getBounds()
    )

    if (livro) {
      this.botaoLivro.setVisible(true)
    } else {
      this.botaoLivro.setVisible(false)
    }

    const mapaMesa = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.mapaMesaCollider.getBounds()
    )

    if (mapaMesa) {
      this.botaoMesa.setVisible(true)
    } else {
      this.botaoMesa.setVisible(false)
    }

    const fonteEnigma = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.fonteEnigmaCollider.getBounds()
    )

    if (fonteEnigma) {
      this.botaoFonte.setVisible(true)
    } else {
      this.botaoFonte.setVisible(false)
    }

    const fimdojogo = Phaser.Geom.Intersects.RectangleToRectangle(
      this.personagem.getBounds(),
      this.fimdojogoCollider.getBounds()
    )

    if (fimdojogo) {
      this.botaofimdojogo.setVisible(true)
    } else {
      this.botaofimdojogo.setVisible(false)
    }

    this.physics.world.overlap(this.personagem, this.teleportes, this.usarTeleporte, null, this)

    const sobreposicaoBalaoLivro = this.physics.world.overlap(this.personagem, this.balaoLivroCollider)
    if (sobreposicaoBalaoLivro && this.colisaoAtiva === 0) {
      this.balaoLivro.setVisible(true)
      console.log('aaa')
      this.colisaoAtiva = 1
    } else if (!sobreposicaoBalaoLivro) {
      this.balaoLivro.setVisible(false)
      this.colisaoAtiva = 0
    }

    // Para o balaoMapa
    const sobreposicaoBalaoMapa = this.physics.world.overlap(this.personagem, this.balaoMapaCollider)
    if (sobreposicaoBalaoMapa && this.colisaoAtiva === 0) {
      this.balaoMapa.setVisible(true)
      console.log('aaa')
      this.colisaoAtiva = 1
    } else if (!sobreposicaoBalaoMapa) {
      this.balaoMapa.setVisible(false)
      this.colisaoAtiva = 0
    }
  }

  // Função para criar um teleporte
  criarTeleporte (x, y, key) {
    const teleporte = this.physics.add.image(x, y, 'fundo')
      .setOrigin(0.5, 0.5)
      .setAlpha(0)
      .setDepth(-1)
    this.teleportes.add(teleporte)
    teleporte.setData('key', key)
  }

  usarTeleporte (personagem, teleporte) {
    const key = teleporte.getData('key')
    switch (key) {
      case 'HalltoC1':
        this.teleportarParaDestino(2102, 948)
        break
      case 'C1toHall':
        this.teleportarParaDestino(1482, 932)
        break
      case 'C1toC2':
        this.teleportarParaDestino(3870, 948)
        break
      case 'C2toC1':
        this.teleportarParaDestino(3291, 936)
        break

      case 'C2toCobra':
        this.teleportarParaDestino(1456, 2402)
        this.audioPorta.play()
        break
      case 'CobratoC2':
        this.teleportarParaDestino(4078, 870)
        this.audioPorta.play()
        break

      case 'C2toC3':
        this.teleportarParaDestino(2464, 2604)
        break
      case 'C3toC2':
        this.teleportarParaDestino(4906, 936)
        break

      case 'C3tolab':
        this.teleportarParaDestino(4305, 5325)
        this.audioPorta.play()
        // this.cameras.main.setZoom(1.5)
        break
      case 'labtoC3':
        this.teleportarParaDestino(3278, 2564)
        this.audioPorta.play()
        // this.cameras.main.setZoom(1)
        break

      case 'HallDtoC1':
        this.teleportarParaDestino(2102, 948)
        break
      case 'C1toHallD':
        this.teleportarParaDestino(1823, 4096)
        this.audioRespirando.play()
        break

      case 'HallDtoSecret':
        this.teleportarParaDestino(972, 5688)
        break
      case 'SecrettoHallD':
        this.teleportarParaDestino(1082, 3871)
        break
    }
  }

  teleportarParaDestino (x, y) {
    this.personagem.setPosition(x, y)
  }

  startMedoTimer () {
    if (this.medoTimer != null) {
      this.medoTimer.remove(false)
    }
    this.medoTimer = this.time.addEvent({
      delay: 20000, // 20000 milissegundos = 20 segundos
      callback: this.decreaseMedo,
      callbackScope: this,
      repeat: -1
    })
    this.audioCoracao.play()
    this.audioCoracao.loop = true
  }

  decreaseMedo () {
    if (this.medoFrame > 0) {
      this.medoFrame -= 1
      this.spritesheet.setFrame(this.medoFrame)
      if (this.medoFrame === 0) {
        this.medoTimer.remove(false)
      }
      this.audioCoracao.stop()
    }
  }

  onCollideMonster (personagem, botaoinvisivelH) {
    if (this.medoFrame === 3) {
      this.gameOver()
    } else {
      this.startMedoTimer()
      this.medoFrame += 1
      this.spritesheet.setFrame(this.medoFrame)
      const angle = Phaser.Math.Angle.Between(botaoinvisivelH.x, botaoinvisivelH.y, personagem.x, personagem.y)
      const distance = 100 // distancia que é empurrado
      const velocityX = Math.cos(angle) * distance
      const velocityY = Math.sin(angle) * distance

      // Atualize a posição do personagem com base no ângulo e na distância (CHATGPT)
      personagem.x += velocityX
      personagem.y += velocityY
    }
  }

  gameOver () {
    this.game.scene.stop('personagem')
    this.game.scene.start('gameOver')
  }

  cutsceneFinal123 () {
    this.audioChuva.stop()
    this.game.scene.stop('personagem')
    this.game.scene.start('cutsceneFinal1')
  }
}
