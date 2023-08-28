export default class cena0 extends Phaser.Scene {
  constructor () {
    super('cena0')
  }

  preload () {
    this.load.spritesheet('abertura', '../assets/CapaDeAbertura.png', {
      frameWidth: 800,
      frameHeight: 450,
    })

    /* Personagem */
    this.load.spritesheet('derek', '../assets/derek.png', {
      frameWidth: 64,
      frameHeight: 64
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
    this.abertura = this.add.sprite(400, 225, 'abertura')

    /*Tentativa de Abertura*/

    this.anims.create({
      key: 'abertura',
      frames: this.anims.generateFrameNumbers('abertura', {
        start: 0,
        end: 35
      }),
      frameRate: 4,
      repeat: -1
    })

    this.abertura.anims.play('abertura')

    /* Personagem */

    this.personagem = this.physics.add.sprite(400, 225, 'derek')

    /*Botões*/

    this.direita = this.add.sprite(150, 400, 'direita', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.direita.setFrame(1)
        this.personagem.anims.play('derek-direita', true)
        this.personagem.setVelocityX(100)
      })
      .on('pointerup', () => {
        this.direita.setFrame(0)
        this.personagem.anims.play('derek-parado')
        this.personagem.setVelocityX(0)
      })
    
    this.cima = this.add.sprite(700, 300, 'cima', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.cima.setFrame(1)
        this.personagem.anims.play('derek-cima', true)
        this.personagem.setVelocityY(-100)
      })
      .on('pointerup', () => {
        this.cima.setFrame(0)
        this.personagem.anims.play('derek-parado')
        this.personagem.setVelocityY(0)
      })
    
    this.esquerda = this.add.sprite(50, 400, 'esquerda', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.esquerda.setFrame(1)
        this.personagem.anims.play('derek-esquerda', true)
        this.personagem.setVelocityX(-100)
      })
      .on('pointerup', () => {
        this.esquerda.setFrame(0)
        this.personagem.anims.play('derek-parado')
        this.personagem.setVelocityX(0)
      })

    this.baixo = this.add.sprite(700, 400, 'baixo', 0)
      .setInteractive()
      .on('pointerdown', () => {
        this.baixo.setFrame(1)
        this.personagem.anims.play('derek-baixo', true)
        this.personagem.setVelocityY(100)
      })
      .on('pointerup', () => {
        this.baixo.setFrame(0)
        this.personagem.anims.play('derek-parado')
        this.personagem.setVelocityY(0)
      })
  }
}
