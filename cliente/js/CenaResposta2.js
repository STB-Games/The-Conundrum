export default class CenaResposta2 extends Phaser.Scene {
  constructor () {
    super('CenaResposta2')
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
    this.load.spritesheet('botaoCorpo', '../assets/botaoc/botaoCorpo.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.spritesheet('botaoLobisomem', '../assets/botaoc/botaoLobisomem.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.spritesheet('botaoVampiro', '../assets/botaoc/botaoVampiro.png', {
      frameWidth: 212,
      frameHeight: 45
    })
    this.load.spritesheet('botaoYeti', '../assets/botaoc/botaoYeti.png', {
      frameWidth: 212,
      frameHeight: 45
    })
  }

  create () {
    const CutsceneFinal = this.add.image(400, 225, 'fundobordaA').setAlpha(0)

    const texto = 'Já a segunda lenda era a ...'

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

    const botaoYeti = this.add.sprite(200, 200, 'botaoYeti')
      .setInteractive()
    botaoYeti.on('pointerdown', () => {
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta2')
        this.game.scene.start('finalRuim')
      })
    })

    const botaoLobisomem = this.add.sprite(600, 200, 'botaoLobisomem')
      .setInteractive()
    botaoLobisomem.on('pointerdown', () => {
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta2')
        this.game.scene.start('finalBom')
      })
    })

    const botaoVampiro = this.add.sprite(200, 350, 'botaoVampiro')
      .setInteractive()
    botaoVampiro.on('pointerdown', () => {
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta2')
        this.game.scene.start('finalRuim')
      })
    })

    const botaoCorpo = this.add.sprite(600, 350, 'botaoCorpo')
      .setInteractive()
    botaoCorpo.on('pointerdown', () => {
      fadeOut(CutsceneFinal, 500, () => {
        this.game.scene.stop('CenaResposta2')
        this.game.scene.start('finalRuim')
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
      LuaCheia.visible = true
    })

    dicaText.on('pointerup', () => {
      LuaCheia.visible = false
    })

    const LuaCheia = this.add.text(30, 85, 'Lua Cheia', {
      fontFamily: 'Felipa',
      fontSize: 24 + 'px',
      color: '#ffffff',
      padding: {
        x: 10,
        y: 5
      },
      visible: false
    })
    LuaCheia.visible = false

    this.anims.create({
      key: 'botaoYeti',
      frames: this.anims.generateFrameNumbers('botaoYeti', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'botaoCorpo',
      frames: this.anims.generateFrameNumbers('botaoCorpo', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'botaoVampiro',
      frames: this.anims.generateFrameNumbers('botaoVampiro', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'botaoLobisomem',
      frames: this.anims.generateFrameNumbers('botaoLobisomem', {
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
