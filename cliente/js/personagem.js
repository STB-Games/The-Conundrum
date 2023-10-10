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
      this.remoto = 'MeninaFrente'
      this.personagem = this.physics.add.sprite(650, 50, this.local, 1)
      this.personagemRemoto = this.add.sprite(350, 50, this.remoto, 1)
    } else if (this.game.jogadores.segundo === this.game.socket.id) {
      this.local = 'MeninaFrente'
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
      key: 'meninaf',
      frames: this.anims.generateFrameNumbers('MeninaFrente', {
        start: 0,
        end: 4
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'meninac',
      frames: this.anims.generateFrameNumbers('MeninaCosta', {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'meninae',
      frames: this.anims.generateFrameNumbers('MeninaEsquerda', {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'meninad',
      frames: this.anims.generateFrameNumbers('MeninaDireita', {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    /* Animação dos Personagens IDLE */

    this.anims.create({
      key: 'meninaidlef',
      frames: this.anims.generateFrameNumbers('MeninaIdleF', {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'meninaidlec',
      frames: this.anims.generateFrameNumbers('MeninaIdleC', {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'meninaidlee',
      frames: this.anims.generateFrameNumbers('MeninaIdleE', {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'meninaidled',
      frames: this.anims.generateFrameNumbers('MeninaIdleD', {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'caiof',
      frames: this.anims.generateFrameNumbers('CalvoFrente', {
        start: 0,
        end: 4
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'caioc',
      frames: this.anims.generateFrameNumbers('CalvoCosta', {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'caioe',
      frames: this.anims.generateFrameNumbers('CalvoEsquerdo', {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'caiod',
      frames: this.anims.generateFrameNumbers('CalvoDireita', {
        start: 0,
        end: 5
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'calvoidlef',
      frames: this.anims.generateFrameNumbers('CalvoIdleF', {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'calvoidled',
      frames: this.anims.generateFrameNumbers('CalvoIdleD', {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'calvoidlee',
      frames: this.anims.generateFrameNumbers('CalvoIdleE', {
        start: 0,
        end: 0
      }),
      frameRate: 4,
      repeat: -1
    })

    this.anims.create({
      key: 'calvoidlec',
      frames: this.anims.generateFrameNumbers('CalvoIdleC', {
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
        this.animationKey = 'caioc'
      } else if (cursorKeys.down.isDown) {
        velocityY = speed
        this.animationKey = 'caiof'
      }

      if (cursorKeys.left.isDown) {
        velocityX = -speed
        this.animationKey = 'caioe'
      } else if (cursorKeys.right.isDown) {
        velocityX = speed
        this.animationKey = 'caiod'
      }

      // Verifique se o personagem está parado
      if (velocityX === 0 && velocityY === 0) {
        // personagem parado, determine a animação de "idle" com base na direção em que ele andava
        if (this.animationKey === 'caiod') {
          this.animationKey = 'calvoidled'
        } else if (this.animationKey === 'caioe') {
          this.animationKey = 'calvoidlee'
        } else if (this.animationKey === 'caiof') {
          this.animationKey = 'calvoidlef'
        } else if (this.animationKey === 'caioc') {
          this.animationKey = 'calvoidlec'
        }
      }

      // (idle) de frente por padrão
      if (!this.animationKey) {
        this.animationKey = 'calvoidlef'
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
