export default class sala extends Phaser.Scene {
  constructor () {
    super('sala')
  }

  preload () {
    this.load.spritesheet('fundopreto', '../assets/fundopreto.png', {
      frameWidth: 800,
      frameHeight: 450
    })
    this.load.spritesheet('sala1', '../assets/botaosala/Sala01.png', {
      frameWidth: 128,
      frameHeight: 32
    })
    this.load.spritesheet('sala2', '../assets/botaosala/Sala02.png', {
      frameWidth: 128,
      frameHeight: 32
    })
    this.load.spritesheet('sala3', '../assets/botaosala/Sala03.png', {
      frameWidth: 128,
      frameHeight: 32
    })
    this.load.spritesheet('sala4', '../assets/botaosala/Sala04.png', {
      frameWidth: 128,
      frameHeight: 32
    })
    this.load.spritesheet('sala5', '../assets/botaosala/Sala05.png', {
      frameWidth: 128,
      frameHeight: 32
    })
    this.load.spritesheet('sala6', '../assets/botaosala/Sala06.png', {
      frameWidth: 128,
      frameHeight: 32
    })
    this.load.spritesheet('sala7', '../assets/botaosala/Sala07.png', {
      frameWidth: 128,
      frameHeight: 32
    })
    this.load.spritesheet('sala8', '../assets/botaosala/Sala08.png', {
      frameWidth: 128,
      frameHeight: 32
    })

    this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
      frameWidth: 32,
      frameHeight: 32
    })

    this.load.spritesheet('fundobordaV', '../assets/fundobordaV.png', {
      frameWidth: 800,
      frameHeight: 450
    })

    this.load.spritesheet('fundobordav2V', '../assets/fundobordav2V.png', {
      frameWidth: 800,
      frameHeight: 450
    })
  }

  create () {
    const telaLargura = 800
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

    this.anims.create({
      key: 'sala1',
      frames: this.anims.generateFrameNumbers('sala1', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'sala2',
      frames: this.anims.generateFrameNumbers('sala2', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'sala3',
      frames: this.anims.generateFrameNumbers('sala3', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'sala4',
      frames: this.anims.generateFrameNumbers('sala4', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'sala5',
      frames: this.anims.generateFrameNumbers('sala5', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'sala6',
      frames: this.anims.generateFrameNumbers('sala6', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'sala7',
      frames: this.anims.generateFrameNumbers('sala7', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.anims.create({
      key: 'sala8',
      frames: this.anims.generateFrameNumbers('sala8', {
        start: 0,
        end: 1
      }),
      frameRate: 4,
      repeat: 0
    })

    this.imagem = this.add.image(400, 225, 'fundobordaV')

    this.mensagem = this.add.text(235, 45, '       Escolha uma sala:', {
      fontFamily: 'Felipa',
      fontSize: 32 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 2
    })
    this.salas = [
      {
        numero: '1',
        x: 300,
        y: 140,
        image: 'sala1',
        botao: undefined
      },
      {
        numero: '2',
        x: 300,
        y: 200,
        image: 'sala2',
        botao: undefined
      },
      {
        numero: '3',
        x: 300,
        y: 260,
        image: 'sala3',
        botao: undefined
      },
      {
        numero: '4',
        x: 300,
        y: 320,
        image: 'sala4',
        botao: undefined
      },
      {
        numero: '5',
        x: 505,
        y: 140,
        image: 'sala5',
        botao: undefined
      },
      {
        numero: '6',
        x: 505,
        y: 200,
        image: 'sala6',
        botao: undefined
      },
      {
        numero: '7',
        x: 505,
        y: 260,
        image: 'sala7',
        botao: undefined
      },
      {
        numero: '8',
        x: 505,
        y: 320,
        image: 'sala8',
        botao: undefined
      }
    ]
    this.salas.forEach((item) => {
      item.botao = this.add
        .image(item.x, item.y, item.image, {
          fontFamily: 'monospace',
          font: '32px Courier',
          fill: '#cccccc'
        })
        .setInteractive()
        .on('pointerdown', () => {
          this.salas.forEach((item) => {
            item.botao.setFrame(0)
          })
          item.botao.setFrame(1)
          this.game.sala = item.numero
          this.game.socket.emit('entrar-na-sala', this.game.sala)
        })
    })

    this.game.socket.on('jogadores', (jogadores) => {
      console.log(jogadores)
      if (jogadores.segundo) {
        this.mensagem.destroy()
        this.game.jogadores = jogadores
        this.game.scene.stop('sala')
        this.game.scene.start('characters')
      } else if (jogadores.primeiro) {
        this.imagem.destroy()
        this.mensagem.setText('')
        this.mensagem.setText('Aguardando segundo jogador...')
        navigator.mediaDevices
          .getUserMedia({ video: false, audio: true })
          .then((stream) => {
            this.game.midias = stream
          })
          .catch((error) => console.error(error))
        this.imagem = this.add.image(400, 225, 'fundobordav2V')
        this.mensagem = this.add.text(165, 50, 'Esperando proximo jogador para iniciar o jogo...', {
          fontFamily: 'Felipa',
          fontSize: 28 + 'px',
          stroke: '#000000',
          strokeThickness: 4,
          resolution: 2
        })
        this.mensagemA = this.add.text(60, 250, 'Converse com sua dupla para a realização e conclusão dos puzzles contidos em cada sala pela mansão.', {
          fontFamily: 'Felipa',
          fontSize: 28 + 'px',
          stroke: '#000000',
          strokeThickness: 4,
          resolution: 2,
          wordWrap: {
            width: telaLargura - 100, // largura máxima
            useAdvancedWrap: true
          }
        })

        let mensagemVisivel = true

        // desvanecer a mensagem anterior
        this.time.delayedCall(9000, () => { // depois de 9 segundos que a mensagem apareceu
          if (mensagemVisivel) {
            this.tweens.add({
              targets: this.mensagemA,
              alpha: 0,
              duration: 1000, // tempo da animação de desvanecimento
              onComplete: () => {
                mensagemVisivel = false
                this.mensagemA.destroy() // foi de base

                this.time.delayedCall(1500, () => { // depois de 1,5 segundo que a MENSAGEM ANTERIOR foi de base entrará a próxima mensagem
                  this.mensagemB = this.add.text(60, 250, 'Sempre se atente à quanto de medo você tem, quanto maior o seu medo, mais assustador ficará o local, (ao chegar em zero você morre!)', {
                    fontFamily: 'Felipa',
                    fontSize: 28 + 'px',
                    stroke: '#000000',
                    strokeThickness: 4,
                    resolution: 2,
                    wordWrap: {
                      width: telaLargura - 100, // largura máxima
                      useAdvancedWrap: true
                    },
                    alpha: 0 // opacidade inicial (SE NAO TIVER 0 NAO FUNCIONA)
                  })

                  // fade in para mensagem anterior
                  this.tweens.add({
                    targets: this.mensagemB,
                    alpha: 1, // opacidade final
                    duration: 1000, // duração animation
                    ease: 'Linear',
                    onStart: () => {
                      this.mensagemB.alpha = 0 // TEM QUE SER ZERO
                    },
                    onComplete: () => {
                      this.time.delayedCall(7000, () => {
                        this.tweens.add({
                          targets: this.mensagemB,
                          alpha: 0,
                          duration: 1000,
                          onComplete: () => {
                            mensagemVisivel = false
                            this.mensagemB.destroy() // foi de base
                          }
                        })
                        // tempo para mostrar a mensagem seguinte
                        this.time.delayedCall(1500, () => {
                          this.mensagemC = this.add.text(60, 250, 'Quem for o jogador 1 será o Rodrigo Silva. \n Quem for o jogador 2 será a Sabrina Torres.', {
                            fontFamily: 'Felipa',
                            fontSize: 28 + 'px',
                            stroke: '#000000',
                            strokeThickness: 4,
                            resolution: 2,
                            wordWrap: {
                              width: telaLargura - 100, // largura máxima
                              useAdvancedWrap: true
                            },
                            alpha: 0 // initial opacity (MUST BE 0)
                          })

                          // fade in para a mensagem anterior
                          this.tweens.add({
                            targets: this.mensagemC,
                            alpha: 1, // opacidade final
                            duration: 1000, // duracao animation
                            ease: 'Linear',
                            onStart: () => {
                              this.mensagemC.alpha = 0 // TEM QUE SER ZERO
                            }
                          })
                        })
                      })
                    }
                  })
                })
              }
            })
          }
        })
      }
    })
  }
}
