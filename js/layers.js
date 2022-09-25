addLayer("p", {
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
        15: { title: "Just a Double Boost",
        description: "Double Point.",
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
        25: { title: "MASSIVE!",
        description: "1,000x Points",
        cost: new Decimal(2e13),
        unlocked() {
            return hasUpgrade("p", 24)
        
        }
        },
    },
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "3399FF",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
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
        if (hasUpgrade('p', 24)) mult = mult.times(4)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
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
        15: { title: "New Stuff",
        description: "Unlock more prestige point upgrades.",
        cost: new Decimal(100),
        unlocked() {
            return hasUpgrade("b", 14)
        
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
    color: "#4BDC13",
    requires: new Decimal(10000), // Can be a function that takes requirement increases into account
    resource: "button power", // Name of prestige currency
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
        if (hasUpgrade('p', 22)) mult = mult.times(upgradeEffect('p', 22))
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "B: Reset for button power", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
    
})
