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
            alpha: 1, // Opacidade final (visível)
            duration: 1000, // Duração da animação em milissegundos
            ease: 'Linear', // Tipo de easing (você pode ajustar para diferentes efeitos)
            delay: 3000, // Atraso de 3 segundos antes da animação começar
        });

        // Defina o texto como interativo depois que a animação terminar
        this.time.delayedCall(4000, () => {
            nextButton.setInteractive();
        }, [], this);

        // Função para animar a transição para a próxima cena
        const goToNextScene = () => {
            this.scene.start('cutscene');
        };

        // Configurar eventos de clique para os botões
        nextButton.on('pointerdown', () => {
            // Animação de Fade Out para a cena atual
            fadeOut(storycharImage, 1000, () => {
                // Chame a função para avançar para a próxima cena
                goToNextScene();
            });
        });
    }
}