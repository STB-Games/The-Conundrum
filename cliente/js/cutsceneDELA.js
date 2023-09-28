export default class cutsceneDELA extends Phaser.Scene {
    constructor () {
        super('cutsceneDELA');
    }

    preload () {
        this.load.image('cutsceneDELA', 'assets/cutsceneDELA.png');

        /*Full Screen*/

        this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
            frameWidth: 32,
            frameHeight: 32
        })
    }

    create () {
        // Adicione as imagens e defina a visibilidade inicial
        const cutsceneDELAImage = this.add.image(400, 225, 'cutsceneDELA').setAlpha(0);


        const telaLargura = 800;
        const telaAltura = 450;

        const texto = "Sabrina Torres, 26 anos, nasceu no Rio de Janeiro, sempre amou arte e história, concentrando-se em entender a cultura brasileira e mundial. Sempre sonhou em ser investigadora.";
        const texto2 = "Após resolverem um caso juntos, Sabrina e Rodrigo viram que tinham uma conexão especial e decidiram continuar colaborando em equipe, em aspectos que Rodrigo falhava, Sabrina complementava. Com formação em História da Arte, tornou-se uma historiadora especializada em Lendas e Mitos.";
        const texto3 = "Sabrina e Rodrigo, agora partem para o interior do Amazonas para resolver o caso de uma antiga mansão que assombra uma pequena vila que constantemente sofre com lendas folclóricas."; // Substitua pelo seu texto real
        const tamanhoFonte = Math.min(telaLargura * 0.02, telaAltura * 0.1); // Ajuste os valores 0.05 e 0.1 conforme necessário // NÃO ESTOU UTILIZANDO, PORÉM É SÓ BOTAR NO LUGAR DO *32* EM FONTSIZE, É UMA VARIÁVEL QUE FICA COMPATÍVEL COM O TAMANHO DA TELA.

        this.mensagem = this.add.text(200, 15, texto, {
            fontFamily: "Felipa",
            fontSize: 28 + "px",
            stroke: "#000000",
            strokeThickness: 4,
            wordWrap: {
                width: telaLargura - 200, // Defina a largura máxima para evitar que o texto saia da tela, 
                useAdvancedWrap: true,
            }
        })

        this.mensagem = this.add.text(15, 150, texto2, {
            fontFamily: "Felipa",
            fontSize: 28 + "px",
            stroke: "#000000",
            strokeThickness: 4,
            wordWrap: {
                width: telaLargura - 10, // Defina a largura máxima para evitar que o texto saia da tela, 
                useAdvancedWrap: true,
            }
        })

        this.mensagem = this.add.text(15, 320, texto3, {
            fontFamily: "Felipa",
            fontSize: 28 + "px",
            stroke: "#000000",
            strokeThickness: 4,
            wordWrap: {
                width: telaLargura - 160, // Defina a largura máxima para evitar que o texto saia da tela, 
                useAdvancedWrap: true,
            }
        })

        // Crie botões para avançar e retroceder
        const nextButton = this.add.text(750, 225, '->', {
            fontSize: '32px',
            fill: '#fff',
            stroke: "#000000",
            strokeThickness: 4,
        });
        nextButton.setOrigin(0.5);
        nextButton.setInteractive();

        const prevButton = this.add.text(50, 225, '<-', {
            fontSize: '32px',
            fill: '#fff',
            stroke: "#000000",
            strokeThickness: 4,
        });
        prevButton.setOrigin(0.5);
        prevButton.setInteractive();

        // Função para animar a transição para a próxima cena
        const goToNextScene = () => {
            this.scene.start('cutscene2');
        };

        // Função para animar a transição para a cena anterior
        const goToPreviousScene = () => {
            this.scene.start('cutscene'); // Substitua 'cena_anterior' pelo nome da cena anterior
        };

        // Configurar eventos de clique para os botões
        nextButton.on('pointerdown', () => {
            // Animação de Fade Out para a cena atual
            fadeOut(cutsceneDELAImage, 1000, () => {
                // Chame a função para avançar para a próxima cena
                goToNextScene();
            });
        });

        prevButton.on('pointerdown', () => {
            // Animação de Fade Out para a cena atual
            fadeOut(cutsceneDELAImage, 1000, () => {
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

        // Inicie a cena com o Fade In para 'cutsceneDELA'
        fadeIn(cutsceneDELAImage, 1000);
    }
}
