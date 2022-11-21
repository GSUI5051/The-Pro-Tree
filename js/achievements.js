addLayer("a", {
    startData() {
        return {
            unlocked: true,
			points: new EN(0),
        }
    },
    color: "yellow",
    row: "side",
    layerShown() {
        return true
    },
    tooltip() {
        return ("Achievements")
    },
    achievements: {
        11: {
            name: "Starting",
            done() {
                return player.p.points.gte(1)
            },
            tooltip: "Get 1 Prestige Point. <br>Reward: 1 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1)
			},
        },
        12: {
            name: "New Reset!",
            done() {
                return player.b.points.gte("1")
            },
            tooltip: "Get <b>Button Power</b>. <br>Reward: 2 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2)
			},
        },
        13: {
            name: "More upgrades!",
            done() {
                if (hasUpgrade("p", 21)) return true
            },
            tooltip: "Buy first upgrade in 2nd row <br>Reward: 4 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4)
			},
        },
        14: {
            name: "Lets keep some stuff",
            done() {
                if (hasUpgrade("b", 21)) return true
            },
            tooltip: "Buy first upgrade in 2nd row of BP upgrades. <br>Reward: 8 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8)
			},
        },
        15: {
            name: "Googol!",
            done() {
                return player.points.gte(1e100)
            },
            tooltip: "Get 1e100 Points.<br>Reward: 16 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16)
			},
        },
        16: {
            name: "Another reset layer!",
            done() {
                return player.asc.points.gte("1")
            },
            tooltip: "Get an ascension. <br>Reward: 32 AP",
			onComplete() {
				return player.a.points = player.a.points.add(32)
			},
        },
        17: {
            name: "Upgrading more!",
            done() {
                if (hasUpgrade("asc", 21)) return true
            },
            tooltip: "Buy first upgrade in 2nd row of A upgrades. <br>Reward: 64 AP",
			onComplete() {
				return player.a.points = player.a.points.add(64)
			},
        },
        21: {
            name: "Infinity",
            done() {
                return player.points.gte("1.80e308")
            },
            tooltip: "Get 1.80e308 Points. <br>Reward: 128 AP",
			onComplete() {
				return player.a.points = player.a.points.add(128)
			},
        },
        22: {
            name: "1k OoM",
            done() {
                return player.points.gte("1e1000")
            },
            tooltip: "Get 1e1,000 Points.<br>Reward: 256 AP",
			onComplete() {
				return player.a.points = player.a.points.add(256)
			},
        },
        23: {
            name: "Touch Grass",
            done() {
                return player.g.points.gte("1")
            },
            tooltip: "Get 1 Grass. <br>Reward: 500 AP",
			onComplete() {
				return player.a.points = player.a.points.add(512)
			},
        },
        24: {
            name: "Nice",
            done() {
                return player.g.points.gte(69420)
            },
            tooltip: "Get 69,420 Grass.<br>Reward: 1,024 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1024)
			},
        },
        25: {
            name: "Millilion",
            done() {
                return player.points.gte("1e3003")
            },
            tooltip: "Get 1e3,003 Points. <br>Reward: 2,048 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2048)
			},
        },
		    26: {
            name: "There is more layers?!?",
            done() {
                return player.c.points.gte(1)
            },
            tooltip: "Get 1 Cup. <br>Reward: 4,096 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4096)
			},
        },
		        27: {
            name: "10k OoM",
            done() {
                return player.points.gte("ee4")
            },
            tooltip: "Get 1e10,000 Points. <br>Reward: 8,192 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8192)
			},
				},
		        31: {
            name: "Decillion Grass!",
            done() {
                return player.g.points.gte("e33")
            },
            tooltip: "Get 1e33 Grass. <br>Reward: 16,384 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16384)
			},
        },
		        32: {
            name: "Roll",
            done() {
                return player.d.points.gte("1")
            },
            tooltip: "Get 1 Dice. <br>Reward: 32,768 AP",
			onComplete() {
				return player.a.points = player.a.points.add(32768)
			},
        },
		        33: {
            name: "Highest Number in dice!",
            done() {
                return player.d.points.gte("6")
            },
            tooltip: "Get 6 Dices. <br>Reward: 65,536 AP",
			onComplete() {
				return player.a.points = player.a.points.add(65536)
			},
        },
		        34: {
            name: "Googol Grass",
            done() {
                return player.g.points.gte("1e100")
            },
            tooltip: "Get 1e100 Grass. <br>Reward: 131,072 AP",
			onComplete() {
				return player.a.points = player.a.points.add(131072)
			},
        },
		
		        35: {
            name: "Myrillion Points",
            done() {
                return player.points.gte("1e30003")
            },
            tooltip: "Get 1e30,003 Points. <br>Reward: 262,144 AP",
			onComplete() {
				return player.a.points = player.a.points.add(262144)
			},
        },
		        36: {
            name: "More Grass",
            done() {
                return player.g.points.gte("1e420")
            },
            tooltip: "Get 1e420 Grass <br>Reward: 524,288 AP",
			onComplete() {
				return player.a.points = player.a.points.add(524288)
			},
        },
		        37: {
            name: "Row 4!",
            done() {
                return player.f.points.gte("1")
            },
            tooltip: "Get 1 Fruit.<br>Reward: 1,048,576 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1048576)
			},
        },
		    41: {
            name: "Challenging",
            done() {
                if (hasChallenge("b", 11)) return true
            },
            tooltip: "Complete a challenge. <br>Reward: 2,097,152 AP",
			onComplete() {
				return player.a.points = player.a.points.add(2097152)
			},
        },
		        42: {
            name: "100k OoM!",
            done() {
                return player.points.gte("1e100000")
            },
            tooltip: "Get 1e100,000 Points. <br>Reward: 4,194,304 AP",
			onComplete() {
				return player.a.points = player.a.points.add(4194304)
			},
		},
		        43: {
            name: "Intense!",
            done() {
                if (hasChallenge("b", 13)) return true
            },
            tooltip: "Complete 3rd challenge. <br>Reward: 8,388,608 AP",
			onComplete() {
				return player.a.points = player.a.points.add(8388608)
			},
		},
		        44: {
            name: "Infinity Cups!",
            done() {
                return player.c.points.gte(1.79e308)
            },
            tooltip: "Get 1.80e308 Cups. <br>Reward: 16,777,216 AP",
			onComplete() {
				return player.a.points = player.a.points.add(16777216)
			},
		},
		        45: {
            name: "Millilion Grass!",
            done() {
                return player.g.points.gte("1e3003")
            },
            tooltip: "Get 1e3,003 Grass. <br>Reward: 33,554,432 AP",
			onComplete() {
				return player.a.points = player.a.points.add(33554432)
			},
		},
		        46: {
            name: "Dark Fruits?",
            done() {
                return player.f.points.gte("e50")
            },
            tooltip: "Get 1e50 Fruits. <br>Reward: 67,108,864 AP",
			onComplete() {
				return player.a.points = player.a.points.add(67108864)
			},
		},
        47: {
            name: "Maximusmillion!",
            done() {
                return player.points.gte("ee6")
            },
            tooltip: "Get 1e1,000,000 Points. <br>Reward: 137,217,728 AP",
			onComplete() {
				return player.a.points = player.a.points.add(134217728)
			},
		},
        51: {
            name: "Year",
            done() {
                return player.asc.points.gte("2022")
            },
            tooltip: "Get 2,022 Ascension. <br>Reward: 268,435,456 AP",
			onComplete() {
				return player.a.points = player.a.points.add(268435456)
			},
		},
        52: {
            name: "Remorseless",
            done() {
                if (hasChallenge("c", 11)) return true
            },
            tooltip: "Complete 1st cup challenge. <br>Reward: 536,870,912 AP",
			onComplete() {
				return player.a.points = player.a.points.add(536870912)
			},
		},
        53: {
            name: "Lucky 7",
            done() {
                return player.g.points.gte("7e7777")
            },
            tooltip: "Get 7e7,777 Grass. <br>Reward: 1e9 AP",
			onComplete() {
				return player.a.points = player.a.points.add(1e9)
			},
        },
        54: {
                name: "Finally New layer!",
                done() {
                    return player.e.points.gte("1")
                },
                tooltip: "Get 1 Electricity. <br>Reward: 1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e10)
                },
            },
            55: {
                name: "Micrillion!",
                done() {
                    return player.points.gte("1e3000003")
                },
                tooltip: "Get 1e3,000,003 Points. <br>Reward: 1e11 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e11)
                },
            },
            56: {
                name: "Inflation!?",
                done() {
                    return player.points.gte("ee7")
                },
                tooltip: "Get 1e10,000,000 Points. <br>Reward: 1e12 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e12)
                },
            },
            57: {
                name: "More Prestige Points than Points!?!",
                done() {
                    return player.p.points.gte("ee8")
                },
                tooltip: "Get 1e100,000,000 Prestige Points. <br>Reward: 1e13 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e13)
                },
            },
            61: {
                name: "That was quick!",
                done() {
                    return player.h.points.gte("1")
                },
                tooltip: "Get 1 House. <br>Reward: 1e14 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e14)
                },
            },
            62: {
                name: "Maximusbillion!",
                done() {
                    return player.points.gte("ee9")
                },
                tooltip: "Get e1e9 Points. <br>Reward: 1e15 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e15)
                },
            },
            63: {
                name: "Trialogue!",
                done() {
                    return player.points.gte("ee10")
                },
                tooltip: "Get e1e10 Points. <br>Reward: 1e16 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e16)
                },
            },
            64: {
                name: "Frozen",
                done() {
                    return player.i.points.gte("1")
                },
                tooltip: "Get 1 Ice. <br>Reward: 1e17 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e17)
                },
            },
            65: {
                name: "Maximustrillion!",
                done() {
                    return player.points.gte("ee12")
                },
                tooltip: "Get e1e12 Points. <br>Reward: 1e18 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e18)
                },
            },
            66: {
                name: "Year^2",
                done() {
                    return player.d.points.gte("2023")
                },
                tooltip: "Get 2,023 Dices. <br>Reward: 1e19 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e19)
                },
            },
            67: {
                name: "Big Numbers!",
                done() {
                    return player.points.gte("ee15")
                },
                tooltip: "Get e1e15 Points. <br>Reward: 1e20 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e20)
                },
            },
            71: {
                name: "Row 5!",
                done() {
                    return player.j.points.gte("1")
                },
                tooltip: "Get 1 Jetpack. <br>Reward: 1e23 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e23)
                },
            },
            72: {
                name: "Year^3",
                done() {
                    return player.e.points.gte("2024")
                },
                tooltip: "Get 2,024 Electricity. <br>Reward: 1e26 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e26)
                },
            },
            73: {
                name: "To the moon!",
                done() {
                    return player.j.points.gte("1e10")
                },
                tooltip: "Get 1e10 Jetpacks. <br>Reward: 1e29 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e29)
                },
            },
            74: {
                name: "Insane",
                done() {
                    if (hasChallenge("j", 11)) return true
                },
                tooltip: "Complete 1st Jetpack challenge. <br>Reward: 1e32 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e32)
                },
            },
            75: {
                name: "Maximusdecillion!",
                done() {
                    return player.points.gte("e1e33")
                },
                tooltip: "Get e1e33 Points. <br>Reward: 1e35 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e35)
                },
            },
            76: {
                name: "Year^4",
                done() {
                    return player.i.points.gte("2025")
                },
                tooltip: "Get 2,025 Ice. <br>Reward: 1e38 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e38)
                },
            },
            77: {
                name: "Googolplex",
                done() {
                    return player.points.gte("e1e100")
                },
                tooltip: "Get e1e100 Points. <br>Reward: 1e41 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e41)
                },
            },
            81: {
                name: "Infinity^2",
                done() {
                    return player.points.gte("e1.80e308")
                },
                tooltip: "Get e1.80e308 Points. <br>Reward: 1e51 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e51)
                },
            },
            82: {
                name: "OOM^2 when?",
                done() {
                    return player.points.gte("e1e1000")
                },
                tooltip: "Get e1e1,000 Points. <br>Reward: 1e61 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e61)
                },
            },
            83: {
                name: "Killillion Points!",
                done() {
                    return player.points.gte("e1e3003")
                },
                tooltip: "Get e1e3,003 Points. <br>Reward: 1e100 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e100)
                },
            },
            84: {
                name: "Light-Year?",
                done() {
                    return player.asc.points.gte("1e2022")
                },
                tooltip: "Get 1e2,022 Ascension. <br>Reward: 1e200 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e200)
                },
            },
            85: {
                name: "Large Numbers",
                done() {
                    return player.points.gte("eee4")
                },
                tooltip: "Get e1e10,000 Points. <br>Reward: 1e300 AP",
                onComplete() {
                    return player.a.points = player.a.points.add(1e300)
                },
            },
            86: {
                name: "Very Large Numbers!",
                done() {
                    return player.points.gte("ee1000000")
                },
                tooltip: "Get e1e1,000,000 Points. <br>Reward: 1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e1000")
                },
            },
            87: {
                name: "Omega Large Numbers!",
                done() {
                    return player.points.gte("ee10000000000")
                },
                tooltip: "Get ee1e10 Points. <br>Reward: 1e10,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e10000")
                },
            },
            91: {
                name: "Locked",
                done() {
                    return player.k.points.gte("1")
                },
                tooltip: "Get 1 Key. <br>Reward: 1e5,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("1e5000000")
                },
            },
            92: {
                name: "Already?",
                done() {
                    return player.k.points.gte("1.80e308")
                },
                tooltip: "Get 1.80e308 Keys. <br>Reward: e1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10")
                },
            },
            93: {
                name: "Googolduplex",
                done() {
                    return player.points.gte("eee100")
                },
                tooltip: "Get ee1e100 Points. <br>Reward: e1e69 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee69")
                },
            },
            94: {
                name: "Never ending.",
                done() {
                    return player.l.points.gte("1")
                },
                tooltip: "Get 1 Light. <br>Reward: e1e300 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee300")
                },
            },
            95: {
                name: "Extreme",
                done() {
                    if (hasChallenge("j", 12)) return true
                },
                tooltip: "Complete 2nd jetpack challenge. <br>Reward: e1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee1000")
                },
            },
            96: {
                name: "Kalillion Points!",
                done() {
                    return player.points.gte("eee3003")
                },
                tooltip: "Get ee1e3,003 Points. <br>Reward: e1e3,003 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee3003")
                },
            },
            97: {
                name: "Darkness?",
                done() {
                    return player.l.points.gte("1.80e308")
                },
                tooltip: "Get 1.80e308 Lights. <br>Reward: e1e5,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee5000")
                },
            },
            101: {
                name: "Worthy",
                done() {
                    return player.m.points.gte("1")
                },
                tooltip: "Get 1 Money. <br>Reward: e1e10,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10000")
                },
            },
            102: {
                name: "Getting Closer to F Notation",
                done() {
                    return player.points.gte("eeee9")
                },
                tooltip: "Get eee1e9 Points. <br>Reward: ee1e10,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("ee10000000")
                },
            },
            103: {
                name: "Books",
                done() {
                    return player.n.points.gte("1")
                },
                tooltip: "Get 1 Notes. <br>Reward: ee1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee10")
                },
            },
            104: {
                name: "Googoltriplex",
                done() {
                    return player.points.gte("eeee100")
                },
                tooltip: "Get eee1e100 Points. <br>Reward: ee1e100 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee100")
                },
            },
            105: {
                name: "Hepillion Points",
                done() {
                    return player.points.gte("eeee3003")
                },
                tooltip: "Get eee1e3,003 Points. <br>Reward: ee1e1,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eee1000")
                },
            },
            106: {
                name: "Almost there!",
                done() {
                    return player.points.gte("eeeee9")
                },
                tooltip: "Get eeee1e9 Points. <br>Reward: ee1e10,000,000 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee7")
                },
            },
            107: {
                name: "F Notation!",
                done() {
                    return player.points.gte("eeeee10")
                },
                tooltip: "Get 1F6 Points. <br>Reward: eee1e10 AP",
                onComplete() {
                    return player.a.points = player.a.points.add("eeee10")
                },
            },
    },
    tabFormat: ["blank", ["display-text", function() {
        return "<h3 style='color: yellow;'>Achievements: " + player.a.achievements.length + "/" + (Object.keys(tmp.a.achievements).length - 2) + "</h4><br>You have <h2 style='color: yellow; text-shadow: 0 0 10px yellow'>" + format(player.a.points) + "</h3> Achievement Points. <br><h4 style='color: #ffffff;'>Giving x" + format(player.a.points.add(1).pow(0.56).pow(player.a.points.sub(1.2e60).max(1))) + " to point gain.</h3><br>" + "<h4 style='color: grey;'>The effect is massive increased at 1.2e60 AP." + "</h4>"
    }
    ], "blank", "blank", "achievements", ],
}, )