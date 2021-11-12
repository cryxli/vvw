const effects = [
	{name:'Ammo', effects:['Perform more powerful attacks','e.g. with <a href="../html/weapons.htm?shotgun">Shotguns</a> and <a href="../html/weapons.htm?revolver">Revolvers</a>']},
	{name:'Arcane Power', effects:['Use Arcane Power stacks to recharge Tome attacks instantly','Drops occationally from <a href="../html/weapons.htm?tome">Tome</a> attacks']},
	{name:'Armor', effects:['+100 armor', 'e.g. dodging when <card rarity="rare">The Acrobat</card> is equiped']},
	{name:'Bleeding', effects:['Deals 2% of the maximum health but no more than 100 damage every second.','Bleeding can\'t kill the target']},
	{name:'Blocked Overdrive', effects:['Overdrive is not gained from any sources']},

	{name:'Brutality', effects:['Outgoing damage is increased by 50%']},
	{name:'Burning', effects:['Deals 40 damage every second']},
	{name:'Crippled', effects:['Movement speed is decreased by 66%']},
	{name:'Daze', effects:['Stunned and unable to attack'], alias:['dazed']},
	{name:'Defiant', effects:['Cannot be <effect>dazed</effect> or feared']},
	{name:'Diamond Shield', effects:['Absorbs damage from attacks','<power>Diamond</power>']},
	{name:'Disease', effects:['Deals damage every second (5 + 1% of the maximum health)']},
	{name:'Elec&shy;tro&shy;cut&shy;ed', effects:['Movement speed is decreased by 25%','e.g. from Lightning Gun']},
	{name:'Enraged', effects:['Next attack will inflict 100% more damage']},
	{name:'Epic', effects:['Increased health and damage']},
	{name:'Evasion', effects:['Dodges all attacks']},
	{name:'Exposed', effects:['Incoming damage is increased by 20%']},
	{name:'Fear', effects:['Retreating; unable to attack'], alias:['feared']},
	{name:'Focus', effects:['Critical chance is increased by 20%']},
	{name:'Frailty', effects:['Incoming damage is increased by 100%']},
	{name:'Frost', effects:['Movement and attack speeds are decreased by 33%']},
	{name:'Frost&shy;burn', effects:['Deals 20 damage every second. Movement and attack speeds are decreased by 33%']},
	{name:'Haste', effects:['Movement speed is increased by 33%']},
	{name:'Head&shy;bang', effects:['Slave to the music; unable to attack']},
	{name:'Iron Will', effects:['Immune to negative conditions']},
	{name:'Life Steal', effects:['All weapons gain additional 20% Life Steal']},
	{name:'Luck', effects:['Critical chance is increased by 100%']},
	{name:'Might', effects:['Critical damage is increased by 100%']},
	{name:'Poison', effects:['Decreased health gain. Inflicts <effect>Daze</effect> at 10 stacks']},
	{name:'Puny', effects:['Decreased health and damage (Casual Mode)']},
	{name:'Quickness', effects:['Attack speed is increased by 33%']},
	{name:'Re&shy;gen&shy;er&shy;a&shy;tion', effects:['Gain 4% health every second']},
	{name:'Sanguine Aura', effects:['Gain 10% health every second while you are below 50% Health','<power>Sanguine Aura</power>']},
	{name:'Slow', effects:['Attack speed is decreased by 33%']},
	{name:'Slowed', effects:['Movement and attack speeds are decreased by 50%']},
	{name:'Soul Shard', effects:['The scythe\'s cursed blade rips a piece of the enemy soul with each hit, empowering the next special attack','e.g. Scythes']},
	{name:'Speed', effects:['Movement and attack speeds are increased by 33%']},
	{name:'Thorns', effects:['Reflects 66% of any melee damage back to its source','Reflected damage is calculated before Armor and also ignores enemy Armor']},
	{name:'Vigor', effects:['Gain overdrive over time']},
	{name:'Vul&shy;ner&shy;a&shy;ble', effects:['Next attack on this target will score crit']},

	{name:'Aether Charge', effects:['Stack 10 charges to unleash powerful effects from legendary weapons']},
	{name:'Artifact', effects:['???','Effect of the talisman <talisman rarity="legendary">Artifact</talisman>']},
	{name:'Curio', effects:['???','Effect of the talisman <talisman rarity="rare">Curio</talisman>']},
	{name:'Effigy', effects:['???','Effect of the talisman <talisman>Effigy</talisman>']},
	{name:'For&shy;ti&shy;tude', effects:[]},
	{name:'Gadget', effects:['???','Effect of the talisman <talisman rarity="rare">Gadget</talisman>']},
	{name:'Life Drain', effects:[]},
	{name:'Relic', effects:['Attacks are guaranteed to kill their targets','Effect of the talisman <talisman rarity="legendary">Relic</talisman>']},

];