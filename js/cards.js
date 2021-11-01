const cards = [
	{name:'The Muse', rarity:'legendary', points:2, attributes:['Guitar bang attack hits more targets and inflicts the Electrocuted condition.'], unique:true, requires:'Guitar', img:'DC_The_Muse_S.png'},
	{name:'The Bard', rarity:'legendary', points:3, attributes:['Power Chord attack spawns 2 additional projectiles (from 3 to 5)','Wicked Solo attack leaves damaging trail.'], unique:true, requires:'Guitar', img:'DC_The_Bard_S.png'},
	{name:'The Smith', rarity:'legendary', points:3, attributes:['+100 armor when carrying a hammer','Hammer attacks gain a 30% damage bonus against full health foes.'], unique:true, requires:'Hammer', img:'DC_The_Smith_S.png'},
	{name:'The Golem', rarity:'legendary', points:2, attributes:['Charging of Hammer Crush attack is not interrupted by enemy attacks','Gain Haste after each Smash attack.'], unique:true, requires:'Hammer', img:'DC_The_Golem_S.png'},
	{name:'The Cannon', rarity:'legendary', points:3, attributes:['Gain Might for 1 second per foe hit with a grenade','Explosive Jump inflicts Frailty for 5 seconds on targets hit.'], unique:true, requires:'Hand Mortar', img:'DC_The_Cannon_S.png'},
	{name:'The Trebuchet', rarity:'legendary', points:3, attributes:['Mortar attacks are channeled quicker','The Fire Lake attack inflicts the Weakness condition.'], unique:true, requires:'Hand Mortar', img:'DC_The_Trebuchet_S.png'},
	{name:'The Lightning', rarity:'legendary', points:3, attributes:['+20% damage vs Electrocuted foes. -50% Ball Lightning cooldown. +50% Ball Lightning duration.'], unique:true, requires:'Lightning Gun', img:'DC_The_Lightning_S.png'},
	{name:'The Thunderstorm', rarity:'legendary', points:2, attributes:['Lightning gun\'s basic attack is 50% longer'], unique:true, requires:'Lightning Gun', img:'DC_The_Thunderstorm_S.png'},
	{name:'The Gundslinger', rarity:'legendary', points:3, attributes:['Move faster and gain 20% chance to inflict Bleeding when using the Barrage attack.'], unique:true, requires:'Revolver', img:'DC_The_Gunslinger_S.png'},
	{name:'The Silver Bullet', rarity:'legendary', points:2, attributes:['50% Chance that Pistol bullets will ricochet to another enemy.'], unique:true, requires:'Revolver', img:'DC_The_Silver_Bullet_S.png'},
	{name:'The Swashbuckler', rarity:'legendary', points:3, attributes:['Gain Quickness for 2 seconds when you kill an enemy with the rapier\'s Flurry attack','Coup de Grace causes Daze for 2 seconds on hit.'], unique:true, requires:'Rapier', img:'DC_The_Swashbuckler_S.png'},
	{name:'The Trio', rarity:'legendary', points:2, attributes:['Rapier Charge attack spawns two other chargers on both sides. Effectively triples the damaging area.','+20 Charge attack damage.'], unique:true, requires:'Rapier', img:'DC_The_Trio_S.png'},
	{name:'The Blademaster', rarity:'legendary', points:3, attributes:['+20% critical damage with swords','Gain Regeneration for 10 seconds when you score a crit with a Sword Slash or Dash attack.'], unique:true, requires:'Sword'},
	{name:'The Edge', rarity:'legendary', points:2, attributes:['Sword Slash and Dash attacks inflicts damage in 3m radius.'], unique:true, requires:'Sword'},
	{name:'The Hunter', rarity:'legendary', points:3, attributes:['+20% shotgun damage on split timing attacks','Point-Blank shot now grants Might in addition to its normal effect.'], unique:true, requires:'Shotgun'},
	{name:'The Trigger', rarity:'legendary', points:2, attributes:['Shotgun attacks immediately after dodging are considered split time attacks','+20% critical damage'], unique:true, requires:'Shotgun'},
	{name:'The Reaper', rarity:'legendary', points:3, attributes:['+5 max Soul Shards','Shockwave and Whirldwind refund 33% of the spent Soul Shards','The Scythe\'s Shockwave attack now deals 20% base damage per Soul Shard spent.'], unique:true, requires:'Scythe'},
	{name:'The Harvest', rarity:'legendary', points:2, attributes:['Scythe attacks directly after dodging are considered split time attacks','Split time attacks provide additional Soul Shards.'], unique:true, requires:'Scythe'},
	{name:'The Magician', rarity:'legendary', points:3, attributes:['Picking up Arcane Power orbs grants 250 overdrive','Casting a demon power while wielding a Tome grants Enraged'], unique:true, requires:'Tome'},
	{name:'Wild Magic', rarity:'legendary', points:3, attributes:['Picking up Arcane Power orbs grants Regeneration','+5% damage per stack of Arcane Power'], unique:true, requires:'Tome'},
	{name:'The Vortex', rarity:'legendary', points:4, attributes:['Reduces all cooldows by 2.0 sec. for every Orb picked up','Increased pick up distance for Orbs.'], unique:true, requires:'Tome'},

	{name:'The Alchemist', rarity:'legendary', points:0, attributes:[''], unique:true},
	{name:'The Barbarian', rarity:'legendary', points:0, attributes:[''], unique:true},
	{name:'The Devil', rarity:'legendary', points:0, attributes:[''], unique:true},
	{name:'The Grace', rarity:'legendary', points:0, attributes:[''], unique:true},
	{name:'The Inventor', rarity:'legendary', points:0, attributes:[''], unique:true},
	{name:'The Runner', rarity:'legendary', points:0, attributes:[''], unique:true},
	{name:'The Saint', rarity:'legendary', points:0, attributes:[''], unique:true},
	{name:'The Seer', rarity:'legendary', points:0, attributes:[''], unique:true},

	{name:'Death', rarity:'common', points:1, attributes:['+7% damage but lose 3% max health'], unique:false},
	{name:'Death', rarity:'uncommon', points:2, attributes:['+15% damage but lose 7% max health'], unique:false},
	{name:'Death', rarity:'rare', points:4, attributes:['+25% damage but lose 10% max health'], unique:false},
	{name:'Greed', rarity:'uncommon', points:1, attributes:['+40% more gold from monsters'], unique:false},
	{name:'Greed', rarity:'rare', points:2, attributes:['+80% more gold from monsters'], unique:false},
	{name:'Hope', rarity:'common', points:1, attributes:['+250 health'], unique:false},
	{name:'Hope', rarity:'uncommon', points:2, attributes:['+500 health'], unique:false},
	{name:'Hope', rarity:'rare', points:4, attributes:['+1000 health'], unique:false},
	{name:'Hope', rarity:'legendary', points:6, attributes:['+1500 health'], unique:false},
	{name:'Justice', rarity:'common', points:1, attributes:['Gain Thorns for 20 sec. when you lose more than 10% health in a single hit (40 sec. cooldown)'], unique:false},
	{name:'Justice', rarity:'uncommon', points:3, attributes:['Gain Thorns for 20 sec. when you lose more than 10% health in a single hit (30 sec. cooldown)'], unique:false},
	{name:'Justice', rarity:'rare', points:5, attributes:['Gain Thorns for 30 sec. when you lose more than 10% health in a single hit (30 sec. cooldown)'], unique:false},
	{name:'Strength', rarity:'common', points:2, attributes:['+6% critical chance'], unique:false},
	{name:'Strength', rarity:'uncommon', points:3, attributes:['+8% critical chance'], unique:false},
	{name:'Strength', rarity:'rare', points:4, attributes:['+10% critical chance'], unique:false},
	{name:'Strength', rarity:'legendary', points:5, attributes:['+12% critical chance'], unique:false},
	{name:'The Acrobat', rarity:'uncommon', points:2, attributes:['Gain 100 armor while dodging'], unique:false},
	{name:'The Acrobat', rarity:'rare', points:4, attributes:['Gain 200 armor while dodging'], unique:false},
	{name:'The Archer', rarity:'common', points:1, attributes:['+5% ranged damage'], unique:false},
	{name:'The Archer', rarity:'uncommon', points:2, attributes:['+10% ranged damage'], unique:false},
	{name:'The Archer', rarity:'rare', points:5, attributes:['+20% ranged damage'], unique:false},
	{name:'The Bastion', rarity:'common', points:1, attributes:['+20 armor per active buff (max 40)'], unique:false},
	{name:'The Bastion', rarity:'uncommon', points:2, attributes:['+20 armor per active buff (max 60)'], unique:false},
	{name:'The Bastion', rarity:'rare', points:3, attributes:['+20 armor per active buff (max 80)'], unique:false},
	{name:'The Bastion', rarity:'legendary', points:4, attributes:['+20 armor per active buff (max 100)'], unique:false},
	{name:'The Beast', rarity:'common', points:1, attributes:['+25 armor penetration'], unique:false},
	{name:'The Beast', rarity:'uncommon', points:2, attributes:['+45 armor penetration'], unique:false},
	{name:'The Beast', rarity:'rare', points:3, attributes:['+65 armor penetration'], unique:false},
	{name:'The Beast', rarity:'legendary', points:4, attributes:['+90 armor penetration'], unique:false},
	{name:'The Bishop', rarity:'common', points:2, attributes:['Gain 2.0% maximum health on crit (5 sec. cooldown)'], unique:false},
	{name:'The Bishop', rarity:'uncommon', points:4, attributes:['Gain 3.5% maximum health on crit (5 sec. cooldown)'], unique:false},
	{name:'The Bishop', rarity:'rare', points:6, attributes:['Gain 5.0% maximum health on crit (5 sec. cooldown)'], unique:false},
	{name:'The Bishop', rarity:'legendary', points:8, attributes:['Gain 6.5% maximum health on crit (5 sec. cooldown)'], unique:false},
	{name:'The Executioner', rarity:'common', points:1, attributes:['+15% damage against enemies with health below 50%'], unique:false},
	{name:'The Executioner', rarity:'uncommon', points:2, attributes:['+25% damage against enemies with health below 50%'], unique:false},
	{name:'The Executioner', rarity:'rare', points:4, attributes:['+40% damage against enemies with health below 50%'], unique:false},
	{name:'The Fool', rarity:'common', points:0, attributes:['The Fool card doesn\'t have its own fixed attributes. It can only provide attribute by being Divine or Wicked. Or count as total number of equipped cards for Wildcard.','Each The Fool card has a joke on it.'], unique:false},
	{name:'The Gong', rarity:'common', points:1, attributes:['Causes a dazing explotion (100 damage) when you lose more than 10% heatlh in a single hit for 1.0 sec. (15 sec, cooldown)'], unique:false},
	{name:'The Gong', rarity:'uncommon', points:2, attributes:['Causes a dazing explotion (100 damage) when you lose more than 10% heatlh in a single hit for 2.0 sec. (15 sec, cooldown)'], unique:false},
	{name:'The Gong', rarity:'rare', points:3, attributes:['Causes a dazing explotion (100 damage) when you lose more than 10% heatlh in a single hit for 3.0 sec. (15 sec, cooldown)'], unique:false},
	{name:'The Gong', rarity:'legendary', points:4, attributes:['Causes a dazing explotion (100 damage) when you lose more than 10% heatlh in a single hit for 4.0 sec. (15 sec, cooldown)'], unique:false},
	{name:'The Guardian', rarity:'uncommon', points:2, attributes:['10% chance to trigger an explosion when hit in melee (150 damage)'], unique:false},
	{name:'The Guardian', rarity:'rare', points:3, attributes:['15% chance to trigger an explosion when hit in melee (150 damage)'], unique:false},
	{name:'The Guardian', rarity:'legendary', points:4, attributes:['15% chance to trigger an explosion when hit in melee (250 damage)'], unique:false},
	{name:'The Knight', rarity:'common', points:1, attributes:['+20 armor'], unique:false},
	{name:'The Knight', rarity:'uncommon', points:2, attributes:['+40 armor'], unique:false},
	{name:'The Knight', rarity:'rare', points:3, attributes:['+60 armor'], unique:false},
	{name:'The Knight', rarity:'legendary', points:4, attributes:['+80 armor'], unique:false},
	{name:'The Moon', rarity:'common', points:2, attributes:['Cause a frost explosion (100 damage) on crit applying Frost condition to all targets (15 sec. cooldown)',''], unique:false},
	{name:'The Moon', rarity:'uncommon', points:3, attributes:['Cause a frost explosion (150 damage) on crit applying Frost condition to all targets (15 sec. cooldown)',''], unique:false},
	{name:'The Moon', rarity:'rare', points:4, attributes:['Cause a frost explosion (200 damage) on crit applying Frost condition to all targets (15 sec. cooldown)',''], unique:false},
	{name:'The Moon', rarity:'legendary', points:5, attributes:['Cause a frost explosion (250 damage) on crit applying Frost condition to all targets (15 sec. cooldown)',''], unique:false},
	{name:'The Oak', rarity:'uncommon', points:1, attributes:['+20% duration of buffs'], unique:false},
	{name:'The Oak', rarity:'rare', points:2, attributes:['+30% duration of buffs'], unique:false},
	{name:'The Obelisk', rarity:'common', points:1, attributes:['Increase damage of Demon Powers and duration of auras by 15%'], unique:false},
	{name:'The Obelisk', rarity:'uncommon', points:2, attributes:['Increase damage of Demon Powers and duration of auras by 20%'], unique:false},
	{name:'The Obelisk', rarity:'rare', points:3, attributes:['Increase damage of Demon Powers and duration of auras by 25%'], unique:false},
	{name:'The Obelisk', rarity:'legendary', points:4, attributes:['Increase damage of Demon Powers and duration of auras by 30%'], unique:false},
	{name:'The Paladin', rarity:'common', points:2, attributes:['+5% damage per active buff (max 10)'], unique:false},
	{name:'The Paladin', rarity:'uncommon', points:3, attributes:['+5% damage per active buff (max 15)'], unique:false},
	{name:'The Paladin', rarity:'rare', points:4, attributes:['+5% damage per active buff (max 20)'], unique:false},
	{name:'The Paladin', rarity:'legendary', points:5, attributes:['+5% damage per active buff (max 25)'], unique:false},
	{name:'The Phoenix', rarity:'legendary', points:4, attributes:['Prevents skeletons slain by you from rising again','All healing effects are increased by 100% while you\'re below 50% health'], unique:false, dlc:2},
	{name:'The Rogue', rarity:'common', points:1, attributes:['+20% critical damage'], unique:false},
	{name:'The Rogue', rarity:'uncommon', points:3, attributes:['+60% critical damage'], unique:false},
	{name:'The Rogue', rarity:'rare', points:5, attributes:['+100% critical damage'], unique:false},
	{name:'The Rogue', rarity:'legendary', points:7, attributes:['+150% critical damage'], unique:false},
	{name:'The Slayer', rarity:'common', points:2, attributes:['Gain 3.0% of maximum health on kill (15 sec. cooldown)'], unique:false},
	{name:'The Slayer', rarity:'uncommon', points:4, attributes:['Gain 6.0% of maximum health on kill (15 sec. cooldown)'], unique:false},
	{name:'The Slayer', rarity:'rare', points:5, attributes:['Gain 9.0% of maximum health on kill (15 sec. cooldown)'], unique:false},
	{name:'The Slayer', rarity:'legendary', points:6, attributes:['Gain 12.0% of maximum health on kill (15 sec. cooldown)'], unique:false},
	{name:'The Sun', rarity:'common', points:2, attributes:['Causes an explosion (200 damage) on overkill ignoring armor (20 sec. cooldown)'], unique:false},
	{name:'The Sun', rarity:'uncommon', points:3, attributes:['Causes an explosion (300 damage) on overkill ignoring armor (20 sec. cooldown)'], unique:false},
	{name:'The Sun', rarity:'rare', points:4, attributes:['Causes an explosion (400 damage) on overkill ignoring armor (20 sec. cooldown)'], unique:false},
	{name:'The Sun', rarity:'legendary', points:5, attributes:['Causes an explosion (500 damage) on overkill ignoring armor (20 sec. cooldown)'], unique:false},
	{name:'The Swarm', rarity:'common', points:2, attributes:['Launches 6 target seeking projectiles that do 150% damage when you do more than 50% of a target\'s health amount of damage (15 sec. cooldown)'], unique:false, dlc:2},
	{name:'The Swarm', rarity:'uncommon', points:3, attributes:['Launches 8 target seeking projectiles that do 200% damage when you do more than 50% of a target\'s health amount of damage (15 sec. cooldown)'], unique:false, dlc:2},
	{name:'The Swarm', rarity:'rare', points:4, attributes:['Launches 10 target seeking projectiles that do 250% damage when you do more than 50% of a target\'s health amount of damage (15 sec. cooldown)'], unique:false, dlc:2},
	{name:'The Swarm', rarity:'legendary', points:6, attributes:['Launches 14 target seeking projectiles that do 300% damage when you do more than 50% of a target\'s health amount of damage (15 sec. cooldown)'], unique:false, dlc:2},
	{name:'The Tower', rarity:'common', points:1, attributes:['Overdrive bar fills 15% faster'], unique:false},
	{name:'The Tower', rarity:'uncommon', points:2, attributes:['Overdrive bar fills 30% faster'], unique:false},
	{name:'The Tower', rarity:'rare', points:3, attributes:['Overdrive bar fills 50% faster'], unique:false},
	{name:'The Vampire', rarity:'common', points:2, attributes:['5% Life Steal with weapon attacks'], unique:false},
	{name:'The Vampire', rarity:'uncommon', points:3, attributes:['7% Life Steal with weapon attacks'], unique:false},
	{name:'The Vampire', rarity:'rare', points:4, attributes:['10% Life Steal with weapon attacks'], unique:false},
	{name:'The Warrior', rarity:'common', points:1, attributes:['+5% melee damage'], unique:false},
	{name:'The Warrior', rarity:'uncommon', points:2, attributes:['+10% melee damage'], unique:false},
	{name:'The Warrior', rarity:'rare', points:5, attributes:['+20% melee damage'], unique:false},
	{name:'Wildcard', rarity:'common', points:1, attributes:['Increases attack damage by 1% for each destiny card equipped'], unique:false},
	{name:'Wildcard', rarity:'uncommon', points:3, attributes:['Increases attack damage by 3% and critical damage by 3% for each destiny card equipped'], unique:false},
	{name:'Wildcard', rarity:'rare', points:8, attributes:['Increases attack damage by 6% and critical damage by 8% for each destiny card equipped'], unique:false},

	// {name:'', rarity:'common', points:0, attributes:[''], unique:false},
];
