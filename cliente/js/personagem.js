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

        this.isLeftPressed = false;
        this.isRightPressed = false;
        this.isUpPressed = false;
        this.isDownPressed = false;

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
            key: 'caioidlef',
            frames: this.anims.generateFrameNumbers('CalvoIdleF', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'caioidlec',
            frames: this.anims.generateFrameNumbers('CalvoIdleC', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'caioidlee',
            frames: this.anims.generateFrameNumbers('CalvoIdleE', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'caioidled',
            frames: this.anims.generateFrameNumbers('CalvoIdleD', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        /*Animação dos Botões*/

        this.anims.create({
            key: 'esquerda',
            frames: this.anims.generateFrameNumbers('esquerda', {
                start: 0,
                end: 1,
            }),
            frameRate: 10,
            repeat: 0, // Para a animação após um ciclo
        });

        this.anims.create({
            key: 'baixo',
            frames: this.anims.generateFrameNumbers('baixo', {
                start: 0,
                end: 1,
            }),
            frameRate: 10,
            repeat: 0, // Para a animação após um ciclo
        });

        // Configure eventos para cada botão

        this.direitaButton = this.add.sprite(150, 401, 'direita')
            .setInteractive()
            .on('pointerdown', () => {
                this.isRightPressed = true;
                this.updatePlayerVelocity();
                this.direitaButton.setFrame(1)
                this.personagem.anims.play('caiod', true); 
            })
            .on('pointerup', () => {
                this.isRightPressed = false;
                this.updatePlayerVelocity();
                this.direitaButton.setFrame(0)
                this.personagem.anims.stop(); // Pare a animação do personagem quando o botão é solto
            })

        this.cimaButton = this.add.image(700, 350, 'cima')
            .setInteractive()
            .on('pointerdown', () => {
                this.isUpPressed = true;
                this.updatePlayerVelocity();
                this.cimaButton.setFrame(1)
                this.personagem.anims.play('caioc', true); 
            })
            .on('pointerup', () => {
                this.isUpPressed = false;
                this.updatePlayerVelocity();
                this.cimaButton.setFrame(0)
                this.personagem.anims.stop(); // Pare a animação do personagem quando o botão é solto
            });

        
        this.esquerdaButton = this.add.image(50, 400, 'esquerda')
            .setInteractive()
            .on('pointerdown', () => {
                this.isLeftPressed = true;
                this.updatePlayerVelocity();
                this.esquerdaButton.setFrame(1)
                this.personagem.anims.play('caioe', true); 
            })
            .on('pointerup', () => {
                this.isLeftPressed = false;
                this.updatePlayerVelocity();
                this.esquerdaButton.setFrame(0)
                this.personagem.anims.stop(); // Pare a animação do personagem quando o botão é solto
            });
        
        this.baixoButton = this.add.image(698, 425, 'baixo')
            .setInteractive()
            .on('pointerdown', () => {
                this.isDownPressed = true;
                this.updatePlayerVelocity();
                this.baixoButton.setFrame(1)
                this.personagem.anims.play('caiof', true);
            })

            .on('pointerup', () => {
                this.isDownPressed = false;
                this.updatePlayerVelocity();
                this.baixoButton.setFrame(0)
                this.personagem.anims.stop(); // Pare a animação do personagem quando o botão é solto
            });
    }

    // Função para atualizar a velocidade do personagem com base nos botões pressionados
    updatePlayerVelocity () {
        let velocityX = 0;
        let velocityY = 0;

        if (this.isLeftPressed) {
            velocityX -= 80;
            this.lastDirection = 'left';
        }

        if (this.isRightPressed) {
            velocityX += 80;
            this.lastDirection = 'right';
        }

        if (this.isUpPressed) {
            velocityY -= 80;
            this.lastDirection = 'up';
        }

        if (this.isDownPressed) {
            velocityY += 80;
            this.lastDirection = 'down';
        }

        this.personagem.setVelocity(velocityX, velocityY);

        // Verifique a última direção separadamente para determinar a animação idle
        if (this.lastDirection === 'left' && velocityX === 0) {
            this.personagem.anims.play('caioidlee', true);
        } else if (this.lastDirection === 'right' && velocityX === 0) {
            this.personagem.anims.play('caioidled', true);
        } else if (this.lastDirection === 'up' && velocityX === 0) {
            this.personagem.anims.play('caioidlec', true);
        } else if (this.lastDirection === 'down' && velocityX === 0) {
            this.personagem.anims.play('caioidlef', true);
        } else if (velocityX < 0) {
            this.personagem.anims.play('caioe', true);
        } else if (velocityX > 0) {
            this.personagem.anims.play('caiod', true);
        } else if (velocityY < 0) {
            this.personagem.anims.play('caioc', true);
        } else if (velocityY > 0) {
            this.personagem.anims.play('caiof', true);
        }
    }

    gameover () {
        this.game.scene.stop('personagem')
        this.game.scene.start('gameover')
    }
}