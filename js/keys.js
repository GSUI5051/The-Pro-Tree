addLayer("k", {
    upgrades: {
        11: { title: "276",
        description: "Point gain is increased by a UNOBTANIUM AMOUNT! Gain x2 Keys.",
        cost: new EN("69"),

        },
        12: { title: "277",
        description: "Square Key Gain.",
        cost: new EN("420"),
        unlocked() {
            return hasUpgrade("k", 11)
        }
        },
        13: { title: "278",
        description: "Square Key Gain Again and also point gain is increased.",
        cost: new EN("1337"),
        unlocked() {
            return hasUpgrade("k", 12)
        }
        },
        14: { title: "279",
        description: "Square Key Gain yet again.",
        cost: new EN("6969"),
        unlocked() {
            return hasUpgrade("k", 13)
        }
        },
        15: { title: "280",
        description: "Square Key Gain yet again and again and point gain is increased.",
        cost: new EN("69420"),
        unlocked() {
            return hasUpgrade("k", 14)
        }
        },
        21: { title: "281",
        description: "Cube Key gain.",
        cost: new EN("1e7"),
        unlocked() {
            return hasUpgrade("k", 15)
        }
        },
        22: { title: "282",
        description: "Cube Key gain again.",
        cost: new EN("1e17"),
        unlocked() {
            return hasUpgrade("k", 21)
        }
        },
        23: { title: "283",
        description: "Cube Key gain yet again.",
        cost: new EN("5e45"),
        unlocked() {
            return hasUpgrade("k", 22)
        }
        },
        24: { title: "284",
        description: "Cube Key gain yet again and again also increases point gain.",
        cost: new EN("3e132"),
        unlocked() {
            return hasUpgrade("k", 23)
        }
        },
        25: { title: "285",
        description: "Cube Key gain yet again and again and again.",
        cost: new EN("3e392"),
        unlocked() {
            return hasUpgrade("k", 24)
        }
        },
        31: { title: "286",
        description: "^4 Key gain.",
        cost: new EN("5e1172"),
        unlocked() {
            return hasUpgrade("k", 25)
        }
        },
        32: { title: "287",
        description: "^4 Key gain.",
        cost: new EN("1e4684"),
        unlocked() {
            return hasUpgrade("k", 31)
        }
        },
        33: { title: "288",
        description: "^4 Key gain and increases point gain even more.",
        cost: new EN("1e18729"),
        unlocked() {
            return hasUpgrade("k", 32)
        }
        },
        34: { title: "289",
        description: "^4 Key gain.",
        cost: new EN("1e74908"),
        unlocked() {
            return hasUpgrade("k", 33)
        }
        },
        35: { title: "290",
        description: "^4 Key gain.",
        cost: new EN("1e299626"),
        unlocked() {
            return hasUpgrade("k", 34)
        }
        },
        41: { title: "291",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e1198496"),
        unlocked() {
            return hasUpgrade("k", 35)
        }
        },
        42: { title: "292",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e5992474"),
        unlocked() {
            return hasUpgrade("k", 41)
        }
        },
        43: { title: "293",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e19981181"),
        unlocked() {
            return hasUpgrade("k", 42)
        }
        },
        44: { title: "294",
        description: "^5 Key gain and increase point gain.",
        cost: new EN("1e79905898"),
        unlocked() {
            return hasUpgrade("k", 43)
        }
        },
        45: { title: "295",
        description: "^10 Key gain! Increase point gain by a lot.",
        cost: new EN("1e379529481"),
        unlocked() {
            return hasUpgrade("k", 44)
        }
        },
        51: { title: "296",
        description: "^100 Key gain!",
        cost: new EN("e1.227e14"),
        unlocked() {
            return hasUpgrade("m", 15)
        }
        },
        52: { title: "297",
        description: "^1,000 Key gain!",
        cost: new EN("e1.227e16"),
        unlocked() {
            return hasUpgrade("k", 51)
        }
        },
        53: { title: "298",
        description: "^10,000 Key gain!",
        cost: new EN("e1.227e19"),
        unlocked() {
            return hasUpgrade("k", 52)
        }
        },
        54: { title: "299",
        description: "^100,000 Key gain!",
        cost: new EN("e1.317e32"),
        unlocked() {
            return hasUpgrade("m", 24)
        }
        },
        55: { title: "300",
        description: "^1e10 Key gain! Increase point gain also.",
        cost: new EN("e4.978e59"),
        unlocked() {
            return hasUpgrade("m", 35)
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
        return player[this.layer].points.max(1).pow("eee10").log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "You can only gain 1 key at a time, can be increased by upgrades.<br> Point gain is increased by  x" + format(tmp[this.layer].effect)
    
    /*
      use format(num) whenever displaying a number
    */
   
  },
    name: "Keys", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "K", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#b6c0b3",
    requires: new EN("eee10"), // Can be a function that takes requirement increases into account
    resource: "Keys", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["j", "e", "f"],
    exponent: "0", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('k', 11)) mult = mult.times(2)
        if (hasUpgrade('k', 12)) mult = mult.pow(2)
        if (hasUpgrade('k', 13)) mult = mult.pow(2)
        if (hasUpgrade('k', 14)) mult = mult.pow(2)
        if (hasUpgrade('k', 15)) mult = mult.pow(2)
        if (hasUpgrade('k', 21)) mult = mult.pow(3)
        if (hasUpgrade('k', 22)) mult = mult.pow(3)
        if (hasUpgrade('k', 23)) mult = mult.pow(3)
        if (hasUpgrade('k', 24)) mult = mult.pow(3)
        if (hasUpgrade('k', 25)) mult = mult.pow(3)
        if (hasUpgrade('k', 31)) mult = mult.pow(4)
        if (hasUpgrade('k', 32)) mult = mult.pow(4)
        if (hasUpgrade('k', 33)) mult = mult.pow(4)
        if (hasUpgrade('k', 34)) mult = mult.pow(4)
        if (hasUpgrade('k', 35)) mult = mult.pow(4)
        if (hasUpgrade('k', 41)) mult = mult.pow(5)
        if (hasUpgrade('k', 42)) mult = mult.pow(5)
        if (hasUpgrade('k', 43)) mult = mult.pow(5)
        if (hasUpgrade('k', 44)) mult = mult.pow(5)
        if (hasUpgrade('k', 45)) mult = mult.pow(10)
        if (hasUpgrade('m', 11)) mult = mult.pow(2)
        if (hasUpgrade('m', 12)) mult = mult.pow(4)
        if (hasUpgrade('m', 13)) mult = mult.pow(8)
        if (hasUpgrade('m', 14)) mult = mult.pow(16)
        if (hasUpgrade('m', 15)) mult = mult.pow(32)
        if (hasUpgrade('k', 51)) mult = mult.pow(100)
        if (hasUpgrade('k', 52)) mult = mult.pow(1000)
        if (hasUpgrade('k', 53)) mult = mult.pow(10000)
        if (hasUpgrade('k', 54)) mult = mult.pow(100000)
        if (hasUpgrade('k', 55)) mult = mult.pow(1e10)
        if (hasUpgrade('m', 21)) mult = mult.pow(64)
        if (hasUpgrade('m', 22)) mult = mult.pow(128)
        if (hasUpgrade('m', 23)) mult = mult.pow(256)
        if (hasUpgrade('m', 24)) mult = mult.pow(512)
        if (hasUpgrade('m', 25)) mult = mult.pow(1024)
        if (hasUpgrade('m', 31)) mult = mult.pow(2048)
        if (hasUpgrade('m', 32)) mult = mult.pow(4096)
        if (hasUpgrade('m', 33)) mult = mult.pow(8192)
        if (hasUpgrade('m', 34)) mult = mult.pow(16384)
        if (hasUpgrade('m', 35)) mult = mult.pow(32768)
        if (hasUpgrade('m', 41)) mult = mult.pow(65536)
        if (hasUpgrade('m', 42)) mult = mult.pow(131072)
        if (hasUpgrade('m', 43)) mult = mult.pow(262144)
        if (hasUpgrade('m', 44)) mult = mult.pow(524288)
        if (hasUpgrade('m', 45)) mult = mult.pow(1048576)
        if (hasUpgrade('m', 51)) mult = mult.pow(2097152)
        if (hasUpgrade('m', 52)) mult = mult.pow(4194304)
        if (hasUpgrade('m', 53)) mult = mult.pow(8388608)
        if (hasUpgrade('m', 54)) mult = mult.pow(16777216)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 4, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "K", description: "K: Reset for Keys", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("p", 75) || player[this.layer].unlocked)},
})