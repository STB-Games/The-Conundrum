export default class Cutscene extends Phaser.Scene {
  constructor () {
    super('cutscene')
  }

  preload () {
    this.load.image('CapaJogo', 'assets/CapaJogo.png')

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })
  }

  create () {
    // Adicione as imagens e defina a visibilidade inicial
    const CapaJogoImage = this.add.image(400, 225, 'CapaJogo').setAlpha(0)

    // Crie botões para avançar e retroceder
    const nextButton = this.add.text(750, 225, '->', {
      fontSize: '32px',
      fill: '#800000',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2
    })
    nextButton.setOrigin(0.5)
    nextButton.setInteractive()

    // animar a transição para a próxima cena
    const goToNextScene = () => {
      this.scene.start('cutscene1')
    }

    // botões
    nextButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(CapaJogoImage, 1000, () => {
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

    // iniciar a cena com o Fade In para 'CapaJogo'
    fadeIn(CapaJogoImage, 1000)
  }
}
