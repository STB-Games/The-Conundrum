export default class menina extends Phaser.Scene {
    constructor () {
        super('menina')
    }

    preload () {
        this.load.spritesheet('fundo', '../assets/fundocinza.png', {
            frameWidth: 800,
            frameHeight: 450,
        })

        this.load.image('monster', '../assets/personagem/botaoinvisivelH.png')

        /* Personagem Andando (FEMININO) */

        this.load.spritesheet('MeninaFrente', '../assets/Menina_Frente.png', {
            frameWidth: 64,
            frameHeight: 64

        })

        this.load.spritesheet('MeninaDireita', '../assets/Menina_Direita.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('MeninaCosta', '../assets/Menina_Costa.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('MeninaEsquerda', '../assets/Menina_Esquerda.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        /* Personagem Idle (FEMININO) */

        this.load.spritesheet('MeninaIdleF', '../assets/MeninaIdleF.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('MeninaIdleF', '../assets/MeninaIdleF.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('MeninaIdleD', '../assets/MeninaIdleD.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('MeninaIdleC', '../assets/MeninaIdleC.png', {
            frameWidth: 64,
            frameHeight: 64
        })

        this.load.spritesheet('MeninaIdleE', '../assets/MeninaIdleE.png', {
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

            this.personagem = this.physics.add.sprite(400, 225, 'MeninaFrente')

        // Defina as dimensões da hitbox
        const hitboxWidth = 24;
        const hitboxHeight = 60;
        const offsetX = (this.personagem.width - hitboxWidth) / 2;
        const offsetY = this.personagem.height - hitboxHeight;

        // Configure a hitbox
        this.personagem.setSize(hitboxWidth, hitboxHeight, true);
        this.personagem.setOffset(offsetX, offsetY);
        this.personagem.setCollideWorldBounds(true);

        this.botaoinvisivelH = this.physics.add.image(750, 225, 'monster')

        this.physics.add.collider(this.personagem, this.botaoinvisivelH, this.gameover, null, this)


        /*Animação dos Personagens */

        this.anims.create({
            key: 'meninaf',
            frames: this.anims.generateFrameNumbers('MeninaFrente', {
                start: 0,
                end: 4
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'meninac',
            frames: this.anims.generateFrameNumbers('MeninaCosta', {
                start: 0,
                end: 5
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'meninae',
            frames: this.anims.generateFrameNumbers('MeninaEsquerda', {
                start: 0,
                end: 5
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'meninad',
            frames: this.anims.generateFrameNumbers('MeninaDireita', {
                start: 0,
                end: 5
            }),
            frameRate: 4,
            repeat: -1
        })

        /*Animação dos Personagens IDLE */

        this.anims.create({
            key: 'meninaidlef',
            frames: this.anims.generateFrameNumbers('MeninaIdleF', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'meninaidlec',
            frames: this.anims.generateFrameNumbers('MeninaIdleC', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'meninaidlee',
            frames: this.anims.generateFrameNumbers('MeninaIdleE', {
                start: 0,
                end: 0
            }),
            frameRate: 4,
            repeat: -1
        })

        this.anims.create({
            key: 'meninaidled',
            frames: this.anims.generateFrameNumbers('MeninaIdleD', {
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
                this.personagem.anims.play('meninad', true)
                this.personagem.setVelocityX(80)
            })
            .on('pointerup', () => {
                this.direita.setFrame(0)
                this.personagem.anims.play('meninaidled')
                this.personagem.setVelocityX(0)
            })
            .setScrollFactor(0, 0)

        this.cima = this.add.sprite(700, 300, 'cima', 0)
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

        this.esquerda = this.add.sprite(50, 400, 'esquerda', 0)
            .setInteractive()
            .on('pointerdown', () => {
                this.esquerda.setFrame(1)
                this.personagem.anims.play('meninae', true)
                this.personagem.setVelocityX(-80)
            })
            .on('pointerup', () => {
                this.esquerda.setFrame(0)
                this.personagem.anims.play('meninaidlee')
                this.personagem.setVelocityX(0)
            })
            .setScrollFactor(0, 0)

        this.baixo = this.add.sprite(700, 400, 'baixo', 0)
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
        this.cameras.main.startFollow(this.personagem)
    }

    gameover () {
        this.game.scene.stop('menina')
        this.game.scene.start('gameover')
    }
}