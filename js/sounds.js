export default function() {
  const forest = new Audio('../sounds/Floresta.wav')
  const rain = new Audio('../sounds/Chuva.wav')
  const coffe = new Audio('../sounds/Cafeteria.wav')
  const fireplace = new Audio('../sounds/Lareira.wav')

  function pauseSounds() {
    forest.pause()
    rain.pause()
    coffe.pause()
    fireplace.pause()
  }

  function forestSound() {
    pauseSounds()
    forest.play()
    forest.loop = true
  }

  function rainSound() {
    pauseSounds()
    rain.play()
    rain.loop = true
  }

  function coffeSound() {
    pauseSounds()
    coffe.play()
    coffe.loop = true
  }

  function fireplaceSound() {
    pauseSounds()
    fireplace.play()
    fireplace.loop = true
  }

  return {
    forestSound,
    rainSound,
    coffeSound,
    fireplaceSound,
    pauseSounds
  }
}