addLayer("re", {
    effect(){

    },
    effect(){
        return ExpantaNum.pow(2, player[this.layer].points)
        /*
          you should use this.layer instead of <layerID>
          Decimal.pow(num1, num2) is an easier way to do
          num1.pow(num2)
        *

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
tabFormat: [
    "main-display",
    "prestige-button",
    ["microtabs", "stuff"],
    ["blank", "25px"],
],
row: "7",
microtabs: {
    stuff: {
                    "Upgrades": {
                        unlocked() {return (hasAchievement("a", 11))},
                content: [
                    ["blank", "15px"],
                    ["upgrades", [1,2,3,4,5,6,7,8,9,10,11]]
                ]
            },
            "Badges": {
                unlocked() {return (hasUpgrade("re", 55))},
                        content: [
                    ["blank", "15px"],
                    ["display-text", () => "You have <h2 style='color: #74fbd4; text-shadow: 0 0 10px #74fbd4'>" + format(player.re.badges) + "</h2> Badges, multiplying medal gain by <h2 style='color: #74fbd4; text-shadow: 0 0 10px #74fbd4'> <br>" + format(player.re.badges.max(1).pow(0.1)) + "x</h2>.<br>" + "<h3>" + format(tmp.re.effect)  + " Badges/s<h3> <br>"],
                    "buyables"
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
        tooltip() {
            return ("Reincarnation")
        },
        buyables: {
            11: {
                title: "<h3>Twelfth Buyable<h3>",
                cost(x) { return hasUpgrade("re",61) ? new EN(1000).mul(new EN(5).pow(x)) : new EN(1000).mul(new EN(10).pow(x)) },
                display() {return `<h3>Gain more badges.<h3>\nLevel: ` + formatWhole(player.re.buyables[11]) + `<br>Cost: ${format(this.cost())} Medals\nEffect: ${format(this.effect())}x Badges`},
                canAfford() {return player.re.points.gte(this.cost())},
                buy() {
                    player.re.points = player.re.points.sub(this.cost())
                    setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                },
                unlocked() { return hasUpgrade("re", 55)},
                effect(x) {
                    mult2 = new EN(x).gte(100)? new EN(2).pow(100).mul(new EN(1.01).pow(new EN(x).sub(15))):new EN(2).pow(x)
                    return mult2
            },
        },
        12: {
            title: "<h3>Fifteenth Buyable<h3>",
            cost(x) {return new EN("1000").pow(new EN(1.1).pow(x)).floor()},
            canAfford() { return player.re.points.gte(this.cost())},
            buy() {
               player.re.points = player.re.points.sub(this.cost())
               setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            display() {return `<h3>Exponentiate badge gain.<h3>\nLevel: `+ formatWhole(player.re.buyables[12]) + `\nCost: ${format(this.cost())}\n Medals<br>Effect: ^${format(this.effect())} Badges`},
            unlocked(){return hasUpgrade("re",85)},
            effect(x) { 
              mult2 = new EN(x)
              mult2 = new EN(x).gte(1000) ? new EN(1.1).pow(1000).mul(new EN(1.001).pow(new EN(x).sub(1000))) : new EN(1.01).pow(x)
              return new EN(mult2)}
          },
    },
    upgrades: {
        11: { title: "526",
        description: "Tetrate point gain based on your reincarnation spent on this reset.",
        cost: new EN(0),
        effect() {
            let time = EN(player.re.resetTime)
            if (hasUpgrade("re", 13)) time = time.mul(64)
            if (hasUpgrade("re", 44)) time = time.mul(1e9)
            if (hasUpgrade("re", 65)) time = time.pow(5)
            if (inChallenge("z", 62)) time = time.pow(0)
            if (hasUpgrade("re", 105)) time = time.pow(0)
            return EN.tetr(10, time.add(1).pow(0.1), time)
        },
        effectDisplay() { return "^" + format(this.effect()) },
        },
        12: { title: "527",
        description: "Gain more lights.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 11)
        }
        },
        13: { title: "528",
        description: "Increase the reincarnation upgrade 11 effect.",
        cost: new EN("1"),
        unlocked() {
            return hasUpgrade("re", 12)
        }
        },
        14: { title: "529",
        description: "Gain x2 Void.",
        cost: new EN("2"),
        unlocked() {
            return hasUpgrade("re", 13)
        }
        },
        15: { title: "530",
        description: "Gain x16 Universal and x256 Sand.",
        cost: new EN("4"),
        unlocked() {
            return hasUpgrade("re", 14)
        }
        },
        21: { title: "531",
        description: "Gain x4 Void and generate void passively.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 15)
        }
        },
        22: { title: "532",
        description: "Gain x2 Universal.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 21)
        }
        },
        23: { title: "533",
        description: "Gain x3 Trans and x9 Rings.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 22)
        }
        },
        24: { title: "534",
        description: "Gain x3 Void.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 23)
        }
        },
        25: { title: "535",
        description: "Gain x2 Trans and x1.1 Medals.",
        cost: new EN("8"),
        unlocked() {
            return hasUpgrade("re", 24)
        }
        },
        31: { title: "536",
        description: "Unlock the next layer.",
        cost: new EN("16"),
        unlocked() {
            return hasUpgrade("re", 25)
        }
        },
        32: { title: "537",
        description: "Gain x1.2 Medals.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 31)
        }
        },
        33: { title: "538",
        description: "Gain x1.25 Void.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 32)
        }
        },
        34: { title: "539",
        description: "Gain x2 Wood.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 33)
        }
        },
        35: { title: "540",
        description: "Gain x1.5 Wood and x1.25 Medals.",
        cost: new EN("32"),
        unlocked() {
            return hasUpgrade("re", 34)
        }
        },
        41: { title: "541",
        description: "Gain x1.25 Wood and x2 Void.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 35)
        }
        },
        42: { title: "542",
        description: "Gain x1.1 Wood, x69 Trans and Rings.",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 41)
        }
        },
        43: { title: "543",
        description: "Universal boosts itself (Cap at 1F6x).",
        cost: new EN("64"),
        unlocked() {
            return hasUpgrade("re", 42)
        },
        effect(){return player.u.points.root(0.001).add(1).gte("10^^6") ? new EN("10^^6") : player.u.points.root(0.001).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
    },
         44: { title: "544",
        description: "The Object upgrade 71 is x4 and increase the reincarnation upgrade 11 effect.",
        cost: new EN("128"),
        unlocked() {
            return hasUpgrade("re", 43)
        },
        },
        45: { title: "545",
        description: "Gain x1.337 Medals and Object upgrade 61 x2.",
        cost: new EN("256"),
        unlocked() {
            return hasUpgrade("re", 44)
        },
        },
        51: { title: "546",
        description: "Object Upgrade 71 x4, gain x4 void, x16 trans and x256 rings.",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 45)
        },
        },
        52: { title: "547",
        description: "Object Upgrade 71 x4 and gain x16 wood.",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 51)
        },
        },
        53: { title: "548",
        description: "Gain x1.5 Medals.",
        cost: new EN("512"),
        unlocked() {
            return hasUpgrade("re", 52)
        },
        },
        54: { title: "549",
        description: "Gain x64 Void.",
        cost: new EN("1024"),
        unlocked() {
            return hasUpgrade("re", 53)
        },
        },
        55: { title: "550",
        description: "Gain x2 medals, square object upgrade 71, unlock a new layer, gain a massive wood from start and unlock a sub-currency.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 54)
        },
        },
        61: { title: "551",
        description: "Make the reincarnation buyable cheaper.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 55)
        },
        },
        62: { title: "552",
        description: "Gain x2 X-Rays.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 61)
        },
        },
        63: { title: "553",
        description: "Gain x4 X-Rays.",
        cost: new EN("16384"),
        unlocked() {
            return hasUpgrade("re", 62)
        },
        },
        64: { title: "554",
        description: "Medals boosts itself.",
        cost: new EN("32768"),
        unlocked() {
            return hasUpgrade("re", 63)
        },
        effect(){return player.re.points.root(69).add(1).gte("1e69") ? new EN("1e69") : player.re.points.root(69).add(1)},
        effectDisplay(){return `${format(this.effect())}x`}
        },
        65: { title: "555",
        description: "Gain x1.5 Medals and reincarnation upgrade 11 is a lot stronger.",
        cost: new EN("65536"),
        unlocked() {
            return hasUpgrade("re", 64)
        },
        },
        71: { title: "556",
        description: "Gain x16 X-Rays.",
        cost: new EN("131072"),
        unlocked() {
            return hasUpgrade("re", 65)
        },
        },
        72: { title: "557",
        description: "Gain x32 X-Rays.",
        cost: new EN("262144"),
        unlocked() {
            return hasUpgrade("re", 71)
        },
        },
        73: { title: "558",
        description: "Gain x4,096 X-Rays.",
        cost: new EN("524288"),
        unlocked() {
            return hasUpgrade("re", 72)
        },
        },
        74: { title: "559",
        description: "Gain x1.1 Medals.",
        cost: new EN("1048576"),
        unlocked() {
            return hasUpgrade("re", 73)
        },
        },
        75: { title: "560",
        description: "Gain x2 Medals & Object Upgrade 61 is more powerful.",
        cost: new EN("8388608"),
        unlocked() {
            return hasUpgrade("re", 74)
        },
        },
        81: { title: "561",
        description: "Unlock a new layer and gain x1.5 medals.",
        cost: new EN("16777216"),
        unlocked() {
            return hasUpgrade("re", 75)
        },
        },
        82: { title: "562",
        description: "Gain x3,125 Yard and increase object upgrade 61 effect.",
        cost: new EN("67108864"),
        unlocked() {
            return hasUpgrade("re", 81)
        },
        },
        83: { title: "563",
        description: "Gain x1.7 Medals.",
        cost: new EN("134217728"),
        unlocked() {
            return hasUpgrade("re", 82)
        },
        },
        84: { title: "564",
        description: "Gain x1.5 Medals.",
        cost: new EN("268435456"),
        unlocked() {
            return hasUpgrade("re", 83)
        },
        },
        85: { title: "565",
        description: "Gain x3 Medals and unlock a new buyable.",
        cost: new EN("1073741824"),
        unlocked() {
            return hasUpgrade("re", 84)
        },
        },
        91: { title: "566",
        description: "Gain x2 Medals and unlock a new layer.",
        cost: new EN("8589934592"),
        unlocked() {
            return hasUpgrade("re", 85)
        },
        },
        92: { title: "567",
        description: "Gain x4 Medals.",
        cost: new EN("8589934592"),
        unlocked() {
            return hasUpgrade("re", 91)
        },
        },
        93: { title: "568",
        description: "Gain x8 Medals and x10,000 Zones.",
        cost: new EN("17179869184"),
        unlocked() {
            return hasUpgrade("re", 92)
        },
        },
        94: { title: "569",
        description: "Gain x1.5 Medals.",
        cost: new EN("68719476736"),
        unlocked() {
            return hasUpgrade("re", 93)
        },
        },
        95: { title: "570",
        description: "Gain x1.33 Medals and increase object upgrade 61 effect.",
        cost: new EN("137438953472"),
        unlocked() {
            return hasUpgrade("re", 94)
        },
        },
        101: { title: "571",
        description: "Gain x1.25 Medals, increase object upgrade 61 effect again and you start with more yard.",
        cost: new EN("274877906944"),
        unlocked() {
            return hasUpgrade("re", 95)
        },
        },
        102: { title: "572",
        description: "Gain x5 Medals and you start with even more yard.",
        cost: new EN("1.1258999e15"),
        unlocked() {
            return hasUpgrade("re", 101)
        },
        },
        103: { title: "573",
        description: "Gain x2 Medals, x1e9 Zones and object upgrade 61 even more effect.",
        cost: new EN("4.5035996e15"),
        unlocked() {
            return hasUpgrade("re", 102)
        },
        },
        104: { title: "574",
        description: "Gain x1.25 Medals.",
        cost: new EN("1.8014399e16"),
        unlocked() {
            return hasUpgrade("re", 103)
        },
        },
        105: { title: "575",
            description: "Pentate point gain based on your reincarnation spent on this reset, also unlocks a new layer! (Big Timewall) (But RU11 and OU61 does nothing.)",
            cost: new EN("1.4411519e17"),
            unlocked() {
                return hasUpgrade("re", 104)
            },
            effect() {
                let time = EN(player.re.resetTime)
                if (hasUpgrade("re", 111)) time = time.mul(16)
                if (hasUpgrade("re", 112)) time = time.mul(16.9)
                return EN.pent(10, time.add(1).pow(0.11829), time)
            },
            effectDisplay() { return "^^" + format(this.effect()) },
            },
        111: { title: "?",
        description: "Increase the reincarnation upgrade 105 effect, unlock the final layer and gain x10 arrows.",
        cost: new EN("2e19"),
        unlocked() {
            return hasUpgrade("re", 105)
        },
        },
        112: { title: "?",
        description: "Increase the reincarnation upgrade 105 effect yet again.",
        cost: new EN("5e23"),
        unlocked() {
            return hasUpgrade("re", 111)
        },
        },
    },
    name: "Reincarnation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Re", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        badges: new EN(0),
        auto: false,
    }},
    color: "#39e75f",
    requires: new EN(1), // Can be a function that takes requirement increases into account
    resource: "Medals", // Name of prestige currency
    baseResource: "Void", // Name of resource prestige is based on
    baseAmount() {return player.v.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: [],
    exponent: 0, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(25)
        if (hasUpgrade('v', 55)) mult = mult.times(5)
        if (hasMilestone('re', 4)) mult = mult.times(2)
        if (hasUpgrade('re', 25)) mult = mult.times(1.1)
        if (hasUpgrade('re', 32)) mult = mult.times(1.2)
        if (hasUpgrade('w', 11)) mult = mult.times(1.1)
        if (hasUpgrade('re', 35)) mult = mult.times(1.25)
        if (hasUpgrade('re', 45)) mult = mult.times(1.337)
        if (hasUpgrade('w', 55)) mult = mult.times(10)
        if (hasUpgrade('re', 53)) mult = mult.times(1.5)
        if (hasUpgrade('re', 55)) mult = mult.times(2)
        if (hasUpgrade('x', 11)) mult = mult.times(1.25)
        if (player.re.badges.gte(1)) mult = mult.times(player.re.badges.max(1).pow(0.1))
        if (hasUpgrade('re', 64)) mult = mult.times(upgradeEffect('re', 64))
        if (hasUpgrade('re', 65)) mult = mult.times(1.5)
        if (hasMilestone('re', 9)) mult = mult.times(1.1)
        if (hasUpgrade('x', 55)) mult = mult.times(30)
        if (hasMilestone('re', 10)) mult = mult.times(1.25)
        if (hasUpgrade('re', 74)) mult = mult.times(1.1)
        if (hasUpgrade('re', 75)) mult = mult.times(2)
        if (hasUpgrade('re', 81)) mult = mult.times(1.5)
        if (hasUpgrade('y', 11)) mult = mult.times(1.5)
        if (hasUpgrade('re', 83)) mult = mult.times(1.7)
        if (hasUpgrade('re', 84)) mult = mult.times(1.5)
        if (hasMilestone('re', 11)) mult = mult.times(1.111)
        if (hasUpgrade('y', 55)) mult = mult.div(3)
        if (hasUpgrade('re', 85)) mult = mult.times(3)
        if (hasUpgrade('re', 91)) mult = mult.times(2)
        if (hasUpgrade('re', 92)) mult = mult.times(4)
        if (hasUpgrade('re', 93)) mult = mult.times(8)
        if (hasUpgrade('re', 94)) mult = mult.times(1.5)
        if (hasUpgrade('re', 95)) mult = mult.times(1.33)
        if (hasUpgrade('re', 101)) mult = mult.times(1.25)
        if (hasMilestone('re', 13)) mult = mult.times(1.2)
        if (hasUpgrade('z', 11)) mult = mult.times(2)
        if (hasChallenge('z', 11)) mult = mult.times(1.1)
        if (hasChallenge('z', 12)) mult = mult.times(1.2)
        if (hasChallenge('z', 21)) mult = mult.times(1.3)
        if (hasChallenge('z', 22)) mult = mult.times(1.5)
        if (hasChallenge('z', 31)) mult = mult.times(1.6)
        if (hasChallenge('z', 32)) mult = mult.times(1.8)
        if (hasChallenge('z', 41)) mult = mult.times(1.9)
        if (hasChallenge('z', 42)) mult = mult.times(2.1)
        if (hasChallenge('z', 51)) mult = mult.times(2.4)
        if (hasChallenge('z', 52)) mult = mult.times(2.6)
        if (hasChallenge('z', 61)) mult = mult.times(2.9)
        if (hasChallenge('z', 62)) mult = mult.times(3.1)
        if (hasChallenge('z', 71)) mult = mult.times(3.5)
        if (hasChallenge('z', 72)) mult = mult.times(3.8)
        if (hasChallenge('z', 81)) mult = mult.times(4.2)
        if (hasUpgrade('re', 102)) mult = mult.times(5)
        if (hasUpgrade('re', 103)) mult = mult.times(2)
        if (hasUpgrade('re', 104)) mult = mult.times(1.25)
        if (hasUpgrade('ar', 55)) mult = mult.times(125)
        if (hasUpgrade('ba', 55)) mult = mult.times(10000)
        return mult
    },
    effect() {
        if (hasUpgrade("re", 55))
            return new EN(1).mul(buyableEffect("re", 11)).pow(buyableEffect("re", 12))
        let eff = EN.pow(1)
        return eff;
    },
    update(diff) {
        if (hasUpgrade("re", 55)) return player.re.badges = player.re.badges.add(tmp.re.effect.times(diff))
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    hotkeys: [
        {key: "%", description: "Shift+%: Reset for reincarnation", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
layerShown(){return (hasAchievement("a", 111) || player[this.layer].unlocked)},
    automate() {},
    milestones: {
        1: {
            requirementDescription: "1 Medal",
            effectDescription: "Gain 100% of Objects, Quantums, Rings, Sand, Transcension and Universal per second.",
            done() { return player.re.points.gte(1) }
        }, 2: {requirementDescription: "5 Total Medals",
          effectDescription: "Gain x2 Universal, x4 Trans, x8 Sand, x16 Rings, x32 Quantums and x64 Objects.",
             done() { return player.re.total.gte(5)},},
             3: {requirementDescription: "Finish Void Layer",
             effectDescription: "Autobuy Object upgrades.",
                done() {return hasUpgrade("v",55)}},
                4: {requirementDescription: "100 Total Medals",
          effectDescription: "Keep Object upgrades, milestones and challenges on reset, autobuy quantum upgrades, gain x2 medals and object upgrade 71 x2.",
             done() { return player.re.total.gte(100)},},
             5: {requirementDescription: "420 Total Medals",
             effectDescription: "Object Upgrade 71 x4.",
                done() { return player.re.total.gte(420)},},
    6: {requirementDescription: "1,000 Total Medals",
             effectDescription: "Keep Quantum upgrades on reset, autobuy ring upgrades and you gain wood passively.",
                done() { return player.re.total.gte(1000)},},
                7: {requirementDescription: "Finish Wood Layer",
                effectDescription: "Autobuy Sand upgrades.",
                   done() {return hasUpgrade("w",55)}},
                   8: {requirementDescription: "10,000 Total Medals",
                   effectDescription: "Keep Ring upgrades, Sand upgrades & milestones on reset and autobuy transcension upgrades.",
                      done() { return player.re.total.gte(10000)},},
                      9: {requirementDescription: "1,000,000 Total Medals",
                   effectDescription: "Keep Transcension upgrades on reset, autobuy universe upgrades, gain x1.1 medals and gain x-rays passively.",
                      done() { return player.re.total.gte(1000000)},},
                      10: {requirementDescription: "Finish X-Ray Layer",
                      effectDescription: "Gain x1.25 Medals, you start with even more wood and object upgrade 61 x1,048,576.",
                         done() {return hasUpgrade("x",55)}},
                         11: {requirementDescription: "1.000e9 Total Medals",
                         effectDescription: "Keep Universal upgrades & milestones on reset, autobuy void and wood upgrades, gain x1.111 medals and gain yard passively.",
                            done() { return player.re.total.gte(1e9)},},
                            12: {requirementDescription: "Finish Yard Layer",
                      effectDescription: "Keep void upgrades and wood upgrades & milestones on reset.",
                         done() {return hasUpgrade("y",55)}},
                         13: {requirementDescription: "1.000e12 Total Medals",
                         effectDescription: "Gain x1.2 medals and gain zones passively.",
                            done() { return player.re.total.gte(1e12)},},
                            14: {requirementDescription: "Finish Zones Layer",
                      effectDescription: "Keep X-Ray upgrades on reset and autobuy yard upgrades.",
                         done() {return hasChallenge("z",81)}},
                         15: {requirementDescription: "Finish Arrows Layer",
                      effectDescription: "Gain arrows passively, keep yard upgrades on reset and autobuy zone upgrades.",
                         done() {return hasUpgrade("ar",55)}},
                         16: {requirementDescription: "Finish Balls Layer",
                         effectDescription: "Work in progress.",
                            done() {return hasUpgrade("ba",55)}},
    },
})