export default class Cutscene1 extends Phaser.Scene {
  constructor () {
    super('cutscene1')
  }

  preload () {
    this.load.image('fundocinza', 'assets/fundocinza.png')

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })
  }

  create () {
    const fundocinzaImage = this.add.image(400, 225, 'fundocinza').setAlpha(0)

    const telaLargura = 800
    const telaAltura = 450

    const texto = 'Dois detetives chegam em uma remota cidade do Amazonas para ver o que está acontecendo em uma mansão abandonada, Rodrigo e Patrícia, uma dupla de investigadores especializado em operações paranormais.' // Substitua pelo seu texto real

    // const tamanhoFonte = Math.min(telaLargura * 0.02, telaAltura * 0.1) // Ajuste os valores. NÃO ESTOU UTILIZANDO, PORÉM É SÓ BOTAR NO LUGAR DO *32* EM FONTSIZE, É UMA VARIÁVEL QUE FICA COMPATÍVEL COM O TAMANHO DA TELA.

    this.mensagem = this.add.text(100, 75, texto, {
      fontFamily: 'Felipa',
      fontSize: 32 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2,
      wordWrap: {
        width: telaLargura - 200, // largura máxima
        useAdvancedWrap: true
      }
    })

    // botões
    const nextButton = this.add.text(750, 225, '->', {
      fontSize: '32px',
      fill: '#800000',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2
    })
    nextButton.setOrigin(0.5)
    nextButton.setInteractive()

    const prevButton = this.add.text(50, 225, '<-', {
      fontSize: '32px',
      fill: '#800000',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2
    })
    prevButton.setOrigin(0.5)
    prevButton.setInteractive()

    // animar a transição para a próxima cena
    const goToNextScene = () => {
      this.scene.start('cutscene2')
    }

    // animar a transição para a cena anterior
    const goToPreviousScene = () => {
      this.scene.start('cutscene')
    }

    // eventos de clique para os botões
    nextButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(fundocinzaImage, 1000, () => {
        // Chame a função para avançar para a próxima cena
        goToNextScene()
      })
    })

    prevButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(fundocinzaImage, 1000, () => {
        // função para retroceder para a cena anterior
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

    // iniciar a cena com o Fade In para 'fundocinza'
    fadeIn(fundocinzaImage, 1000)
  }
}
