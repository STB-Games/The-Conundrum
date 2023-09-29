export default class characters extends Phaser.Scene {
    constructor () {
        super('characters')
    }

    preload () {
        this.load.spritesheet('telachar', '../assets/characters.png', {
            frameWidth: 800,
            frameHeight: 450,
        })
        this.load.spritesheet('botaoinvisivel', '../assets/botaoinvisivel.png', {
            frameWidth: 225,
            frameHeight: 351
        })
    }
    create () {
        const telacharImage = this.add.image(400, 225, 'telachar').setAlpha(0);

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

        // Crie botões para avançar e retroceder
        const nextButton = this.add.text(750, 225, '->', {
            fontSize: '32px',
            fill: '#800000',
            stroke: "#000000",
            strokeThickness: 4,
            resolution: 2,
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive();

        // Defina a opacidade inicial como 0 (invisível)
        nextButton.setAlpha(0);

        // Crie uma animação de fade in
        this.tweens.add({
            targets: nextButton,
            alpha: 1, 
            duration: 1000,
            ease: 'Linear', 
            delay: 3000, 
        });

        // Função para animar a transição para a próxima cena
        const goToNextScene = () => {
            this.scene.start('cutscene');
        };

        // Configurar eventos de clique para os botões
        nextButton.on('pointerdown', () => {
            // Animação de Fade Out para a cena atual
            fadeOut(this, 200, () => {
                // Chame a função para avançar para a próxima cena
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

        // Inicie a cena com o Fade In para 'telachar'
        fadeIn(telacharImage, 1000);
    }
}