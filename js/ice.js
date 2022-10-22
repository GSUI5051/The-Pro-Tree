addLayer("i", {
    upgrades: {
        11: { title: "226",
        description: "e100,000,000x Points.",
        cost: new Decimal("2"),

        },
        12: { title: "227",
        description: "e200,000,000x Points.",
        cost: new Decimal("8"),
        unlocked() {
            return hasUpgrade("i", 11)
        }
        },
        13: { title: "228",
        description: "Divide Ice cost based on points.",
        cost: new Decimal("11"),
        effect() {
            return player.points.add(1).pow(1)
        },
        effectDisplay() { return "/"+format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect
        cost: new Decimal("8"),
        unlocked() {
            return hasUpgrade("i", 12)
        }
        },
        14: { title: "229",
        description: "e100,000,000x Points.",
        cost: new Decimal("9"),
        unlocked() {
            return hasUpgrade("i", 13)
        }
        },
        15: { title: "230",
        description: "e300,000,003x Points.",
        cost: new Decimal("9"),
        unlocked() {
            return hasUpgrade("i", 14)
        }
        },
        21: { title: "231",
        description: "Square Grass and Cup gain.",
        cost: new Decimal("9"),
        unlocked() {
            return hasUpgrade("i", 15)
        }
        },
        22: { title: "232",
        description: "e300,000,003x Points again.",
        cost: new Decimal("9"),
        unlocked() {
            return hasUpgrade("i", 21)
        }
        },
        23: { title: "233",
        description: "e420,000,000x Points.",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("i", 22)
        }
        },
        24: { title: "234",
        description: "^1.001 Points.",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("i", 23)
        }
        },
        25: { title: "235",
        description: "ee9x Points.",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("i", 24)
        }
        },
        31: { title: "236",
        description: "ee9x Points again.",
        cost: new Decimal("10"),
        unlocked() {
            return hasUpgrade("i", 25)
        }
        },
        32: { title: "237",
        description: "^1.01 Point Gain.",
        cost: new Decimal("11"),
        unlocked() {
            return hasUpgrade("i", 31)
        }
        },
        33: { title: "238",
        description: "^1.005 Point Gain.",
        cost: new Decimal("11"),
        unlocked() {
            return hasUpgrade("i", 32)
        }
        },
        34: { title: "239",
        description: "ee9x Points again.",
        cost: new Decimal("12"),
        unlocked() {
            return hasUpgrade("i", 33)
        }
        },
        35: { title: "240",
        description: "ee10x Points.",
        cost: new Decimal("12"),
        unlocked() {
            return hasUpgrade("i", 34)
        }
        },
        41: { title: "241",
        description: "ee12x Points.",
        cost: new Decimal("19"),
        unlocked() {
            return hasUpgrade("h", 45)
        }
        },
        42: { title: "242",
        description: "ee13x Points.",
        cost: new Decimal("20"),
        unlocked() {
            return hasUpgrade("i", 41)
        }
        },
        43: { title: "243",
        description: "ee13x Points.",
        cost: new Decimal("23"),
        unlocked() {
            return hasUpgrade("i", 42)
        }
        },
        44: { title: "244",
        description: "ee14x Points.",
        cost: new Decimal("24"),
        unlocked() {
            return hasUpgrade("i", 43)
        }
        },
        45: { title: "245",
        description: "ee15x Points and unlock a new layer (WIP)",
        cost: new Decimal("27"),
        unlocked() {
            return hasUpgrade("i", 44)
        }
        },
    },
    milestones: {
         1: {requirementDescription: "9 Ice",
          effectDescription: "You can buy max Ice.",
             done() { return player.i.points.gte(9)},},
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
        return player[this.layer].points.max(1).pow("5e3000003").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect) 
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Ice", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        auto: false
    }},
    color: "#b4cffa",
    requires: new Decimal("ee10"), // Can be a function that takes requirement increases into account
    resource: "Ice", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["c"],
    exponent: "12", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        if (hasUpgrade("i", 13)) mult = mult.div(upgradeEffect("i", 13))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    canBuyMax() { return hasMilestone("i", 1) },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "i", description: "I: Reset for Ice", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("f", 45) || player[this.layer].unlocked)},
})