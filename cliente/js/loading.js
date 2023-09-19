export default class LoadingScene extends Phaser.Scene {
    constructor () {
        super('loading');
    }

    preload () {
        this.load.spritesheet('loading', '../assets/loadinganim.png', {
            frameWidth: 800,
            frameHeight: 450,
        });
        this.load.spritesheet('botaoinvisivel', '../assets/botaoinvisivel.png', {
            frameWidth: 135,
            frameHeight: 78,
        });
    }

    create () {
        this.loading = this.add.sprite(400, 225, 'loading');

        // Animação de loading
        this.anims.create({
            key: 'loading',
            frames: this.anims.generateFrameNumbers('loading', {
                start: 0,
                end: 35,
            }),
            frameRate: 8,
            repeat: -1,
        });

        this.loading.anims.play('loading');

        // Aguarde 6 segundos e, em seguida, mude para a próxima cena
        setTimeout(() => {
            this.scene.stop('loading')
            this.scene.start('personagem');
        }, 9000); // 9000 milissegundos = 6 segundos
    }
}