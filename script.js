const song = [//Highly Responsive to Prayers
  "A Sacred Lot / A Sacret Lot", "Eternal Shrine Maiden", "Yin-Yang ~ The Positive and Negative / The Positive and Negative", "A Soul Devoted to the Gods ~ Highly Responsive to Prayers / Highly Responsive to Prayers", "Eastern Tale of Fancy", "Angel's Legend", "Oriental Magician", "Blade of Banishment", "Magic Mirror", "the Legend of KAGE", "Now, Until the Moment You Die", "Theme of Turning to Hell / We Shall Die Together / Civilization of Magic", 'Angel of a Distant Star ~ The "★Alice-in-Wonderland" Angel / Swordsman of a Distant Star / Angel of a Distant Star", "Iris", "Shrine of the Wind"
]

const src = [//Highly Responsive to Prayers
  "Touhou Reiiden ~ Highly Responsive to Prayers Title screen", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Levels 1 - 4, Hell Levels 16 - 19", "Touhou Reiiden ~ Highly Responsive to Prayers Shingyoku's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 6 - 9 and Credits Theme", "Touhou Reiiden ~ Highly Responsive to Prayers YuugenMagan and Mima's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Makai Levels 11 - 14", "Touhou Reiiden ~ Highly Responsive to Prayers Theme of Hell Levels 11 - 14", "Touhou Reiiden ~ Highly Responsive to Prayers Elis and Kikuri's Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's First Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Sariel's Second Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Kongara's theme", "Touhou Reiiden ~ Highly Responsive to Prayers Ending Theme", "Touhou Reiiden ~ Highly Responsive to Prayers Unused Track"
]

const vid = [//Highly Responsive to Prayers
  "https://youtu.be/R9HjUslCi00", "https://youtu.be/nWJ-MWfdiOM", "https://youtu.be/MvKCbr9uz7M", "https://youtu.be/zh0LmBOubgM", "https://youtu.be/No6uEomo8VQ", "https://youtu.be/m6QMRKjnFVw", "https://youtu.be/enKZ7FD81wI", "https://youtu.be/T4O63PNPTXU", "https://youtu.be/zi6A2E4nay4", "https://youtu.be/1aJmgfdMpbw", "https://youtu.be/bzt87vI6YT0", "https://youtu.be/xJi6XDROyJw", "https://youtu.be/_vNRLUU0YOI", "https://youtu.be/JT-qd0-pLyQ", "https://youtu.be/DdCsWBMHqfU"
]

const comment = [//Highly Responsive to Prayers
  "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
]

function generate() {
  let randint = Math.floor(Math.random() * song.length);
  document.getElementById("name").innerText = song[randint];
  document.getElementById("source").innerText = src[randint];
  document.getElementById("vid").src = vid[randint];
  document.getElementById("cmt").innerText = comment[randint];
}
