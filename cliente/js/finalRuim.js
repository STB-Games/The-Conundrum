export default class finalRuim extends Phaser.Scene {
  constructor () {
    super('finalRuim')
  }

  preload () {
    this.load.image('finalRuim', 'assets/cutscenes/finalRuim.png')

    this.load.image('transparente', 'assets/transparente.png')

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })
  }

  create () {
    const finalRuimImage = this.add.image(400, 225, 'finalRuim').setAlpha(0)

    const telaLargura = 800
    // const telaAltura = 450

    const texto = 'Rodrigo e Sabrina tiveram dificuldades com a missão de teste da Ordem, decidiram então seguir suas investigações por conta própria como sempre fizeram. Não se sabe o que aconteceu com as criaturas da mansão.' // Substitua pelo seu texto real

    // const tamanhoFonte = Math.min(telaLargura * 0.02, telaAltura * 0.1) // Ajuste os valores. NÃO ESTOU UTILIZANDO, PORÉM É SÓ BOTAR NO LUGAR DO *32* EM FONTSIZE, É UMA VARIÁVEL QUE FICA COMPATÍVEL COM O TAMANHO DA TELA.

    this.mensagem = this.add.text(50, 35, texto, {
      fontFamily: 'Felipa',
      fontSize: 32 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2,
      wordWrap: {
        width: telaLargura - 475, // largura máxima
        useAdvancedWrap: true
      }
    })

    this.time.delayedCall(13000, () => {
      fadeOut(finalRuimImage, 500, () => {
        this.scene.stop('finalRuim')
        this.scene.start('final-feliz')
        this.sound.stopByKey('musicaTema')
      })
    })

    //  fadeOut(finalRuimImage, 500, () => {
    //  this.game.scene.stop('finalRuim')
    //  this.game.scene.start('final-feliz')
    // })

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
    }

    // iniciar a cena com o Fade In para 'finalRuim'
    fadeIn(finalRuimImage, 1000)
    fadeIn(texto, 1000)
  }
}
