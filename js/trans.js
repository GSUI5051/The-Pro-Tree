addLayer("t", {
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
            },
        },
    upgrades: {
        11: { title: "476",
        description: "Gain x4 Trans.",
        cost: new EN("500"),
        },
        12: { title: "477",
        description: "Gain x256 Trans.",
        cost: new EN("1000"),
        unlocked() {
            return hasUpgrade("t", 11)
        }
        },
        13: { title: "478",
        description: "Gain x65,536 Trans.",
        cost: new EN("400000"),
        unlocked() {
            return hasUpgrade("t", 12)
        }
        },
        14: { title: "479",
        description: "Gain x2.814e14 Trans.",
        cost: new EN("2e10"),
        unlocked() {
            return hasUpgrade("t", 13)
        }
        },
        15: { title: "480",
        description: "Gain x7.922e28 Trans.",
        cost: new EN("5e24"),
        unlocked() {
            return hasUpgrade("t", 14)
        }
        },
        21: { title: "481",
        description: "Gain x3.940e115 Trans.",
        cost: new EN("4e53"),
        unlocked() {
            return hasUpgrade("t", 15)
        }
        },
        22: { title: "482",
        description: "Gain x1.552e231 Trans.",
        cost: new EN("1e169"),
        unlocked() {
            return hasUpgrade("t", 21)
        }
        },
        23: { title: "483",
        description: "Gain x3.5e693 Trans.",
        cost: new EN("1e400"),
        unlocked() {
            return hasUpgrade("t", 22)
        }
        },
        24: { title: "484",
        description: "Gain x7e1,386 Trans.",
        cost: new EN("1e1094"),
        unlocked() {
            return hasUpgrade("t", 23)
        }
        },
        25: { title: "485",
        description: "Gain x2.8e5,548 Trans.",
        cost: new EN("1e2480"),
        unlocked() {
            return hasUpgrade("t", 24)
        }
        },
        31: { title: "486",
        description: "Gain ^5 Trans.",
        cost: new EN("1e8029"),
        unlocked() {
            return hasUpgrade("t", 25)
        }
        },
        32: { title: "487",
        description: "Gain ^25 Trans.",
        cost: new EN("5e40136"),
        unlocked() {
            return hasUpgrade("t", 31)
        }
        },
        33: { title: "488",
        description: "Gain ^625 Trans.",
        cost: new EN("1e1003352"),
        unlocked() {
            return hasUpgrade("t", 32)
        }
        },
        34: { title: "489",
        description: "Gain ^9.536e13 Trans.",
        cost: new EN("4e318546786"),
        unlocked() {
            return hasUpgrade("t", 33)
        }
        },
        35: { title: "490",
        description: "Gain ^1e308 Trans.",
        cost: new EN("e2.989e22"),
        unlocked() {
            return hasUpgrade("t", 34)
        }
        },
        41: { title: "491",
        description: "Gain a good trans boost.",
        cost: new EN("e2.989e330"),
        unlocked() {
            return hasUpgrade("t", 35)
        }
        },
        42: { title: "492",
        description: "Gain a big trans boost.",
        cost: new EN("eee9"),
        unlocked() {
            return hasUpgrade("t", 41)
        }
        },
        43: { title: "493",
        description: "Gain a bigger trans boost.",
        cost: new EN("eee420"),
        unlocked() {
            return hasUpgrade("t", 42)
        }
        },
        44: { title: "494",
        description: "Gain a massive trans boost.",
        cost: new EN("eeee9"),
        unlocked() {
            return hasUpgrade("t", 43)
        }
        },
        45: { title: "495",
        description: "Gain a insane trans boost.",
        cost: new EN("eeee999999999"),
        unlocked() {
            return hasUpgrade("t", 44)
        }
        },
        51: { title: "496",
        description: "Gain a EXTREME trans boost.",
        cost: new EN("10^^7"),
        unlocked() {
            return hasUpgrade("t", 45)
        }
        },
        52: { title: "497",
        description: "Gain a GOD trans boost.",
        cost: new EN("10^^10"),
        unlocked() {
            return hasUpgrade("t", 51)
        }
        },
        53: { title: "498",
        description: "Gain a BEST trans boost.",
        cost: new EN("10^^13"),
        unlocked() {
            return hasUpgrade("t", 52)
        }
        },
        54: { title: "499",
        description: "Gain a TRUE BEST trans boost and increase other currencies.",
        cost: new EN("10^^16"),
        unlocked() {
            return hasUpgrade("t", 53)
        }
        },
        55: { title: "500",
        description: "The Object Upgrade 71 is x65,536 more powerful and unlock the final object challenge!",
        cost: new EN("10^^20"),
        unlocked() {
            return player.o.points.gte("10^^40")
        }
        },
    },
    name: "Transcension", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "T", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new EN(0),
        auto: false
    }},
    color: "#51087E",
    requires: new EN("10^^69"), // Can be a function that takes requirement increases into account
    resource: "Transcension", // Name of prestige currency
    baseResource: "Points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["s", "n"],
    exponent: "0", // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new EN(1)
        if (hasUpgrade('t', 11)) mult = mult.times(4)
        if (hasUpgrade('t', 12)) mult = mult.times(256)
        if (hasUpgrade('t', 13)) mult = mult.times(65536)
        if (hasUpgrade('t', 14)) mult = mult.times(2.814e14)
        if (hasUpgrade('t', 15)) mult = mult.times(7.922e28)
        if (hasUpgrade('t', 21)) mult = mult.times(3.940201e115)
        if (hasUpgrade('t', 22)) mult = mult.times(1.552e231)
        if (hasUpgrade('t', 23)) mult = mult.times("3.5e693")
        if (hasUpgrade('t', 24)) mult = mult.times("7e1386")
        if (hasUpgrade('t', 25)) mult = mult.times("2.8e5548")
        if (hasUpgrade('t', 31)) mult = mult.pow(5)
        if (hasUpgrade('t', 32)) mult = mult.pow(25)
        if (hasUpgrade('t', 33)) mult = mult.pow(625)
        if (hasUpgrade('t', 34)) mult = mult.pow(9.536e13)
        if (hasUpgrade('t', 35)) mult = mult.pow(1e308)
        if (hasUpgrade('t', 41)) mult = mult.pow("ee9")
        if (hasUpgrade('t', 42)) mult = mult.pow("ee420")
        if (hasUpgrade('t', 43)) mult = mult.pow("eee9")
        if (hasUpgrade('t', 44)) mult = mult.pow("eee999999999")
        if (hasUpgrade('t', 45)) mult = mult.pow("10^^6")
        if (hasUpgrade('t', 51)) mult = mult.pow("10^^9")
        if (hasUpgrade('t', 52)) mult = mult.pow("10^^12")
        if (hasUpgrade('t', 53)) mult = mult.pow("10^^15")
        if (hasUpgrade('t', 54)) mult = mult.pow("10^^19")
        if (hasUpgrade('u', 54)) mult = mult.pow("10^^308")
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new EN(1)
    },
    row: 5, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "T", description: "T: Reset for Transcension", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("s", 55) || player[this.layer].unlocked)},
})