var pokemonCalculators = {
  calcCPArray: [],
  calcEvolution: function(evoMultiplierL, evoMultiplierH, currentCP) {
    var resultL = Math.round(evoMultiplierL * currentCP);
    var resultH = Math.round(evoMultiplierH * currentCP);
    this.calcCPArray.push(resultL, resultH);
  },
  calcEvolution2: function(evoMultiplierL, evoMultiplierH, pkmEvolvesToCPL, pkmEvolvesToCPH) {
    var resultL = evoMultiplierL * pkmEvolvesToCPL;
    var resultH = evoMultiplierH * pkmEvolvesToCPH;
    this.calcCPArray.push(resultL, resultH);
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

    //Check to see if the Pokemon is Eevee
    if (pkm.name === "Eevee") {
      for(var i = 0; i < 3; i ++){
        var evoMultiplierL = pkm.evoMultiplierL[i];
        var evoMultiplierH = pkm.evoMultiplierH[i];
        var pkmEvolvesToName = pkm.evolvesTo[i];
        pokemonCalculators.calcEvolution(evoMultiplierL, evoMultiplierH, currentCP.valueAsNumber);
      };
      var vaporeon = [];
      var jolteon = [];
      var flareon = [];
      vaporeon.push(pokemonCalculators.calcCPArray[0], pokemonCalculators.calcCPArray[1]);
      jolteon.push(pokemonCalculators.calcCPArray[2], pokemonCalculators.calcCPArray[3]);
      flareon.push(pokemonCalculators.calcCPArray[4], pokemonCalculators.calcCPArray[5]);
      view.displayEeveelutionsCP(vaporeon, jolteon, flareon);
    } else {

      var evoMultiplierL = pkm.evoMultiplierL;
      var evoMultiplierH = pkm.evoMultiplierH;
      var pkmName = pkm.name;
      var pkmEvolvesToName = pkm.evolvesTo
      pokemonCalculators.calcEvolution(evoMultiplierL, evoMultiplierH, currentCP.valueAsNumber);
      var pkmEvolvesToCPL = pokemonCalculators.calcCPArray[0];
      var pkmEvolvesToCPH = pokemonCalculators.calcCPArray[1];
      view.displayCalcCP(pkmName, pkmEvolvesToName);

      //If the Pokemon is the first in an evolution line of 3,
      //look up the 3 form also.
      if (lookUpPokemon(pkmEvolvesToName, pokemonArray) != undefined) {
        var pkm2 = lookUpPokemon(pkmEvolvesToName, pokemonArray);
        var evoMultiplierL2 = pkm2.evoMultiplierL;
        var evoMultiplierH2 = pkm2.evoMultiplierH;
        var pkmName2 = pkm2.name;
        var pkmEvolvesToName2 = pkm2.evolvesTo
        pokemonCalculators.calcEvolution2(evoMultiplierL2, evoMultiplierH2, pkmEvolvesToCPL, pkmEvolvesToCPH);
        view.displayFinalCP(pkmName2, pkmEvolvesToName2);
      }
    }
  }
};

var view = {
  displayCalcCP: function(pkmName, pkmEvolvesToName) {
    var evolvedCP = document.querySelector('.evolvedCP');
    var finalCP = document.querySelector('.finalCP');
    finalCP.textContent = '';
    evolvedCP.innerHTML = '';
    var newCPDiv = document.createElement('div');
    newCPDiv.textContent = 'Your '+ pkmName + ' will evolve to a ' + pkmEvolvesToName + ' with ' + pokemonCalculators.calcCPArray[0] + ' to ' + pokemonCalculators.calcCPArray[1] + ' CP.';
    evolvedCP.appendChild(newCPDiv);
    pokemonCalculators.calcCPArray.length = 0;
  },
  displayFinalCP: function(pkmName2, pkmEvolvesToName2) {
    var finalCP = document.querySelector('.finalCP');
    finalCP.innerHTML = '';
    var finalCPDiv = document.createElement('div');
    finalCPDiv.textContent = 'Then ' + pkmName2 + ' will evovle to a ' + pkmEvolvesToName2 + ' with ' + pokemonCalculators.calcCPArray[0] + ' to ' + pokemonCalculators.calcCPArray[1] + ' CP.';
    finalCP.appendChild(finalCPDiv);
    pokemonCalculators.calcCPArray.length = 0;
  },
  displayEeveelutionsCP: function(vaporeon, jolteon, flareon) {
    var evolvedCP = document.querySelector('.evolvedCP');
    evolvedCP.innerHTML = '';
    var vaporeonDiv = document.createElement('div');
    var jolteonDiv = document.createElement('div');
    var flareonDiv = document.createElement('div');
    vaporeonDiv.textContent = 'Your Eevee will evolve to a Vaporeon with ' + vaporeon[0] + ' to ' + vaporeon[1] + ' CP.'
    jolteonDiv.textContent = 'Your Eevee will evolve to a Jolteon with ' + jolteon[0] + ' to ' + jolteon[1] + ' CP.'
    flareonDiv.textContent = 'Your Eevee will evolve to a Flareon with ' + flareon[0] + ' to ' + flareon[1] + ' CP.'
    evolvedCP.appendChild(vaporeonDiv);
    evolvedCP.appendChild(jolteonDiv);
    evolvedCP.appendChild(flareonDiv);
    pokemonCalculators.calcCPArray.length = 0;
  }
};

var pokemonArray = [
  {
    "name": "Bulbasaur",
    "evoMultiplierL": 1.53,
    "evoMultiplierH": 1.58,
    "evolvesTo": "Ivysaur"
  },
  {
    "name": "Ivysaur",
    "evoMultiplierL": 1.2,
    "evoMultiplierH": 1.6,
    "evolvesTo": "Venusaur"
  },
  {
    "name": "Charmander",
    "evoMultiplierL": 1.64,
    "evoMultiplierH": 1.7,
    "evolvesTo": "Charmeleon"
  },
  {
    "name": "Charmeleon",
    "evoMultiplierL": 1.71,
    "evoMultiplierH": 1.79,
    "evolvesTo": "Charizard"
  },
  {
    "name": "Squirtle",
    "evoMultiplierL": 1.63,
    "evoMultiplierH": 2.1,
    "evolvesTo": "Wartortle"
  },
  {
    "name": "Wartortle",
    "evoMultiplierL": 1.4,
    "evoMultiplierH": 1.65,
    "evolvesTo": "Blastoise"
  },
  {
    "name": "Caterpie",
    "evoMultiplierL": 1.04,
    "evoMultiplierH": 1.08,
    "evolvesTo": "Metapod"
  },
  {
    "name": "Metapod",
    "evoMultiplierL": 3.55,
    "evoMultiplierH": 3.79,
    "evolvesTo": "Butterfree"
  },
  {
    "name": "Weedle",
    "evoMultiplierL": 1.06,
    "evoMultiplierH": 1.1,
    "evolvesTo": "Kakuna"
  },
  {
    "name": "Kakuna",
    "evoMultiplierL": 3.01,
    "evoMultiplierH": 3.42,
    "evolvesTo": "Beedrill"
  },
  {
    "name": "Pidgey",
    "evoMultiplierL": 1.71,
    "evoMultiplierH": 1.95,
    "evolvesTo": "Pigeotto"
  },
  {
    "name": "Pidgeotto",
    "evoMultiplierL": 1.73,
    "evoMultiplierH": 1.78,
    "evolvesTo": "Pigeot"
  },
  {
    "name": "Rattata",
    "evoMultiplierL": 2.55,
    "evoMultiplierH": 2.73,
    "evolvesTo": "Raticate"
  },
  {
    "name": "Spearow",
    "evoMultiplierL": 2.58,
    "evoMultiplierH": 2.81,
    "evolvesTo": "Fearow"
  },
  {
    "name": "Ekans",
    "evoMultiplierL": 2.21,
    "evoMultiplierH": 2.27,
    "evolvesTo": "Arbok"
  },
  {
    "name": "Pikachu",
    "evoMultiplierL": 2.33,
    "evoMultiplierH": 2.38,
    "evolvesTo": "Raichu"
  },
  {
    "name": "Sandshrew",
    "evoMultiplierL": 2.35,
    "evoMultiplierH": 2.76,
    "evolvesTo": "Sandslash"
  },
  {
    "name": "Nidoran F",
    "evoMultiplierL": 1.63,
    "evoMultiplierH": 2.48,
    "evolvesTo": "Nidorina"
  },
  {
    "name": "Nidorina",
    "evoMultiplierL": 1.83,
    "evoMultiplierH": 2.48,
    "evolvesTo": "Nidoqueen"
  },
  {
    "name": "Nidoran M",
    "evoMultiplierL": 1.64,
    "evoMultiplierH": 1.7,
    "evolvesTo": "Nidorino"
  },
  {
    "name": "Nidorino",
    "evoMultiplierL": 1.64,
    "evoMultiplierH": 1.86,
    "evolvesTo": "Nidoking"
  },
  {
    "name": "Clefairy",
    "evoMultiplierL": 2.03,
    "evoMultiplierH": 2.14,
    "evolvesTo": "Clefable"
  },
  {
    "name": "Vulpix",
    "evoMultiplierL": 2.74,
    "evoMultiplierH": 2.81,
    "evolvesTo": "Ninetails"
  },
  {
    "name": "Jigglypuff",
    "evoMultiplierL": 2.41,
    "evoMultiplierH": 2.47,
    "evolvesTo": "Wigglytuff"
  },
  {
    "name": "Zubat",
    "evoMultiplierL": 2.6,
    "evoMultiplierH": 3.67,
    "evolvesTo": "Golbat"
  },
  {
    "name": "Oddish",
    "evoMultiplierL": 1.48,
    "evoMultiplierH": 1.51,
    "evolvesTo": "Gloom"
  },
  {
    "name": "Gloom",
    "evoMultiplierL": 1.48,
    "evoMultiplierH": 1.53,
    "evolvesTo": "Vileplume"
  },
  {
    "name": "Paras",
    "evoMultiplierL": 1.92,
    "evoMultiplierH": 2.02,
    "evolvesTo": "Parasect"
  },
  {
    "name": "Venonat",
    "evoMultiplierL": 1.86,
    "evoMultiplierH": 1.9,
    "evolvesTo": "Venomoth"
  },
  {
    "name": "Diglett",
    "evoMultiplierL": 2.68,
    "evoMultiplierH": 2.77,
    "evolvesTo": "Dugtrio"
  },
  {
    "name": "Meowth",
    "evoMultiplierL": 1.98,
    "evoMultiplierH": 2.24,
    "evolvesTo": "Persian"
  },
  {
    "name": "Psyduck",
    "evoMultiplierL": 2.22,
    "evoMultiplierH": 2.29,
    "evolvesTo": "Golduck"
  },
  {
    "name": "Mankey",
    "evoMultiplierL": 2.17,
    "evoMultiplierH": 2.28,
    "evolvesTo": "Pimeape"
  },
  {
    "name": "Growlithe",
    "evoMultiplierL": 2.31,
    "evoMultiplierH": 2.36,
    "evolvesTo": "Arcanine"
  },
  {
    "name": "Poliwag",
    "evoMultiplierL": 1.72,
    "evoMultiplierH": 1.73,
    "evolvesTo": "Poliwhirl"
  },
  {
    "name": "Poliwhirl",
    "evoMultiplierL": 1.9,
    "evoMultiplierH": 1.96,
    "evolvesTo": "Poliwrath"
  },
  {
    "name": "Abra",
    "evoMultiplierL": 1.36,
    "evoMultiplierH": 1.95,
    "evolvesTo": "Kadabra"
  },
  {
    "name": "Kadabra",
    "evoMultiplierL": 1.4,
    "evoMultiplierH": 1.65,
    "evolvesTo": "Alakazam"
  },
  {
    "name": "Machop",
    "evoMultiplierL": 1.62,
    "evoMultiplierH": 1.67,
    "evolvesTo": "Machoke"
  },
  {
    "name": "Machoke",
    "evoMultiplierL": 1.48,
    "evoMultiplierH": 1.7,
    "evolvesTo": "Machamp"
  },
  {
    "name": "Bellsprout",
    "evoMultiplierL": 1.54,
    "evoMultiplierH": 1.6,
    "evolvesTo": "Weepinbell"
  },
  {
    "name": "Weepinbell",
    "evoMultiplierL": 1.47,
    "evoMultiplierH": 1.59,
    "evolvesTo": "Victreebell"
  },
  {
    "name": "Tentacool",
    "evoMultiplierL": 2.47,
    "evoMultiplierH": 2.6,
    "evolvesTo": "Tentacruel"
  },
  {
    "name": "Geodude",
    "evoMultiplierL": 1.75,
    "evoMultiplierH": 1.76,
    "evolvesTo": "Graveler"
  },
  {
    "name": "Graveler",
    "evoMultiplierL": 1.64,
    "evoMultiplierH": 1.72,
    "evolvesTo": "Golem"
  },
  {
    "name": "Ponyta",
    "evoMultiplierL": 1.48,
    "evoMultiplierH": 1.5,
    "evolvesTo": "Rapidash"
  },
  {
    "name": "Slowpoke",
    "evoMultiplierL": 2.19,
    "evoMultiplierH": 2.26,
    "evolvesTo": "Slowbro"
  },
  {
    "name": "Magnemite",
    "evoMultiplierL": 2.16,
    "evoMultiplierH": 2.17,
    "evolvesTo": "Magneton"
  },
  {
    "name": "Doduo",
    "evoMultiplierL": 2.19,
    "evoMultiplierH": 2.24,
    "evolvesTo": "Dodrio"
  },
  {
    "name": "Seel",
    "evoMultiplierL": 1.04,
    "evoMultiplierH": 1.96,
    "evolvesTo": "Dewgong"
  },
  {
    "name": "Grimer",
    "evoMultiplierL": 2.01,
    "evoMultiplierH": 2.44,
    "evolvesTo": "Muk"
  },
  {
    "name": "Shellder",
    "evoMultiplierL": 2.62,
    "evoMultiplierH": 2.65,
    "evolvesTo": "Cloyster"
  },
  {
    "name": "Gastly",
    "evoMultiplierL": 1.75,
    "evoMultiplierH": 1.83,
    "evolvesTo": "Haunter"
  },
  {
    "name": "Haunter",
    "evoMultiplierL": 1.56,
    "evoMultiplierH": 1.8,
    "evolvesTo": "Gengar"
  },
  {
    "name": "Drowzee",
    "evoMultiplierL": 2.08,
    "evoMultiplierH": 2.09,
    "evolvesTo": "Hypno"
  },
  {
    "name": "Krabby",
    "evoMultiplierL": 2.36,
    "evoMultiplierH": 2.4,
    "evolvesTo": "Kingler"
  },
  {
    "name": "Voltorb",
    "evoMultiplierL": 2.01,
    "evoMultiplierH": 2.02,
    "evolvesTo": "Electrode"
  },
  {
    "name": "Exeggcute",
    "evoMultiplierL": 2.7,
    "evoMultiplierH": 3.18,
    "evolvesTo": "Exeggutor"
  },
  {
    "name": "Cubone",
    "evoMultiplierL": 1.65,
    "evoMultiplierH": 1.67,
    "evolvesTo": "Marowak"
  },
  {
    "name": "Koffing",
    "evoMultiplierL": 1.95,
    "evoMultiplierH": 2.03,
    "evolvesTo": "Weezing"
  },
  {
    "name": "Rhyhorn",
    "evoMultiplierL": 1.9,
    "evoMultiplierH": 1.91,
    "evolvesTo": "Rhydon"
  },
  {
    "name": "Horsea",
    "evoMultiplierL": 2.19,
    "evoMultiplierH": 2.23,
    "evolvesTo": "Seadra"
  },
  {
    "name": "Goldeen",
    "evoMultiplierL": 2.14,
    "evoMultiplierH": 2.24,
    "evolvesTo": "Seaking"
  },
  {
    "name": "Staryu",
    "evoMultiplierL": 2.38,
    "evoMultiplierH": 2.41,
    "evolvesTo": "Starmie"
  },
  {
    "name": "Magikarp",
    "evoMultiplierL": 10.1,
    "evoMultiplierH": 11.8,
    "evolvesTo": "Gyarados"
  },
  {
    "name": "Eevee (Vaporeon)",
    "evoMultiplierL": 2.63,
    "evoMultiplierH": 2.64,
    "evolvesTo": "Vaporeon"
  },
  {
    "name": "Eevee (Jolteon)",
    "evoMultiplierL": 2.02,
    "evoMultiplierH": 2.1,
    "evolvesTo": "Jolteon"
  },
  {
    "name": "Eevee (Flareon)",
    "evoMultiplierL": 2.47,
    "evoMultiplierH": 2.48,
    "evolvesTo": "Flareon"
  },
  {
    "name": "Eevee",
    "evoMultiplierL": [2.63, 2.02, 2.47],
    "evoMultiplierH": [2.64, 2.1, 2.48],
    "evolvesTo": ["Vaporeon", "Jolteon", "Flareon"]
  },
  {
    "name": "Omanyte",
    "evoMultiplierL": 1.99,
    "evoMultiplierH": 2.12,
    "evolvesTo": "Omastar"
  },
  {
    "name": "Kabuto",
    "evoMultiplierL": 1.97,
    "evoMultiplierH": 2.37,
    "evolvesTo": "Kabutops"
  },
  {
    "name": "Dratini",
    "evoMultiplierL": 1.79,
    "evoMultiplierH": 1.87,
    "evolvesTo": "Dragonair"
  },
  {
    "name": "Dragonair",
    "evoMultiplierL": 2.01,
    "evoMultiplierH": 2.09,
    "evolvesTo": "Dragonite"
  }
];

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
