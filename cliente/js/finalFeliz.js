export default class finalFeliz extends Phaser.Scene {
  constructor () {
    super('final-feliz')
  }

  preload () {
    this.load.audio('clique', './assets/sons/clique.mp3')
    this.load.audio('credito', './assets/sons/credito.mp3')
    this.load.audio('erro', './assets/sons/erro.mp3')
    this.load.image('fundoTeste', './assets/fundoTeste.png')
  }

  create () {
    this.clique = this.sound.add('clique')
    this.credito = this.sound.add('credito')
    this.erro = this.sound.add('erro')

    this.imagem = this.add.image(400, 225, 'fundoTeste')

    const texto4 = 'Obrigado por jogar!!!'

    this.mensagem = this.add.text(440, 25, texto4, {
      fontFamily: 'Felipa',
      fontSize: 28 + 'px',
      stroke: '#000000',
      strokeThickness: 4,
      resolution: 4
    })

    this.posicao = ''

    this.usuarioTextoBase = 'Usuário: '
    this.usuarioDigitado = ''
    this.usuario = this.add.text(450, 100, this.usuarioTextoBase, {
      fontFamily: 'Felipa',
      font: '32px Courier',
      fill: '#cccccc'
    })
      .setInteractive()
      .on('pointerdown', () => {
        this.clique.play()
        this.posicao = 'usuário'
        this.usuario.setFill('#ffffff')
        this.senha.setFill('#cccccc')
      })

    this.senhaTextoBase = 'Senha: '
    this.senhaDigitada = ''
    this.senha = this.add.text(450, 200, this.senhaTextoBase, {
      fontFamily: 'Felipa',
      font: '32px Courier',
      fill: '#cccccc'
    })
      .setInteractive()
      .on('pointerdown', () => {
        this.clique.play()
        this.posicao = 'senha'
        this.usuario.setFill('#cccccc')
        this.senha.setFill('#ffffff')
      })

    const teclado = [...Array(10).keys()]
    teclado.forEach(digito => {
      const valor = (digito + 1) % 10
      this.add.text(80 * ((digito % 3) + 1), 80 * (Math.floor(digito / 3) + 1), valor, {
        fontFamily: 'Felipa',
        font: '32px Courier',
        fill: '#ffffff'
      })
        .setInteractive()
        .on('pointerdown', () => {
          this.clique.play()
          if (this.posicao === 'usuário') {
            if (this.usuarioDigitado.length < 4) {
              this.usuarioDigitado += valor
              this.usuario.text = this.usuarioTextoBase + this.usuarioDigitado
            }
          } else if (this.posicao === 'senha') {
            if (this.senhaDigitada.length < 4) {
              this.senhaDigitada += valor
              let senhaOculta = ''
              Array.from(this.senhaDigitada).forEach(numero => {
                senhaOculta += '*'
              })
              this.senha.text = this.senhaTextoBase + senhaOculta
            }
          }
          if (this.usuarioDigitado.length === 4 && this.senhaDigitada.length === 4) {
            this.enviar = this.add.text(235, 310, '>', {
              fontFamily: 'Felipa',
              font: '60px Courier',
              fill: '#ffffff'
            })
              .setInteractive()
              .on('pointerdown', () => {
                axios.post('https://feira-de-jogos.sj.ifsc.edu.br/api/v1/credito', {
                  id: this.usuarioDigitado,
                  senha: this.senhaDigitada,
                  jogo: this.game.id,
                  valor: this.game.valor
                })
                  .then((response) => {
                    if (response.status === 200) {
                      this.credito.play()
                      this.enviar.destroy()
                      this.tempo = 2
                      this.relogio = this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                          this.tempo--
                          if (this.tempo === 0) {
                            this.relogio.destroy()
                            this.scene.stop('final-feliz')
                            this.scene.start('abertura')
                          }
                        },
                        callbackScope: this,
                        loop: true
                      })
                    }
                  })
                  .catch((error) => {
                    if (error.response.status === 401) {
                      this.erro.play()
                      this.enviar.x = 550
                      this.enviar.y = 318
                      this.enviar.text = 'Erro'
                      this.tempo = 2
                      this.relogio = this.time.addEvent({
                        delay: 1000,
                        callback: () => {
                          this.tempo--
                          if (this.tempo === 0) {
                            this.relogio.destroy()
                            this.enviar.destroy()
                          }
                        },
                        callbackScope: this,
                        loop: true
                      })
                    }
                    console.error(error)
                  })
              })
          }
        })
    })

    this.voltar = this.add.text(160, 318, 'X', {
      fontFamily: 'monospace',
      font: '32px Courier',
      fill: '#ffffff'
    })
      .setInteractive()
      .on('pointerdown', () => {
        this.clique.play()
        if (this.posicao === 'usuário') {
          if (this.usuarioDigitado.length > 0) {
            this.usuarioDigitado = this.usuarioDigitado.slice(0, -1)
            this.usuario.text = this.usuarioTextoBase + this.usuarioDigitado
          }
        } else if (this.posicao === 'senha') {
          if (this.senhaDigitada.length > 0) {
            this.senhaDigitada = this.senhaDigitada.slice(0, -1)
            let senhaOculta = ''
            Array.from(this.senhaDigitada).forEach(numero => {
              senhaOculta += '*'
            })
            this.senha.text = this.senhaTextoBase + senhaOculta
          }
        }

        if (this.usuarioDigitado.length !== 4 || this.senhaDigitada.length !== 4) {
          try {
            this.enviar.destroy()
          } catch (error) {
            console.error(error)
          }
        }
      })
  }

  update () { }
}
