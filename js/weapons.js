const weapons = [
	// --- lightning gun
	// {name:'Nova', rarity:'legendary', type:'Lightning Gun', attributes:[]},
	// {name:'Rainbow Gun', rarity:'legendary', type:'Lightning Gun', attributes:[]},
	// {name:'Spark', rarity:'legendary', type:'Lightning Gun', attributes:[]},
	// {name:'The Ghostbuster', rarity:'legendary', type:'Lightning Gun', attributes:[]},
	// {name:'The Reactor', rarity:'legendary', type:'Lightning Gun', attributes:[]},
	// --- hammer
	// {name:'Force of nature', rarity:'legendary', type:'Hammer', attributes:[]},
	// {name:'Hellfire', rarity:'legendary', type:'Hammer', attributes:[]},
	// {name:'Justice', rarity:'legendary', type:'Hammer', attributes:[]},
	{name:'Pumpkin Hammer', rarity:'legendary', type:'Hammer', attributes:['Damage increased by 40% when the overdrive meter is full','Attack cooldowns reduced by 3 seconds on overkill (1 sec. cooldown)','Spawns exploding pumpkins on overkill (0.5 sec. cooldown)'], notes:['Can be bought by <npc>GebaN</npc> the Broker in the north-western corner of the <location>Cemetery Grounds</location>']},
	{name:'Meteor', rarity:'legendary', type:'Hammer', attributes:['+75 armor penetration','Knocks enemies back with X% chance','Attacks cause a meteor to fall down from the sky']},
	// --- sword
	// {name:'Kladenets', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'Lady Luck', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'Shackles', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'Shard', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'Storm', rarity:'legendary', type:'Sword', attributes:[]},
	// --- sword (star wars)
	// {name:'The Betrayer', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'The Consular', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'The Guardian', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'The Master', rarity:'legendary', type:'Sword', attributes:[]},
	// {name:'The Sentinel', rarity:'legendary', type:'Sword', attributes:[]},
	// --- shotgun
	// {name:'Exterminator', rarity:'legendary', type:'Shotgun', attributes:[]},
	// {name:'Party Starter', rarity:'legendary', type:'Shotgun', attributes:[]},
	// {name:'Reanimator', rarity:'legendary', type:'Shotgun', attributes:[]},
	// {name:'The Repeater', rarity:'legendary', type:'Shotgun', attributes:[]},
	// {name:'Vera', rarity:'legendary', type:'Shotgun', attributes:[]},
	// --- rapier
	{name:'Finger of Chaos', rarity:'legendary', type:'Rapier', attributes:['Critical damage increased by X%','While equipped: Find 40% more item','The fourth and final Flurry attack unleashes a burst of projectiles that strike random foes. Enemies killed by those projectiles are turned into exploding chickens.']},
	// {name:'Haunt', rarity:'legendary', type:'Rapier', attributes:[]},
	{name:'Needle', rarity:'legendary', type:'Rapier', attributes:['Damage increased by X% when the overdrive meter is full','Overdrive meter fills 125% faster','Charge attack leaves a trail of fire']},
	// {name:'Power Foil', rarity:'legendary', type:'Rapier', attributes:[]},
	{name:'Scoundrel', rarity:'legendary', type:'Rapier', attributes:['Damage increased by X% when health is above 90%','Gain 80 health on hit','Stack Aether Charges on hits with the Charge attack. At 10 charges the Flurry attack grants Quickness and inflicts Frost to all foes in the area']},
	// --- scythe
	// {name:'Coldsnap', rarity:'legendary', type:'Scythe', attributes:[]},
	// {name:'Dark Pact', rarity:'legendary', type:'Scythe', attributes:[]},
	// {name:'Dervish', rarity:'legendary', type:'Scythe', attributes:[]},
	// {name:'Tri-blade', rarity:'legendary', type:'Scythe', attributes:[]},
	// {name:'Vengeance', rarity:'legendary', type:'Scythe', attributes:[]},
	// --- hand mortar
	// {name:'Bertram', rarity:'legendary', type:'Hand Mortar', attributes:[]},
	// {name:'Boomer', rarity:'legendary', type:'Hand Mortar', attributes:[]},
	// {name:'Chicken Cannon', rarity:'legendary', type:'Hand Mortar', attributes:[]},
	{name:'Chimera', rarity:'legendary', type:'Hand Mortar', attributes:['Damage increased by 40% when health is above 90%','Gain 170 health on crit (5 sec. cooldown)','Bouncing Betty fires three grenades but fires less often'], notes:['This mortar is buyable at <npc>GebaN</npc> the Broker on <location>The Merchant Quarter</location> map near the entrance of <location>The Cessway</location>']},
	// {name:'Oil Shooter', rarity:'legendary', type:'Hand Mortar', attributes:[]},
	// --- tome
	{name:'Fifty Shades of Slay', rarity:'legendary', type:'Tome', attributes:['Damage increased by 17%','+75 armor penetration','Magic Missiles has longer range and higher damage but they no longer pierce targets']},
	{name:'Ignis Tenebris', rarity:'legendary', type:'Tome', attributes:['Damage increased by 47% when health is above 90%','Gain 40 health on hit','Dimension Wave leaves a trail of flame that damages foes.']},
	{name:'Nekonomicon', rarity:'legendary', type:'Tome', attributes:['Critical damage increased by 160%','Critical chance increased by 15%','Stack Aether Charges when picking up power orbs. At 10 charges the Magic Missiles attack calls down neon cats from the heavens']},
	{name:'The Arcanist Cookbook', rarity:'legendary', type:'Tome', attributes:['Damage increased by 47% when the overdrive meter is full','Overdrive meter fills 75% faster','Trigger an explosion every time you pick up a power orb']},
	{name:'The King in Yellow', rarity:'legendary', type:'Tome', attributes:['Damage increased by 30%','While equipped: Minimal gold drops','Gain 10.0% of max health on crit (5 sec. cooldown)','A zone of yellow flames appears around the caster while channeling the Magic Missile attack dealing damage to foes in the area']},
	// --- potion
	{name:'Lucky Rabbit\'s Foot', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Gives Luck for 5 sec.','Luck: Critical chance is increased by 100%']},
	{name:'Medical Kit', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Restores 300 health and removes one negative effect','Heals extra 150 health, if an effect is removes']},
	{name:'Greater Med Kit', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Restores 500 health and removes one negative effect','Heals extra 250 health, if an effect is removes']},
	{name:'Superior Med Kit', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Restores 750 health and removes one negative effect','Heals extra 250 health, if an effect is removes']},
	// --- guitar
	{name:'Solo', rarity:'legendary', type:'Guitar', attributes:['50% faster weapon skill cooldowns','While equipped: Find 20% more items','Wicket Solo attack helas you and grants Lifesteal to nearby allies']},
];
