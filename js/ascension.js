addLayer("asc", {
    effect(){

    },
    effect(){
        return ExpantaNum.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
      effect(){
        return player[this.layer].points.max(1).pow(500).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
  doReset(resettingLayer) {
    let keep = [];
    if (hasMilestone("g", 2) && resettingLayer=="g", "c", "d") keep.push("milestones")
    if (hasMilestone("f", 3) && resettingLayer=="f", "e", "h") keep.push("milestones")
    if (hasMilestone("g", 3) && resettingLayer=="g", "c", "d") keep.push("upgrades")
    if (hasMilestone("f", 3) && resettingLayer=="f", "d", "e", "h") keep.push("upgrades")
    if (layers[resettingLayer].row > this.row) layerDataReset("asc", keep)
},
autoPrestige() {
    return hasUpgrade("g", 25)
},
tabFormat: [
    "main-display",
    "prestige-button",
    ["microtabs", "stuff"],
    ["blank", "25px"],
],
microtabs: {
    stuff: {
                    "Upgrades": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,5,6]]
                ]
            },
                    "Milestones": {
                        content: [
                            ["blank", "15px"],
                            "milestones"
                        ]
                    },
            },
        },
    upgrades: {
        11: { title: "51",
        description: "1,000x Point gain.",
        cost: new EN(6),

        },
        12: { title: "52",
        description: "Point gain is boosted by Ascension.",
        cost: new EN(9),
        effect() {
            return player[this.layer].points.add(5).pow(2.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("asc", 11)
        }
        },
        13: { title: "53",
        description: "69,420x Point Gain.",
        cost: new EN(12),
        unlocked() {
            return hasUpgrade("asc", 12)
        
        }
        },
        14: { title: "54",
        description: "Gain 1,000x More Prestige Points.",
        cost: new EN(15),
        unlocked() {
            return hasUpgrade("asc", 13)
        
        }
        },
        15: { title: "55",
        description: "Keep Row 3 Prestige Point Upgrades.",
        cost: new EN(16),
        unlocked() {
            return hasUpgrade("asc", 14)
        
        }
        },
        21: { title: "56",
        description: "69x Button Power.",
        cost: new EN(17),
        unlocked() {
            return hasUpgrade("asc", 15)
        
        }
        },
        22: { title: "57",
        description: "10,000x Prestige Point Gain.",
        cost: new EN(17),
        unlocked() {
            return hasUpgrade("asc", 21)
        
        }
        },
        23: { title: "58",
        description: "1,000,000x Points Gain.",
        cost: new EN(18),
        unlocked() {
            return hasUpgrade("asc", 22)
        
        }
        },
        24: { title: "59",
        description: "100,000x Prestige Point Gain.",
        cost: new EN(21),
        unlocked() {
            return hasUpgrade("asc", 23)
        
        }
        },
        25: { title: "60",
        description: "More Button Power Upgrades.",
        cost: new EN(22),
        unlocked() {
            return hasUpgrade("asc", 24)
        
        }
        },
        31: { title: "61",
        description: "Gain 1e42x Button Power.",
        cost: new EN(107),
        unlocked() {
            return hasUpgrade("g", 25)
        
        }
        },
        32: { title: "62",
        description: "Gain 6.969e69x Points.",
        cost: new EN(112),
        unlocked() {
            return hasUpgrade("asc", 31)
        
        }
        },
        33: { title: "63",
        description: "Gain 1e33x Prestige Points.",
        cost: new EN(125),
        unlocked() {
            return hasUpgrade("asc", 32)
        
        }
        },
        34: { title: "64",
        description: "Gain 1e25x Button Power.",
        cost: new EN(129),
        unlocked() {
            return hasUpgrade("asc", 33)
        
        }
        },
        35: { title: "65",
        description: "Unlock a new layer.",
        cost: new EN(131),
        unlocked() {
            return hasUpgrade("asc", 34)
        
        }
        },
        41: { title: "66",
        description: "1e10x Points.",
        cost: new EN(166),
        unlocked() {
            return hasUpgrade("c", 25)
        
        }
        },
        42: { title: "67",
        description: "1e20x Points.",
        cost: new EN(168),
        unlocked() {
            return hasUpgrade("asc", 41)
        
        }
        },
        43: { title: "68",
        description: "1e40x Points.",
        cost: new EN(170),
        unlocked() {
            return hasUpgrade("asc", 42)
        
        }
        },
        44: { title: "69",
        description: "1e69x Points.",
        cost: new EN(170),
        unlocked() {
            return hasUpgrade("asc", 43)
        
        }
        },
        45: { title: "70",
        description: "Unlock more grass upgrades.",
        cost: new EN(183),
        unlocked() {
            return hasUpgrade("asc", 44)
        
        }
        },
        51: { title: "71",
        description: "1e150x PP.",
        cost: new EN(318),
        unlocked() {
            return hasUpgrade("c", 35)
        
        }
        },
        52: { title: "72",
        description: "1e100x BP.",
        cost: new EN(327),
        unlocked() {
            return hasUpgrade("asc", 51)
        
        }
        },
        53: { title: "73",
        description: "1e10x Grass.",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("asc", 52)
        
        }
        },
        54: { title: "74",
        description: "100,000x Cups.",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("asc", 53)
        
        }
        },
        55: { title: "75",
        description: "1e100x Points.",
        cost: new EN(333),
        unlocked() {
            return hasUpgrade("asc", 54)
        
        }
        },
        61: { title: "?",
        description: "1e1,014x Points.",
        cost: new EN(1),
        unlocked() {
            return hasUpgrade("b", 61)
        
        }
        },
    },
    name: "Ascension", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Asc", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false,
    }},
    color: "#AA4A44",
    requires: new EN(1e116), // Can be a function that takes requirement increases into account
    resource: "Ascension", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent: 2, // Prestige currency exponent
    resetsNothing() { return player.asc.auto },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    canBuyMax() { return hasMilestone("asc", 2) },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "A", description: "A: Reset for ascension", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing() {return hasMilestone("asc", 3)},
    layerShown(){return (hasUpgrade("p", 35) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "16 Ascension",
            effectDescription: "Gain 100% Prestige Points every second.",
            done() { return player.asc.points.gte(16) }
        }, 2: {requirementDescription: "25 Ascension",
          effectDescription: "You can buy max ascensions.",
          
             done() { return player.asc.points.gte(25)},},
             3: {requirementDescription: "107 Ascension",
             effectDescription: "Ascension resets nothing.",
             
                done() { return player.asc.points.gte(107)},},
        
    },
})