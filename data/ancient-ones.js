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
		"doomTrack": 14
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
    "plotBackImg": "images/epic-battles/cthulhu-back.png"
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
    "plotBackImg": "images/epic-battles/hastur-back.png"
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
    "plotBackImg": "images/epic-battles/ithaqua-back.png"
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
    "plotBackImg": "images/epic-battles/ithaqua-back.png"
	},
  {
		"name": "Nyarlathotep",
		"img": "images/ancient-ones/nyarlathotep.png",
		"combatRating": "",
		"defenses": "",
		"worshippers": " ",
		"activeText": [
      ""
    ],
		"power": {
      "title": "",
      "text": ""
    },
		"startOfBattle": "",
		"attack": "",
		"doomTrack": ,
    "plots": [
      {
        "img": "images/epic-battles/nyarlathotep-1.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/nyarlathotep-2.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/nyarlathotep-3.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      }
    ],
    "plotBackImg": "images/epic-battles/nyarlathotep-back.png"
	},
  {
		"name": "Shub-Niggurath",
		"img": "images/ancient-ones/shub-niggurath.png",
		"combatRating": "",
		"defenses": "",
		"worshippers": " ",
		"activeText": [
      ""
    ],
		"power": {
      "title": "",
      "text": ""
    },
		"startOfBattle": "",
		"attack": "",
		"doomTrack": ,
    "plots": [
      {
        "img": "images/epic-battles/shub-niggurath-1.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/shub-niggurath-2.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/shub-niggurath-3.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      }
    ],
    "plotBackImg": "images/epic-battles/shub-niggurath-back.png"
	},
  {
		"name": "Yig",
		"img": "images/ancient-ones/yig.png",
		"combatRating": "",
		"defenses": "",
		"worshippers": " ",
		"activeText": [
      ""
    ],
		"power": {
      "title": "",
      "text": ""
    },
		"startOfBattle": "",
		"attack": "",
		"doomTrack": ,
    "plots": [
      {
        "img": "images/epic-battles/yig-1.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/yig-2.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/yig-3.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      }
    ],
    "plotBackImg": "images/epic-battles/yig-back.png"
	},
  {
		"name": "Yog-Sothoth",
		"img": "images/ancient-ones/yog-sothoth.png",
		"combatRating": "",
		"defenses": "",
		"worshippers": " ",
		"activeText": [
      ""
    ],
		"power": {
      "title": "",
      "text": ""
    },
		"startOfBattle": "",
		"attack": "",
		"doomTrack": ,
    "plots": [
      {
        "img": "images/epic-battles/yog-sothoth-1.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/yog-sothoth-2.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      },
      {
        "img": "images/epic-battles/yog-sothoth-3.png",
        "investigators": {
          "flavor:": "",
          "text": "The investigators attack as normal.",
        },
        "ancientOne": {
          "flavor": "",
          "title": "",
          "text": ""
        }
      }
    ],
    "plotBackImg": "images/epic-battles/yog-sothoth-back.png"
	}
]
