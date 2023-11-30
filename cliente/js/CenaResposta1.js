export default class CenaResposta1 extends Phaser.Scene {
  constructor () {
    super('CenaResposta1')
  }

  preload () {
    this.load.image('fundobordaA', './assets/fundobordaA.png')

    /* Full Screen */

    this.load.image('setaD', '../assets/botoes/setaD.png', {
      frameWidth: 48,
      frameHeight: 48
    })
    this.load.image('setaE', '../assets/botoes/setaE.png', {
      frameWidth: 48,
      frameHeight: 48
    })
    this.load.spritesheet('botaoBasilisco', '../assets/botaoc/botaoBasilisco.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.spritesheet('botaoCurupira', '../assets/botaoc/botaoCurupira.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.spritesheet('botaoBoitata', '../assets/botaoc/botaoBoitata.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.spritesheet('botaoMedusa', '../assets/botaoc/botaoMedusa.png', {
      frameWidth: 212,
      frameHeight: 45
    })
  }

  create () {
    const CutsceneFinal = this.add.image(400, 225, 'fundobordaA').setAlpha(0)

    const texto = 'A primeira lenda era a ...'

    this.mensagem = this.add.text(220, 55, texto, {
      fontFamily: 'Felipa',
      fontSize: 42 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2,
      wordWrap: {
        width: 800 - 200, // largura máxima
        useAdvancedWrap: true
      }
    })

    const botaoMedusa = this.add.sprite(200, 200, 'botaoMedusa')
      .setInteractive()
    botaoMedusa.on('pointerdown', () => {
      console.log('Botão Medusa clicado!')
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta1')
        this.game.scene.start('CenaResposta2')
      })
    })

    const botaoCurupira = this.add.sprite(600, 200, 'botaoCurupira')
      .setInteractive()
    botaoCurupira.on('pointerdown', () => {
      console.log('Botão Curupira clicado!')
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta1')
        this.game.scene.start('CenaResposta2')
      })
    })

    const botaoBoitata = this.add.sprite(200, 350, 'botaoBoitata')
      .setInteractive()
    botaoBoitata.on('pointerdown', () => {
      console.log('Botão Boitata clicado!')
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta1')
        this.game.scene.start('CenaResposta2')
      })
    })

    const botaoBasilisco = this.add.sprite(600, 350, 'botaoBasilisco')
      .setInteractive()
    botaoBasilisco.on('pointerdown', () => {
      console.log('Botão Basilisco clicado!')
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta1')
        this.game.scene.start('CenaResposta2')
      })
    })

    const dicaText = this.add.text(50, 30, 'Dica', {
      fontFamily: 'Felipa',
      fontSize: 24 + 'px',
      color: '#ffffff',
      padding: {
        x: 10,
        y: 5
      },
      visible: false
    })

    dicaText.setInteractive()
    dicaText.on('pointerdown', () => {
      cobraFogoText.visible = true
    })

    dicaText.on('pointerup', () => {
      cobraFogoText.visible = false
    })

    const cobraFogoText = this.add.text(25, 85, 'Cobra de Fogo', {
      fontFamily: 'Felipa',
      fontSize: 24 + 'px',
      color: '#ffffff',
      padding: {
        x: 10,
        y: 5
      },
      visible: false
    })
    cobraFogoText.visible = false

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

    const fadeIn = (target, duration, onComplete) => {
      this.tweens.add({
        targets: target,
        alpha: 1,
        duration,
        onComplete
      })
    }

    const fadeOut = (target, duration, onComplete) => {
      this.tweens.add({
        targets: target,
        alpha: 0,
        duration,
        onComplete
      })
    }

    // iniciar a cena com o Fade In para 'cutscene2img'
    fadeIn(CutsceneFinal, 1000)
  }
}
