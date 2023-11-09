export default class menina extends Phaser.Scene {
  constructor () {
    super('menina')

    this.animationKey = undefined
    this.monsterTouches = 0 // Variável para rastrear quantas vezes o "monstro" foi tocado
  }

  preload () {
    // Joystick

    this.load.plugin('rexvirtualjoystickplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true)

    // Fundo

    this.load.spritesheet('fundo', '../assets/mapaTROLL.png', {
      frameWidth: 800,
      frameHeight: 450
    })

    // Medo

    this.load.spritesheet('barraMedo', '../assets/barraMedo.png', {
      frameWidth: 190,
      frameHeight: 60
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

    this.load.spritesheet('cima', '../assets/botoes/cima.png', {
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
    this.abertura = this.add.sprite(400, 225, 'fundo')

    // Medo no canto superior esquerdo

    this.spritesheet = this.add.sprite(110, 38, 'barraMedo')

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
    this.startMedoTimer()

    /* Colisão */

    if (this.game.jogadores.primeiro === this.game.socket.id) {
      this.local = 'Rodrigo'
      this.remoto = 'Sabrina'
      this.personagem = this.physics.add.sprite(650, 50, this.local, 1)
      this.personagemRemoto = this.add.sprite(350, 50, this.remoto, 1)
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
      this.local = 'Sabrina'
      this.remoto = 'Rodrigo'
      this.personagemRemoto = this.add.sprite(650, 50, this.remoto, 1)
      this.personagem = this.physics.add.sprite(350, 50, this.local, 1)

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

    this.game.socket.on('estado-notificar', ({ cena, x, y, frame }) => {
      this.personagemRemoto.x = x
      this.personagemRemoto.y = y
      this.personagemRemoto.setFrame(frame)
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
  }

  startMedoTimer () {
    this.medoTimer = this.time.addEvent({
      delay: 2000, // 10000 milissegundos = 10 segundos
      callback: this.decreaseMedo,
      callbackScope: this,
      repeat: -1
    })
  }

  decreaseMedo () {
    if (this.medoFrame > 0) {
      this.medoFrame -= 1
      this.monsterTouches -= 1
      this.spritesheet.setFrame(this.medoFrame)

      if (this.medoFrame === 0) {
        // se o nível de medo chegar a 0,temporizador encerra
        this.medoTimer.remove(false)
      }
    }
  }

  onCollideMonster (personagem, botaoinvisivelH) {
    // se ja foi tocado 3 vezes, na proxima vez que tocar, chamar o gameover
    if (this.monsterTouches === 3) {
      this.medoFrame = 4
      this.spritesheet.setFrame(this.medoFrame)
      this.gameOver()
    } else {
      // caso ele nao tenha sido tocado 3 vezes ainda,
      this.monsterTouches += 1

      // aumentar o frame do medo
      this.medoFrame += 1

      // frame att
      this.spritesheet.setFrame(this.medoFrame)

      // Empurre o personagem para longe do "monstro" (CHATGPT)
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
    this.game.scene.stop('menina')
    this.game.scene.start('gameOver')
  }
}
