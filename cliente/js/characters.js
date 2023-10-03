export default class characters extends Phaser.Scene {
    constructor () {
        super('characters')
    }

    preload () {
        this.load.spritesheet('telachar', '../assets/characters.png', {
            frameWidth: 800,
            frameHeight: 450,
        })
        this.load.spritesheet('botaoinvisivelV', '../assets/botaoinvisivelV.png', {
            frameWidth: 225,
            frameHeight: 351
        })
    }
    create () {
        const telacharImage = this.add.image(400, 225, 'telachar').setAlpha(0);

        this.imagem = this.add
            .image(260, 226, 'botaoinvisivelV')
            .setInteractive()
            .on('pointerdown', () => {
                this.imagem.destroy()
                this.game.scene.stop('characters')
                this.game.scene.start('cutsceneDELE')
            })

        this.imagem = this.add
            .image(540, 226, 'botaoinvisivelV')
            .setInteractive()
            .on('pointerdown', () => {
                this.imagem.destroy()
                this.game.scene.stop('characters')
                this.game.scene.start('cutsceneDELA')
            })

        // botões
        const nextButton = this.add.text(750, 225, '->', {
            fontSize: '32px',
            fill: '#800000',
            stroke: "#000000",
            strokeThickness: 4,
            resolution: 2,
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive();

        //opacidade inicial como 0
        nextButton.setAlpha(0);

        //animação de fade in
        this.tweens.add({
            targets: nextButton,
            alpha: 1,
            duration: 1000,
            ease: 'Linear',
            delay: 3000,
        });

        //animar a transição para a próxima cena
        const goToNextScene = () => {
            this.scene.start('cutscene');
        };

        // botões
        nextButton.on('pointerdown', () => {
            //Fade Out para a cena atual
            fadeOut(this, 200, () => {
                //avançar para a próxima cena
                goToNextScene();
            });
        });

        const fadeIn = (target, duration, onComplete) => {
            this.tweens.add({
                targets: target,
                alpha: 1,
                duration: duration,
                onComplete: onComplete,
            });
        };

        const fadeOut = (target, duration, onComplete) => {
            this.tweens.add({
                targets: target,
                alpha: 0,
                duration: duration,
                onComplete: onComplete,
            });
        };

        //iniciar a cena com o Fade In para 'telachar'
        fadeIn(telacharImage, 1000);
    }
}