const URL = 'https://simon-game-test-default-rtdb.europe-west1.firebasedatabase.app/scoreboard.json'
export const getScores = async function () {
  const res = await fetch(URL)
  const data = await res.json()
  console.log(data)
}

export const postScores = async function (name, round, difficulty) {
  const formattedData = prepareDataToPost(name, round, difficulty)
  const res = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: formattedData
  })
  const data = await res.json()
  console.log(data)
}

function prepareDataToPost (name, round, difficulty) {
  const newScore = {
    name: name,
    round: round,
    difficulty: difficulty,
    date: new Date().toLocaleDateString()
  }
  return JSON.stringify(newScore)
}
