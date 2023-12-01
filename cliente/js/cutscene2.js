export default class Cutscene2 extends Phaser.Scene {
  constructor () {
    super('cutscene2')
  }

  preload () {
    this.load.image('cutscene2img', 'assets/cutscenes/cutscene2img.png')

    /* Full Screen */

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })
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

    const FlorestaFundoImage = this.add.image(400, 225, 'cutscene2img').setAlpha(0)

    const telaLargura = 800
    // const telaAltura = 450

    const texto = 'No final do vilarejo, uma majestosa mansão sussurra lendas noturnas, onde sombras dançam em janelas, luzes cintilam em cômodos vazios e risadas ecoam ao anoitecer. Dizem que vestidos antigos roçam pelos corredores ao entardecer, evocando um passado misterioso. Os moradores, em tom de temor, mal mencionam seu nome, receosos de despertar entidades ocultas.'

    // const tamanhoFonte = Math.min(telaLargura * 0.02, telaAltura * 0.1) // Ajuste os valores. NÃO ESTOU UTILIZANDO, PORÉM É SÓ BOTAR NO LUGAR DO *32* EM FONTSIZE, É UMA VARIÁVEL QUE FICA COMPATÍVEL COM O TAMANHO DA TELA.

    this.mensagem = this.add.text(80, 85, texto, {
      fontFamily: 'Felipa',
      color: '#FFFFFF',
      fontSize: 32 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2,
      wordWrap: {
        width: telaLargura - 130, // largura máxima
        useAdvancedWrap: true
      }
    })

    // botões
    const nextButton = this.add.image(750, 225, 'setaD')
    nextButton.setOrigin(0.5)
    nextButton.setInteractive()

    const prevButton = this.add.image(50, 225, 'setaE')
    prevButton.setOrigin(0.5)
    prevButton.setInteractive()

    // animar a transição para a próxima cena
    const goToNextScene = () => {
      this.scene.start('cutscene3')
    }

    // animar a transição para a cena anterior
    const goToPreviousScene = () => {
      this.scene.start('cutscene1')
    }

    // eventos de clique para os botões
    nextButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(FlorestaFundoImage, 1000, () => {
        // função para avançar para a próxima cena
        goToNextScene()
      })
    })

    prevButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(FlorestaFundoImage, 1000, () => {
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

    // iniciar a cena com o Fade In para 'cutscene2img'
    fadeIn(FlorestaFundoImage, 1000)
  }
}
