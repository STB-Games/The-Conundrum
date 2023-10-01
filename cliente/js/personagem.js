export default class personagem extends Phaser.Scene {
    constructor () {
        super('personagem')
    }

    preload () {
        this.load.spritesheet('fundo', '../assets/fundocinza.png', {
            frameWidth: 800,
            frameHeight: 450,
        })

        this.load.image('monster', '../assets/personagem/botaoinvisivel.png')

        /* Personagem Andando (Masculino) */

        this.load.spritesheet('CalvoFrente', '../assets/Calvo_Frente.png', {
            frameWidth: 64,
            frameHeight: 64

        })

        this.load.spritesheet('CalvoDireita', '../assets/Calvo_Direita.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('CalvoCosta', '../assets/Calvo_Costa.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('CalvoEsquerdo', '../assets/Calvo_Esquerdo.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        /* Personagem Idle (MASCULINO) */

        this.load.spritesheet('CalvoIdleF', '../assets/CalvoIdleF.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('CalvoIdleD', '../assets/CalvoIdleD.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('CalvoIdleC', '../assets/CalvoIdleC.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('CalvoIdleE', '../assets/CalvoIdleE.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        /*Full Screen*/

        this.load.spritesheet('tela-cheia', './assets/FullScreenICO.png', {
            frameWidth: 32,
            frameHeight: 32
        })

        /* Botões */

        this.load.spritesheet('direita', '../assets/botoes/direita.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('cima', '../assets/botoes/cima.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('esquerda', '../assets/botoes/esquerda.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('baixo', '../assets/botoes/baixo.png', {
            frameWidth: 64,
            frameHeight: 64
        })
    }

    create () {
        this.abertura = this.add.sprite(400, 225, 'fundo')

        /*Full Screen*/

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

            /*Animação*/

            /* Personagem */

            /*Colisão*/

            this.personagem = this.physics.add.sprite(400, 225, 'CalvoFrente')

        // Defina as dimensões da hitbox
        const hitboxWidth = 24;
        const hitboxHeight = 60;
        const offsetX = (this.personagem.width - hitboxWidth) / 2;
        const offsetY = this.personagem.height - hitboxHeight;

        // Configure a hitbox
        this.personagem.setSize(hitboxWidth, hitboxHeight, true);
        this.personagem.setOffset(offsetX, offsetY);
        this.personagem.setCollideWorldBounds(true);

        this.botaoinvisivel = this.physics.add.image(750, 225, 'monster')

        this.physics.add.collider(this.personagem, this.botaoinvisivel, this.gameover, null, this)

        /*Animação dos Personagens */

        this.anims.create({
            key: 'caiof',
            frames: this.anims.generateFrameNumbers('CalvoFrente', {
                start: 0,
                end: 4
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'caioc',
            frames: this.anims.generateFrameNumbers('CalvoCosta', {
                start: 0,
                end: 5
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'caioe',
            frames: this.anims.generateFrameNumbers('CalvoEsquerdo', {
                start: 0,
                end: 5
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'caiod',
            frames: this.anims.generateFrameNumbers('CalvoDireita', {
                start: 0,
                end: 5
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'calvoidlef',
            frames: this.anims.generateFrameNumbers('CalvoIdleF', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'calvoidled',
            frames: this.anims.generateFrameNumbers('CalvoIdleD', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'calvoidlee',
            frames: this.anims.generateFrameNumbers('CalvoIdleE', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'calvoidlec',
            frames: this.anims.generateFrameNumbers('CalvoIdleC', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        // Configure eventos para cada botão

        this.cima = this.add.sprite(700, 350, 'cima')
            .setInteractive()
            .on('pointerover', () => {
                this.cima.setFrame(1)
                this.personagem.setVelocityY(-100)
                this.personagem.anims.play('caioc', true)
            })
            .on('pointerout', () => {
                this.cima.setFrame(0);
                if (this.cima.frame.name === 0 && this.baixo.frame.name === 0) {
                    this.personagem.anims.play('calvoidlec', true);
                }
                this.personagem.setVelocityY(0);
            })
            .setScrollFactor(0, 0)

        this.baixo = this.add.sprite(698, 425, 'baixo')
            .setInteractive()
            .on('pointerover', () => {
                this.baixo.setFrame(1)
                this.personagem.setVelocityY(100)
                this.personagem.anims.play('caiof', true)
            })
            .on('pointerout', () => {
                this.baixo.setFrame(0)
                if (this.cima.frame.name === 0 && this.baixo.frame.name === 0) {
                    this.personagem.anims.play('calvoidlef', true)
                }
                this.personagem.setVelocityY(0)
            })
            .setScrollFactor(0, 0)

        this.direita = this.add.sprite(150, 401, 'direita')
            .setInteractive()
            .on('pointerover', () => {
                this.direita.setFrame(1)
                this.personagem.setVelocityX(100)
                this.personagem.anims.play('caiod', true)
            })
            .on('pointerout', () => {
                this.direita.setFrame(0);
                if (this.cima.frame.name === 0 && this.baixo.frame.name === 0) {
                    this.personagem.anims.play('calvoidled', true);
                }
                    this.personagem.setVelocityX(0); 
                })
            .setScrollFactor(0, 0)

        this.esquerda = this.add.sprite(50, 400, 'esquerda')
            .setInteractive()
            .on('pointerover', () => {
                this.esquerda.setFrame(1)
                this.personagem.setVelocityX(-100)
                this.personagem.anims.play('caioe', true)
            })
            .on('pointerout', () => {
                this.esquerda.setFrame(0)
                if (this.cima.frame.name === 0 && this.baixo.frame.name === 0) {
                    this.personagem.anims.play('calvoidlee', true)
                }
                this.personagem.setVelocityX(0)
            })
            .setScrollFactor(0, 0)
    }

    gameover () {
        this.game.scene.stop('personagem')
        this.game.scene.start('gameover')
    }
}