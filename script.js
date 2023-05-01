const name = [//Touhou Reiiden ~ Highly Responsive to Prayers
  "A Sacred Lot", "Eternal Shrine Maiden", "Yin-Yang ~ The Positive and Negative", "A Soul Devoted to the Gods ~ Highly Responsive to Prayers", "Eastern Strange Discourse", "Angel's Legend", "Oriental Magician", "Blade of Banishment", "Magic Mirror", "The Legend of KAGE", "Now, Until the Moment You Die", "Theme of Turning to Hell", 'Angel of a Distant Star ~ The "★Alice-in-Wonderland" Angel', "Iris", "Shrine of the Wind",
  //Touhou Fuumaroku ~ Story of Eastern Wonderland
  "Eastern Demon-Sealing Record ~ Pure Land Mandala", "Hakurei ~ Eastern Wind", "She's in a temper!!", "End of Daylight", "Power of Darkness", "World of Fantasies", "Bet on Death", "Himorogi, Burn in Violet", "Love-Coloured Magic", "Eastern Demon-Sealing Record ~ Spectral Boisterous Dance", "Complete Darkness", "Crazy Magic", "The Tank Girl's Dream", "Forest of Tono", "Crossing the Blue Sky", "Hakurei Shrine Grounds", "Sunfall", "Demon-Sealing Finale", 
  //Touhou Yumejikuu ~ Phantasmagoria of Dim. Dream
  "A Dream Transcending Space-Time", "Selection", "Eastern Mystical Love Consultation", "Reincarnation", "Tabula Rasa ~ The Empty Girl", "Maniacal Princess", "Vanishing Dream ~ Lost Dream", "Visionary Game ~ Dream War", "Desicive Magic Battle! ~ Fight it out!", "Sailor of Time", "Strawberry Crisis!!", "Dream of Eternity", "Eastern Blue Sky", "Eternal Full Moon", "Maple Dream", "Ghostly Person's Holiday", "Victory Demonstration", "Game Over", "Winds of Time", "Starbow Dream", "Phantasmagoria ~ Hardworking Day after Dark", 
  //Touhou Gensokyo ~ Lotus Land Story
  "Gensokyo ~ Lotus Land Story", "Witching Dream", "Selene's Light", "Decoration Battle", "Break the Sabbath", "Scarlet Symphony ~ Scarlet Phoneme", "Bad Apple!!", "Spirit Battle ~ Perdition Crisis", "Alice Maestra", "Maiden's Cappricio ~ Cappricio", "Vessel of Stars ~ Casket of Star", "Lotus Love", "Sleeping Terror", "Dream Land", "Faint Dream ~ Inanimate Dream", "The Inevitably Forbidden Game", "Illusion of a Maid ~ Icemilk Magic", "Cute Devil ~ Innocence", "Days", "Peaceful", "Arcadian Dream", "Those Who Live in Illusions", "Lotus Road", "Dreamy Pilot", "Incomplete Plot", "Border Land", "Magic Shop of Raspberry", "Crescent Dream", 
  //Touhou Kaikiden ~ Mystic Square
  "Bizarre Romantic Story ~ Mystic Square", "Dream Express", "Magic Square", "Dimension of Reverie", "Spiritual Heaven", "Romantic Children", "Plastic Mind", "Maple Wise", "Forbidden Magic", "Crimson Maiden ~ Crimson Dead!!", "Treacherous Maiden ~ Judas Kiss", "The Last Judgement", "Doll of Misery", "End of the World ~ World's End", "Legendary Illusion ~ Infinite Being", "Alice in Wonderland", "The Grimoire of Alice", "Shinto Shrine", "Endless", "Eternal Paradise", "Mystic Dream", "Peaceful Romancer", "Soul's Resting Place", 
  //Seihou ~ Shuusou Gyoku
  "Autumn Frost Orb ~ Clockworks", "False Strawberry", "Primrose Shiver", "Fantastic Imperial Capital", "Disastrous Gemini", "Illusion of Flowers, Sky of Scarlet Dreams", "Firmament Army", "Illusionary Sputnik Night", "Mechanical Circus ~ Reverie", "Illusionary Girl from Canaveral", "Magical Girl's Crusade", "Antique Terror", "Dream Machine ~ Innocent Power", "Fantasy Science ~ Doll's Phantom", "Girl's Divinity ~ Pandora's Box", "Silk Road Alice", "The Witches' Ball ~ Magus", "Dichromantic Lotus Butterfly ~ Ancients", "Herselves", "Titled Maid", "Fly Above Hatoyama at Night",
  //Torte Le Magic
  "Witch of Love Potion", "Magical and Hopeless", "Sacred Battle",
  //Seihou ~ Kioh Gyoku
  "Rare Venerable Orb ~ Fairy Dance", "Velvet Maiden's War ~ Velvet Battle", "Castle Explorer -In the Sky-", "Orphic Poetry ~ Pseudoclassic", "New Illusion ~ New Fantasy", "Holy Knight of Orléans", "My Maid, Sweet Maid", "Lovely Mound of Cherry Blossoms ~ Flower of Japan", "Warrior Maiden ~ Heart of Valkyrie", "Enigmatic Doll ~ God Knows",
  //Touhou Koumakyou ~ Embodiment of Scarlet Devil
  "A Dream More Scarlet Than Red", "A Soul As Scarlet As A Ground Cherry", "Apparitions Stalk the Night", "Lunate Elf", "Tomboyish Girl in Love", "Shanghai Scarlet Teahouse ~ Chinese Tea", "Shanghai Alice of Meiji 17", "Voile, The Magic Library", "Locked Girl ~ The Girl's Sealed Room", "The Maid and The Pocket Watch of Blood", "Lunar Clock ~ Luna Dial", "The Young Descendant of Tepes", "Sepetette for a Dead Princess", "The Centennial Festival for Magical Girls", "U.N. Owen Was Her?", "An Eternity More Transient Than Scarlet", "Scarlet Chamber ~ Eastern Dream",
  //Hourai Ningyou ~ Dolls in Pseudo Paradise
  "Legend of Hourai", "Forest of Dolls", "The Strange Everyday Life of the Flying Shrine Maiden",
  //Touhou Youyoumu ~ Perfect Cherry Blossoms
  "Ghostly Dream ~ Snow or Cherry Petal", "Paradise ~ Deep Mountain", "Crystallized Silver", "The Fantastic Tales From Tono", "Diao Ye Zong (Withered Leaf)", "The Doll Maker of Bucuresti", "Doll Judgement ~ The Girl Who Played With People's Shapes", "The Capital City of Flowers in the Sky", "Phantom Band ~ Phantom Ensemble", "Eastern Ghostly Dream ~ Ancient Temple", "Hiroari Shoots A Strange Bird ~ Till When?", "Ultimate Truth", "Bloom Nobly, Ink-Black Cherry Blossoms ~ Border of Life", "Border of Life", "Spiritual Domination", "A Maiden's Illusionary Funeral ~ Necro-Fantasy", "Spiritual Domination ~ Who Done It!", "Necrofantasia", "Dream of a Spring Breeze", "Sakura, Sakura ~ Japanize Dream", 
  //Rendaino Yakou ~ Ghostly Field Club
  "Passing on Through the Dendera Fields in the Night", "Girls' Secret Sealing Club", "Ancient Temple of the Netherworld", "Mary the Magician", "Strange Bird of the Moon, Illusion of the Mysterious Cat", "Flower of Past Days ~ Fairy of Flower", "Eternal Festival of Illusions",
  //Touhou Eiyashou ~ Imperishable Night
  "Eternal Night Vignette ~ Imperishable Night", "Illusionary Night ~ Ghostly Eyes", "Wriggling Autumn Moon ~ Moon Insect", "Song of the Night Sparrow ~ Night Bird", "Deaf to All But the Song", "Nostalgic Blood of the East ~ Old World", "Plain Asia", "Retribution for the Eternal Night ~ Imperishable Night", "Cinderella Cage ~ Kagome - Kagome", "Lunatic Eyes ~ Invisible Full Moon", "Voyage 1969", "Gensokyo Millennium ~ History of the Moon", "Flight of the Bamboo Cutter ~ Lunatic Princess", "Voyage 1970", "Extend Ash ~ Person of Hourai", "Reach for the Moon, Immortal Smoke", "Evening Primrose", "Eternal Dream ~ Mystical Maple", "Eastern Youkai Beauty",
  //Touhou Suimusou ~ Immaterial and Missing Power
  "Forgathering Dream", "The Witches' Ball", "Demystify Feast", "Night Falls ~ Evening Star", "Onigashima in the Fairyland ~ Missing Power", "End of Summer", "Eastern Forgathering Dream", "Demonic Place", "The Moon", "Wanderings", "Inner Heart", "Intermezzo", "Eastern Wind", "Silence", "Skygazer", "Solitary Place", "Unexpected Visitor", "Scarlet Night", "Swift Battle", "Bad Omen", "Broken Moon", 
  //Yumetagae Kagaku Seiki ~ Changability of Strange Dream
  "Kid's Festival ~ Innocent Treasures", "Dream of Huaxu", "Boys and Girls of the Age of Science", "Border Between Dreams and Reality", 
  //Touhou Kaieizuka ~ Phantasmagoria of Flower View
  "Flower Reflecting Mound ~ Higan Retour", "Spring Lane ~ Colourful Path", "Oriental Dark Flight", "Flowering Night", "Adventure of the Lovestruck Tomboy", "White Flag of Usa Shrine", "Wind God Girl", "Poison Body ~ Forsaken Doll", "Gensokyo, Past and Present ~ Flower Land", "Higan Retour ~ Riverside View", "Eastern Judgement in the Sixtieth Year ~ Fate of Sixty Years", "The Mound Where The Flowers Reflect", "Mound of Shigan", "The Flowers Remain in Fantasy", "Flower of Soul ~ Another Dream...",
  //Touhou Bunkachou ~ Shoot the Bullet
  "Tengu's Notebook ~ Mysterious Note", "Wind Circulation ~ Wind Tour", "Tengu is Watching ~ Black Eyes", "Sleepless Night of the Eastern Country", "Retrospective Kyoto", 
  //Bouyu Toukaidou ~ Retrospective 53 Minutes
  "Hiroshige No. 36 ~ Neo Super-Express", "Blue Sea of 53 Minutes", "Legend of Aokigahara", "The Purest Sky and Sea", 
  //Oozora Majutsu ~ Magical Astronomy
  "Welcome to the Moon Tour", "Greenwich in the Sky", "The Wheelchair's Future in Space", "Satellite Café Terrace", "G Free", "Celestial Wizardry ~ Magical Astronomy", "The Far Side of the Moon", 
  //Yougakudan
  "Japanese Saga", "Child of Are", 
]
function generate() {
  let rand = Math.floor(Math.random() * name.length)
  document.getElementById("song").innerText = name[rand]
  document.getElementById("source").innerText = src[rand]
}
