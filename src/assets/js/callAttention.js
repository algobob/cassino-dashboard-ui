import pokemonBattle from '@/assets/audio/pokemon-battle.mp3'
import pokemonVictory from '@/assets/audio/pokemon-victory.mp3'
import marioDeath from '@/assets/audio/mario-death.mp3'

const audioBattle = new Audio(pokemonBattle)
const audioVictory = new Audio(pokemonVictory)

// create and show the notification
const notify = () => {
    // create a new notification
    const notification = new Notification(`Djabet`, {
        body: 'Opa! Hora da entrada!',
        vibrate: true
    });

    // close the notification after 10 seconds
    // setTimeout(() => {
    //     notification.close();
    // }, 10 * 1000);

    // navigate to a URL
    notification.addEventListener('click', () => {
  window.focus()
    });
}

const play = (seconds) => {
  audioBattle.currentTime = 0
  audioBattle.play();
  setTimeout(() => { audioBattle.pause(); }, seconds * 1000);
}

 const vibrate = () => {
    navigator.vibrate(200);
 }

export const callAttention = () => {
  notify();
  vibrate()
  play(60)
}

export const stop = () => {
  audioBattle.pause();
}