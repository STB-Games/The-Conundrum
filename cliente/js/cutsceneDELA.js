export default class cutsceneDELA extends Phaser.Scene {
  constructor () {
    super('cutsceneDELA')
  }

  preload () {
    this.load.image('cutsceneDELA', 'assets/cutscenes/cutsceneDELA.png')

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

    // Adicione as imagens
    const cutsceneDELAImage = this.add.image(400, 225, 'cutsceneDELA').setAlpha(0)

    const telaLargura = 800
    // const telaAltura = 450

    const texto = 'Sabrina E. Torres, 26 anos, nasceu no Rio de Janeiro, sempre amou história, voltada em entender a cultura e mitos brasileiros. Sempre sonhou em ser investigadora.'
    const texto2 = 'Após resolverem um caso juntos, Sabrina e Rodrigo viram que tinham uma conexão especial e decidiram continuar colaborando em equipe, em aspectos que Rodrigo falhava, Sabrina complementava. Com formação em História da Arte, tornou-se uma historiadora especializada em Lendas e Mitos.'
    const texto3 = 'Sabrina e Rodrigo, agora partem para o interior do Amazonas para resolver o caso de uma antiga mansão que assombra uma pequena vila que constantemente sofre com lendas folclóricas.' // Substitua pelo seu texto real
    // const tamanhoFonte = Math.min(telaLargura * 0.02, telaAltura * 0.1) // Ajuste os valores. NÃO ESTOU UTILIZANDO, PORÉM É SÓ BOTAR NO LUGAR DO *32* EM FONTSIZE, É UMA VARIÁVEL QUE FICA COMPATÍVEL COM O TAMANHO DA TELA.

    this.mensagem = this.add.text(200, 15, texto, {
      fontFamily: 'Felipa',
      fontSize: 28 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2,
      wordWrap: {
        width: telaLargura - 220, // largura máxima
        useAdvancedWrap: true
      }
    })

    this.mensagem = this.add.text(15, 150, texto2, {
      fontFamily: 'Felipa',
      fontSize: 28 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2,
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
      resolution: 2,
      wordWrap: {
        width: telaLargura - 160, // largura máxima
        useAdvancedWrap: true
      }
    })

    // Crie botões para avançar e retroceder
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
      fadeOut(cutsceneDELAImage, 1000, () => {
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

    // iniciar a cena com o Fade In para 'cutsceneDELA'
    fadeIn(cutsceneDELAImage, 1000)
  }
}
