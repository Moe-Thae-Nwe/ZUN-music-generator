const name = ["A Sacred Lot", "Eternal Shrine Maiden", "Yin-Yang ~ The Positive and Negative", "A Soul Devoted to the Gods ~ Highly Responsive to Prayers", "Eastern Strange Discourse", "Angel's Legend", "Oriental Magician", "Blade of Banishment", "Magic Mirror", "The Legend of KAGE", "Now, Until the Moment You Die", "Theme of Turning to Hell", 'Angel of a Distant Star ~ The "★Alice-in-Wonderland" Angel', "Iris", "Shrine of the Wind"]
const src = ["Touhou Reiiden ~ Highly Responsive to Prayers Title screen", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Levels 1-4, Hell Levels 16-19", "Touhou Reiiden ~ Highly Responsive to Prayers Shingyoku's theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 6-9 and Credits theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Hell Levels 6-9", "Touhou Reiiden ~ Highly Responsive to Prayers Yuugenmagan and Mima's theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 11-14", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Hell Levels 11-14", "Touhou Reiiden ~ Highly Responsive to Prayers Elis and Kikuri's theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 16-19", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's first theme", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's second theme", "Touhou Reiiden ~ Highly Responsive to Prayers Konngara's theme", "Touhou Reiiden ~ Highly Responsive to Prayers Ending theme", "Touhou Reiiden ~ Highly Responsive to Prayers Unused Track"]
let song = document.getElementByID("song")
let source = document.getElementByID("source")
function generate() {
  let rand = Math.floor(Math.random() * name.length)
  song.innerText = name[rand]
  source.innerText = src[rand]
}
