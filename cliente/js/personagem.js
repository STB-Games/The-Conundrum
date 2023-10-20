export default class personagem extends Phaser.Scene {
  constructor () {
    super('personagem')

    this.animationKey = undefined
  }

  preload () {
    this.load.plugin('rexvirtualjoystickplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true)
    this.load.spritesheet('fundo', '../assets/fundocinza.png', {
      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('monster', '../assets/personagem/botaoinvisivelH.png')

    /* Sabrina Torres */

    this.load.spritesheet('Sabrina', '../assets/Menina/SabrinaTorres')

    /* Personagem Andando (Masculino) */

    this.load.spritesheet('CalvoFrente', '../assets/Calvo/Calvo_Frente.png', {
      frameWidth: 64,
      frameHeight: 64

    })

    this.load.spritesheet('CalvoDireita', '../assets/Calvo/Calvo_Direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('CalvoCosta', '../assets/Calvo/Calvo_Costa.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('CalvoEsquerdo', '../assets/Calvo/Calvo_Esquerdo.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /* Personagem Idle (MASCULINO) */

    this.load.spritesheet('CalvoIdleF', '../assets/Calvo/CalvoIdleF.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('CalvoIdleD', '../assets/Calvo/CalvoIdleD.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('CalvoIdleC', '../assets/Calvo/CalvoIdleC.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('CalvoIdleE', '../assets/Calvo/CalvoIdleE.png', {
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

    this.load.spritesheet('MeninaFrente', '../assets/Menina/Menina_Frente.png', {
      frameWidth: 64,
      frameHeight: 64

    })

    this.load.spritesheet('MeninaDireita', '../assets/Menina/Menina_Direita.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('MeninaCosta', '../assets/Menina/Menina_Costa.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('MeninaEsquerda', '../assets/Menina/Menina_Esquerda.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    /* Personagem Idle (FEMININO) */

    this.load.spritesheet('MeninaIdleF', '../assets/Menina/MeninaIdleF.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('MeninaIdleD', '../assets/Menina/MeninaIdleD.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('MeninaIdleC', '../assets/Menina/MeninaIdleC.png', {
      frameWidth: 64,
      frameHeight: 64
    })

    this.load.spritesheet('MeninaIdleE', '../assets/Menina/MeninaIdleE.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    this.abertura = this.add.sprite(400, 225, 'fundo')

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

    /* Colisão */

    if (this.game.jogadores.primeiro === this.game.socket.id) {
      this.local = 'CalvoFrente'
      this.remoto = 'SabrinaTorres'
      this.personagem = this.physics.add.sprite(650, 50, this.local, 1)
      this.personagemRemoto = this.add.sprite(350, 50, this.remoto, 1)
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
      this.local = 'SabrinaTorres'
      this.remoto = 'CalvoFrente'
      this.personagemRemoto = this.add.sprite(350, 50, this.remoto, 1)
      this.personagem = this.physics.add.sprite(650, 50, this.local, 1)
    }
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

    this.physics.add.collider(this.personagem, this.botaoinvisivelH, () => {
      this.gameover()
    })

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
      key: 'personagem-costa',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-direita',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    /* Animação dos Personagens IDLE */

    this.anims.create({
      key: 'personagem-idle-frente',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-costa',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-direita',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

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
      key: 'personagem-costa',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-direita',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-frente',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-direita',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-esquerda',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'personagem-idle-costa',
      frames: this.anims.generateFrameNumbers(this.local, {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
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

    this.game.socket.emit('estado-notificar', ({ cena, x, y, frame }) => { })
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

  gameover () {
    this.game.scene.stop('personagem')
    this.game.scene.start('gameover')
  }
}
