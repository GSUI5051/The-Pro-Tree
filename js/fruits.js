addLayer("f", {
    upgrades: {
        11: { title: "151",
        description: "1e100x Points and keep Prestige Upgrades.",
        cost: new Decimal("1"),

        },
        12: { title: "152",
        description: "Gain more points based on Fruits and Autobuy dices.",
        cost: new Decimal("2"),
        effect() {
            return player[this.layer].points.add(1e10).pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 11)
        }
        },
        13: { title: "153",
        description: "1e150x Points.",
        cost: new Decimal("3"),
        unlocked() {
            return hasUpgrade("f", 12)
        }
        },
        14: { title: "154",
        description: "1e123x BP, PP.",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("f", 13)
        }
        },
        15: { title: "155",
        description: "1e10x Cups, 1e25x Grass.",
        cost: new Decimal("16"),
        unlocked() {
            return hasUpgrade("f", 14)
        }
        },
        21: { title: "156",
        description: "1e200x Points.",
        cost: new Decimal("25"),
        unlocked() {
            return hasUpgrade("f", 15)
        }
        },
        22: { title: "157",
        description: "^1.024 PP.",
        cost: new Decimal("69"),
        unlocked() {
            return hasUpgrade("f", 21)
        }
        },
        23: { title: "158",
        description: "Divide Dice cost based on prestige points.",
        cost: new Decimal("100"),
        effect() {
            return player.p.points.add(1).pow(1)
        },
        effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 22)
        }
        },
        24: { title: "159",
        description: "Every Upgrade = 1,000x Points.",
        effect() {
            let effect = Decimal.pow(1000, player.f.upgrades.length)
            return effect
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new Decimal("200"),
        unlocked() {
            return hasUpgrade("f", 23)
        }
        },
        25: { title: "160",
        description: "Gain more Fruits based on points.",
        cost: new Decimal("250"),
        effect() {
            return player.points.add(1).pow(0.000001)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 24)
        }
        },
        31: { title: "161",
        description: "1e300x Points.",
        cost: new Decimal("300"),
        unlocked() {
            return hasUpgrade("f", 25)
        }
        },
        32: { title: "162",
        description: "1e200x Points.",
        cost: new Decimal("666"),
        unlocked() {
            return hasUpgrade("f", 31)
        }
        },
        33: { title: "163",
        description: "Double Fruits.",
        cost: new Decimal("1337"),
        unlocked() {
            return hasUpgrade("f", 32)
        }
        },
        34: { title: "164",
        description: "Triple Fruits.",
        cost: new Decimal("2500"),
        unlocked() {
            return hasUpgrade("f", 33)
        }
        },
        35: { title: "165",
        description: "Double Fruits gain, 1e100x Points and unlock another challenge.",
        cost: new Decimal("15000"),
        unlocked() {
            return hasUpgrade("f", 34)
        }
        },
        41: { title: "166",
        description: "e20,000,000x Points.",
        cost: new Decimal("1e132229"),
        unlocked() {
            return hasUpgrade("h", 35)
        }
        },
        42: { title: "167",
        description: "^1.005 Points.",
        cost: new Decimal("1e151543"),
        unlocked() {
            return hasUpgrade("f", 41)
        }
        },
        43: { title: "168",
        description: "e50,000,000x Points.",
        cost: new Decimal("1e175078"),
        unlocked() {
            return hasUpgrade("f", 42)
        }
        },
        44: { title: "169",
        description: "Divide Electricity cost based on Cups.",
        cost: new Decimal("1e234271"),
        effect() {
            return player.c.points.add(1).pow(1)
        },
        effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("f", 43)
        }
        },
        45: { title: "170",
        description: "e60,070,000x Points and unlock a new layer.",
        cost: new Decimal("1e234317"),
        unlocked() {
            return hasUpgrade("f", 44)
        },
    }
    },
    milestones: {
        1: {
            requirementDescription: "1 Total Fruits",
            effectDescription: "Gain 100% PP, BP, Grass and Cups every second.",
            done() { return player.f.points.gte(1) }
        }, 2: {requirementDescription: "2 Total Fruits",
          effectDescription: "Keep Button Power upgrades on reset.",
             done() { return player.f.total.gte(2)},},
             3: {requirementDescription: "4 Total Fruits",
             effectDescription: "Keep Ascension upgrades and milestones on reset.",
                done() { return player.f.total.gte(4)},},
                4: {requirementDescription: "8 Total Fruits",
             effectDescription: "Dices reset nothing.",
                done() { return player.f.total.gte(8)},},
                5: {requirementDescription: "15 Total Fruits",
             effectDescription: "Keep Grass upgrades, milestones on reset and unlock a challenge.",
                done() { return player.f.total.gte(15)},},
                6: {requirementDescription: "255 Total Fruits",
             effectDescription: "Keep Cups upgrades and milestones on reset.",
                done() { return player.f.total.gte(255)},},
                7: {requirementDescription: "65,535 Total Fruits",
             effectDescription: "Keep Dices upgrades and milestones on reset.",
                done() { return player.f.total.gte(65535)},},
    },
    challenges: {
        11: {
            name: "Resolve",
            challengeDescription: "Raise PP, BP, Grass and Cups to ^0.001.",
            goalDescription: "e26,159,020 Points.",
            rewardDescription: "Gain ^1.01 Points.",
            canComplete: function() {return player.points.gte("e26159020")},
            unlocked() { return (hasUpgrade('e', 35)) },
        },
        12: {
            name: "Divided",
            challengeDescription: "Raise PP, BP, Grass, Cups and Points to ^0.1.",
            goalDescription: "1e28,825 Points.",
            rewardDescription: "Unlock a new layer and ^1.02 Points.",
            canComplete: function() {return player.points.gte("e28825")},
            unlocked() { return (hasChallenge('f', 11)) },
    }},
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
        return player[this.layer].points.max(1).pow(5e69).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Fruits", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "F", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        auto: false
    }},
    color: "#800080",
    requires: new Decimal("1e499"), // Can be a function that takes requirement increases into account
    resource: "Fruits", // Name of prestige currency
    baseResource: "Grass", // Name of resource prestige is based on
    baseAmount() {return player.g.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent: 0.01, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
     if (hasUpgrade('f', 33)) mult = mult.times(2)
     if (hasUpgrade('f', 34)) mult = mult.times(3)
     if (hasUpgrade('f', 35)) mult = mult.times(2)
     if (hasUpgrade('g', 41)) mult = mult.pow(1.01)
     if (hasUpgrade('g', 53)) mult = mult.times(69)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "f", description: "F: Reset for Fruits", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("d", 35) || player[this.layer].unlocked)},
})