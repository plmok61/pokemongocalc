var pokemonCalculators = {
  calcCPArray: [],
  calcEvolution: function(evoMultiplier, currentCP) {
    var result = evoMultiplier * currentCP;
    this.calcCPArray.push(result);
  }
};

function lookUpPokemon(inputName, pokemonArray) {
// Can't get this forEach to work
//  pokemonArray.forEach(function(pkm) {
//    if (pkm.name === inputName) {
//      return pkm;
//    }
//  });

  for(var i = 0; i < pokemonArray.length; i++) {
    if (pokemonArray[i].name === inputName) {
      return pokemonArray[i];
    }
  }
};

var handlers = {
  calcEvolution: function() {
    var currentCP = document.getElementById('currentCPInput');
    var inputName = document.getElementById('inputName')
    var pkm = lookUpPokemon(inputName.value, pokemonArray);
    var evoMultiplier = pkm.evoMultiplier;
    pokemonCalculators.calcEvolution(evoMultiplier, currentCP.valueAsNumber);
    console.log(pokemonCalculators.calcCPArray[0]);
    view.displayCalcCP();
  }
};

var view = {
  displayCalcCP: function() {
    var evolvedCP = document.querySelector('.evolvedCP');
    evolvedCP.innerHTML = '';
    var newCPDiv = document.createElement('div');
    newCPDiv.textContent = pokemonCalculators.calcCPArray[0];
    evolvedCP.appendChild(newCPDiv);
  }
};

var levelsArray = [
  {"level": 1, "starDust": 200, "candy": 1},
  {"level": 2, "starDust": 200, "candy": 1},
  {"level": 3, "starDust": 200, "candy": 1},
  {"level": 4, "starDust": 200, "candy": 1},
  {"level": 5, "starDust": 500, "candy": 1},
  {"level": 6, "starDust": 500, "candy": 1},
  {"level": 7, "starDust": 500, "candy": 1},
  {"level": 8, "starDust": 500, "candy": 1},
  {"level": 9, "starDust": 600, "candy": 1},
  {"level": 10, "starDust": 600, "candy": 1},
  {"level": 11, "starDust": 600, "candy": 1},
  {"level": 12, "starDust": 600, "candy": 1},
  {"level": 13, "starDust": 800, "candy": 1},
  {"level": 14, "starDust": 800, "candy": 1},
  {"level": 15, "starDust": 800, "candy": 1},
  {"level": 16, "starDust": 800, "candy": 1},
  {"level": 17, "starDust": 1000, "candy": 1},
  {"level": 18, "starDust": 1000, "candy": 1},
  {"level": 19, "starDust": 1000, "candy": 1},
  {"level": 20, "starDust": 1000, "candy": 2},
  {"level": 21, "starDust": 1300, "candy": 2},
  {"level": 22, "starDust": 1300, "candy": 2},
  {"level": 23, "starDust": 1300, "candy": 2},
  {"level": 24, "starDust": 1300, "candy": 2},
  {"level": 25, "starDust": 1600, "candy": 2},
  {"level": 26, "starDust": 1600, "candy": 2},
  {"level": 27, "starDust": 1600, "candy": 2},
  {"level": 28, "starDust": 1600, "candy": 2},
  {"level": 29, "starDust": 1900, "candy": 2},
  {"level": 30, "starDust": 1900, "candy": 2},
  {"level": 31, "starDust": 1900, "candy": 2},
  {"level": 32, "starDust": 1900, "candy": 2},
  {"level": 33, "starDust": 2200, "candy": 2},
  {"level": 34, "starDust": 2200, "candy": 2},
  {"level": 35, "starDust": 2200, "candy": 2},
  {"level": 36, "starDust": 2200, "candy": 2},
  {"level": 37, "starDust": 2500, "candy": 2},
  {"level": 38, "starDust": 2500, "candy": 2},
  {"level": 39, "starDust": 2500, "candy": 2},
  {"level": 40, "starDust": 2500, "candy": 2},
  {"level": 41, "starDust": 3000, "candy": 3},
  {"level": 42, "starDust": 3000, "candy": 3},
  {"level": 43, "starDust": 3000, "candy": 3},
  {"level": 44, "starDust": 3000, "candy": 3},
  {"level": 45, "starDust": 3500, "candy": 3},
  {"level": 46, "starDust": 3500, "candy": 3},
  {"level": 47, "starDust": 3500, "candy": 3},
  {"level": 48, "starDust": 3500, "candy": 3},
  {"level": 49, "starDust": 4000, "candy": 4},
  {"level": 50, "starDust": 4000, "candy": 4},
  {"level": 51, "starDust": 4000, "candy": 4},
  {"level": 52, "starDust": 4000, "candy": 4},
  {"level": 53, "starDust": 4500, "candy": 4},
  {"level": 54, "starDust": 4500, "candy": 4},
  {"level": 55, "starDust": 4500, "candy": 4},
  {"level": 56, "starDust": 4500, "candy": 4},
  {"level": 57, "starDust": 5000, "candy": 4},
  {"level": 58, "starDust": 5000, "candy": 4},
  {"level": 59, "starDust": 5000, "candy": 4},
  {"level": 60, "starDust": 5000, "candy": 4},
  {"level": 61, "starDust": 6000, "candy": 6},
  {"level": 62, "starDust": 6000, "candy": 6},
  {"level": 63, "starDust": 6000, "candy": 6},
  {"level": 64, "starDust": 6000, "candy": 6},
  {"level": 65, "starDust": 7000, "candy": 8},
  {"level": 66, "starDust": 7000, "candy": 8},
  {"level": 67, "starDust": 7000, "candy": 8},
  {"level": 68, "starDust": 7000, "candy": 8},
  {"level": 69, "starDust": 8000, "candy": 10},
  {"level": 70, "starDust": 8000, "candy": 10},
  {"level": 71, "starDust": 8000, "candy": 10},
  {"level": 72, "starDust": 8000, "candy": 10},
  {"level": 73, "starDust": 9000, "candy": 12},
  {"level": 74, "starDust": 9000, "candy": 12},
  {"level": 75, "starDust": 9000, "candy": 12},
  {"level": 76, "starDust": 9000, "candy": 12},
  {"level": 77, "starDust": 10000, "candy": 15},
  {"level": 78, "starDust": 10000, "candy": 15},
  {"level": 79, "starDust": 10000, "candy": 15},
  {"level": 80, "starDust": 10000, "candy": 15}
];

var pokemonArray = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "evoMultiplier": 1.565,
    "evolvesTo": "Ivysaur"
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "evoMultiplier": 1.611,
    "evolvesTo": "Venusaur"
  },
  {
    "id": 4,
    "name": "Charmander",
    "evoMultiplier": 1.68,
    "evolvesTo": "Charmeleon"
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "evoMultiplier": 1.712,
    "evolvesTo": "Charizard"
  },
  {
    "id": 7,
    "name": "Squirtle",
    "evoMultiplier": 1.608,
    "evolvesTo": "Wartortle"
  },
  {
    "id": 8,
    "name": "Wartortle",
    "evoMultiplier": 1.641,
    "evolvesTo": "Blastoise"
  },
  {
    "id": 10,
    "name": "Caterpie",
    "evoMultiplier": 1.094,
    "evolvesTo": "Metapod"
  },
  {
    "id": 11,
    "name": "Metapod",
    "evoMultiplier": 3.293,
    "evolvesTo": "Butterfree"
  },
  {
    "id": 13,
    "name": "Weedle",
    "evoMultiplier": 1.093,
    "evolvesTo": "Kakuna"
  },
  {
    "id": 14,
    "name": "Kakuna",
    "evoMultiplier": 3.203,
    "evolvesTo": "Beedrill"
  },
  {
    "id": 16,
    "name": "Pigey",
    "evoMultiplier": 1.882,
    "evolvesTo": "Pigeotto"
  },
  {
    "id": 17,
    "name": "Pigeotto",
    "evoMultiplier": 1.75,
    "evolvesTo": "Pigeot"
  },
  {
    "id": 19,
    "name": "Rattata",
    "evoMultiplier": 2.639,
    "evolvesTo": "Raticate"
  },
  {
    "id": 21,
    "name": "Spearow",
    "evoMultiplier": 2.698,
    "evolvesTo": "Fearow"
  },
  {
    "id": 23,
    "name": "Ekans",
    "evoMultiplier": 2.238,
    "evolvesTo": "Arbok"
  },
  {
    "id": 25,
    "name": "Pikachu",
    "evoMultiplier": 2.398,
    "evolvesTo": "Raichu"
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "evoMultiplier": 2.386,
    "evolvesTo": "Sandslash"
  },
  {
    "id": 29,
    "name": "Nidoran F",
    "evoMultiplier": 1.643,
    "evolvesTo": "Nidorina"
  },
  {
    "id": 30,
    "name": "Nidorina",
    "evoMultiplier": 1.821,
    "evolvesTo": "Nidoqueen"
  },
  {
    "id": 32,
    "name": "Nidoran M",
    "evoMultiplier": 1.682,
    "evolvesTo": "Nidorino"
  },
  {
    "id": 33,
    "name": "Nidorino",
    "evoMultiplier": 1.85,
    "evolvesTo": "Nidoking"
  },
  {
    "id": 35,
    "name": "Clefairy",
    "evoMultiplier": 2.071,
    "evolvesTo": "Clefable"
  },
  {
    "id": 37,
    "name": "Vulpix",
    "evoMultiplier": 2.764,
    "evolvesTo": "Ninetails"
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "evoMultiplier": 2.509,
    "evolvesTo": "Wigglytuff"
  },
  {
    "id": 41,
    "name": "Zubat",
    "evoMultiplier": 3.2,
    "evolvesTo": "Golbat"
  },
  {
    "id": 43,
    "name": "Oddish",
    "evoMultiplier": 1.503,
    "evolvesTo": "Gloom"
  },
  {
    "id": 44,
    "name": "Gloom",
    "evoMultiplier": 1.5,
    "evolvesTo": "Vileplume"
  },
  {
    "id": 46,
    "name": "Paras",
    "evoMultiplier": 1.983,
    "evolvesTo": "Parasect"
  },
  {
    "id": 48,
    "name": "Venonat",
    "evoMultiplier": 1.895,
    "evolvesTo": "Venomoth"
  },
  {
    "id": 50,
    "name": "Diglett",
    "evoMultiplier": 2.849,
    "evolvesTo": "Dugtrio"
  },
  {
    "id": 52,
    "name": "Meowth",
    "evoMultiplier": 2.25,
    "evolvesTo": "Persian"
  },
  {
    "id": 54,
    "name": "Psyduck",
    "evoMultiplier": 2.229,
    "evolvesTo": "Golduck"
  },
  {
    "id": 56,
    "name": "Mankey",
    "evoMultiplier": 2.214,
    "evolvesTo": "Pimeape"
  },
  {
    "id": 58,
    "name": "Growlithe",
    "evoMultiplier": 2.314,
    "evolvesTo": "Arcanine"
  },
  {
    "id": 60,
    "name": "Poliwag",
    "evoMultiplier": 1.743,
    "evolvesTo": "Poliwhirl"
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "evoMultiplier": 1.92,
    "evolvesTo": "Poliwrath"
  },
  {
    "id": 63,
    "name": "Abra",
    "evoMultiplier": 1.973,
    "evolvesTo": "Kadabra"
  },
  {
    "id": 64,
    "name": "Kadabra",
    "evoMultiplier": 1.651,
    "evolvesTo": "Alakazam"
  },
  {
    "id": 66,
    "name": "Machop",
    "evoMultiplier": 1.66,
    "evolvesTo": "Machoke"
  },
  {
    "id": 67,
    "name": "Machoke",
    "evoMultiplier": 1.496,
    "evolvesTo": "Machamp"
  },
  {
    "id": 69,
    "name": "Bellspout",
    "evoMultiplier": 1.583,
    "evolvesTo": "Weepinbell"
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "evoMultiplier": 1.496,
    "evolvesTo": "Victreebell"
  },
  {
    "id": 72,
    "name": "Tentacool",
    "evoMultiplier": 2.569,
    "evolvesTo": "Tentacruel"
  },
  {
    "id": 74,
    "name": "Geodude",
    "evoMultiplier": 1.741,
    "evolvesTo": "Graveler"
  },
  {
    "id": 75,
    "name": "Graveler",
    "evoMultiplier": 1.644,
    "evolvesTo": "Golem"
  },
  {
    "id": 77,
    "name": "Ponyta",
    "evoMultiplier": 1.475,
    "evolvesTo": "Rapidash"
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "evoMultiplier": 2.208,
    "evolvesTo": "Slowbro"
  },
  {
    "id": 81,
    "name": "Magnemite",
    "evoMultiplier": 2.212,
    "evolvesTo": "Magneton"
  },
  {
    "id": 84,
    "name": "Doduo",
    "evoMultiplier": 2.239,
    "evolvesTo": "Dodrio"
  },
  {
    "id": 86,
    "name": "Seel",
    "evoMultiplier": 2.007,
    "evolvesTo": "Dewgong"
  },
  {
    "id": 88,
    "name": "Grimer",
    "evoMultiplier": 2.089,
    "evolvesTo": "Muk"
  },
  {
    "id": 90,
    "name": "Shellder",
    "evoMultiplier": 2.635,
    "evolvesTo": "Cloyster"
  },
  {
    "id": 92,
    "name": "Gastly",
    "evoMultiplier": 1.782,
    "evolvesTo": "Haunter"
  },
  {
    "id": 93,
    "name": "Haunter",
    "evoMultiplier": 1.544,
    "evolvesTo": "Gengar"
  },
  {
    "id": 96,
    "name": "Drowzee",
    "evoMultiplier": 2.108,
    "evolvesTo": "Hypno"
  },
  {
    "id": 98,
    "name": "Krabby",
    "evoMultiplier": 2.42,
    "evolvesTo": "Kingler"
  },
  {
    "id": 100,
    "name": "Voltorb",
    "evoMultiplier": 2.037,
    "evolvesTo": "Electrode"
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "evoMultiplier": 2.824,
    "evolvesTo": "Exeggutor"
  },
  {
    "id": 104,
    "name": "Cubone",
    "evoMultiplier": 1.685,
    "evolvesTo": "Marowak"
  },
  {
    "id": 109,
    "name": "Koffing",
    "evoMultiplier": 2.027,
    "evolvesTo": "Weezing"
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "evoMultiplier": 1.955,
    "evolvesTo": "Rhydon"
  },
  {
    "id": 116,
    "name": "Horsea",
    "evoMultiplier": 2.27,
    "evolvesTo": "Seadra"
  },
  {
    "id": 118,
    "name": "Goldeen",
    "evoMultiplier": 2.202,
    "evolvesTo": "Seaking"
  },
  {
    "id": 120,
    "name": "Staryu",
    "evoMultiplier": 2.433,
    "evolvesTo": "Starmie"
  },
  {
    "id": 129,
    "name": "Magikarp",
    "evoMultiplier": 11.489,
    "evolvesTo": "Gyarados"
  },
  {
    "id": 133,
    "name": "Eevee",
    "evoMultiplier": "",
    "evolvesTo": "Jolteon, Flareon, Vaporeon"
  },
  {
    "id": 138,
    "name": "Omanyte",
    "evoMultiplier": 2.083,
    "evolvesTo": "Omastar"
  },
  {
    "id": 140,
    "name": "Kabuto",
    "evoMultiplier": 2.007,
    "evolvesTo": "Kabutops"
  },
  {
    "id": 147,
    "name": "Dratini",
    "evoMultiplier": 1.841,
    "evolvesTo": "Dragonair"
  },
  {
    "id": 148,
    "name": "Dragonair",
    "evoMultiplier": 2.056,
    "evolvesTo": "Dragonite"
  }
];
