addLayer("o", {
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
                            unlocked() {return (hasMilestone("o", 8))},
                            content: [
                                ["blank", "15px"],
                                "challenges"
                            ]
            },
        },
    },
    upgrades: {
        11: { title: "376",
        description: "Gain ^1.01 Lights and ^1.1 Keys.",
        cost: new EN("1"),
        },
        12: { title: "377",
        description: "Gain ^1.1 Lights and ^2 Keys.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("o", 11)
        }
        },
        13: { title: "378",
        description: "Gain ^1.25 Lights, ^3 Keys and autobuy keys upgrades.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("o", 12)
        }
        },
        14: { title: "379",
        description: "Gain x8 Lights, x64 Keys and autobuy lights upgrades.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("o", 13)
        }
        },
        15: { title: "380",
        description: "Gain x2 Objects, ^1.5 Lights and ^4 Keys.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("o", 14)
        }
        },
        21: { title: "381",
        description: "Gain x2 Objects again, ^2 Lights and ^6 Keys.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("o", 15)
        }
        },
        22: { title: "382",
        description: "Gain x2 Objects yet again, ^3 Lights and ^36 Keys.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("o", 21)
        }
        },
        23: { title: "383",
        description: "^4 Lights and ^256 Keys.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("o", 22)
        }
        },
        24: { title: "384",
        description: "^5 Lights and ^3,125 Keys.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("o", 23)
        }
        },
        25: { title: "385",
        description: "^6 Lights, ^46,656 Keys and autobuy money upgrades.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("o", 24)
        }
        },
        31: { title: "386",
        description: "^8 Lights and ^16,777,216 Keys.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("o", 25)
        }
        },
        32: { title: "387",
        description: "Gain x4 Objects, ^10 Lights and ^1e10 Keys.",
        cost: new EN("128"),
        unlocked() {
            return hasUpgrade("o", 31)
        }
        },
        33: { title: "388",
        description: "^13 Lights and ^3e14 Keys.",
        cost: new EN("1024"),
        unlocked() {
            return hasUpgrade("o", 32)
        }
        },
        34: { title: "389",
        description: "^16 Lights and ^1.85e19 Keys.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("o", 33)
        }
        },
        35: { title: "390",
        description: "^20 Lights and ^1e26 Keys.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("o", 34)
        }
        },
        41: { title: "391",
        description: "^25 Lights and ^1e35 Keys.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("o", 35)
        }
        },
        42: { title: "392",
        description: "^2 Lights and ^2e44 Keys.",
        cost: new EN("131072"),
        unlocked() {
            return hasUpgrade("o", 41)
        }
        },
        43: { title: "393",
        description: "^1.1 Lights and ^1e69 Keys.",
        cost: new EN("8388608"),
        unlocked() {
            return hasUpgrade("o", 42)
        }
        },
        44: { title: "394",
        description: "^1.2 Lights and ^1e100 Keys.",
        cost: new EN("33554432"),
        unlocked() {
            return hasUpgrade("o", 43)
        }
        },
        45: { title: "395",
        description: "Gain x4 Objects, ^1.1 Lights and ^1e153 Keys.",
        cost: new EN("268435456"),
        unlocked() {
            return hasUpgrade("o", 44)
        }
        },
        51: { title: "396",
        description: "^1.1 Lights and ^1e308 Keys.",
        cost: new EN("2147483648"),
        unlocked() {
            return hasUpgrade("o", 45)
        }
        },
        52: { title: "397",
        description: "^1.1 Lights and ^1e420 Keys.",
        cost: new EN("274877906944"),
        unlocked() {
            return hasUpgrade("o", 51)
        }
        },
        53: { title: "398",
        description: "^1.1 Lights and ^1e666 Keys.",
        cost: new EN("1.0995116e12"),
        unlocked() {
            return hasUpgrade("o", 52)
        }
        },
        54: { title: "399",
        description: "^1.2 Lights and ^1e1,000 Keys.",
        cost: new EN("4.3980465e12"),
        unlocked() {
            return hasUpgrade("o", 53)
        }
        },
        55: { title: "400",
        description: "^4 Lights and ^1e3,003 Keys.",
        cost: new EN("1.1258999e15"),
        unlocked() {
            return hasUpgrade("o", 54)
        }
        },
        61: { title: "?",
        description: "Complete the challenge.",
        cost: new EN("2e44"),
        unlocked() {
            return hasUpgrade("j", 65)
        }
        },
        62: { title: "?",
        description: "Unlock another challenge.",
        cost: new EN("1e163"),
        unlocked() {
            return hasUpgrade("o", 61)
        }
        },
        63: { title: "?",
        description: "Complete the 2nd challenge.",
        cost: new EN("1e163"),
        unlocked() {
            return hasUpgrade("l", 65)
        }
        },
        64: { title: "?",
        description: "^2 Lights and increase key gain by even more.",
        cost: new EN("e2539"),
        unlocked() {
            return hasUpgrade("o", 63)
        }
        },
        65: { title: "?",
        description: "Unlock the 3rd challenge.",
        cost: new EN("e5074"),
        unlocked() {
            return hasUpgrade("o", 64)
        }
        },
        66: { title: "?",
        description: "Tetrate the point gain based on time spent on this reset.",
        cost: new EN("1"),
        effect() {
            let time = EN(player.o.resetTime)
            if (hasUpgrade("q", 55)) time = time.mul(4)
            if (hasChallenge("o", 21)) time = time.mul(2)
            if (hasUpgrade("r", 55)) time = time.mul(16)
            if (hasUpgrade("s", 55)) time = time.mul(256)
            if (hasUpgrade("t", 55)) time = time.mul(65536)
            if (hasChallenge("o", 23)) time = time.mul(4)
            if (hasUpgrade("u", 55)) time = time.mul(4294967296)
            if (hasAchievement("a", 151)) time = time.mul(4096)
            return EN.tetr(10, time.add(1).pow(0.22316), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
            unlocked() {
                return hasUpgrade("o", 65)
        }
        },
    },
    effect(){

    },
    effect(){
        return ExpantaNum.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        */
    
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Objects", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "O", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#FF00FF",
    requires: new EN("e1.7e9"), // Can be a function that takes requirement increases into account
    resource: "Objects", // Name of prestige currency
    baseResource: "Lights", // Name of resource prestige is based on
    baseAmount() {return player.l.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["j"],
    exponent: "1e-19", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasMilestone('o', 3)) mult = mult.times(1.1)
        if (hasUpgrade('o', 15)) mult = mult.times(2)
        if (hasUpgrade('o', 21)) mult = mult.times(2)
        if (hasUpgrade('o', 22)) mult = mult.times(2)
        if (hasUpgrade('o', 32)) mult = mult.times(4)
        if (hasUpgrade('o', 45)) mult = mult.times(4)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    canBuyMax() { return hasMilestone("n", 1) },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "O", description: "O: Reset for Objects", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    milestones: {
        1: {requirementDescription: "1 Object",
         effectDescription: "Gain 100% of Jetpacks, Keys and Lights every second.",
            done() { return player.o.points.gte(1)},},
   2: {requirementDescription: "2 Total Objects",
         effectDescription: "Autobuy Money and Notes.",
            done() { return player.o.total.gte(2)},},
    
    3: {requirementDescription: "4 Total Objects",
         effectDescription: "x1.1 Objects.",
            done() { return player.o.total.gte(4)},},
    4: {requirementDescription: "16 Total Objects",
         effectDescription: "Keep Keys upgrades on reset.",
            done() { return player.o.total.gte(16)},},
    
    5: {requirementDescription: "256 Total Objects",
         effectDescription: "Keep Lights upgrades on reset.",
            done() { return player.o.total.gte(256)},},
    
    6: {requirementDescription: "65,536 Total Objects",
         effectDescription: "Keep Money stuff on reset.",
            done() { return player.o.total.gte(65536)},},
    7: {requirementDescription: "4.294e9 Total Objects",
         effectDescription: "Keep Notes stuff on reset.",
            done() { return player.o.total.gte(4.294e9)},},
    8: {requirementDescription: "1e44 Objects",
         effectDescription: "Unlock 1 new challenge.",
            done() { return player.o.points.gte(1e44)},},
    },
    layerShown(){return (hasUpgrade("n", 55) || player[this.layer].unlocked)},
    challenges: {
        11: {
            name: "Oe",
            challengeDescription: "You start with 1 key every second.",
            goalDescription: "e1.797e308 Keys.",
            rewardDescription: "Gain ^4 Lights and a giant boost to keys.",
            canComplete: function() {return player.k.points.gte("e1.797e308")},
            unlocked() { return (hasMilestone('o', 8)) },
       },
       12: {
        name: "Ordinary",
        challengeDescription: "You start with 1 light every second.",
        goalDescription: "e1.000e10 Lights.",
        rewardDescription: "Gain ^16 Lights and a even BIGGER boost to keys.",
        canComplete: function() {return player.l.points.gte("ee10")},
        unlocked() { return (hasUpgrade('o', 62)) },
   },
   13: {
    name: "Orbs",
    challengeDescription: "You start with 2 notes.",
    goalDescription: "2,022 Notes.",
    rewardDescription: "Gain ^256 Lights and get a lot of BIGGER boost to keys.",
    canComplete: function() {return player.n.points.gte("2022")},
    unlocked() { return (hasUpgrade('o', 65)) }
},
14: {
    name: "O",
    challengeDescription: "Just a normal run.",
    goalDescription: "7F7 Points.",
    rewardDescription: "Increase light and key gain.",
    canComplete: function() {return player.points.gte("eeeeeee7")},
    unlocked() { return (hasUpgrade('q', 55)) }
},
21: {
    name: "Ordinal",
    challengeDescription: "Just a normal run but harder.",
    goalDescription: "2F8 Points.",
    rewardDescription: "Unlock a new layer and OU71 x2.",
    canComplete: function() {return player.points.gte("eeeeeee100")},
    unlocked() { return (hasChallenge('o', 14)) }
},
22: {
    name: "Oxygen",
    challengeDescription: "The same but even harder.",
    goalDescription: "1F12 Points.",
    rewardDescription: "Unlock a new layer, increase light, key gain and etc.",
    canComplete: function() {return player.points.gte("eeeeeeeeeee10")},
    unlocked() { return (hasUpgrade('r', 55)) }
},
23: {
    name: "Oh my",
    challengeDescription: "You are so overpowered (Normal Run).",
    goalDescription: "1F666 Points.",
    rewardDescription: "Unlock the final layer for row 6 and OU71 x4.",
    canComplete: function() {return player.points.gte("10^^666")},
    unlocked() { return (hasUpgrade('t', 55)) }
},
    }
})