export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    this.load.spritesheet('abertura', '../assets/CapaAbertura-90D.png', {
      frameWidth: 800,
      frameHeight: 450,
    })
  }

  create () {
    this.abertura = this.add.sprite(0, 0, 'abertura')

    this.anims.create({
      key: 'abertura',
      frames: this.anims.generateFrameNumbers('abertura', {
        start: 0,
        end: 26
      }),
      frameRate: 30,
      repeat: -1
    })
  }
}
