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
    resource: "Prestige points", // Name of prestige currency
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
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    upgrades: {
        11: { title: "Boost",
        description: "Double your point gain.",
        cost: new Decimal(1),

        },
        12: { title: "Lets speed things up",
        description: "Point gain is boosted by Prestige Points.",
        cost: new Decimal(5),
        effect() {
            return player[this.layer].points.add(1).pow(0.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("p", 11)
        }
        },
        13: { title: "More Prestige",
        description: "Prestige Point gain is boosted by Points.",
        cost: new Decimal(10),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.15)
            
        },
        unlocked() {
            return hasUpgrade("p", 12)
        
        }
        },
        14: { title: "Bigger Boost",
        description: "Triple your point gain.",
        cost: new Decimal(20),
        unlocked() {
            return hasUpgrade("p", 13)
        
        }
        },
        15: { title: "Just a Double Boost and new stuff!",
        description: "Double Point and unlock a new layer.",
        cost: new Decimal(50),
        unlocked() {
            return hasUpgrade("p", 14)
        
        }
        },
        21: { title: "More",
        description: "Gain 3x More Prestige Points",
        cost: new Decimal(1e9),
        unlocked() {
            return hasUpgrade("b", 15)
        
        }
        },
        22: { title: "Press The Button",
        description: "Button Power gain is boosted by Points at a reduced rate.",
        cost: new Decimal(2.5e10),
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        effect() {
            return player.points.add(1).pow(0.05)
            
        },
        unlocked() {
            return hasUpgrade("p", 21)
        
        }
        },
        23: { title: "More Points!",
        description: "Gain 10x More Points",
        cost: new Decimal(1e12),
        unlocked() {
            return hasUpgrade("p", 22)
        
        }
        },
        24: { title: "More prestiging",
        description: "4x Prestige Point Gain.",
        cost: new Decimal(5e12),
        unlocked() {
            return hasUpgrade("p", 23)
        
        }
        },
        25: { title: "Self-boost!",
        description: "Point gain boost itself.",
        cost: new Decimal(2e13),
        effect() {
            return player.points.add(1).pow(0.1)
        },
		effectDisplay() {return format(upgradeEffect("p", 25)) + "x"},
        unlocked() {
            return hasUpgrade("p", 24)
        }
        },
        31: { title: "More Buttons!",
        description: "10x Button Power.",
        cost: new Decimal(1e40),
        unlocked() {
            return hasUpgrade("b", 25)
        }
        },
        32: { title: "Beginning of Power",
        description: "^1.01 Points.",
        cost: new Decimal(1e42),
        unlocked() {
            return hasUpgrade("p", 31)
        }
        },
        33: { title: "More Power!",
        description: "^1.11 Points.",
        cost: new Decimal(1e42),
        unlocked() {
            return hasUpgrade("p", 32)
        }
        },
        34: { title: "More Prestiging x2!",
        description: "69,420x Prestige Points.",
        cost: new Decimal(1e58),
        unlocked() {
            return hasUpgrade("p", 33)
        }
        },
        35: { title: "Boost and a new layer!",
        description: "69,420x Points.",
        cost: new Decimal(1e71),
        unlocked() {
            return hasUpgrade("p", 34)
        }
        },
        41: { title: "Boost^",
        description: "1,000,000x Prestige Points",
        cost: new Decimal(1e220),
        unlocked() {
            return hasUpgrade("b", 35)
        }
        },
        42: { title: "Beginning of Infinity + Inflation",
        description: "^1.111 Points",
        cost: new Decimal(1e232),
        unlocked() {
            return hasUpgrade("p", 41)
        }
        },
        43: { title: "Over",
        description: "1e9x Points.",
        cost: new Decimal("1e410"),
        unlocked() {
            return hasUpgrade("p", 42)
        }
        },
        44: { title: "Powered",
        description: "100,000x Button Power.",
        cost: new Decimal("1e453"),
        unlocked() {
            return hasUpgrade("p", 43)
        }
        },
        45: { title: "Getting Closer.",
        description: "1e10x Prestige Points.",
        cost: new Decimal("1e477"),
        unlocked() {
            return hasUpgrade("p", 44)
        }
        },
        51: { title: "Just a little bit more.",
        description: "1,000,000x Button Power.",
        cost: new Decimal("1e517"),
        unlocked() {
            return hasUpgrade("p", 45)
        }
        },
        52: { title: "Boost 3!!!",
        description: "1e12x Points.",
        cost: new Decimal("1e540"),
        unlocked() {
            return hasUpgrade("p", 51)
        }
        },
        53: { title: "2!",
        description: "1e10x Prestige Points.",
        cost: new Decimal("1e603"),
        unlocked() {
            return hasUpgrade("p", 52)
        }
        },
        54: { title: "1!!",
        description: "10,000,000x Button Power.",
        cost: new Decimal("1e650"),
        unlocked() {
            return hasUpgrade("p", 53)
        }
        },
        55: { title: "Finally... New Row 3 Layer",
        description: "^1.01 Points, 1e6x PP, BP.",
        cost: new Decimal("1e678"),
        unlocked() {
            return hasUpgrade("p", 54)
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
    }
    },
    passiveGeneration() { return (hasMilestone("a", 1)&&player.current!="p")?1:0 },
    layerShown(){return true}
    
})

addLayer("b", {
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
        return player[this.layer].points.max(1).pow(5).log10().max(1)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
    upgrades: {
        11: { title: "Reset but Even faster",
        description: "10x point gain.",
        cost: new Decimal(1),

        },
        12: { title: "Lets speed things up even more",
        description: "Point gain is boosted by Button Power.",
        cost: new Decimal(5),
        effect() {
            return player[this.layer].points.add(1).pow(0.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("b", 11)
        }
        },
        13: { title: "Nice.",
        description: "69x Point Gain.",
        cost: new Decimal(10),
        effect() {
            return player.points.add(1).pow(0.15)
            
        },
        unlocked() {
            return hasUpgrade("b", 12)
        
        }
        },
        14: { title: "Bigger Boost",
        description: "Gain 10x More Prestige Points.",
        cost: new Decimal(25),
        unlocked() {
            return hasUpgrade("b", 13)
        
        }
        },
        15: { title: "New Stuff again!",
        description: "Unlock more prestige point upgrades.",
        cost: new Decimal(100),
        unlocked() {
            return hasUpgrade("b", 14)
        
        }
        },
        21: { title: "Easier",
        description: "Keep first 2 rows of Prestige Point Upgrades.",
        cost: new Decimal(1.111e11),
        unlocked() {
            return hasUpgrade("p", 25)
        
        }
        },
        22: { title: "More Prestige!",
        description: "100x Prestige Point Gain.",
        cost: new Decimal(1e13),
        unlocked() {
            return hasUpgrade("b", 21)
        
        }
        },
        23: { title: "Inflation!",
        description: "6,969x Point Gain.",
        cost: new Decimal(1e14),
        unlocked() {
            return hasUpgrade("b", 22)
        
        }
        },
        24: { title: "Some more Prestige!",
        description: "6,969x Prestige Point Gain.",
        cost: new Decimal(1e21),
        unlocked() {
            return hasUpgrade("b", 23)
        
        }
        },
        25: { title: "New Stuff Part 3!",
        description: "More Prestige Point Upgrades.",
        cost: new Decimal(1e23),
        unlocked() {
            return hasUpgrade("b", 24)
        
        }
        },
        31: { title: "A little boost.",
        description: "^1.01 Points.",
        cost: new Decimal(1e138),
        unlocked() {
            return hasUpgrade("a", 25)
        
        }
        },
        32: { title: "Lets Pop button",
        description: "420x Button Power.",
        cost: new Decimal(1e144),
        unlocked() {
            return hasUpgrade("b", 31)
        
        }
        },
        33: { title: "More Points.",
        description: "1,000x Points.",
        cost: new Decimal(1e151),
        unlocked() {
            return hasUpgrade("b", 32)
        
        }
        },
        34: { title: "More Buttons 2",
        description: "1,000x Button Power.",
        cost: new Decimal(1e161),
        unlocked() {
            return hasUpgrade("b", 33)
        
        }
        },
        35: { title: "New stuff part 5.",
        description: "More Prestige Point Upgrades.",
        cost: new Decimal(1e169),
        unlocked() {
            return hasUpgrade("b", 34)
        
        }
        },
    },
    name: "button", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "B", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#1380D0",
    requires: new Decimal(10000), // Can be a function that takes requirement increases into account
    resource: "button power", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainMult() {
        let mult = new Decimal(1)
        if (hasUpgrade('p', 22)) mult = mult.times(upgradeEffect('p', 22))
        if (hasUpgrade('p', 31)) mult = mult.times(10)
        if (hasUpgrade('a', 21)) mult = mult.times(69)
        if (hasUpgrade('b', 32)) mult = mult.times(420)
        if (hasUpgrade('b', 34)) mult = mult.times(1000)
        if (hasUpgrade('p', 44)) mult = mult.times(100000)
        if (hasUpgrade('p', 51)) mult = mult.times(1000000)
        if (hasUpgrade('p', 54)) mult = mult.times(10000000)
        if (hasUpgrade('p', 55)) mult = mult.times(1000000)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for button power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("p", 15) || player[this.layer].unlocked)}

    
})
addLayer("a", {
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
        return player[this.layer].points.max(100).pow(500).log10().max(100)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
    upgrades: {
        11: { title: "Reset 2.",
        description: "1,000x Point gain.",
        cost: new Decimal(6),

        },
        12: { title: "Lets speed things up even more x2",
        description: "Point gain is boosted by Ascension.",
        cost: new Decimal(9),
        effect() {
            return player[this.layer].points.add(5).pow(2.5)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        unlocked() {
            return hasUpgrade("a", 11)
        }
        },
        13: { title: "Super Nice.",
        description: "69,420x Point Gain.",
        cost: new Decimal(12),
        unlocked() {
            return hasUpgrade("a", 12)
        
        }
        },
        14: { title: "Insane Boost",
        description: "Gain 1,000x More Prestige Points.",
        cost: new Decimal(15),
        unlocked() {
            return hasUpgrade("a", 13)
        
        }
        },
        15: { title: "Even Easier.",
        description: "Keep Row 3 Prestige Point Upgrades.",
        cost: new Decimal(16),
        unlocked() {
            return hasUpgrade("a", 14)
        
        }
        },
        21: { title: "More Buttons.",
        description: "69x Button Power.",
        cost: new Decimal(17),
        unlocked() {
            return hasUpgrade("a", 15)
        
        }
        },
        22: { title: "Super Prestige?",
        description: "10,000x Prestige Point Gain.",
        cost: new Decimal(17),
        unlocked() {
            return hasUpgrade("a", 21)
        
        }
        },
        23: { title: "Gas gas gas!",
        description: "1,000,000x Points Gain.",
        cost: new Decimal(18),
        unlocked() {
            return hasUpgrade("a", 22)
        
        }
        },
        24: { title: "Ultra Prestige!",
        description: "100,000x Prestige Point Gain.",
        cost: new Decimal(21),
        unlocked() {
            return hasUpgrade("a", 23)
        
        }
        },
        25: { title: "New Stuff Part 4!",
        description: "More Button Power Upgrades.",
        cost: new Decimal(22),
        unlocked() {
            return hasUpgrade("a", 24)
        
        }
        },
    },
    name: "ascension", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#AA4A44",
    requires: new Decimal(1e116), // Can be a function that takes requirement increases into account
    resource: "ascension", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["p"],
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    canBuyMax() { return hasMilestone("a", 2) },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "A: Reset for ascension", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("p", 35) || player[this.layer].unlocked)},
    milestones: {
        1: {
            requirementDescription: "16 Ascension",
            effectDescription: "Gain 100% Prestige Points every second.",
            done() { return player.a.points.gte(16) }
        }, 2: {requirementDescription: "25 Ascension",
          effectDescription: "You can buy max ascensions.",
          
             done() { return player.a.points.gte(25)},},
        
    },
        },
)
addLayer("g", {
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
        return player[this.layer].points.max(1000).times(1000).max(1000)
      },
      effectDescription(){

},
effectDescription(){
    return "multiplying point gain by " + format(tmp[this.layer].effect)
    /*
      use format(num) whenever displaying a number
    */
  },
    upgrades: {
        11: { title: "Coming Soon.",
        description: "To be added.",
        cost: new Decimal("1"),

        },
    },
    name: "grass", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "G", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#13D022",
    requires: new Decimal("1e1130"), // Can be a function that takes requirement increases into account
    resource: "grass", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    branches: ["b" , "a"],
    exponent: 0.01, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainMult() {
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "g", description: "G: Reset for Grass", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return (hasUpgrade("p", 55) || player[this.layer].unlocked)},
    milestones: {
        1: {
            requirementDescription: "???",
            effectDescription: "???.",
            done() { return player.g.points.gte(16) }
        }, 2: {requirementDescription: "???",
          effectDescription: "???",
          
             done() { return player.g.points.gte(25)},},
        
    },
        },
)