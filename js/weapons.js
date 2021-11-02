const weapons = [
	// --- lightning gun
	{name:'Nova', rarity:'legendary', type:'Lightning Gun', attributes:['Attack speed increased by 22%','Attack cooldowns reduced by 4 seconds on overkill (1 sec. cooldown)','Dodging leaves a Lightning Trap behind (5 sec. cooldown)']},
	{name:'Rainbow Gun', rarity:'legendary', type:'Lightning Gun', attributes:['Damage increased by 40% when the overdrive meter is full','Gain 170 health on crit (5 sec. cooldown)','The Shock attack uses a wider beam that pierces enemies and doesn\'t overheat. However, it also doesn\'t chain to electrocuted enemies.']},
	{name:'Spark', rarity:'legendary', type:'Lightning Gun', attributes:['44% faster weapon skill cooldowns','While equipped: Find 40% more items','Random Electrocuted enemy is struck by lightning every 3 seconds']},
	{name:'The Ghostbuster', rarity:'legendary', type:'Lightning Gun', attributes:['Damage increased by 22%','Overdrive meter fills 125% faster','Basic attacks pulls targeted enemy periodically.','Lightning Trap pulls enemies before the eplosion']},
	{name:'The Reactor', rarity:'legendary', type:'Lightning Gun', attributes:['Damage increased by 40% when health is above 90%','Gain 170 health on overkill (10 sec. cooldown)','Creates an explosion on overheat']},
	// --- hammer
	{name:'Force of nature', rarity:'legendary', type:'Hammer', attributes:['Damage increased by 50% when health is below 50%','Gain 170 health on overkill (10 sec. cooldown)','Stack Aether Charges on overkill.','At 15 charges the Pound attack unleashes crows in all directions that damage and pierce foes.']},
	{name:'Hellfire', rarity:'legendary', type:'Hammer', attributes:['Damage increased by 22%','Inflicts <effect>Vulnerable</effect> with 25% chance.','Smash attack created a lake of molten fire']},
	{name:'Justice', rarity:'legendary', type:'Hammer', attributes:['44% faster weapon skill cooldowns','Attack speed increased by 25%','Crush attack creates a vortex that pulls enemies towards you']},
	{name:'Pumpkin Hammer', rarity:'legendary', type:'Hammer', attributes:['Damage increased by 40% when the overdrive meter is full','Attack cooldowns reduced by 3 seconds on overkill (1 sec. cooldown)','Spawns exploding pumpkins on overkill (0.5 sec. cooldown)'], notes:['Can be bought by <npc>GebaN</npc> the Broker in the north-western corner of the <location>Cemetery Grounds</location>']},
	{name:'Meteor', rarity:'legendary', type:'Hammer', attributes:['+75 armor penetration','Knocks enemies back with X% chance','Attacks cause a meteor to fall down from the sky']},
	// --- sword
	{name:'Kladenets', rarity:'legendary', type:'Sword', attributes:['Damage increased by 40% when health is above 90%','Gain 170 health on crit (5 sec cooldown)','Stack Aether Charges when you deliver a critical hit.','At 15 charges the Hack attack unleashes a powerful explosion that steals life from nearby enemies']},
	{name:'Lady Luck', rarity:'legendary', type:'Sword', attributes:['While equipped: Monsters drop 116% more gold','Critical chance increased by 25%','Enemies drop gold piles when critical hit']},
	{name:'Shackles', rarity:'legendary', type:'Sword', attributes:['+66 armor penetration','Attack cooldowns reduces by 4 cesonds on overkill (1 sec. cooldown)','Larger Daze ares.','Dash attack inflicts damage to all dazed enemies']},
	{name:'Shard', rarity:'legendary', type:'Sword', attributes:['50% faster weapon skill cooldowns','Inflicts <effect>Vulnerable</effect> with 22% chance','Slash and Dash unleash a slow moving projectile that pierces and weakens enemies']},
	{name:'Storm', rarity:'legendary', type:'Sword', attributes:['Attack speed increased by 25%','Critical chance increased by 22%','Critical hits create ball lightnings']},
	// --- sword (star wars)
	{name:'The Betrayer', rarity:'legendary', type:'Sword', attributes:['Damage increased by 44%','While equipped: Minimal gold drops','+90 armor penetration','Reflect projectiles by hitting them with a Hack attack']},
	{name:'The Consular', rarity:'legendary', type:'Sword', attributes:['Overdrive meter fills 110% faster','+90 armor penetration','Reflect projectiles by hitting them with the Hash attack']},
	{name:'The Guardian', rarity:'legendary', type:'Sword', attributes:['Attack speed increased by 22%','+90 armor penetration','Reflect projectiles by hitting them with the Hack attack']},
	{name:'The Master', rarity:'legendary', type:'Sword', attributes:['Damage increased by 34% when health is above 90%','+90 armor penetration','Reflect projectiles by hitting them with the Hack attack']},
	{name:'The Sentinel', rarity:'legendary', type:'Sword', attributes:['Critical damage increased by 88%','+90 armor penetration','Reflect projectiles by hitting them with the Hack attack']},
	// --- shotgun
	{name:'Exterminator', rarity:'legendary', type:'Shotgun', attributes:['Damage increased by 44% when health is below 50%','+75 armor penetration','The Fire and Aimed Shot attacks pierce targets']},
	{name:'Party Starter', rarity:'legendary', type:'Shotgun', attributes:['Critical damage increased by 88%','Knocks back enemies with 35% chance','Stack Aether Charges on Split Timing.','At 15 chargers the Fire attack unleashes a spread of fireworks']},
	{name:'Reanimator', rarity:'legendary', type:'Shotgun', attributes:['Damage increased by 40% when the overdrive meter is full','Overdrive meter fills 110% faster','Aimed Shot causes <effect>Cripple</effect>','Extra 30% damage against crippled enemies']},
	{name:'The Repeater', rarity:'legendary', type:'Shotgun', attributes:['44% faster weapon skill cooldowns','Gain 80 health on hit','Greatly increased attack speed']},
	{name:'Vera', rarity:'legendary', type:'Shotgun', attributes:['+66 armor penetration','Inflicts <effect>Vulnerable</effect> with 30% chance','Exploding shells']},
	// --- rapier
	{name:'Finger of Chaos', rarity:'legendary', type:'Rapier', attributes:['Critical damage increased by X%','While equipped: Find 40% more item','The fourth and final Flurry attack unleashes a burst of projectiles that strike random foes. Enemies killed by those projectiles are turned into exploding chickens.'], notes:['Can be baught at <npc>GebaN</npc> in <location>Bottomless Pit</location>.']},
	{name:'Haunt', rarity:'legendary', type:'Rapier', attributes:['Damage increased by 22%','Knocks back enemies with 25% chance','The Coup De Grace attack fires a piercing projectile that pushes back foes']},
	{name:'Needle', rarity:'legendary', type:'Rapier', attributes:['Damage increased by X% when the overdrive meter is full','Overdrive meter fills 125% faster','Charge attack leaves a trail of fire']},
	{name:'Power Foil', rarity:'legendary', type:'Rapier', attributes:['Attack speed increased by 25%','44% faster weapon skill cooldowns','Grants additional Charge use without triggering a cooldown']},
	{name:'Scoundrel', rarity:'legendary', type:'Rapier', attributes:['Damage increased by X% when health is above 90%','Gain 80 health on hit','Stack Aether Charges on hits with the Charge attack. At 10 charges the Flurry attack grants Quickness and inflicts Frost to all foes in the area']},
	// --- scythe
	{name:'Coldsnap', rarity:'legendary', type:'Scythe', attributes:['Attack speed increased by 25%','Gain 68 health on hit','The Shockwave attack hits in a large circle and inflicts <effect>Frost</effect>']},
	{name:'Dark Pact', rarity:'legendary', type:'Scythe', attributes:['Damage increased by 40% when the overdrive meter is full','44% faster weapon skill cooldowns','Monsters slain with this weapon release souls.','Gather souls to gain overdrive']},
	{name:'Dervish', rarity:'legendary', type:'Scythe', attributes:['Damage increased by 22%','Inflicts <effect>Vulnerable</effect> with 25% chance','The Whirlwind attack releases a second spinning scythe that damages foes']},
	{name:'Tri-blade', rarity:'legendary', type:'Scythe', attributes:['Critical damage increased by 14%','+66 armor penetration','The Whirlwind attack shoots projectiles']},
	{name:'Vengeance', rarity:'legendary', type:'Scythe', attributes:['Damage increased by 44% when health is below 50%','Gain 200 health on crit (5 sec. cooldown)','Triggers a Meteor storm when your health drops below 40%. Cannot trigger more than once every 60 seconds']},
	// --- hand mortar
	{name:'Bertram', rarity:'legendary', type:'Hand Mortar', attributes:['Damage increased by 34% when the overdrice meter is full','+75 armor penetration','Basic attack fires a powerful, slow moving projectile']},
	{name:'Boomer', rarity:'legendary', type:'Hand Mortar', attributes:['Critical damage increased by 147%','Inflicts <effect>Vulnerable</effect> with 22% chance','Fast rate of fire.','Grenades inflict less damage and bounce more times']},
	{name:'Chicken Cannon', rarity:'legendary', type:'Hand Mortar', attributes:['+66 armor penetration','Critical chance increased by 25%','Bouncing Betty fires three exploding chichens instead of a single grenade but also fires less often']},
	{name:'Chimera', rarity:'legendary', type:'Hand Mortar', attributes:['Damage increased by 40% when health is above 90%','Gain 170 health on crit (5 sec. cooldown)','Bouncing Betty fires three grenades but fires less often'], notes:['This mortar is buyable at <npc>GebaN</npc> the Broker on <location>The Merchant Quarter</location> map near the entrance of <location>The Cessway</location>']},
	{name:'Oil Shooter', rarity:'legendary', type:'Hand Mortar', attributes:['Overdrive meter fills 110% faster','While equipped: Monsters drop 200% more gold','Oil Spill attack (replaces Fire Lake) creates a pool of oil which causes <effect>Daze</effect> on hit and can be ignited by other mortar attacks']},
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
