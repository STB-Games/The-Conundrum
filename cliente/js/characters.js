export default class characters extends Phaser.Scene {
    constructor () {
        super('characters')
    }

    preload () {
        this.load.spritesheet('storychar', '../assets/characters.png', {
            frameWidth: 800,
            frameHeight: 450,
        })
        this.load.spritesheet('botaoinvisivel', '../assets/botaoinvisivel.png', {
            frameWidth: 225,
            frameHeight: 351
        })
    }
    create () {
        this.imagem = this.add
        this.add.image(400, 225, 'storychar')

        this.imagem = this.add
            .image(260, 226, 'botaoinvisivel')
            .setInteractive()
            .on('pointerdown', () => {
                this.imagem.destroy()
                this.game.scene.stop('characters')
                this.game.scene.start('cutsceneDELE')
            })

        this.imagem = this.add
            .image(540, 226, 'botaoinvisivel')
            .setInteractive()
            .on('pointerdown', () => {
                this.imagem.destroy()
                this.game.scene.stop('characters')
                this.game.scene.start('cutsceneDELA')
            })



    }
}