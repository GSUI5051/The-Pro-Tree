let modInfo = {
	name: "The Pro Tree",
	id: "1",
	author: "ProGamesGrinder",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js", "buttonpower.js", "ascension.js", "grass.js", "cups.js", "dices.js", "fruits.js", "electricity.js", "houses.js", "ice.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.4",
	name: "Row 4!"
}

let changelog = `<h1>Changelog:</h1><br>
			<h3>v0.4</h3><br>
		- Added 4 new layers.<br>
		- Added new milestones.<br>
		- Added new upgrades.<br>
		- Added Challenges.
		<h3></h3><br><br>	
		<h3>v0.3</h3><br>
		- Added 3 new layers.<br>
		- Added new milestones.<br>
		- Added new upgrades.<br>
		- Added Ascension resets nothing.
		<h3></h3><br><br>	
		<h3>v0.2</h3><br>
		- Added 2 new layers.<br>
		- Added Milestones.<br>
		- Added Branches.<br>
		- Added New upgrades.<br>
		- Added Passive Gain.<br>
		- Added Keep stuff.<br>
		- Added max ascensions.<br>
		- Added current endgame at top.
			<h3></h3><br><br>
			<h3>v0.1</h3><br>
			- Added 1 new layer.<br>
			- Added New Upgrades.
			<h3></h3><br><br>
			<h3>v0.0</h3><br>
			- Added Upgrades.`
let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	
	if(!canGenPoints())
		return new Decimal(1)

	let gain = new Decimal(1).mul(tmp["b"].effect).mul(tmp["a"].effect).mul(tmp["g"].effect).mul(tmp["c"].effect).mul(tmp["d"].effect).mul(tmp["f"].effect).mul(tmp["e"].effect).mul(tmp["h"].effect).mul(tmp["i"].effect)
	if (hasUpgrade('p', 11)) gain = gain.times(2)
	if (hasUpgrade('p', 12)) gain = gain.times(upgradeEffect('p', 12))
	if (hasUpgrade('p', 14)) gain = gain.times(3)
	if (hasUpgrade('p', 15)) gain = gain.times(2)
	if (hasUpgrade('p', 23)) gain = gain.times(10)
	if (hasUpgrade('p', 25)) gain = gain.times(upgradeEffect("p", 25))
	if (hasUpgrade('b', 11)) gain = gain.times(10)
	if (hasUpgrade('b', 12)) gain = gain.times(upgradeEffect('b', 12))
	if (hasUpgrade('b', 13)) gain = gain.times(69)
	if (hasUpgrade('b', 23)) gain = gain.times(6969)
	if (hasUpgrade('b', 33)) gain = gain.times(1000)
	if (hasUpgrade('p', 32)) gain = gain.pow(1.01)
	if (hasUpgrade('b', 31)) gain = gain.pow(1.01)
	if (hasUpgrade('p', 34)) gain = gain.pow(1.11)
	if (hasUpgrade('p', 42)) gain = gain.pow(1.111)
	if (hasUpgrade('p', 35)) gain = gain.times(69420)
	if (hasUpgrade('a', 11)) gain = gain.times(1000)
	if (hasUpgrade('a', 12)) gain = gain.times(upgradeEffect('a', 12))
	if (hasUpgrade('a', 13)) gain = gain.times(69420)
	if (hasUpgrade('a', 23)) gain = gain.times(1e6)
	if (hasUpgrade('p', 43)) gain = gain.times(1e9)
	if (hasUpgrade('p', 52)) gain = gain.times(1e12)
	if (hasUpgrade('p', 55)) gain = gain.pow(1.01)
	if (hasUpgrade('g', 11)) gain = gain.times(1e10)
	if (hasUpgrade('g', 12)) gain = gain.times(upgradeEffect('g', 12))
	if (hasUpgrade('g', 13)) gain = gain.times(1e14)
	if (hasUpgrade('g', 21)) gain = gain.pow(1.025)
	if (hasUpgrade('g', 22)) gain = gain.times(1e21)
	if (hasUpgrade('g', 24)) gain = gain.times(1e30)
	if (hasUpgrade('b', 53)) gain = gain.times(1e10)
	if (hasUpgrade('b', 54)) gain = gain.times(1e5)
	if (hasUpgrade('b', 55)) gain = gain.pow(1.0015)
	if (hasUpgrade('a', 32)) gain = gain.times(6.969e69)
	if (hasUpgrade('c', 11)) gain = gain.times(1e20)
	if (hasUpgrade('c', 12)) gain = gain.times(upgradeEffect('c', 12))
	if (hasUpgrade('c', 13)) gain = gain.times(1e25)
	if (hasUpgrade('c', 21)) gain = gain.times(1e10)
	if (hasUpgrade('c', 22)) gain = gain.times(1e50)
	if (hasUpgrade('c', 24)) gain = gain.times(1e69)
	if (hasUpgrade('c', 25)) gain = gain.times(1e30)
	if (hasUpgrade('a', 41)) gain = gain.times(1e10)
	if (hasUpgrade('a', 42)) gain = gain.times(1e20)
	if (hasUpgrade('a', 43)) gain = gain.times(1e40)
	if (hasUpgrade('a', 44)) gain = gain.times(1e69)
	if (hasUpgrade('d', 11)) gain = gain.times(1e30)
	if (hasUpgrade('d', 12)) gain = gain.times(upgradeEffect('d', 12))
	if (hasUpgrade('d', 13)) gain = gain.times(1e42)
	if (hasUpgrade('d', 21)) gain = gain.times(1e60)
	if (hasUpgrade('d', 24)) gain = gain.times(1e125)
	if (hasUpgrade('c', 33)) gain = gain.times(1e200)
	if (hasUpgrade('c', 35)) gain = gain.times(1.111e111)
	if (hasUpgrade('a', 55)) gain = gain.times(1e100)
	if (hasUpgrade('d', 31)) gain = gain.times(1e50)
	if (hasUpgrade('d', 32)) gain = gain.times(1e100)
	if (hasUpgrade('d', 33)) gain = gain.times(1e150)
	if (hasUpgrade('d', 34)) gain = gain.times(1e200)
	if (hasUpgrade('d', 35)) gain = gain.times("1.79e308")
	if (hasUpgrade('f', 11)) gain = gain.times(1e100)
	if (hasUpgrade('f', 12)) gain = gain.times(upgradeEffect('f', 12))
	if (hasUpgrade('f', 13)) gain = gain.times(1e150)
	if (inChallenge("b", 11)) gain = gain.pow(0.01)
	if (hasChallenge("b", 11)) gain = gain.times(1e69)
	if (hasUpgrade('f', 21)) gain = gain.times(1e200)
	if (hasUpgrade('f', 24)) gain = gain.times(upgradeEffect('f', 24))
	if (hasUpgrade('f', 31)) gain = gain.times(1e300)
	if (hasUpgrade('f', 32)) gain = gain.times(1e200)
	if (hasUpgrade('f', 35)) gain = gain.times(1e100)
	if (inChallenge("b", 13)) gain = gain.pow(0.001)
	if (hasChallenge("b", 13)) gain = gain.times(1e69)
	if (hasUpgrade('c', 44)) gain = gain.times("1e420")
	if (hasUpgrade('g', 43)) gain = gain.times(1e300)
	if (hasUpgrade('g', 44)) gain = gain.times(1e300)
	if (hasUpgrade('g', 45)) gain = gain.times(1e200)
	if (hasUpgrade('g', 51)) gain = gain.times(1e150)
	if (hasUpgrade('g', 52)) gain = gain.times(1e100)
	if (hasUpgrade('g', 55)) gain = gain.times("1e1000")
	if (inChallenge("g", 13)) gain = gain.pow(0.1)
	if (hasChallenge("g", 13)) gain = gain.times("1e777")
	if (hasUpgrade("c", 51)) gain = gain.times("1e308")
	if (hasUpgrade('c', 55)) gain = gain.times("1e1000")
	if (inChallenge("g", 21)) gain = gain.pow(0.001)
	if (inChallenge("g", 23)) gain = gain.pow(0.1)
	if (hasChallenge("g", 23)) gain = gain.times("1e3003")
	if (hasUpgrade("d", 41)) gain = gain.times("1e666")
	if (hasUpgrade("d", 42)) gain = gain.times("1e1000")
	if (hasUpgrade("d", 43)) gain = gain.times("1e420")
	if (hasUpgrade("d", 44)) gain = gain.times("1e420")
	if (hasUpgrade("d", 45)) gain = gain.times("1e1000")
	if (inChallenge("c", 12)) gain = gain.pow(0.5)
	if (inChallenge("c", 21)) gain = gain.pow(0.0145)
	if (hasChallenge("c", 22)) gain = gain.times("1e2000")
	if (hasUpgrade("d", 51)) gain = gain.times("1e1000")
	if (hasUpgrade("d", 52)) gain = gain.times("1e2000")
	if (hasUpgrade("d", 53)) gain = gain.times("1e4000")
	if (hasUpgrade("d", 54)) gain = gain.times("1e6969")
	if (hasUpgrade("d", 55)) gain = gain.times("1e10000")
	if (hasUpgrade('p', 61)) gain = gain.times(upgradeEffect('p', 61))
	if (hasUpgrade("e", 11)) gain = gain.times("1e6969")
	if (hasUpgrade('e', 12)) gain = gain.times(upgradeEffect('e', 12))
	if (hasUpgrade('p', 62)) gain = gain.times(upgradeEffect('p', 62))
	if (hasUpgrade("e", 14)) gain = gain.times("1e10000")
	if (hasUpgrade('p', 63)) gain = gain.times(upgradeEffect('p', 63))
	if (hasUpgrade("e", 21)) gain = gain.times("1e6969")
	if (hasUpgrade("e", 24)) gain = gain.pow("1.1")
	if (hasUpgrade("e", 25)) gain = gain.times("1e100000")
	if (hasUpgrade("e", 33)) gain = gain.pow("1.15")
	if (hasUpgrade("e", 34)) gain = gain.pow("1.1")
	if (hasUpgrade("e", 35)) gain = gain.pow("1.01")
	if (hasChallenge("f", 11)) gain = gain.pow("1.01")
	if (inChallenge("f", 12)) gain = gain.pow(0.1)
	if (hasChallenge("f", 12)) gain = gain.pow("1.02")
	if (hasUpgrade("h", 11)) gain = gain.times("1e1000000")
	if (hasUpgrade('h', 12)) gain = gain.times(upgradeEffect('h', 12))
	if (hasUpgrade("h", 13)) gain = gain.pow("1.03")
	if (hasUpgrade("h", 14)) gain = gain.times("e3000003")
	if (hasUpgrade("h", 21)) gain = gain.pow("1.025")
	if (hasUpgrade("h", 24)) gain = gain.times("e10000000")
	if (hasUpgrade("h", 25)) gain = gain.pow("1.001")
	if (hasUpgrade("h", 31)) gain = gain.pow("1.01")
	if (hasUpgrade("h", 32)) gain = gain.pow("1.01")
	if (hasUpgrade("h", 33)) gain = gain.times("e30000003")
	if (hasUpgrade("h", 34)) gain = gain.times("e10000000")
	if (hasUpgrade("h", 35)) gain = gain.pow("1.001")
	if (hasUpgrade("f", 41)) gain = gain.times("e20000000")
	if (hasUpgrade("f", 42)) gain = gain.pow("1.005")
	if (hasUpgrade("f", 43)) gain = gain.times("e50000000")
	if (hasUpgrade("f", 45)) gain = gain.times("e60075000")
	if (hasUpgrade("i", 11)) gain = gain.times("ee8")
	if (hasUpgrade("i", 12)) gain = gain.times("1e200000000")
	if (hasUpgrade("i", 14)) gain = gain.times("1e100000000")
	if (hasUpgrade("i", 15)) gain = gain.times("1e300000003")
	if (hasUpgrade("i", 22)) gain = gain.times("1e300000003")
	if (hasUpgrade("i", 22)) gain = gain.times("1e420000000")
	if (hasUpgrade("i", 24)) gain = gain.pow("1.001")
	if (hasUpgrade("i", 25)) gain = gain.times("ee9")
	if (hasUpgrade("i", 31)) gain = gain.times("ee9")
	if (hasUpgrade("i", 32)) gain = gain.pow("1.01")
	if (hasUpgrade("i", 33)) gain = gain.pow("1.005")
	if (hasUpgrade("i", 34)) gain = gain.times("ee9")
	if (hasUpgrade("i", 35)) gain = gain.times("ee10")
	if (hasUpgrade("e", 41)) gain = gain.times("ee10")
	if (hasUpgrade("e", 42)) gain = gain.times("ee10")
	if (hasUpgrade("e", 43)) gain = gain.times("ee10")
	if (hasUpgrade("e", 44)) gain = gain.times("ee10")
	if (hasUpgrade("e", 45)) gain = gain.times("ee11")
	if (hasUpgrade("h", 41)) gain = gain.times("ee11")
	if (hasUpgrade("h", 42)) gain = gain.times("ee11")
	if (hasUpgrade("h", 43)) gain = gain.times("ee11")
	if (hasUpgrade("h", 44)) gain = gain.times("ee11")
	if (hasUpgrade("h", 45)) gain = gain.times("ee12")
	if (hasUpgrade("i", 41)) gain = gain.times("ee12")
	if (hasUpgrade("i", 42)) gain = gain.times("ee13")
	if (hasUpgrade("i", 43)) gain = gain.times("ee13")
	if (hasUpgrade("i", 44)) gain = gain.times("ee14")
	return gain
	
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){
		let a = "Current endgame: 33 Ices."
		return a
	},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("ee280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}