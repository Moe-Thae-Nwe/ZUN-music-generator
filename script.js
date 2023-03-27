let n = document.getElementByID("song")
let s = document.getElementByID("source")
const song = []
const source = []
let r = Math.floor(Math.random() * song.length)
n.innerText = song[r]
s.innerText = source[r]
