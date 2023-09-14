export default class gameover extends Phaser.Scene {
    constructor () {
        super('gameover')
    }

    preload () {
        this.load.spritesheet('fim', '../assets/telamorte.png', {
            frameWidth: 800,
            frameHeight: 450,
        })
        this.load.spritesheet('botaoinvisivel', '../assets/botaoinvisivel.png', {
            frameWidth: 200,
            frameHeight: 65
        })
    }
    create () {

        const centrox = this.cameras.main.worldView.x + this.cameras.main.width / 2
        const centroy = this.cameras.main.worldView.y + this.cameras.main.height / 2

        this.imagem = this.add
        this.add.image(400, 225, 'fim')

        this.imagem = this.add
            .image(420, 400, 'botaoinvisivel')
            .setInteractive()
            .on('pointerdown', () => {
                this.imagem.destroy()
                this.game.scene.stop('gameover')
                this.game.scene.start('abertura')
            })



    }
}