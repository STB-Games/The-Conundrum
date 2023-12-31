export default class abertura extends Phaser.Scene {
  constructor () {
    super('abertura')
  }

  preload () {
    this.load.spritesheet('abertura', '../assets/CenaAbertura.png', {
      frameWidth: 800,
      frameHeight: 450
    })
    this.load.spritesheet('botaoinvisivelH', '../assets/botaoinvisivelH.png', {
      frameWidth: 135,
      frameHeight: 78
    })

    this.load.audio('musicaTema', '../assets/sons/musicaTema.mp3')

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })
  }

  create () {
    this.audioTema = this.sound.add('musicaTema')
    this.audioTema.play()

    this.abertura = this.add.sprite(400, 225, 'abertura')

    /* Abertura */

    this.anims.create({
      key: 'abertura',
      frames: this.anims.generateFrameNumbers('abertura', {
        start: 0,
        end: 42
      }),
      frameRate: 10,
      repeat: -1
    })

    this.abertura.anims.play('abertura')

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

    this.imagem = this.add
      .image(400, 360, 'botaoinvisivelH')
      .setInteractive()
      .on('pointerdown', () => {
        this.imagem.destroy()
        this.game.scene.stop('abertura')
        this.game.scene.start('sala')
      })
  }
}
