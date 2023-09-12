export default class gameover extends Phaser.Scene {
    constructor () {
        super('gameover')
    }

    preload () {
        this.load.spritesheet('fim', '../assets/telamorte.png', {
            frameWidth: 800,
            frameHeight: 450,
        })
    }
    create () {

        const centrox = this.cameras.main.worldView.x + this.cameras.main.width / 2
        const centroy = this.cameras.main.worldView.y + this.cameras.main.height / 2

        this.imagem = this.add
        this.add.image(400, 225, 'fim')

        this.imagem = this.add.image(centrox - 40, centroy + 161, 'yes')
            .setInteractive()
            .on('pointerdown', () => {
                this.game.scene.stop('gameover')
                this.game.scene.start('cena0')
            })

        this.imagem = this.add.image(centrox + 55, centroy + 161, 'no')
            .setInteractive()
            .on('pointerdown', () => {
                this.game.scene.stop('gameover')
                this.game.scene.start('cenastart')
            })



    }
}