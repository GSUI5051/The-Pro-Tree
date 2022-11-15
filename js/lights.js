addLayer("l", {
    upgrades: {
        11: { title: "301",
        description: "Gain x69 Lights.",
        cost: new EN("420"),

        },
        12: { title: "302",
        description: "Gain x420 Lights.",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("l", 11)
        }
        },
        13: { title: "303",
        description: "Gain x6,969 Lights.",
        cost: new EN("6666666"),
        unlocked() {
            return hasUpgrade("l", 12)
        }
        },
        14: { title: "304",
        description: "Gain x69,420 Lights.",
        cost: new EN("5e10"),
        unlocked() {
            return hasUpgrade("l", 13)
        }
        },
        15: { title: "305",
        description: "Gain x1,000,000 Lights.",
        cost: new EN("5e15"),
        unlocked() {
            return hasUpgrade("l", 14)
        }
        },
        21: { title: "306",
        description: "Gain x1e9 Lights.",
        cost: new EN("2e21"),
        unlocked() {
            return hasUpgrade("l", 15)
        }
        },
        22: { title: "307",
        description: "Gain x1e12 Lights.",
        cost: new EN("5e30"),
        unlocked() {
            return hasUpgrade("l", 21)
        }
        },
        23: { title: "308",
        description: "Gain x1e15 Lights.",
        cost: new EN("5e42"),
        unlocked() {
            return hasUpgrade("l", 22)
        }
        },
        24: { title: "309",
        description: "Gain x1e18 Lights.",
        cost: new EN("1e58"),
        unlocked() {
            return hasUpgrade("l", 23)
        }
        },
        25: { title: "310",
        description: "Gain x1e21 Lights and generate more points.",
        cost: new EN("1e76"),
        unlocked() {
            return hasUpgrade("l", 24)
        }
        },
        31: { title: "311",
        description: "Unlock a challenge.",
        cost: new EN("1e97"),
        unlocked() {
            return hasUpgrade("l", 25)
        }
        },
        32: { title: "312",
        description: "Gain x1e24 Lights.",
        cost: new EN("1e191"),
        unlocked() {
            return hasUpgrade("l", 31)
        }
        },
        33: { title: "313",
        description: "Gain x1e27 Lights.",
        cost: new EN("1e214"),
        unlocked() {
            return hasUpgrade("l",32)
        }
        },
        34: { title: "314",
        description: "Gain x1e30 Lights.",
        cost: new EN("1e241"),
        unlocked() {
            return hasUpgrade("l",33)
        }
        },
        35: { title: "315",
        description: "Gain x1e60 Lights.",
        cost: new EN("1e272"),
        unlocked() {
            return hasUpgrade("l",34)
        }
        },
        41: { title: "316",
        description: "Gain x1e90 Lights.",
        cost: new EN("1e331"),
        unlocked() {
            return hasUpgrade("l",35)
        }
        },
        42: { title: "317",
        description: "Gain x1e120 Lights.",
        cost: new EN("1e421"),
        unlocked() {
            return hasUpgrade("l",41)
        }
        },
        43: { title: "318",
        description: "Gain x1e150 Lights.",
        cost: new EN("1e541"),
        unlocked() {
            return hasUpgrade("l",42)
        }
        },
        44: { title: "319",
        description: "Gain x1e180 Lights.",
        cost: new EN("1e692"),
        unlocked() {
            return hasUpgrade("l",43)
        }
        },
        45: { title: "320",
        description: "Gain x1e210 Lights, increase point gain and unlocks a new layer.",
        cost: new EN("1e872"),
        unlocked() {
            return hasUpgrade("l",44)
        }
        },
        51: { title: "321",
        description: "Gain x1e240 Lights.",
        cost: new EN("1e1081"),
        unlocked() {
            return hasUpgrade("m",45)
        }
        },
        52: { title: "322",
        description: "Gain x1e270 Lights and increase point gain.",
        cost: new EN("1e1321"),
        unlocked() {
            return hasUpgrade("l",51)
        }
        },
        53: { title: "323",
        description: "Gain x1e300 Lights and increase point gain again.",
        cost: new EN("1e1591"),
        unlocked() {
            return hasUpgrade("l",52)
        }
        },
        54: { title: "324",
        description: "Gain x1e600 Lights and increase point gain yet again.",
        cost: new EN("1e1891"),
        unlocked() {
            return hasUpgrade("l",53)
        }
        },
        55: { title: "325",
        description: "Gain x1e900 Lights, increase point gain yet again and unlock a last layer for row 5.",
        cost: new EN("1e2492"),
        unlocked() {
            return hasUpgrade("l",54)
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
      },
      effect(){
        return player[this.layer].points.max(1).pow("eee1000").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "You can only gain 1 light at a time, can be increased by upgrades.<br> Point gain is increased by  x" + format(tmp[this.layer].effect)
    
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Lights", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#FFFF8A",
    requires: new EN("ee1.80e308"), // Can be a function that takes requirement increases into account
    resource: "Lights", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["k", "h", "e"],
    exponent: "0", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('l', 11)) mult = mult.times(69)
        if (hasUpgrade('l', 12)) mult = mult.times(420)
        if (hasUpgrade('l', 13)) mult = mult.times(6969)
        if (hasUpgrade('l', 14)) mult = mult.times(69420)
        if (hasUpgrade('l', 15)) mult = mult.times(1e6)
        if (hasUpgrade('l', 21)) mult = mult.times(1e9)
        if (hasUpgrade('l', 22)) mult = mult.times(1e12)
        if (hasUpgrade('l', 23)) mult = mult.times(1e15)
        if (hasUpgrade('l', 24)) mult = mult.times(1e18)
        if (hasUpgrade('l', 25)) mult = mult.times(1e21)
        if (hasChallenge("j", 12)) mult = mult.pow("2")
        if (hasUpgrade('l', 32)) mult = mult.times(1e24)
        if (hasUpgrade('l', 33)) mult = mult.times(1e27)
        if (hasUpgrade('l', 34)) mult = mult.times(1e30)
        if (hasUpgrade('l', 35)) mult = mult.times(1e60)
        if (hasUpgrade('l', 41)) mult = mult.times(1e90)
        if (hasUpgrade('l', 42)) mult = mult.times(1e120)
        if (hasUpgrade('l', 43)) mult = mult.times(1e150)
        if (hasUpgrade('l', 44)) mult = mult.times(1e180)
        if (hasUpgrade('l', 45)) mult = mult.times(1e210)
        if (hasUpgrade('l', 51)) mult = mult.times(1e240)
        if (hasUpgrade('l', 52)) mult = mult.times(1e270)
        if (hasUpgrade('l', 53)) mult = mult.times(1e300)
        if (hasUpgrade('l', 54)) mult = mult.times("1e600")
        if (hasUpgrade('l', 55)) mult = mult.times("1e900")
        if (hasUpgrade('n', 11)) mult = mult.times(69420)
        if (hasUpgrade('n', 12)) mult = mult.times(6.969e69)
        if (hasUpgrade('n', 13)) mult = mult.times("1e420")
        if (hasUpgrade('n', 14)) mult = mult.times("1e666")
        if (hasUpgrade('n', 15)) mult = mult.times("1e1000")
        if (hasUpgrade('n', 21)) mult = mult.times("1e2000")
        if (hasUpgrade('n', 22)) mult = mult.times("1e2000")
        if (hasUpgrade('n', 23)) mult = mult.times("1e3000")
        if (hasUpgrade('n', 24)) mult = mult.times("1e5000")
        if (hasUpgrade('n', 25)) mult = mult.times("1e10000")
        if (hasUpgrade('n', 31)) mult = mult.times("1e10000")
        if (hasUpgrade('n', 32)) mult = mult.times("1e20000")
        if (hasUpgrade('n', 33)) mult = mult.times("1e30000")
        if (hasUpgrade('n', 34)) mult = mult.times("1e40000")
        if (hasUpgrade('n', 35)) mult = mult.times("1e100000")
        if (hasUpgrade('n', 41)) mult = mult.times("1e100000")
        if (hasUpgrade('n', 42)) mult = mult.times("1e200000")
        if (hasUpgrade('n', 43)) mult = mult.times("1e200000")
        if (hasUpgrade('n', 44)) mult = mult.times("1e500000")
        if (hasUpgrade('n', 45)) mult = mult.times("1e1000000")
        if (hasUpgrade("m", 51)) mult = mult.pow("2")
        if (hasUpgrade("m", 52)) mult = mult.pow("2")
        if (hasUpgrade("m", 53)) mult = mult.pow("2")
        if (hasUpgrade("m", 54)) mult = mult.pow("2")
        if (hasUpgrade("m", 55)) mult = mult.pow("3")
        if (hasUpgrade("n", 51)) mult = mult.pow("2")
        if (hasUpgrade("n", 52)) mult = mult.pow("2")
        if (hasUpgrade("n", 53)) mult = mult.pow("2")
        if (hasUpgrade("n", 54)) mult = mult.pow("2")
        if (hasUpgrade("n", 55)) mult = mult.pow("2")
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "L", description: "L: Reset for Lights", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("j", 55) || player[this.layer].unlocked)},
})