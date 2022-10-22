addLayer("c", {
    effect(){

    },
    effect(){
        return Decimal.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
      },
      effect(){
        return player[this.layer].points.max(1).pow(5000000).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
  challenges: {
    11: {
        name: "Buttonless^2",
        challengeDescription: "Raise Button Power gain to ^0.0001.",
        goalDescription: "1e325,300 Points.",
        rewardDescription: "Gain 1e1,337x Button Power.",
        canComplete: function() {return player.points.gte("e325300")},
        unlocked() { return (hasUpgrade('d', 45)) },
    },
    12: {
        name: "Rooted",
        challengeDescription: "Raise Point Gain to ^0.5, Prestige Point Gain to ^0.25 and Button Power to ^0.125.",
        goalDescription: "1e15,848 Points.",
        rewardDescription: "Gain 1e1,503x Prestige Points.",
        canComplete: function() {return player.points.gte("e15848")},
        unlocked() { return (hasChallenge('c', 11)) },
    },
    21: {
        name: "Slowness",
        challengeDescription: "Raise Point gain to ^0.0145.",
        goalDescription: "1.00e332 Points.",
        rewardDescription: "Gain 1e100x Cups and 1e1,000x Grass.",
        canComplete: function() {return player.points.gte("e332")},
        unlocked() { return (hasChallenge('c', 12)) },
        },
        22: {
            name: "Timewall",
            challengeDescription: "Raise Prestige Point gain and Button Power to ^0.0145.",
            goalDescription: "1e87,770 Points.",
            rewardDescription: "Gain 1e2,000x Points.",
            canComplete: function() {return player.points.gte("e87770")},
            unlocked() { return (hasChallenge('c', 21)) },
           }},
    upgrades: {
        11: { title: "101",
        description: "1e20x Points.",
        cost: new Decimal("1"),

        },
        12: { title: "102",
        description: "Point gain is boosted by Cups.",
        cost: new Decimal(4),
        effect() {
            return player[this.layer].points.add(1e10).pow(0.360)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("c", 11)
        }
        },
        13: { title: "103",
        description: "Gain 1e25x Points.",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("c", 12)
        }
        },
        14: { title: "104",
        description: "Gain 1e20x Prestige Points and 1e15x Button Power.",
        cost: new Decimal("20"),
        unlocked() {
            return hasUpgrade("c", 13)
        }
        
        },
        15: { title: "105",
        description: "Gain 10x Cups and 1,000x Grass.",
        cost: new Decimal("30"),
        unlocked() {
            return hasUpgrade("c", 14)
        }
        },
        21: { title: "106",
        description: "Gain 1e10x Points.",
        cost: new Decimal("256"),
        unlocked() {
            return hasUpgrade("c", 15)
        }
        },
        22: { title: "107",
        description: "Gain 1e50x Points.",
        cost: new Decimal("420"),
        unlocked() {
            return hasUpgrade("c", 21)
        }
        },
        23: { title: "108",
        description: "Cups gain is boosted by Points.",
        cost: new Decimal("666"),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.00005)
            
        },
        unlocked() {
            return hasUpgrade("c", 22)
        }
        },
        24: { title: "109",
        description: "Gain 1e69x Points.",
        cost: new Decimal("2000"),
        unlocked() {
            return hasUpgrade("c", 23)
        }
        },
        25: { title: "110",
        description: "1e30x Points and 1 new row of ascension upgrades.",
        cost: new Decimal("10000"),
        unlocked() {
            return hasUpgrade("c", 24)
        }
        },
        31: { title: "111",
        description: "69,420x Cups and Grass.",
        cost: new Decimal("2.5e23"),
        unlocked() {
            return hasUpgrade("d", 25)
        }
        },
        32: { title: "112",
        description: "^1.01 Cups, ^1.02 Grass, ^1.04 Button Power, ^1.08 Prestige Points.",
        cost: new Decimal("4e28"),
        unlocked() {
            return hasUpgrade("c", 31)
        }
        },
        33: { title: "113",
        description: "1e200x Points.",
        cost: new Decimal("1e31"),
        unlocked() {
            return hasUpgrade("c", 32)
        }
        },
        34: { title: "114",
        description: "69,420x Cups and Grass.",
        cost: new Decimal("3.333e33"),
        unlocked() {
            return hasUpgrade("c", 33)
        }
        },
        35: { title: "115",
        description: "1.111e111x Points.",
        cost: new Decimal("1e38"),
        unlocked() {
            return hasUpgrade("c", 34)
        }
        },
        41: { title: "116",
        description: "1e10x Cups and 1e20x Grass.",
        cost: new Decimal("1e173"),
        unlocked() {
            return hasChallenge("b", 13)
        }
        },
        42: { title: "117",
        description: "1.79e308x BP.",
        cost: new Decimal("1e184"),
        unlocked() {
            return hasUpgrade("c", 41)
        }
        },
        43: { title: "118",
        description: "1.79e308x PP.",
        cost: new Decimal("1e189"),
        unlocked() {
            return hasUpgrade("c", 42)
        }
        },
        44: { title: "119",
        description: "1e420x Points.",
        cost: new Decimal("1e194"),
        unlocked() {
            return hasUpgrade("c", 43)
        }
        },
        45: { title: "120",
        description: "1e20x Cups, 1e100x Grass.",
        cost: new Decimal("1e205"),
        unlocked() {
            return hasUpgrade("c", 44)
        }
        },
        51: { title: "121",
        description: "1e308x Points.",
        cost: new Decimal("1e412"),
        unlocked() {
            return hasChallenge("g", 13)
        }
        },
        52: { title: "122",
        description: "1e308x Grass.",
        cost: new Decimal("1e423"),
        unlocked() {
            return hasUpgrade("c", 51)
        }
        },
        53: { title: "123",
        description: "1e69x Cups.",
        cost: new Decimal("1e427"),
        unlocked() {
            return hasUpgrade("c", 52)
        }
        },
        54: { title: "124",
        description: "1e69x Cups again.",
        cost: new Decimal("1e497"),
        unlocked() {
            return hasUpgrade("c", 53)
        }
        },
        55: { title: "125",
        description: "1e1,000x Points.",
        cost: new Decimal("1e567"),
        unlocked() {
            return hasUpgrade("c", 53)
        }
        },
    },
    name: "Cups", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "C", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#FFFF00",
    requires: new Decimal("1e3050"), // Can be a function that takes requirement increases into account
    resource: "Cups", // Name of prestige currency
    baseResource: "Button Power", // Name of resource prestige is based on
    baseAmount() {return player.b.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["g"],
    exponent: 0.001, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('c', 15)) mult = mult.times(10)
        if (hasUpgrade('c', 23)) mult = mult.times(upgradeEffect('c', 23))
        if (hasUpgrade('g', 32)) mult = mult.times(69)
        if (hasUpgrade('g', 35)) mult = mult.times(100)
        if (hasUpgrade('d', 14)) mult = mult.times(100)
        if (hasUpgrade('d', 15)) mult = mult.times(1000)
        if (hasUpgrade('d', 25)) mult = mult.times(1000)
        if (hasUpgrade('c', 31)) mult = mult.times(69420)
        if (hasUpgrade('c', 32)) mult = mult.pow(1.01)
        if (hasUpgrade('c', 34)) mult = mult.times(69420)
        if (hasUpgrade('a', 54)) mult = mult.times(100000)
        if (hasUpgrade('d', 35)) mult = mult.pow(1.01)
        if (hasUpgrade('d', 35)) mult = mult.times(1e10)
        if (hasUpgrade('f', 15)) mult = mult.times(1e10)
        if (hasUpgrade('c', 41)) mult = mult.times(1e10)
        if (hasUpgrade('c', 45)) mult = mult.times(1e20)
        if (hasUpgrade('g', 41)) mult = mult.pow(1.02)
        if (hasUpgrade('g', 53)) mult = mult.times(1e25)
        if (hasUpgrade('c', 53)) mult = mult.times(1e69)
        if (hasUpgrade('c', 54)) mult = mult.times(1e69)
        if (hasChallenge('c', 21)) mult = mult.times("1e100")
        if (inChallenge("f", 11)) mult = mult.pow(0.001)
        if (inChallenge("f", 12)) mult = mult.pow(0.1)
        if (hasUpgrade('i', 21)) mult = mult.pow(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "C: Reset for Cups", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("f", 6) && resettingLayer=="f" , "e", "h") keep.push("milestones")
        if (hasMilestone("f", 6) && resettingLayer=="f", "e", "h") keep.push("upgrades")
        if (hasMilestone("f", 6) && resettingLayer=="f", "e", "h") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("c", keep)
    },
    passiveGeneration() { return (hasMilestone("f", 1)&&player.current!="c")?1:0 },
    layerShown(){return (hasUpgrade("a", 35) || player[this.layer].unlocked)},
    milestones: {
        1: {
            requirementDescription: "5 Cups",
            effectDescription: "Keep Ascension Milestones on reset.",
            done() { return player.c.points.gte(5) }
        }, 2: {requirementDescription: "100 Cups",
          effectDescription: "Keep Button Power Upgrades on reset.",
             done() { return player.c.points.gte(100)},},
             3: {requirementDescription: "10,000 Cups",
             effectDescription: "Keep Ascension Upgrades on reset.",
                done() { return player.c.points.gte(10000)},},
    },
        },
)