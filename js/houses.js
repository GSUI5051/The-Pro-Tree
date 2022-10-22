addLayer("h", {
    upgrades: {
        11: { title: "201",
        description: "e1,000,000x Points.",
        cost: new Decimal("5"),

        },
        12: { title: "202",
        description: "Gain more points based on Houses.",
        cost: new Decimal("5"),
        effect() {
            return player[this.layer].points.add("1e69420").pow(0.420)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("h", 11)
        }
        },
        13: { title: "203",
        description: "^1.03 Points.",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("h", 12)
        }
        },
        14: { title: "204",
        description: "e3,000,003x Points.",
        cost: new Decimal("35"),
        unlocked() {
            return hasUpgrade("h", 13)
        }
        },
        15: { title: "205",
        description: "Gain more houses based on points and gain 10x Houses.",
        effect() {
            return player.points.add(1).pow(1e-10)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        cost: new Decimal("50"),
        unlocked() {
            return hasUpgrade("h", 14)
        }
        },
        21: { title: "206",
        description: "^1.025 Points.",
        cost: new Decimal("250"),
        unlocked() {
            return hasUpgrade("h", 15)
        }
        },
        22: { title: "207",
        description: "Triple House Gain.",
        cost: new Decimal("300"),
        unlocked() {
            return hasUpgrade("h", 21)
        }
        },
        23: { title: "208",
        description: "Quadruple House Gain.",
        cost: new Decimal("1000"),
        unlocked() {
            return hasUpgrade("h", 22)
        }
        },
        24: { title: "209",
        description: "e10,000,000x Points.",
        cost: new Decimal("4000"),
        unlocked() {
            return hasUpgrade("h", 23)
        }
        },
        25: { title: "210",
        description: "^1.001 Points and Quintuple House Gain.",
        cost: new Decimal("6969"),
        unlocked() {
            return hasUpgrade("h", 24)
        }
        },
        31: { title: "211",
        description: "^1.01 Points and Triple House Gain.",
        cost: new Decimal("25000"),
        unlocked() {
            return hasUpgrade("h", 25)
        }
        },
        32: { title: "212",
        description: "^1.01 Point Gain and 10x House Gain!",
        cost: new Decimal("1e5"),
        unlocked() {
            return hasUpgrade("h", 31)
        }
        },
        33: { title: "213",
        description: "e30,000,003x Points.",
        cost: new Decimal("5e5"),
        unlocked() {
            return hasUpgrade("h", 32)
        }
        },
        34: { title: "214",
        description: "e10,000,000x Points and 5x House Gain.",
        cost: new Decimal("2e6"),
        unlocked() {
            return hasUpgrade("h", 33)
        }
        },
        35: { title: "215",
        description: "^1.001 Point Gain.",
        cost: new Decimal("1e7"),
        unlocked() {
            return hasUpgrade("h", 34)
        }
        },
        41: { title: "216",
        description: "ee11x Points.",
        cost: new Decimal("1e2605"),
        unlocked() {
            return hasUpgrade("e", 45)
        }
        },
        42: { title: "217",
        description: "ee11x Points.",
        cost: new Decimal("1e4280"),
        unlocked() {
            return hasUpgrade("h", 41)
        }
        },
        43: { title: "218",
        description: "ee11x Points.",
        cost: new Decimal("1e5960"),
        unlocked() {
            return hasUpgrade("h", 42)
        }
        },
        44: { title: "219",
        description: "ee11x Points.",
        cost: new Decimal("1e7640"),
        unlocked() {
            return hasUpgrade("h", 43)
        }
        },
        45: { title: "220",
        description: "ee12x Points.",
        cost: new Decimal("1e8500"),
        unlocked() {
            return hasUpgrade("h", 44)
        }
        },
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
        return player[this.layer].points.max(1).pow("5e10000").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "House", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "H", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        auto: false
    }},
    color: "#563D2D",
    requires: new Decimal("41680"), // Can be a function that takes requirement increases into account
    resource: "Houses", // Name of prestige currency
    baseResource: "Ascensions", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent: 1, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade('h', 15)) mult = mult.times(upgradeEffect('h', 15))
        if (hasUpgrade('h', 15)) mult = mult.times(10)
        if (hasUpgrade('h', 22)) mult = mult.times(3)
        if (hasUpgrade('h', 23)) mult = mult.times(4)
        if (hasUpgrade('h', 25)) mult = mult.times(5)
        if (hasUpgrade('h', 31)) mult = mult.times(3)
        if (hasUpgrade('h', 32)) mult = mult.times(10)
        if (hasUpgrade('h', 34)) mult = mult.times(5)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "h", description: "H: Reset for House", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("d", 55) || player[this.layer].unlocked)},
})