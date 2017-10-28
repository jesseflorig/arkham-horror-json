[
	{
		"name": "Azathoth",
		"img": "images/ancient-ones/azathoth.png",
		"combatRating": "-∞",
		"defenses": "None",
		"worshippers": " Since Azathoth promises nothing except destruction, only the insane worship him. However, their fanaticism gives them strength. Maniacs have their toughness increased by 1.",
		"activeText": [
      "Maniacs have +1 toughness "
    ],
		"power": {
        "title": " Absolute Destruction"
        "text": "If Azathoth awakens, the game is over and the investigators lose."
    },
		"attack": " The end is here! Azathoth destroys the world.",
		"doomTrack": 14,
		"expansion": "AKH"
	},
	{
		"name": "Cthulhu",
		"img": "images/ancient-ones/cthulhu.png",
		"combatRating": " -6",
		"defenses": "Special (See Attack)",
		"worshippers": "Cthulhu's worshippers often have the Innsmouth Look, a sign of monstrous ancestors. Cultists have a horror rating of -2 and a horror damage of 2 Sanity.",
		"activeText": [
      "Cultists horror rating is -2 and a horror damage of 2 Sanity",
      "Investigators have -1 to max Sanity and max Stamina"
    ],
		"power": {
      "title": "Dreams of Madness",
      "text": "While Cthulhu stirs in his slumber, investigators have their maximum Sanity and maximum Stamina reduced by 1."
    },
		"attack": "Each investigator lowers either his maximum Sanity or Maximum Stamina by 1 (his choice). After Cthulhu attacks 1 doom token is placed back on Cthulhu's doom track if it isn't already full.",
		"doomTrack": 13,
    "plots": [
      {
        "img": "images/epic-battles/cthulhu-1.png",
        "investigators": {
          "flavor:": "In spite of the terrible wounds it had received, it only hesitated a moment, then it surged forward once more.",
          "text": "The investigators attack as normal."
        },
        "ancientOne": {
          "flavor": "After a moment, you couldn't tell the thing had ever been hurt at all.",
          "title": "Unnatural Regeneration",
          "text": "Cthulhu gains 3 doom tokens instead of 1 after attacking this round."
        }
      },
      {
        "img": "images/epic-battles/cthulhu-2.png",
        "investigators": {
          "flavor:": "The creature's tentacles moved rapidly, as if speaking... or in prayer.",
          "text": "The investigators attack as normal."
        },
        "ancientOne": {
          "flavor": "A sudden pressure crashed down on us, trying to tear apart both our bodies and our minds",
          "title": "Crashing Wave",
          "text": "Roll a die. Each investigator reduces his maximum Sanity and/pr Staminda by that many points, divided up however he wants."
        }
      },
      {
        "img": "images/epic-battles/cthulhu-3.png",
        "investigators": {
          "flavor:": "Leaning down to our level, the creature quickly grasped several of our number in its tentacles, bearing them swiftly toward his mouth.",
          "text": "The investigators attack as normal."
        },
        "ancientOne": {
          "flavor": "Screaming, they disappeared into that flabby maw... and there was nothing we could do.",
          "title": "Flabby Maw",
          "text": "Roll a die and subtract 1. That many invesigators are <strong>devoured</strong>."
        }
      },
    ],
    "plotBackImg": "images/epic-battles/cthulhu-back.png",
		"expansion": "AKH"
	},
	{
		"name": "Hastur",
		"img": "images/ancient-ones/hastur.png",
		"combatRating": "-X",
		"defenses": "Physical Resistance",
		"worshippers": "Hastur's worshippers ride byakhee mounts that they call with enchanted whistles. Cultists are flying monsters and their combat rating is -2.",
		"activeText": [
      "Cultists are flying monsters and their combat rating is -2",
      "The cost to seal a gate is 8 Clue tokens instead of 5"
    ],
		"power": {
      "title": "The King in Yellow",
      "text": "While Hastur stirs in his slumber, the cost to seal a gate is 8 Clue tokens instead of 5."
    },
		"startOfBattle": "X is set to the current terror level",
		"attack": "Each investigator must pass a Luck (+1) check or lose 2 Sanity. This check's modifier decreases by 1 each turn (+0 the 2nd turn, -1 the 3rd turn, etc.)",
		"doomTrack": 13,
    "plots": [
      {
        "img": "images/epic-battles/.png",
        "investigators": {
          "flavor:": "The tattered figure seemed to swell as it approached us, bottling out the stars and moon as I gaped in horror.",
          "text": "The investigators attack as normal."
        },
        "ancientOne": {
          "flavor": "I practiaclly choked trying to catch my breath. This creature, whatever it was, made my blood run with ice.",
          "title": "High Stakes",
          "text": "Hastur attacks as normal, but any investigator who fails the <strong>Luck check</strong> this turn loses 4 Sanity instead of 2."
        }
      },
      {
        "img": "images/epic-battles/.png",
        "investigators": {
          "flavor:": "Clenching its hand in the air, I could feel the sickening strength of the power it drew to itself, like a lightning rod.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "As the Thing's power grew, ours weakened, along with our resolve.",
          "title": "Growing in Power",
          "text": "Hastur's combat rating improves by -1 (e.g., a -5 would become a -6) for the rest of the game. Hastur then attacks as normal."
        }
      },
      {
        "img": "images/epic-battles/.png",
        "investigators": {
          "flavor:": "The creature seemed hurt, but then, with a speed I would've thought impossible for its size, it was upon us.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "Those whose minds were weak and frail went mad in that instant, as the creature drove them deep into their nightmares.",
          "title": "The Last Straw",
          "text": "Each investigator with 2 or less Sanity is <strong>devoured</strong>."
        }
      },
    ],
    "plotBackImg": "images/epic-battles/hastur-back.png",
		"expansion": "AKH"
	},
	{
		"name": "Ithaqua",
		"img": "images/ancient-ones/ithaqua.png",
		"combatRating": "-3",
		"defenses": "None",
		"worshippers": " Ithaqua's worshippers eat the flesh of their fellow men, gaining supernatural power through their dark practice. Cultists have their toughness increased by 2.",
		"activeText": [
      "Cultists have +2 toughness",
      "All weather cards are discarded without their special effects taking place",
      "Any investigator in a street area at the end of the Mythos phase loses 1 Stamina"
    ],
		"power": {
      "title": "Icy Winds",
      "text": "While Ithaqua stirs in his slumber, any investigator in a street area at the end of the Mythos phase loses 1 Stamina. In addition, all Weather cards are discarded without their special effects taking place."
    },
		"startOfBattle": "Investigators must roll a die for every item they have, discarding the item on a failure",
		"attack": " Each investigator must pass a Fight (+1) check or lose 2 Stamina. This check's modifier decreases by 1 each turn (+0 the 2nd turn, -1 the 3rd turn, etc.)",
		"doomTrack": 11,
    "plots": [
      {
        "img": "images/epic-battles/ithaqua-1.png",
        "investigators": {
          "flavor:": "The winds began to how once more, and I grew agraid of being thrown through the air, as we were at the battle's beginning.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "As I lost my fooring, I clung desperately to my tommy gun, hoping that I wouldn't lose it in the blizzard.",
          "title": "Freezing Winds",
          "text": "Ithaqua's <strong>Start of Battle</strong> ability activates once again, then Ithaqua attacks as normal."
        }
      },
      {
        "img": "images/epic-battles/ithaqua-2.png",
        "investigators": {
          "flavor:": "Roaring in anger, the being charged towards us, preparing to swat us like flies.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "We were scatted like pins as it tore through the group, and I could only pray that no one was seriously hurt.",
          "title": "Scattered Like Pins",
          "text": "Ithaqua attacks as normal, but any investigator who fails the <strong>Fight check</strong> this turn loses 4 Stamina instead of 2."
        }
      },
      {
        "img": "images/epic-battles/ithaqua-3.png",
        "investigators": {
          "flavor:": "It seemed to be everywhere, rending and biting each of us, and leaving frostbitten wounds all over our bodies.",
          "text": "Investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "The bitter cold, combined with the physical punishment the creature was dealing out, proved to be too much for the weakest among us, who collapsed.",
          "title": "Out of Strength",
          "text": "Each investigator with 2 or less Stamina is <strong>devoured</strong>."
        }
      },
    ],
    "plotBackImg": "images/epic-battles/ithaqua-back.png",
		"expansion": "AKH"
	},
  {
		"name": "Ithaqua",
		"img": "images/ancient-ones/ithaqua.png",
		"combatRating": "-3",
		"defenses": "None",
		"worshippers": " Ithaqua's worshippers eat the flesh of their fellow men, gaining supernatural power through their dark practice. Cultists have their toughness increased by 2.",
		"activeText": [
      "Cultists have +2 toughness",
      "All weather cards are discarded without their special effects taking place",
      "Any investigator in a street area at the end of the Mythos phase loses 1 Stamina"
    ],
		"power": {
      "title": "Icy Winds",
      "text": "While Ithaqua stirs in his slumber, any investigator in a street area at the end of the Mythos phase loses 1 Stamina. In addition, all Weather cards are discarded without their special effects taking place."
    },
		"startOfBattle": "Investigators must roll a die for every item they have, discarding the item on a failure",
		"attack": " Each investigator must pass a Fight (+1) check or lose 2 Stamina. This check's modifier decreases by 1 each turn (+0 the 2nd turn, -1 the 3rd turn, etc.)",
		"doomTrack": 11,
    "plots": [
      {
        "img": "images/epic-battles/ithaqua-1.png",
        "investigators": {
          "flavor:": "The winds began to how once more, and I grew agraid of being thrown through the air, as we were at the battle's beginning.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "As I lost my fooring, I clung desperately to my tommy gun, hoping that I wouldn't lose it in the blizzard.",
          "title": "Freezing Winds",
          "text": "Ithaqua's <strong>Start of Battle</strong> ability activates once again, then Ithaqua attacks as normal."
        }
      },
      {
        "img": "images/epic-battles/ithaqua-2.png",
        "investigators": {
          "flavor:": "Roaring in anger, the being charged towards us, preparing to swat us like flies.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "We were scatted like pins as it tore through the group, and I could only pray that no one was seriously hurt.",
          "title": "Scattered Like Pins",
          "text": "Ithaqua attacks as normal, but any investigator who fails the <strong>Fight check</strong> this turn loses 4 Stamina instead of 2."
        }
      },
      {
        "img": "images/epic-battles/ithaqua-3.png",
        "investigators": {
          "flavor:": "It seemed to be everywhere, rending and biting each of us, and leaving frostbitten wounds all over our bodies.",
          "text": "Investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "The bitter cold, combined with the physical punishment the creature was dealing out, proved to be too much for the weakest among us, who collapsed.",
          "title": "Out of Strength",
          "text": "Each investigator with 2 or less Stamina is <strong>devoured</strong>."
        }
      },
    ],
    "plotBackImg": "images/epic-battles/ithaqua-back.png",
		"expansion": "AKH"
	},
  {
		"name": "Nyarlathotep",
		"img": "images/ancient-ones/nyarlathotep.png",
		"combatRating": "-4",
		"defenses": "Magical Resistance",
		"worshippers": "Nyarlathotep has innumberable cults all over the world. <strong>Cultitsts</strong> have the <strong>Endless</strong> ability.",
		"activeText": [
      "Cultists have Endless",
			"Add all Mask monsters to the cup at the beginning of the game"
    ],
		"power": {
      "title": "A Thousand Masks",
      "text": "At the start of the game add the 5 <strong>Mask</strong> monsters to the cup. Mutluple <strong>Mask</strong> monsters can be in play at once."
    },
		"startOfBattle": "Any investigator with no Clue tokens is <strong>devoured</strong>.",
		"attack": "Each investigator must pass a <strong>Lore(+1) check</strong> or lise one Clue token. Any investigator with no Clue tokens left is <strong>devoured</strong>. This check's modifier decreases by 1 each turn (+0 on the 2nd turn, -1 on the 3rd turn, etc.)",
		"doomTrack": 11,
    "plots": [
      {
        "img": "images/epic-battles/nyarlathotep-1.png",
        "ancientOne": {
          "flavor": "What had come before was nothing compared to the trial we were sibjected to next. One at a time, the Crawling Chaos simply looked into our hearts and whispered, 'Join me.'",
          "title": "Join Me!",
          "text": "Starting with the first player and going clockwise around the table, each investigator is given one chance to join Nyarlathotep. If an investigator accepts this offer, he becomes a traitor and is removed from the battle against Nyarlathotep, improving Nyarlathotep's combat rating by -2( to -6). No more than one investigator can turn traitor. If the investigators lose the battle, then the traitor wins the game alone. If the investigators win the battle, the traitor is the only one who loses the game."
        }
      },
      {
        "img": "images/epic-battles/nyarlathotep-2.png",
        "investigators": {
          "flavor:": "Abruptly, I saw what was happening. We were dancing to Nyarlathotep's inhuman tune without even realizing it.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "I tried to warn the other, but the jaws of the trap were already closing upon us. I could only hope that we could somehow salvage the situation.",
          "title": "Tricked",
          "text": "Each investigator loses all but one of his Clue tokens."
        }
      },
      {
        "img": "images/epic-battles/nyarlathotep-3.png",
        "ancientOne": {
          "flavor": "It was then that I remembered a terrible thing. Nyarlathotep had a thousand faces with which to battle us — all at once if he so chose.",
          "title": "The Masks",
          "text": "Draw one monster form the cup for each doom token on the doom track. For each <strong>Mask</strong> you fraw, one investigator is <strong>devoured</strong>."
        }
      }
    ],
    "plotBackImg": "images/epic-battles/nyarlathotep-back.png",
		"expansion": "AKH"
	},
  {
		"name": "Shub-Niggurath",
		"img": "images/ancient-ones/shub-niggurath.png",
		"combatRating": "-5",
		"defenses": "Physical Immunity",
		"worshippers": "Shub-Niggurath's young are numberless. <strong>Dark Young</strong> have the <strong>Endless</strong> ability.",
		"activeText": [
      "Dark Young have the endless ability",
			"All monsters have +1 toughness"
    ],
		"power": {
      "title": "Black Goat of the Woods",
      "text": "While Shib-Niggurath stirs in her slumber, all monsters have their toughness increased by 1"
    },
		"startOfBattle": "Any investigator with no monster trophies is <strong>devoured</strong>",
		"attack": "Each investigator myst pass a <strong>Sneak(+1) check</strong> or lose 1 monster trophy. Any investigator with no monster trophies left is <strong>devoured</strong>. The check's modifier decreases by 1 each turn (+0 the 2nd turn, -1 the 3rd turn, etc.)",
		"doomTrack": 12,
    "plots": [
      {
        "img": "images/epic-battles/shub-niggurath-1.png",
        "investigators": {
          "flavor:": "The pulsing, primal form floated towards us as light as a feather. Occasionally, I could just make out a hoof kicking from within that deadly chaos.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "Almost vefore we knew it, we were surrounded and spearated from each other...",
          "title": "Unexpected Loss",
          "text": "Each investigator loses 1 monster trophy. Any investigator with no monster trophies left is <strong>devoured</strong>."
        }
      },
      {
        "img": "images/epic-battles/shub-niggurath-2.png",
        "investigators": {
          "flavor:": "The sheer unadulterated power we were confronted with left me no real hope of victory. I was reduced to hoping for a miracle to save us.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "In the end, however, there was only Shub-Niggurath.",
          "title": "Immeasurable Power",
          "text": "Shub-Niggurath's combat rating improves by 1 (to -6) for the rest of the game, and she adds 1 doom token to her doom track, then she attacks normally."
        }
      },
      {
        "img": "images/epic-battles/shub-niggurath-3.png",
        "ancientOne": {
          "flavor": "The misty substance of the Mother of the Thousand Young parted before us, and for a moment I thought we'd won. But then, like a stampeding herd of elephants, her Young fell upon us mercilessly.",
          "title": "The Thousand Young",
          "text": "Each investigator immediately begins combat with a <strong>Dark Young</strong> (draw one from the cup to refer to during the fights) that he cannot evade. Each combat continues until either the Dark Young or the investigator is dead. Remove one doom token from the doom track for each Dark Young that is defeated."
        }
      }
    ],
    "plotBackImg": "images/epic-battles/shub-niggurath-back.png",
		"expansion": "AKH"
	},
  {
		"name": "Yig",
		"img": "images/ancient-ones/yig.png",
		"combatRating": "-3",
		"defenses": "None",
		"worshippers": "Yig's worshippers are actually disguised serpent people. Their bite is highly poisonous. <strong>Cultists</strong> have a combat rating of +0 and a combat damage of 4 Stamina.",
		"activeText": [
      "Cultists have a combat rating of +0 and a combat damage of 4 Stamina",
			"When a cultists is defeated, add a doom token to the doom track",
			"When an investigator is lost in time and space, add a doom token to the doom track"
    ],
		"power": {
      "title": "Yig's Anger",
      "text": "While Yig stirs in his slumber, he gains a doom token whenever a Cultist is defeated or an investigator is <em>Lost in Time and Space</em>."
    },
		"startOfBattle": "Every investigator is <em>Cursed</em>. Any investigator that already has a Curse is <strong>devoured</strong>.",
		"attack": "Each investigator must pass a <strong>Speed(+1) check</strong> or lose 1 Sanity and 1 Stamina. This check's modifier decreases by 1 each turn (+0 the 2nd turn, -1 the 3rd turn, etc.)",
		"doomTrack": ,
    "plots": [
      {
        "img": "images/epic-battles/yig-1.png",
        "investigators": {
          "flavor:": "Enraged at our presence, the creature shouted a string of words at us that hung goul and black in the air.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "ONe of my friends had no sooner heard the curse than he dropped dead, as if snakebitten.",
          "title": "Yig's Curse",
          "text": "Yig's <strong>Start of Battle</strong> ability activates once again, then Yig attacks as normal."
        }
      },
      {
        "img": "images/epic-battles/yig-2.png",
        "investigators": {
          "flavor:": "With a gesture, a horrible, wriggling carpet of snakes was sent at us, biting anything they could reach.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "Jumping back down from a ledge I had clung to, I was shaking and pale",
          "title": "Carpet of Snakes",
          "text": "Roll a total of 4 dice per investigator. For every success rolled, one investigator must lose 1 Sanity or 1 Stamina."
        }
      },
      {
        "img": "images/epic-battles/yig-3.png",
        "investigators": {
          "flavor:": "Hissing, the creature exhaled a cloud of greenish smoke, which I took to be some sort of venom.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "ALready weak and injured, one of my comrades died as soon as the venom touched his skin.",
          "title": "Weakened",
          "text": "Each investigator with 1 Sanity or 1 Stamina is <strong>devoured</strong>."
        }
      }
    ],
    "plotBackImg": "images/epic-battles/yig-back.png",
		"expansion": "AKH"
	},
  {
		"name": "Yog-Sothoth",
		"img": "images/ancient-ones/yog-sothoth.png",
		"combatRating": "-5",
		"defenses": "Magical Immunity",
		"worshippers": "Yog-Sothoth's worshippers have powerful magical abilities. Cultitsts have Magical Immunity and a combat rating of -1.",
		"activeText": [
      "Cultists have Magical Immunity and a combat rating of -1",
			"Difficulty to close a gate is increased by 1",
			"An investigator lost in time and space is devoured"
    ],
		"power": {
      "title": "The Key and the Gate",
      "text": "While Yog-Sothoth stirs in his slumber, the difficulty to close a gate is increased by 1. In addition, any investigator <em>lost in time and space</em> is <strong>devoured</strong>."
    },
		"startOfBattle": "Any investigator with no gate trophies is <strong>devoured</strong>.",
		"attack": "Each investigator must pass a <strong>Will(+1) check</strong> or lose 1 gate trophy. Any investigator with no gate trophies left is <strong>devoured</strong>. THis check's modifier decreases by 1 each turn (+0 the second turn, -1 the 3rd turn, etc.)",
		"doomTrack": 12,
    "plots": [
      {
        "img": "images/epic-battles/yog-sothoth-1.png",
        "investigators": {
          "flavor:": "Yog-Sothoth was everywhere all at once, and yet nowhere. We couldn't seem to hurt it at all.",
					"title": "Unbeatable",
          "text": "The investigators attack as normal, but Yog-Sothoth gains <strong>Physical Immunity</strong> until the end of round.",
        },
        "ancientOne": {
          "flavor": "Ignoring our best attacks like they were nothing, Yog-Sothoth gathered us into its clutches and attacked once again.",
          "text": "Yog-Sothoth attacks as normal."
        }
      },
      {
        "img": "images/epic-battles/yog-sothoth-2.png",
        "investigators": {
          "flavor:": "I could tell that the creature was drawing strength from each gate that remained open, but there was nothing we could do about it.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "Even assuming it would allow us to close the gates, there was no lull in the battle during which to do so.",
          "title": "The Opener and the Way",
          "text": "Yog-Sothoth attacks as normal, then add 1 doom token to the doom track for each gate that was open when it awakened."
        }
      },
      {
        "img": "images/epic-battles/yog-sothoth-3.png",
        "investigators": {
          "flavor:": "As we attempted to drive off Yog-Sothoth, worlds and places beyond imagining swirled around us.",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "No matter how much we prepared ahead of time, there was truly no way to be ready for the attacks it threw at us.",
          "title": "The Key and the Gate",
          "text": "Each investigator loses one gate trophy. Any investigator with no gate trophies left is <strong>devoured</strong>."
        }
      }
    ],
    "plotBackImg": "images/epic-battles/yog-sothoth-back.png",
		"expansion": "AKH"
	}
]
