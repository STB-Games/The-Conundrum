export default class CenaResposta1 extends Phaser.Scene {
  constructor () {
    super('CenaResposta1')
  }

  preload () {
    this.load.image('fundobordaA', 'assets/fundobordaA.png')

    /* Full Screen */

    this.load.image('setaD', '../assets/botoes/setaD.png', {
      frameWidth: 48,
      frameHeight: 48
    })
    this.load.image('setaE', '../assets/botoes/setaE.png', {
      frameWidth: 48,
      frameHeight: 48
    })
    this.load.image('botaoBasilisco', '../assets/botaoc/botaoBasilisco.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.image('botaoCurupira', '../assets/botaoc/botaoCurupira.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.image('botaoBoitata', '../assets/botaoc/botaoBoitata.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.image('botaoMedusa', '../assets/botaoc/botaoMedusa.png', {
      frameWidth: 212,
      frameHeight: 45
    })
  }

  create () {
    const CutsceneFinal = this.add.image(400, 225, 'fundobordaA').setAlpha(0)

    const botaoMedusa = this.add.sprite(150, 250, 'botaoMedusa')
    botaoMedusa.on('pointerdown', () => {
      console.log('Botão Medusa clicado!')
      this.game.scene.stop('CenaResposta1')
      this.game.scene.start('personagem')
    })

    const botaoCurupira = this.add.sprite(450, 250, 'botaoCurupira')
    botaoCurupira.on('pointerdown', () => {
      console.log('Botão Curupira clicado!')
      this.game.scene.stop('CenaResposta1')
      this.game.scene.start('personagem')
    })

    const botaoBoitata = this.add.sprite(150, 350, 'botaoBoitata')
    botaoBoitata.on('pointerdown', () => {
      console.log('Botão Boitata clicado!')
      this.game.scene.stop('CenaResposta1')
      this.game.scene.start('personagem')
    })

    const botaoBasilisco = this.add.sprite(450, 350, 'botaoBasilisco')
    botaoBasilisco.on('pointerdown', () => {
      console.log('Botão Basilisco clicado!')
      this.game.scene.stop('CenaResposta1')
      this.game.scene.start('personagem')
    })

    this.anims.create({
      key: 'botaoMedusa',
      frames: this.anims.generateFrameNumbers('botaoMedusa', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'botaoBasilisco',
      frames: this.anims.generateFrameNumbers('botaoBasilisco', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'botaoBoitata',
      frames: this.anims.generateFrameNumbers('botaoBoitata', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'botaoCurupira',
      frames: this.anims.generateFrameNumbers('botaoCurupira', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })
  }
}
