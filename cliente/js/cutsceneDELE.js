export default class cutsceneDELE extends Phaser.Scene {
  constructor () {
    super('cutsceneDELE')
  }

  preload () {
    this.load.image('cutsceneDELE', './assets/cutscenes/cutsceneDELE.png')

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

    //
    const cutsceneDELEImage = this.add.image(400, 225, 'cutsceneDELE').setAlpha(0)

    const telaLargura = 800
    // const telaAltura = 450

    const texto = 'Rodrigo Silva, 24 anos, nasceu no Rio Grande do Sul, sempre teve uma paixão por desvendar mistérios e estudar o contexto histórico. sempre teve o sonho de virar um detetive.'
    const texto2 = 'Em suas investigações de mistérios em locais abandonados pelo país, Rodrigo conheceu Sabrina, uma historiadora determinada. Inicialmente, houve competição, mas logo perceberam que suas habilidades se complementavam, decidindo assim, formar uma grande dupla.'
    const texto3 = 'Sabrina e Rodrigo, agora partem para o interior do Amazonas para resolver o caso de uma antiga mansão que assombra uma pequena vila que constantemente sofre com lendas folclóricas.'
    // const tamanhoFonte = Math.min(telaLargura * 0.02, telaAltura * 0.1) // Ajuste os valores. NÃO ESTOU UTILIZANDO, PORÉM É SÓ BOTAR NO LUGAR DO *32* EM FONTSIZE, É UMA VARIÁVEL QUE FICA COMPATÍVEL COM O TAMANHO DA TELA.

    this.mensagem = this.add.text(200, 15, texto, {
      fontFamily: 'Felipa',
      fontSize: 28 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 4,
      wordWrap: {
        width: telaLargura - 200, // largura máxima
        useAdvancedWrap: true
      }
    })

    this.mensagem = this.add.text(15, 150, texto2, {
      fontFamily: 'Felipa',
      fontSize: 28 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 4,
      wordWrap: {
        width: telaLargura - 10, // largura máxima
        useAdvancedWrap: true
      }
    })

    this.mensagem = this.add.text(15, 320, texto3, {
      fontFamily: 'Felipa',
      fontSize: 28 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 4,
      wordWrap: {
        width: telaLargura - 160, // largura máxima
        useAdvancedWrap: true
      }
    })

    // botões
    const nextButton = this.add.image(765, 35, 'setaD')
    nextButton.setOrigin(0.5)
    nextButton.setInteractive()

    // animar a transição para a próxima cena
    const goToNextScene = () => {
      this.scene.start('characters')
    }

    // eventos de clique para os botões
    nextButton.on('pointerdown', () => {
      // Fade Out para a cena atual
      fadeOut(cutsceneDELEImage, 1000, () => {
        // avançar para a próxima cena
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

    // iniciar a cena com o Fade In para 'cutsceneDELE'
    fadeIn(cutsceneDELEImage, 1000)
  }
}
