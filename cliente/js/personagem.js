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

        /* Personagem Andando (FEMININO) */

        this.load.spritesheet('MeninaFrente', '../assets/Menina_Frente.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('MeninaCosta', '../assets/Menina_Costa.png', {
            frameWidth: 64,
            frameHeight: 64
        })

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

        /* Personagem Idle (FEMININO) */

        this.load.spritesheet('MeninaIdleF', '../assets/MeninaIdleF.png', {
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

            /* HitBOX de personagem CALVO */

            /* HitBOX de personagem MENINA */

            /* 
            
            aaaaaaa 
            
            */

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

        /*this.anims.create({
            key: 'meninaf',
            frames: this.anims.generateFrameNumbers('MeninaFrente', {
                start: 0,
                end: 4
            }),
            frameRate: 4,
            repeat: -1
        })*/

        /*this.anims.create({
            key: 'meninac',
            frames: this.anims.generateFrameNumbers('MeninaCosta', {
                start: 0,
                end: 5
            }),
            frameRate: 4,
            repeat: -1
        })*/

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

        /*Animação dos Personagens IDLE */

        /*this.anims.create({
            key: 'meninaidlef',
            frames: this.anims.generateFrameNumbers('MeninaIdleF', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })*/

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

        this.direita = this.add.sprite(150, 400, 'direita', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.direita.setFrame(1)
                this.personagem.anims.play('caiod', true)
                this.personagem.setVelocityX(80)
            })
            .on('pointerup', () => {
                this.direita.setFrame(0)
                this.personagem.anims.play('caioidled')
                this.personagem.setVelocityX(0)
            })
            .setScrollFactor(0, 0)

        this.cima = this.add.sprite(700, 300, 'cima', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.cima.setFrame(1)
                this.personagem.anims.play('caioc', true)
                this.personagem.setVelocityY(-80)
            })
            .on('pointerup', () => {
                this.cima.setFrame(0)
                this.personagem.anims.play('caioidlec')
                this.personagem.setVelocityY(0)
            })
            .setScrollFactor(0, 0)

        this.esquerda = this.add.sprite(50, 400, 'esquerda', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.esquerda.setFrame(1)
                this.personagem.anims.play('caioe', true)
                this.personagem.setVelocityX(-80)
            })
            .on('pointerup', () => {
                this.esquerda.setFrame(0)
                this.personagem.anims.play('caioidlee')
                this.personagem.setVelocityX(0)
            })
            .setScrollFactor(0, 0)

        this.baixo = this.add.sprite(700, 400, 'baixo', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.baixo.setFrame(1)
                this.personagem.anims.play('caiof', true)
                this.personagem.setVelocityY(80)
            })
            .on('pointerup', () => {
                this.baixo.setFrame(0)
                this.personagem.anims.play('caioidlef')
                this.personagem.setVelocityY(0)
            })
            .setScrollFactor(0, 0)
        this.cameras.main.startFollow(this.personagem)

        /*this.baixo = this.add.sprite(700, 400, 'baixo', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.baixo.setFrame(1)
                this.personagem.anims.play('meninaf', true)
                this.personagem.setVelocityY(80)
            })
            .on('pointerup', () => {
                this.baixo.setFrame(0)
                this.personagem.anims.play('meninaidlef')
                this.personagem.setVelocityY(0)
            })
            .setScrollFactor(0, 0)
        this.cameras.main.startFollow(this.personagem)*/

        /*this.cima = this.add.sprite(700, 300, 'cima', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.cima.setFrame(1)
                this.personagem.anims.play('meninac', true)
                this.personagem.setVelocityY(-80)
            })
            .on('pointerup', () => {
                this.cima.setFrame(0)
                this.personagem.anims.play('meninaidlec')
                this.personagem.setVelocityY(0)
            })
            .setScrollFactor(0, 0)
            this.cameras.main.startFollow(this.personagem)*/

    }

    gameover () {
        this.game.scene.stop('personagem')
        this.game.scene.start('gameover')
    }
}