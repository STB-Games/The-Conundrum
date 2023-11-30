import config from './config.js'
import abertura from './abertura.js'
import sala from './sala.js'
import personagem from './personagem.js'
import gameOver from './gameOver.js'
import cutscene from './cutscene.js'
import cutscene1 from './cutscene1.js'
import cutscene2 from './cutscene2.js'
import cutscene3 from './cutscene3.js'
import cutsceneDELE from './cutsceneDELE.js'
import cutsceneDELA from './cutsceneDELA.js'
import loading from './loading.js'
import characters from './characters.js'
import finalFeliz from './finalFeliz.js'
import cutsceneFinal1 from './cutsceneFinal1.js'
import CenaResposta1 from './CenaResposta1.js'
import CenaResposta2 from './CenaResposta2.js'
import finalBom from './finalBom.js'
import finalRuim from './finalRuim.js'

class Game extends Phaser.Game {
  constructor () {
    super(config)

    this.id = 12 // Jogo The-Conumdrum, id 1
    this.valor = 100 // crédito padrão em Tijolinhos quando termina o jogo

    let iceServers
    if (window.location.host === 'feira-de-jogos.sj.ifsc.edu.br') {
      iceServers = [
        {
          urls: 'stun:feira-de-jogos.sj.ifsc.edu.br'
        },
        {
          urls: 'turns:feira-de-jogos.sj.ifsc.edu.br',
          username: 'adcipt',
          credential: 'adcipt20232'
        }
      ]
    } else {
      iceServers = [
        {
          urls: 'stun:stun.l.google.com:19302'
        }
      ]
    }
    this.iceServers = { iceServers }
    this.audio = document.querySelector('audio')

    this.socket = io() /* global io */
    this.socket.on('connect', () => {
      console.log('Connected to server!')
      this.socket.emit('enter-room', 1)

      this.socket.on('players', (players) => {
        console.log(players)
      })
    })

    this.scene.add('abertura', abertura)
    this.scene.add('sala', sala)
    this.scene.add('personagem', personagem)
    this.scene.add('gameOver', gameOver)
    this.scene.add('cutscene', cutscene)
    this.scene.add('cutscene1', cutscene1)
    this.scene.add('cutscene2', cutscene2)
    this.scene.add('cutscene3', cutscene3)
    this.scene.add('cutsceneDELE', cutsceneDELE)
    this.scene.add('cutsceneDELA', cutsceneDELA)
    this.scene.add('characters', characters)
    this.scene.add('loading', loading)
    this.scene.add('final-feliz', finalFeliz)
    this.scene.add('cutsceneFinal1', cutsceneFinal1)
    this.scene.add('CenaResposta1', CenaResposta1)
    this.scene.add('CenaResposta2', CenaResposta2)
    this.scene.add('finalBom', finalBom)
    this.scene.add('finalRuim', finalRuim)

    this.scene.start('abertura')
  }
}

window.onload = () => {
  window.game = new Game()
}
