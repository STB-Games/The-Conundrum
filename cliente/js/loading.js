export default class LoadingScene extends Phaser.Scene {
  constructor () {
    super('loading')
  }

  preload () {
    this.load.spritesheet('loading', '../assets/cutscenes/loadinganim.png', {
      frameWidth: 800,
      frameHeight: 450
    })
    this.load.spritesheet('botaoinvisivelH', '../assets/botaoinvisivelH.png', {
      frameWidth: 135,
      frameHeight: 78
    })
  }

  create () {
    this.loading = this.add.sprite(400, 225, 'loading')

    // Animação de loading
    this.anims.create({
      key: 'loading',
      frames: this.anims.generateFrameNumbers('loading', {
        start: 0,
        end: 35
      }),
      frameRate: 13,
      repeat: -1
    })

    this.loading.anims.play('loading')

    // 6 sec e mudar para a próxima cena
    setTimeout(() => {
      this.scene.stop('loading')
      this.scene.start('personagem')
    }, 6000) // 6000 milissegundos = 6 segundos
  }
}
