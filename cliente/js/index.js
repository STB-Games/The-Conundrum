import config from './config.js'
import abertura from './abertura.js'
import sala from './sala.js'
import personagem from './personagem.js'
import gameover from './gameover.js'
import menina from './menina.js'
import cutscene from './cutscene.js'
import cutscene1 from './cutscene1.js'
import cutscene2 from './cutscene2.js'
import cutsceneDELE from './cutsceneDELE.js'
import cutsceneDELA from './cutsceneDELA.js'
import loading from './loading.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.scene.add('abertura', abertura)
    this.scene.add('sala', sala)
    this.scene.add('personagem', personagem)
    this.scene.add('gameover', gameover)
    this.scene.add('menina', menina)
    this.scene.add('cutscene', cutscene)
    this.scene.add('cutscene1', cutscene1)
    this.scene.add('cutscene2', cutscene2)
    this.scene.add('cutsceneDELE', cutsceneDELE)
    this.scene.add('cutsceneDELA', cutsceneDELA)
    this.scene.add('loading', loading)

    this.scene.start('cutsceneDELA')
  }
}

window.onload = () => {
  window.game = new Game()
}
