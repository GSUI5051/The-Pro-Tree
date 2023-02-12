addLayer("j", {
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
                        ["upgrades", [1,2,3,4,5,6,7,8,9]]
                    ]
                },
                        "Milestones": {
                            content: [
                                ["blank", "15px"],
                                "milestones"
                            ]
                        },
                        "Challenges": {
                            unlocked() {return (hasMilestone("j", 8))},
                            content: [
                                ["blank", "15px"],
                                "challenges"
                            ]
            },
        },
    },
    upgrades: {
        11: { title: "251",
        description: "Gain e1e12x Points.",
        cost: new EN("1"),

        },
        12: { title: "227",
        description: "Gain e1e14x Points.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("j", 11)
        }
        },
        13: { title: "228",
        description: "Gain e1e15x Points.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("j", 12)
        }
        },
        14: { title: "229",
        description: "Gain e1e17x Points and Double Jetpack gain.",
        cost: new EN("69"),
        unlocked() {
            return hasUpgrade("j", 13)
        }
        },
        15: { title: "230",
        description: "Triple Jetpack gain.",
        cost: new EN("420"),
        unlocked() {
            return hasUpgrade("j", 14)
        }
        },
        21: { title: "231",
        description: "Quadruple Jetpack gain and e1e18x Points.",
        cost: new EN("1337"),
        unlocked() {
            return hasUpgrade("j", 15)
        }
        },
        22: { title: "232",
        description: "Quintuple Jetpack Gain.",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("j", 21)
        }
        },
        23: { title: "233",
        description: "6x Jetpack Gain and e1e19x Points.",
        cost: new EN("69420"),
        unlocked() {
            return hasUpgrade("j", 22)
        }
        },
        24: { title: "234",
        description: "7x Jetpack Gain.",
        cost: new EN("1e5"),
        unlocked() {
            return hasUpgrade("j", 23)
        }
        },
        25: { title: "235",
        description: "8x Jetpack Gain.",
        cost: new EN("2e6"),
        unlocked() {
            return hasUpgrade("j", 24)
        }
        },
        31: { title: "236",
        description: "9x Jetpack Gain and e1e20x Points.",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("j", 25)
        }
        },
        32: { title: "237",
        description: "10x Jetpack Gain.",
        cost: new EN("5e7"),
        unlocked() {
            return hasUpgrade("j", 31)
        }
        },
        33: { title: "238",
        description: "20x Jetpack Gain.",
        cost: new EN("1e9"),
        unlocked() {
            return hasUpgrade("j", 32)
        }
        },
        34: { title: "239",
        description: "30x Jetpack Gain.",
        cost: new EN("1e10"),
        unlocked() {
            return hasUpgrade("j", 33)
        }
        },
        35: { title: "240",
        description: "40x Jetpack Gain.",
        cost: new EN("1e12"),
        unlocked() {
            return hasUpgrade("j", 34)
        }
        },
        41: { title: "241",
        description: "50x Jetpack Gain and e1e21x Points.",
        cost: new EN("2.5e13"),
        unlocked() {
            return hasUpgrade("j", 35)
        }
        },
        42: { title: "242",
        description: "60x Jetpack Gain.",
        cost: new EN("1e15"),
        unlocked() {
            return hasUpgrade("j", 41)
        }
        },
        43: { title: "243",
        description: "70x Jetpack Gain and e1e22x Points.",
        cost: new EN("2e16"),
        unlocked() {
            return hasUpgrade("j", 42)
        }
        },
        44: { title: "244",
        description: "80x Jetpack Gain.",
        cost: new EN("1e18"),
        unlocked() {
            return hasUpgrade("j", 43)
        }
        },
        45: { title: "245",
        description: "90x Jetpack Gain and e1e23x Points.",
        cost: new EN("1e20"),
        unlocked() {
            return hasUpgrade("j", 44)
        }
        },
        51: { title: "246",
        description: "More Points!",
        cost: new EN("eee47"),
        unlocked() {
            return hasUpgrade("k", 45)
        }
        },
        52: { title: "247",
        description: "More Points again!",
        cost: new EN("eee63"),
        unlocked() {
            return hasUpgrade("j", 51)
        }
        },
        53: { title: "248",
        description: "More Points yet again!",
        cost: new EN("eee79"),
        unlocked() {
            return hasUpgrade("j", 52)
        }
        },
        54: { title: "249",
        description: "More Points yet again and again!",
        cost: new EN("eee111"),
        unlocked() {
            return hasUpgrade("j", 53)
        }
        },
        55: { title: "250",
        description: "More Points yet again and again and unlocks a new layer!",
        cost: new EN("eee200"),
        unlocked() {
            return hasUpgrade("j", 54)
        }
        },
        61: { title: "?",
        description: "Increase key gain.",
        cost: new EN("-1"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        62: { title: "?",
        description: "Increase key gain again.",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        63: { title: "?",
        description: "Increase key gain yet again.",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        64: { title: "?",
        description: "Increase key gain yet again and again.",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
        65: { title: "?",
        description: "Increase key gain yet again and again and again.",
        cost: new EN("eeeee14"),
        unlocked() {
            return inChallenge("o", 11)
        }
        },
    },
    milestones: {
         1: {requirementDescription: "1 Jetpack",
          effectDescription: "Gain 100% of Fruits and Houses every second.",
             done() { return player.j.points.gte(1)},},
         2: {requirementDescription: "2 Total Jetpacks",
             effectDescription: "Keep Fruits stuff on reset.",
                done() { return player.j.total.gte(2)},},
        3: {requirementDescription: "4 Total Jetpacks",
             effectDescription: "Keep Electricity stuff on reset.",
            done() { return player.j.total.gte(4)},},
         4: {requirementDescription: "16 Total Jetpacks",
             effectDescription: "Keep House stuff on reset.",
                done() { return player.j.total.gte(16)},},
         5: {requirementDescription: "256 Total Jetpacks",
             effectDescription: "Keep Ice stuff on reset.",
              done() { return player.j.total.gte(256)},},
         6: {requirementDescription: "65,536 Total Jetpacks",
             effectDescription: "Autobuy Electricity and resets nothing.",
                done() { return player.j.total.gte(65536)},},
        7: {requirementDescription: "4.294e9 Total Jetpacks",
             effectDescription: "Autobuy Ice and resets nothing.",
                done() { return player.j.total.gte(4.294e9)},},
                8: {requirementDescription: "2.222e22 Total Jetpacks",
                effectDescription: "Unlock a challenge.",
                   done() { return player.j.total.gte(2.222e22)},},
    },
    challenges: {
        11: {
            name: "Turtle",
            challengeDescription: "Raise Row 1 to Row 4 ^0.1.",
            goalDescription: "1e111,111,125 Points.",
            rewardDescription: "Gain ^1.01 Points.",
            canComplete: function() {return player.points.gte("e111111125")},
            unlocked() { return (hasMilestone('j', 8)) },
       },
       12: {
        name: "Trap",
        challengeDescription: "You start with 1 point every second.",
        goalDescription: "ee1.79e308 Points.",
        rewardDescription: "Gain ^2 Lights and increase slighty point gain.",
        canComplete: function() {return player.points.gte("ee1.79e308")},
        unlocked() { return (hasUpgrade('l', 31)) },
   }},
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
        return player[this.layer].points.max(1).pow("ee16").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Jetpacks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "J", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#ffa500",
    requires: new EN("e2e12"), // Can be a function that takes requirement increases into account
    resource: "Jetpacks", // Name of prestige currency
    baseResource: "Fruits", // Name of resource prestige is based on
    baseAmount() {return player.f.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["f"],
    exponent: "1e-308", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('j', 14)) mult = mult.times(2)
        if (hasUpgrade('j', 15)) mult = mult.times(3)
        if (hasUpgrade('j', 21)) mult = mult.times(4)
        if (hasUpgrade('j', 22)) mult = mult.times(5)
        if (hasUpgrade('j', 23)) mult = mult.times(6)
        if (hasUpgrade('j', 24)) mult = mult.times(7)
        if (hasUpgrade('j', 25)) mult = mult.times(8)
        if (hasUpgrade('j', 31)) mult = mult.times(9)
        if (hasUpgrade('j', 32)) mult = mult.times(10)
        if (hasUpgrade('j', 33)) mult = mult.times(20)
        if (hasUpgrade('j', 34)) mult = mult.times(30)
        if (hasUpgrade('j', 35)) mult = mult.times(40)
        if (hasUpgrade('j', 41)) mult = mult.times(50)
        if (hasUpgrade('j', 42)) mult = mult.times(60)
        if (hasUpgrade('j', 43)) mult = mult.times(70)
        if (hasUpgrade('j', 44)) mult = mult.times(80)
        if (hasUpgrade('j', 45)) mult = mult.times(90)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    passiveGeneration() { 
        if (hasUpgrade("z", 44)) return (hasUpgrade("z", 44)?0:0)
        if (hasMilestone("o", 1)) return (hasMilestone("o", 1)?1:0)
        },        
        hotkeys: [
        {key: "j", description: "J: Reset for Jetpacks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    doReset(resettingLayer) {
        let keep = [];
        if (hasMilestone("o", 3) && resettingLayer=="o", "q", "r") keep.push("milestones")
        if (hasMilestone("o", 3) && resettingLayer=="o", "q", "r") keep.push("upgrades")
        if (hasMilestone("o", 3) && resettingLayer=="o", "q", "r") keep.push("challenges")
        if (layers[resettingLayer].row > this.row) layerDataReset("j", keep)
    },
    layerShown(){if (hasUpgrade("z", 44)) return false
    else return (hasUpgrade("i", 45) || player[this.layer].unlocked)},
})