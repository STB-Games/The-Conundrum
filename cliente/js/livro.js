export default class livro extends Phaser.Scene {
  constructor () {
    super('livro')
  }

  preload () {
    this.load.spritesheet('livro', './assets/livro.png', {
      frameWidth: 800,
      frameHeight: 450
    })

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })
  }

  create () {
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

    const Livro = this.add.image(400, 225, 'livro').setAlpha(0)

    const telaLargura = 800
    // const telaAltura = 450

    const texto = 'Cercado por uma grande floresta densa, vários boatos cercavam este mansão, barulhos de lobo, exposições em chamas, salas inundadas e uma misteriosa força paranormal vindo dos corredores.'

    // const tamanhoFonte = Math.min(telaLargura * 0.02, telaAltura * 0.1) // Ajuste os valores. NÃO ESTOU UTILIZANDO, PORÉM É SÓ BOTAR NO LUGAR DO *32* EM FONTSIZE, É UMA VARIÁVEL QUE FICA COMPATÍVEL COM O TAMANHO DA TELA.

    this.mensagem = this.add.text(120, 100, texto, {
      fontFamily: 'Felipa',
      color: '#FFFFFF',
      fontSize: 16 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 1,
      wordWrap: {
        width: telaLargura - 560, // largura máxima
        useAdvancedWrap: true
      }
    })

    // botões
    const nextButton = this.add.text(750, 225, '->', {
      fontSize: '28px',
      fill: '#800000',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2
    })
    nextButton.setOrigin(0.5)
    nextButton.setInteractive()

    const prevButton = this.add.text(50, 225, '<-', {
      fontSize: '28px',
      fill: '#800000',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2
    })
    prevButton.setOrigin(0.5)
    prevButton.setInteractive()

    // animar a transição para a próxima cena
    const goToNextScene = () => {
      this.scene.start('loading')
    }

    // animar a transição para a cena anterior
    const goToPreviousScene = () => {
      this.scene.start('cutscene1')
    }

    // eventos de clique para os botões
    nextButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(Livro, 1000, () => {
        // função para avançar para a próxima cena
        goToNextScene()
      })
    })

    prevButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(Livro, 1000, () => {
        // retroceder para a cena anterior
        goToPreviousScene()
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

    // iniciar a cena com o Fade In para 'livro'
    fadeIn(Livro, 1000)
  }
}
