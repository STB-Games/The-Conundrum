export default class custsceneFinal1 extends Phaser.Scene {
  constructor () {
    super('custsceneFinal1')
  }

  preload () {
    this.load.image('quadrinhoSaida', 'assets/quadrinhoSaida.png')

    /* Full Screen */

    this.load.image('setaD', '../assets/botoes/setaD.png', {
      frameWidth: 48,
      frameHeight: 48
    })
    this.load.image('setaE', '../assets/botoes/setaE.png', {
      frameWidth: 48,
      frameHeight: 48
    })
  }

  create () {
    const CutsceneFinal = this.add.image(400, 225, 'quadrinhoSaida').setAlpha(0)

    // botões
    const nextButton = this.add.image(750, 225, 'setaD')
    nextButton.setOrigin(0.5)
    nextButton.setInteractive()

    // animar a transição para a próxima cena
    const goToNextScene = () => {
      this.scene.start('cutscene3')
    }

    // eventos de clique para os botões
    nextButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(CutsceneFinal, 1000, () => {
        // função para avançar para a próxima cena
        goToNextScene()
      })
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
