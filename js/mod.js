let modInfo = {
	name: "The Pro Tree",
	id: "1",
	author: "ProGamesGrinder",
	pointsName: "points",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.26",
	name: "Ascension!"
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.26</h3><br>
		- Added Ascension.<br>
		- Added Milestones.<br>
		- Added Branches.<br>
		- Added New Upgrades.`

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

	let gain = new Decimal(1).mul(tmp["b"].effect).mul(tmp["a"].effect)
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
	return gain
	
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){
		let a = "Current endgame: 59 Ascensions."
		return a
	},
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
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