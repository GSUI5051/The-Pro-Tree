addLayer("e", {
    upgrades: {
        11: { title: "176",
        description: "1e6,969x Points.",
        cost: new Decimal("1"),

        },
        12: { title: "177",
        description: "Gain more points based on Electricity.",
        cost: new Decimal("2"),
        effect() {
            return player[this.layer].points.add(1e69).pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("e", 11)
        }
        },
        13: { title: "178",
        description: "Unlock a new prestige upgrade.",
        cost: new Decimal("2"),
        unlocked() {
            return hasUpgrade("e", 12)
        }
        },
        14: { title: "179",
        description: "1e10,000x Points.",
        cost: new Decimal("5"),
        unlocked() {
            return hasUpgrade("e", 13)
        }
        },
        15: { title: "180",
        description: "Unlock another prestige upgrade.",
        cost: new Decimal("5"),
        unlocked() {
            return hasUpgrade("e", 14)
        }
        },
        21: { title: "181",
        description: "1e6,969x Points.",
        cost: new Decimal("8"),
        unlocked() {
            return hasUpgrade("e", 15)
        }
        },
        22: { title: "182",
        description: "Square PP Gain.",
        cost: new Decimal("8"),
        unlocked() {
            return hasUpgrade("e", 21)
        }
        },
        23: { title: "183",
        description: "Square BP Gain.",
        cost: new Decimal("8"),
        unlocked() {
            return hasUpgrade("e", 22)
        }
        },
        24: { title: "184",
        description: "^1.1 Points.",
        cost: new Decimal("8"),
        unlocked() {
            return hasUpgrade("e", 23)
        }
        },
        25: { title: "185",
        description: "1e100,000x Points.",
        cost: new Decimal("9"),
        unlocked() {
            return hasUpgrade("e", 24)
        }
        },
        31: { title: "186",
        description: "Cube PP Gain!",
        cost: new Decimal("9"),
        unlocked() {
            return hasUpgrade("e", 25)
        }
        },
        32: { title: "187",
        description: "Cube BP Gain!",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("e", 31)
        }
        },
        33: { title: "188",
        description: "^1.15 Points.",
        cost: new Decimal("11"),
        unlocked() {
            return hasUpgrade("e", 32)
        }
        },
        34: { title: "189",
        description: "^1.1 Points.",
        cost: new Decimal("12"),
        unlocked() {
            return hasUpgrade("e", 33)
        }
        },
        35: { title: "190",
        description: "^1.01 Points and unlock a challenge.",
        cost: new Decimal("13"),
        unlocked() {
            return hasUpgrade("e", 34)
        }
        },
        41: { title: "191",
        description: "ee10x Points.",
        cost: new Decimal("86"),
        unlocked() {
            return hasUpgrade("i", 35)
        }
        },
        42: { title: "192",
        description: "ee10x Points.",
        cost: new Decimal("95"),
        unlocked() {
            return hasUpgrade("e", 41)
        }
        },
        43: { title: "193",
        description: "ee10x Points.",
        cost: new Decimal("101"),
        unlocked() {
            return hasUpgrade("e", 42)
        }
        },
        44: { title: "194",
        description: "ee10x Points.",
        cost: new Decimal("107"),
        unlocked() {
            return hasUpgrade("e", 43)
        }
        },
        45: { title: "195",
        description: "ee11x Points.",
        cost: new Decimal("111"),
        unlocked() {
            return hasUpgrade("e", 44)
        }
        },
    },
    milestones: {
        1: {
            requirementDescription: "4 Electricity",
            effectDescription: "Keep Dices Upgrades and milestones on reset.",
            done() { return player.e.points.gte(4) }
        }, 2: {requirementDescription: "10 Electricity",
          effectDescription: "You can buy max Electricity.",
             done() { return player.e.points.gte(10)},},
    },
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
        return player[this.layer].points.max(1).pow(5e300).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Electricity", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        auto: false
    }},
    color: "#00FFFF",
    requires: new Decimal("5e2142"), // Can be a function that takes requirement increases into account
    resource: "Electricity", // Name of prestige currency
    baseResource: "Cups", // Name of resource prestige is based on
    baseAmount() {return player.c.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent: 5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("f", 44)) mult = mult.div(upgradeEffect("f", 44))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    canBuyMax() { return hasMilestone("e", 2) },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "e", description: "E: Reset for Electricity", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("d", 55) || player[this.layer].unlocked)},
})