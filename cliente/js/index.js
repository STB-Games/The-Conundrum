import config from './config.js'
import abertura from './abertura.js'
import sala from './sala.js'
import personagem from './personagem.js'
import gameover from './gameover.js'
import menina from './menina.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('abertura', abertura)
    this.scene.add('sala', sala)
    this.scene.add('personagem', personagem)
    this.scene.add('gameover', gameover)
    this.scene.add('menina', menina)

    this.scene.start('abertura')
  }
}

window.onload = () => {
  window.game = new Game()
}
