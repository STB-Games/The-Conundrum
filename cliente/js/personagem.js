export default class Personagem extends Phaser.Scene {
    constructor () {
        super('personagem');
    }

    preload () {
        this.load.spritesheet('fundo', '../assets/fundocinza.png', { frameWidth: 800, frameHeight: 450 });
        this.load.image('monster', '../assets/personagem/botaoinvisivel.png');

        this.loadSpritesheet('MeninaFrente', 64, 64);
        this.loadSpritesheet('MeninaCosta', 64, 64);
        this.loadSpritesheet('CalvoFrente', 64, 64);
        this.loadSpritesheet('CalvoDireita', 64, 64);
        this.loadSpritesheet('CalvoCosta', 64, 64);
        this.loadSpritesheet('CalvoEsquerdo', 64, 64);
        this.loadSpritesheet('MeninaIdleF', 64, 64);
        this.loadSpritesheet('CalvoIdleF', 64, 64);
        this.loadSpritesheet('CalvoIdleD', 64, 64);
        this.loadSpritesheet('CalvoIdleC', 64, 64);
        this.loadSpritesheet('CalvoIdleE', 64, 64);
        this.loadSpritesheet('tela-cheia', './assets/FullScreenICO.png', { frameWidth: 32, frameHeight: 32 });
        this.loadSpritesheet('direita', '../assets/botoes/direita.png', 64, 64);
        this.loadSpritesheet('cima', '../assets/botoes/cima.png', 64, 64);
        this.loadSpritesheet('esquerda', '../assets/botoes/esquerda.png', 64, 64);
        this.loadSpritesheet('baixo', '../assets/botoes/baixo.png', 64, 64);
    }

    create () {
        this.abertura = this.add.sprite(400, 225, 'fundo');

        this.tela_cheia = this.add.sprite(770, 30, 'tela-cheia', 0)
            .setInteractive()
            .on('pointerdown', () => {
                if (this.scale.isFullscreen) {
                    this.tela_cheia.setFrame(0);
                    this.scale.stopFullscreen();
                } else {
                    this.tela_cheia.setFrame(1);
                    this.scale.startFullscreen();
                }
            })
            .setScrollFactor(0);

        this.createCharacter(400, 225, 'CalvoFrente');
        this.createInvisibleButton(750, 225);

        this.physics.add.collider(this.personagem, this.botaoinvisivel, this.gameover, null, this);

        this.setupCharacterAnimations();
        this.setupButtonInteractions();
        this.cameras.main.startFollow(this.personagem);
    }

    loadSpritesheet (key, width, height) {
        this.load.spritesheet(key, `../assets/${key}.png`, { frameWidth: width, frameHeight: height });
    }

    createCharacter (x, y, spriteKey) {
        this.personagem = this.physics.add.sprite(x, y, spriteKey);
    }

    createInvisibleButton (x, y) {
        this.botaoinvisivel = this.physics.add.image(x, y, 'monster');
    }

    setupCharacterAnimations () {
        const animations = [
            { key: 'caiof', frames: 'CalvoFrente', start: 0, end: 4 },
            { key: 'caioc', frames: 'CalvoCosta', start: 0, end: 5 },
            { key: 'caioe', frames: 'CalvoEsquerdo', start: 0, end: 5 },
            { key: 'caiod', frames: 'CalvoDireita', start: 0, end: 5 },
            { key: 'caioidlef', frames: 'CalvoIdleF', start: 0, end: 0 },
            { key: 'caioidlec', frames: 'CalvoIdleC', start: 0, end: 0 },
            { key: 'caioidlee', frames: 'CalvoIdleE', start: 0, end: 0 },
            { key: 'caioidled', frames: 'CalvoIdleD', start: 0, end: 0 },
        ];

        animations.forEach((anim) => {
            this.anims.create({
                key: anim.key,
                frames: this.anims.generateFrameNumbers(anim.frames, { start: anim.start, end: anim.end }),
                frameRate: 4,
                repeat: -1,
            });
        });
    }

    setupButtonInteractions () {
        const buttons = [
            { key: 'direita', x: 150, y: 400, anim: 'caiod' },
            { key: 'cima', x: 700, y: 300, anim: 'caioc' },
            { key: 'esquerda', x: 50, y: 400, anim: 'caioe' },
            { key: 'baixo', x: 700, y: 400, anim: 'caiof' },
        ];

        buttons.forEach((button) => {
            this.add.sprite(button.x, button.y, button.key, 0)
                .setInteractive()
                .on('pointerdown', () => {
                    this.handleButtonDown(button);
                })
                .on('pointerup', () => {
                    this.handleButtonUp(button);
                })
                .setScrollFactor(0);
        });
    }

    handleButtonDown (button) {
        this[button.key].setFrame(1);
        this.personagem.anims.play(button.anim, true);

        if (button.key === 'direita') {
            this.personagem.setVelocityX(80);
        } else if (button.key === 'cima') {
            this.personagem.setVelocityY(-80);
        } else if (button.key === 'esquerda') {
            this.personagem.setVelocityX(-80);
        } else if (button.key === 'baixo') {
            this.personagem.setVelocityY(80);
        }
    }

    handleButtonUp (button) {
        this[button.key].setFrame(0);
        this.personagem.anims.play(`caioidle${button.key.charAt(0)}`);
        this.personagem.setVelocity(0);
    }

    gameover () {
        this.scene.stop('personagem');
        this.scene.start('gameover');
    }
}