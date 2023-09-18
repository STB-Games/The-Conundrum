export default class Cutscene2 extends Phaser.Scene {
    constructor () {
        super('cutscene2');
    }

    preload () {
        this.load.image('fundocinza', 'assets/fundocinza.png');
        this.load.image('telamorte', 'assets/telamorte.png');
        this.load.image('submundo', 'assets/fundopreto.png');
        this.load.image('CapaJogo', 'assets/CapaJogo.png');
    }

    create () {
        // Adicione as imagens e defina a visibilidade inicial
        const telamorteImage = this.add.image(400, 225, 'telamorte').setAlpha(0);

        // Crie botões para avançar e retroceder
        const nextButton = this.add.text(750, 225, '->', {
            fontSize: '18px',
            fill: '#fff',
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive();

        const prevButton = this.add.text(50, 225, '<-', {
            fontSize: '18px',
            fill: '#fff',
        });
        prevButton.setOrigin(0.5);
        prevButton.setInteractive();

        // Função para animar a transição para a próxima cena
        const goToNextScene = () => {
            this.scene.start('personagem');
        };

        // Função para animar a transição para a cena anterior
        const goToPreviousScene = () => {
            this.scene.start('cutscene1'); // Substitua 'cena_anterior' pelo nome da cena anterior
        };

        // Configurar eventos de clique para os botões
        nextButton.on('pointerdown', () => {
            // Animação de Fade Out para a cena atual
            fadeOut(telamorteImage, 1000, () => {
                // Chame a função para avançar para a próxima cena
                goToNextScene();
            });
        });

        prevButton.on('pointerdown', () => {
            // Animação de Fade Out para a cena atual
            fadeOut(telamorteImage, 1000, () => {
                // Chame a função para retroceder para a cena anterior
                goToPreviousScene();
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

        // Inicie a cena com o Fade In para 'telamorte'
        fadeIn(telamorteImage, 1000);
    }
}
