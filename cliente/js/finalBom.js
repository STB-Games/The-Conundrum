export default class finalBom extends Phaser.Scene {
  constructor () {
    super('finalBom')
  }

  preload () {
    this.load.image('finalBom', 'assets/cutscenes/finalBom.png')

    this.load.image('transparente', 'assets/transparente.png')

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })
  }

  create () {
    const finalBomImage = this.add.image(400, 225, 'finalBom').setAlpha(0)

    const telaLargura = 800
    // const telaAltura = 450

    const texto = 'Rodrigo Silva e Sabrina Torres foram aceitos na Ordem após uma bem-sucedida primeira missão. Hoje continuam colaborando eficientemente como uma dupla dentro da organização.' // Substitua pelo seu texto real

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

    this.time.delayedCall(13000, () => {
      fadeOut(finalBomImage, 500, () => {
        this.scene.stop('finalBom')
        this.scene.start('final-feliz')
        this.sound.stopByKey('musicaTema')
      })
    })

    //  fadeOut(finalBomImage, 500, () => {
    //  this.game.scene.stop('finalBom')
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
    }

    // iniciar a cena com o Fade In para 'finalBom'
    fadeIn(finalBomImage, 1000)
    fadeIn(texto, 1000)
  }
}
