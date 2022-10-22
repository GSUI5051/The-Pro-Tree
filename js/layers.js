addLayer("p", {
    name: "Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "3399FF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Prestige Points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('p', 13)) mult = mult.times(upgradeEffect('p', 13))
        if (hasUpgrade('b', 14)) mult = mult.times(10)
        if (hasUpgrade('p', 21)) mult = mult.times(10)
        if (hasUpgrade('p', 33)) mult = mult.times(69420)
        if (hasUpgrade('p', 24)) mult = mult.times(4)
        if (hasUpgrade('b', 22)) mult = mult.times(100)
        if (hasUpgrade('b', 24)) mult = mult.times(6969)
        if (hasUpgrade('a', 14)) mult = mult.times(6969)
        if (hasUpgrade('a', 22)) mult = mult.times(10000)
        if (hasUpgrade('a', 24)) mult = mult.times(100000)
        if (hasUpgrade('p', 41)) mult = mult.times(1000000)
        if (hasUpgrade('p', 45)) mult = mult.times(1e10)
        if (hasUpgrade('p', 53)) mult = mult.times(1e10)
        if (hasUpgrade('p', 55)) mult = mult.times(1e6)
        if (hasUpgrade('g', 15)) mult = mult.times(1e20)
        if (hasUpgrade('b', 41)) mult = mult.pow(1.01)
        if (hasUpgrade('b', 42)) mult = mult.pow(1.05)
        if (hasUpgrade('b', 52)) mult = mult.times(1e15)
        if (hasUpgrade('a', 33)) mult = mult.times(1e33)
        if (hasUpgrade('c', 14)) mult = mult.times(1e20)
        if (hasUpgrade('g', 31)) mult = mult.pow(1.04)
        if (hasUpgrade('g', 34)) mult = mult.times(1e69)
        if (hasUpgrade('d', 14)) mult = mult.times(1e32)
        if (hasUpgrade('d', 22)) mult = mult.pow(1.05)
        if (hasUpgrade('d', 25)) mult = mult.times(1e100)
        if (hasUpgrade('c', 32)) mult = mult.pow(1.08)
        if (hasUpgrade('a', 51)) mult = mult.times(1e150)
        if (hasUpgrade('d', 35)) mult = mult.pow(1.1)
        if (hasUpgrade('d', 35)) mult = mult.times("1.79e308")
        if (hasUpgrade('f', 14)) mult = mult.times(1e123)
        if (inChallenge("b", 12)) mult = mult.pow(0.001)
        if (hasChallenge("b", 12)) mult = mult.pow(1.01)
        if (hasUpgrade('f', 22)) mult = mult.pow(1.024)
        if (inChallenge("b", 13)) mult = mult.pow(0.001)
        if (hasChallenge("b", 13)) mult = mult.pow(1.1)
        if (hasUpgrade('c', 43)) mult = mult.times("1.79e308")
        if (hasUpgrade('g', 42)) mult = mult.pow(1.02)
        if (inChallenge("g", 12)) mult = mult.pow(0.0001)
        if (inChallenge("g", 13)) mult = mult.pow(0.1)
        if (inChallenge("g", 22)) mult = mult.pow(0.000001)
        if (hasChallenge("g", 22)) mult = mult.pow(1.02)
        if (inChallenge("c", 12)) mult = mult.pow(0.25)
        if (hasChallenge("c", 12)) mult = mult.times("1e1503")
        if (inChallenge("c", 22)) mult = mult.pow(0.0145)
        if (hasUpgrade('e', 22)) mult = mult.pow(2)
        if (hasUpgrade('e', 31)) mult = mult.pow(3)
        if (inChallenge("f", 11)) mult = mult.pow(0.001)
        if (inChallenge("f", 12)) mult = mult.pow(0.1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
        11: { title: "1",
        description: "Double your point gain.",
        cost: new Decimal(1),

        },
        12: { title: "2",
        description: "Point gain is boosted by Prestige Points.",
        cost: new Decimal(5),
        effect() {
            return player[this.layer].points.add(1).pow(0.5).min("1e1000000")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 11)
        }
        },
        13: { title: "3",
        description: "Prestige Point gain is boosted by Points.",
        cost: new Decimal(10),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.15).min("ee100")
            
        },
        unlocked() {
            return hasUpgrade("p", 12)
        
        }
        },
        14: { title: "4",
        description: "Triple your point gain.",
        cost: new Decimal(20),
        unlocked() {
            return hasUpgrade("p", 13)
        
        }
        },
        15: { title: "5",
        description: "Double Point and unlock a new layer.",
        cost: new Decimal(50),
        unlocked() {
            return hasUpgrade("p", 14)
        
        }
        },
        21: { title: "6",
        description: "Gain 3x More Prestige Points",
        cost: new Decimal(1e9),
        unlocked() {
            return hasUpgrade("b", 15)
        
        }
        },
        22: { title: "7",
        description: "Button Power gain is boosted by Points at a reduced rate.",
        cost: new Decimal(2.5e10),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.05).min("ee100")
            
        },
        unlocked() {
            return hasUpgrade("p", 21)
        
        }
        },
        23: { title: "8",
        description: "Gain 10x More Points",
        cost: new Decimal(1e12),
        unlocked() {
            return hasUpgrade("p", 22)
        
        }
        },
        24: { title: "9",
        description: "4x Prestige Point Gain.",
        cost: new Decimal(5e12),
        unlocked() {
            return hasUpgrade("p", 23)
        
        }
        },
        25: { title: "10",
        description: "Point gain boost itself.",
        cost: new Decimal(2e13),
        effect() {
            return player.points.add(1).pow(0.1).min("ee100")
        },
		effectDisplay() {return format(upgradeEffect("p", 25)) + "x"},
        unlocked() {
            return hasUpgrade("p", 24)
        }
        },
        31: { title: "11",
        description: "10x Button Power.",
        cost: new Decimal(1e40),
        unlocked() {
            return hasUpgrade("b", 25)
        }
        },
        32: { title: "12",
        description: "^1.01 Points.",
        cost: new Decimal(1e42),
        unlocked() {
            return hasUpgrade("p", 31)
        }
        },
        33: { title: "13",
        description: "^1.11 Points.",
        cost: new Decimal(1e42),
        unlocked() {
            return hasUpgrade("p", 32)
        }
        },
        34: { title: "14",
        description: "69,420x Prestige Points.",
        cost: new Decimal(1e54),
        unlocked() {
            return hasUpgrade("p", 33)
        }
        },
        35: { title: "15",
        description: "69,420x Points.",
        cost: new Decimal(1e71),
        unlocked() {
            return hasUpgrade("p", 34)
        }
        },
        41: { title: "16",
        description: "1,000,000x Prestige Points",
        cost: new Decimal(1e220),
        unlocked() {
            return hasUpgrade("b", 35)
        }
        },
        42: { title: "17",
        description: "^1.111 Points",
        cost: new Decimal(1e232),
        unlocked() {
            return hasUpgrade("p", 41)
        }
        },
        43: { title: "18",
        description: "1e9x Points.",
        cost: new Decimal("1e410"),
        unlocked() {
            return hasUpgrade("p", 42)
        }
        },
        44: { title: "19",
        description: "100,000x Button Power.",
        cost: new Decimal("1e453"),
        unlocked() {
            return hasUpgrade("p", 43)
        }
        },
        45: { title: "20",
        description: "1e10x Prestige Points.",
        cost: new Decimal("1e477"),
        unlocked() {
            return hasUpgrade("p", 44)
        }
        },
        51: { title: "21",
        description: "1,000,000x Button Power.",
        cost: new Decimal("1e517"),
        unlocked() {
            return hasUpgrade("p", 45)
        }
        },
        52: { title: "22",
        description: "1e12x Points.",
        cost: new Decimal("1e540"),
        unlocked() {
            return hasUpgrade("p", 51)
        }
        },
        53: { title: "23",
        description: "1e10x Prestige Points.",
        cost: new Decimal("1e603"),
        unlocked() {
            return hasUpgrade("p", 52)
        }
        },
        54: { title: "24",
        description: "10,000,000x Button Power.",
        cost: new Decimal("1e650"),
        unlocked() {
            return hasUpgrade("p", 53)
        }
        },
        55: { title: "25",
        description: "^1.01 Points, 1e6x PP, BP.",
        cost: new Decimal("1e678"),
        unlocked() {
            return hasUpgrade("p", 54)
        }
        },
        61: { title: "?",
        description: "Point gain is Boosted by Prestige Points at a reduced rate.",
        cost: new Decimal("1e2000000"),
        effect() {
            return player[this.layer].points.add(1).pow(0.05).min("3e109258")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("d", 55)
        }
        },
        62: { title: "?",
        description: "Point gain is Boosted by Prestige Points at a reduced rate. (^0.2)",
        cost: new Decimal("1e2000000"),
        effect() {
            return player[this.layer].points.add(1).pow(0.1).min("e258609")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("e", 13)
        }
        },
        63: { title: "?",
        description: "Point gain is Boosted by Prestige Points.",
        cost: new Decimal("1e2000000"),
        effect() {
            return player[this.layer].points.add(1).pow(0.5).min("ee1000000")
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("e", 15)
        }
        },
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    
    ],
    doReset(resettingLayer){ // Triggers when this layer is being reset, along with the layer doing the resetting. Not triggered by lower layers resetting, but is by layers on the same row.
        if(layers[resettingLayer].row > this.row) {
        layerDataReset(this.layer)
        if(hasUpgrade("b",21)) player.p.upgrades.push("11", "12", "13", "14", "15", "21", "22", "23", "24", "25")
        if(hasUpgrade("a",15)) player.p.upgrades.push("31", "32", "33", "34", "35")    
        if(hasUpgrade("g",14)) player.p.upgrades.push("11", "12", "13", "14", "15", "21", "22", "23", "24", "25", "31", "32", "33", "34", "35", "41", "42", "43", "44", "45")
        if(hasUpgrade("g",24)) player.p.upgrades.push("51", "52", "53", "54", "55")    
        if(hasUpgrade("f",11)) player.p.upgrades.push("11", "12", "13", "14", "15", "21", "22", "23", "24", "25", "31", "32", "33", "34", "35", "41", "42", "43", "44", "45", "51", "52", "53", "54", "55", "61", "62", "63")
    }
    },
    passiveGeneration() { return (hasMilestone("a", 1)&&player.current!="p")?1:0 },
    passiveGeneration() { return (hasMilestone("g", 1)&&player.current!="p")?1:0 },
    passiveGeneration() { return (hasMilestone("f", 1)&&player.current!="p")?1:0 },
    layerShown(){return true}
    
})