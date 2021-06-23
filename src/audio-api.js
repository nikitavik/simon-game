class AudioApi {
  static sounds ={
    blue: new Audio('/assets/sounds_1.mp3'),
    red: new Audio('/assets/sounds_2.mp3'),
    yellow: new Audio('/assets/sounds_3.mp3'),
    green: new Audio('/assets/sounds_4.mp3')
  }

  static playSound (color) {
    AudioApi.sounds[color].play()
    console.log(color)
  }
}
export const playSound = AudioApi.playSound
