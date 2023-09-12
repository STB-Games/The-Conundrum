export default class sala extends Phaser.Scene {
    constructor () {
        super('sala')
    }

    preload () {
        this.load.spritesheet('fundopreto', '../assets/fundopreto.png', {
            frameWidth: 800,
            frameHeight: 450,
        })
        this.load.spritesheet('sala1', '../assets/botaosala/Sala01.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('sala2', '../assets/botaosala/Sala02.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('sala3', '../assets/botaosala/Sala03.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('sala4', '../assets/botaosala/Sala04.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('sala5', '../assets/botaosala/Sala05.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('sala6', '../assets/botaosala/Sala06.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('sala7', '../assets/botaosala/Sala07.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('sala8', '../assets/botaosala/Sala08.png', {
            frameWidth: 128,
            frameHeight: 128
        })

    }

    create () {

        this.tela_cheia = this.add
            .sprite(770, 30, 'tela-cheia', 0)
            .setInteractive()
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.tela_cheia.setFrame(0)
                    this.scale.stopFullscreen()
                } else {
                    this.tela_cheia.setFrame(1)
                    this.scale.startFullscreen()
                }
            })
            .setScrollFactor(0, 0),

            this.imagem = this.add.image(225, 400, 'fundopreto')
        {
            this.mensagem = this.add.text(100, 75, "       Escolha uma sala:", {
                fontFamily: "monospace",
                font: "32px Courier",
                fill: "#cccccc",
            });
            this.salas = [
                {
                    numero: "1",
                    x: 320,
                    y: 140,
                    image: "sala1",
                    botao: undefined,
                },
                {
                    numero: "2",
                    x: 320,
                    y: 190,
                    image: "sala2",
                    botao: undefined,
                },
                {
                    numero: "3",
                    x: 320,
                    y: 240,
                    image: "sala3",
                    botao: undefined,
                },
                {
                    numero: "4",
                    x: 320,
                    y: 290,
                    image: "sala4",
                    botao: undefined,
                },
                {
                    numero: "5",
                    x: 480,
                    y: 140,
                    image: "sala5",
                    botao: undefined,
                },
                {
                    numero: "6",
                    x: 480,
                    y: 190,
                    image: "sala6",
                    botao: undefined,
                },
                {
                    numero: "7",
                    x: 480,
                    y: 240,
                    image: "sala7",
                    botao: undefined,
                },
                {
                    numero: "8",
                    x: 480,
                    y: 290,
                    image: "sala8",
                    botao: undefined,
                },
            ];
        }
        this.salas.forEach((item) => {
            item.botao = this.add
                .image(item.x, item.y, item.image, {
                    fontFamily: "monospace",
                    font: "16px Courier",
                    fill: "#cccccc",
                })
                .setInteractive()
                .on("pointerdown", () => {
                    this.salas.forEach((item) => {
                        item.botao.destroy();
                    });
                    item.botao.destroy()
                    this.game.scene.stop('sala')
                    this.game.scene.start('personagem')
                });
        });
    }
}

