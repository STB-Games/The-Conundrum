export default class personagem extends Phaser.Scene {
  constructor () {
    super('personagem')

    this.animationKey = undefined
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

    // Fundo

    this.load.spritesheet('fundo', '../assets/mapaTROLL.png', {
      frameWidth: 32,
      frameHeight: 32
    })

    // Medo

    this.load.spritesheet('barraMedo', '../assets/barraMedo.png', {
      frameWidth: 190,
      frameHeight: 60
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

    // EndGame

    this.load.image('monster', '../assets/personagem/botaoinvisivelH.png')

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

    /* Botões */

    this.load.spritesheet('direita', '../assets/botoes/direita.png', {
      frameWidth: 64,
      frameHeight: 64
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
  }

  create () {
    /* Tilemap */
    this.mapa = this.make.tilemap({
      key: 'Mansao'
    })

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

    // Medo no canto superior esquerdo

    this.spritesheet = this.add.sprite(110, 38, 'barraMedo')
      .setScrollFactor(0, 0)

    // Invisivel

    this.objetoInvisivel = this.physics.add.image(2000, 2000, 'transparente')
    this.objetoInvisivel.body.setImmovable(true)
    this.objetoInvisivel.setVisible(false)
    const hitboxWidthInvisivel = 32 // Ajuste conforme necessário
    const hitboxHeightInvisivel = 128 // Ajuste conforme necessário
    this.objetoInvisivel.setSize(hitboxWidthInvisivel, hitboxHeightInvisivel, true)

    this.objetoInvisivel1 = this.physics.add.image(2000, 2000, 'transparente')
    this.objetoInvisivel1.body.setImmovable(true)
    this.objetoInvisivel1.setVisible(false)
    const hitboxWidthInvisivel1 = 128 // Ajuste conforme necessário
    const hitboxHeightInvisivel1 = 32 // Ajuste conforme necessário
    this.objetoInvisivel1.setSize(hitboxWidthInvisivel1, hitboxHeightInvisivel1, true)

    // PORTA

    this.portaVerdeSobe = this.physics.add.image(5106, 4833, 'portaVerdeSobe')
    this.portaVerdeSobe.body.setAllowGravity(true)
    this.portaVerdeSobe.setImmovable(true)

    this.portaVerdeSobe1 = this.physics.add.image(2300, 6100, 'portaVerdeSobe')
    this.portaVerdeSobe1.body.setAllowGravity(true)
    this.portaVerdeSobe1.setImmovable(true)

    this.portaLaranjaSobe = this.physics.add.image(4148, 3893, 'portaLaranjaSobe')
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

    // ALAVANCA

    this.alavancaVerde = this.add.sprite(3116, 4904, 'alavancaVerde', 1)
    this.alavancaVerdeCollider = this.add.rectangle(3116, 4944, 20, 20, 0x000000, 1) // O retângulo invisível que corresponde ao alavancaVerde
    this.physics.world.enable(this.alavancaVerdeCollider) // Habilita a física para o retângulo
    this.alavancaVerdeCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.alavancaLaranja = this.add.sprite(4924, 4924, 'alavancaLaranja', 1)
    this.alavancaLaranjaCollider = this.add.rectangle(4924, 4964, 20, 20, 0x000000, 1) // O retângulo invisível que corresponde ao alavancaLaranja
    this.physics.world.enable(this.alavancaLaranjaCollider) // Habilita a física para o retângulo
    this.alavancaLaranjaCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.alavancaAzul = this.add.sprite(3477, 5480, 'alavancaAzul', 1)
    this.alavancaAzulCollider = this.add.rectangle(3477, 5520, 20, 20, 0x000000, 1) // O retângulo invisível que corresponde ao alavancaAzul
    this.physics.world.enable(this.alavancaAzulCollider) // Habilita a física para o retângulo
    this.alavancaAzulCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    this.alavancaVermelho = this.add.sprite(3747, 4286, 'alavancaVermelho', 1)
    this.alavancaVermelhoCollider = this.add.rectangle(3747, 4326, 20, 20, 0x000000, 1) // O retângulo invisível que corresponde ao alavancaVermelho
    this.physics.world.enable(this.alavancaVermelhoCollider) // Habilita a física para o retângulo
    this.alavancaVermelhoCollider.body.setAllowGravity(false) // Não permita que a gravidade afete o retângulo

    /* Full Screen */

    this.tela_cheia = this.add
      .sprite(770, 30, 'tela-cheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.tela_cheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.tela_cheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)

    /* Animação */

    /* Personagem */

    // Variável para rastrear o frame da barra de medo
    this.medoFrame = 0

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

    this.botaoinvisivelH = this.physics.add.image(750, 225, 'monster')
    this.botaoinvisivelH.setCollideWorldBounds(true)
    this.botaoinvisivelH.body.setImmovable(true)

    this.physics.add.collider(this.personagem, this.botaoinvisivelH, this.onCollideMonster, null, this)

    /* Animação dos Personagens */

    let alavancaState = 1

    this.BotãoInt = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (alavancaState === 0) {
          this.alavancaVerde.setFrame(1)
          alavancaState = 1
          this.portaVerdeSobe.x = 5106
          this.portaVerdeSobe.y = 4833
          this.portaVerdeSobe1.x = 2300
          this.portaVerdeSobe1.y = 6100
        } else {
          this.alavancaVerde.setFrame(0)
          alavancaState = 0
          this.portaVerdeSobe.x = 2300
          this.portaVerdeSobe.y = 6100
          this.portaVerdeSobe1.x = 3247
          this.portaVerdeSobe1.y = 4824
        }
      })

      .setScrollFactor(0, 0)

    this.BotãoInt1 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (alavancaState === 0) {
          this.alavancaLaranja.setFrame(1)
          alavancaState = 1
          this.portaLaranjaSobe.x = 4148
          this.portaLaranjaSobe.y = 3893
          this.portaLaranjaSobe1.x = 2300
          this.portaLaranjaSobe1.y = 6100
        } else {
          this.alavancaLaranja.setFrame(0)
          alavancaState = 0
          this.portaLaranjaSobe.x = 2300
          this.portaLaranjaSobe.y = 6100
          this.portaLaranjaSobe1.x = 5105
          this.portaLaranjaSobe1.y = 4490
        }
      })

      .setScrollFactor(0, 0)

    this.BotãoInt2 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (alavancaState === 0) {
          this.alavancaAzul.setFrame(1)
          alavancaState = 1
          this.portaAzulSobe.x = 3632
          this.portaAzulSobe.y = 5136
          this.portaAzulSobe1.x = 2300
          this.portaAzulSobe1.y = 6100
        } else {
          this.alavancaAzul.setFrame(0)
          alavancaState = 0
          this.portaAzulSobe.x = 2300
          this.portaAzulSobe.y = 6100
          this.portaAzulSobe1.x = 4592
          this.portaAzulSobe1.y = 4920
        }
      })

      .setScrollFactor(0, 0)

    this.BotãoInt3 = this.add
      .sprite(735, 400, 'interacao', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.medoFrame === 3) {
          this.gameOver()
        } else {
          this.startMedoTimer()
          this.medoFrame += 1
          this.spritesheet.setFrame(this.medoFrame)
        }
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
      x: 75,
      y: 375,
      radius: 70,
      base: this.add.circle(0, 0, 50, 0x888888),
      thumb: this.add.circle(0, 0, 25, 0xcccccc),
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

    /* Cena (1920x1920) maior que a tela (800x450) */
    this.cameras.main.setBounds(0, 0, 22912, 10240)
    this.physics.world.setBounds(0, 0, 22912, 10240)
    this.cameras.main.startFollow(this.personagem)

    this.game.socket.on('estado-notificar', ({ cena, x, y, frame }) => {
      this.personagemRemoto.x = x
      this.personagemRemoto.y = y
      this.personagemRemoto.setFrame(frame)
    })

    this.physics.add.collider(this.personagem, this.portaVerdeSobe)
    this.physics.add.collider(this.personagem, this.portaVerdeSobe1)
    this.physics.add.collider(this.personagem, this.portaLaranjaSobe)
    this.physics.add.collider(this.personagem, this.portaLaranjaSobe1)
    this.physics.add.collider(this.personagem, this.portaAzulSobe)
    this.physics.add.collider(this.personagem, this.portaAzulSobe1)
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
        velocityX *= Math.sqrt(1.5)
        velocityY *= Math.sqrt(1.5)
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

    this.physics.world.overlap(this.personagem, this.teleportes, this.usarTeleporte, null, this)
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
        break
      case 'CobratoC2':
        this.teleportarParaDestino(4078, 870)
        break

      case 'C2toC3':
        this.teleportarParaDestino(2464, 2604)
        break
      case 'C3toC2':
        this.teleportarParaDestino(4906, 936)
        break

      case 'C3tolab':
        this.teleportarParaDestino(4305, 5331)
        this.cameras.main.setZoom(1.5)
        break
      case 'labtoC3':
        this.teleportarParaDestino(3278, 2564)
        this.cameras.main.setZoom(1)
        break

      case 'HallDtoC1':
        this.teleportarParaDestino(2102, 948)
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
      delay: 5000, // 10000 milissegundos = 10 segundos
      callback: this.decreaseMedo,
      callbackScope: this,
      repeat: -1
    })
  }

  decreaseMedo () {
    if (this.medoFrame > 0) {
      this.medoFrame -= 1
      this.spritesheet.setFrame(this.medoFrame)
      if (this.medoFrame === 0) {
        this.medoTimer.remove(false)
      }
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
}
