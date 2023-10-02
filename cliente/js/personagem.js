export default class personagem extends Phaser.Scene {
    constructor () {
        super('personagem')

        this.animationKey = undefined
    }

    preload () {

        this.load.plugin('rexvirtualjoystickplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js', true)
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

        // Configuração do joystick para 8 direções
        this.joystick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
            x: 125,
            y: 325,
            radius: 70,
            base: this.add.circle(0, 0, 100, 0x888888),
            thumb: this.add.circle(0, 0, 50, 0xcccccc),
            dir: '8dir', // Configuração para 8 direções
            forceMin: 16
        }).on('pointerup', () => {
            this.personagem.setVelocity(0, 0); // Pare o personagem quando o joystick é solto
        });
    }

    update () {
        const cursorKeys = this.joystick.createCursorKeys();

        // Defina a velocidade do personagem com base nas teclas pressionadas
        const speed = 150; // Velocidade do personagem
        let velocityX = 0;
        let velocityY = 0;

        if (cursorKeys.up.isDown) {
            velocityY = -speed;
            this.animationKey = 'caioc'; // Ativa a animação de costas
        } else if (cursorKeys.down.isDown) {
            velocityY = speed;
            this.animationKey = 'caiof'; // Ativa a animação de frente
        }

        if (cursorKeys.left.isDown) {
            velocityX = -speed;
            this.animationKey = 'caioe'; // Ativa a animação da esquerda
        } else if (cursorKeys.right.isDown) {
            velocityX = speed;
            this.animationKey = 'caiod'; // Ativa a animação da direita
        }

        // Verifique se o personagem está parado
        if (velocityX === 0 && velocityY === 0) {
            // Personagem parado, determine a animação de "idle" com base na direção anterior
            if (this.animationKey === 'caiod') {
                this.animationKey = 'calvoidled'; // Ativa a animação de "idle" para a direita
            } else if (this.animationKey === 'caioe') {
                this.animationKey = 'calvoidlee'; // Ativa a animação de "idle" para a esquerda
            } else if (this.animationKey === 'caiof') {
                this.animationKey = 'calvoidlef'; // Ativa a animação de "idle" para a frente
            } else if (this.animationKey === 'caioc') {
                this.animationKey = 'calvoidlec'; // Ativa a animação de "idle" para trás
            }
        }

        // Se nenhuma tecla estiver pressionada, pare a animação (idle) de frente por padrão
        if (!this.animationKey) {
            this.animationKey = 'calvoidlef';
        }

        this.personagem.anims.play(this.animationKey, true);

        // Normalize a velocidade nas diagonais para evitar movimento mais rápido
        if (velocityX !== 0 && velocityY !== 0) {
            velocityX *= Math.sqrt(0.5);
            velocityY *= Math.sqrt(0.5);
        }

        this.personagem.setVelocity(velocityX, velocityY);
    }

    gameover () {
        this.game.scene.stop('personagem')
        this.game.scene.start('gameover')
    }
}