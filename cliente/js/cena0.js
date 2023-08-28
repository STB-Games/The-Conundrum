export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    this.load.spritesheet('abertura', '../assets/CapaDeAbertura.png', {
      frameWidth: 800,
      frameHeight: 450,
    })

    this.load.spritesheet('derek', '../assets/derek.png')({
      frameWidth: 64,
      frameHeight: 64,
    })

    this.load.spritesheet('direita', '../assets/direita.png')({
      frameWidth: 64,
      frameHeight: 64,
    })
  }

  create () {
    this.abertura = this.add.sprite(250, 298, 'abertura')

    /*Tentativa de Abertura*/

    this.anims.create({
      key: 'abertura',
      frames: this.anims.generateFrameNumbers('abertura', {
        start: 0,
        end: 35
      }),
      frameRate: 30,
      repeat: -1
    })

    /*Botões*/

    this.direita = thias.add.sprite(150, 400, 'direita', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('derek-direita', true)
        this.personagem.setVelocityX(100)
      })
      .on('pointerup', () => {
        this.direita.setFrame(0)
        this.personagem.anims.play('derek-parado')
        this.personagem.setVelocityX(0)
      })
  }
}
