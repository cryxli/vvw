// https://steamcommunity.com/sharedfiles/filedetails/?id=425268514
// 		'<dmg></dmg>','<armor-penetration></armor-penetration>','<crit-chance></crit-chance>','<crit-dmg></crit-dmg>',
const weapons = [
	{name:'The Ar&shy;can&shy;ist Cook&shy;book', rarity:'legendary', type:'Tome', attributes:[
		'<dmg>26-44 to 27-45</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>7-11</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Damage increased by 47% when the overdrive meter is full','Overdrive meter fills 75-110% faster','Trigger an explosion every time you pick up a power orb'],dlc:5},
	{name:'The Bass', rarity:'legendary', type:'Guitar', attributes:[
// 		'<dmg>28-66</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>15</crit-chance>','<crit-dmg>230</crit-dmg>',
		'Critical Damage increased by 130%','Gain 5.0%  of max health on crit (5 sec. cooldown)','Stack Aether charges when you perform a split-time attck','At 10 charges Power Chord unleashes a swarm of Dazing projectiles'],dlc:2},
	{name:'Bertram', rarity:'legendary', type:'Hand Mortar', attributes:[
		'Damage increased by 34% when the overdrice meter is full','+75 armor penetration','Basic attack fires a powerful, slow moving projectile']},
	{name:'The Be&shy;tray&shy;er', rarity:'legendary', type:'Sword', attributes:[
// 		'<dmg>67-125</dmg>','<armor-penetration>90</armor-penetration>','<crit-chance>10</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Damage increased by 30-44%','While equipped: Minimal gold drops','+90 armor penetration','Reflect projectiles by hitting them with a Hack attack','Available after completing the <bounty>JOIN-THE-DARK-SIDE</bounty> bounty hunt.']},
	{name:'Boomer', rarity:'legendary', type:'Hand Mortar', attributes:[
		'Critical damage increased by 147%','Inflicts <effect>Vulnerable</effect> with 22% chance','Fast rate of fire.','Grenades inflict less damage and bounce more times']},
	{name:'Chick&shy;en Can&shy;non', rarity:'legendary', type:'Hand Mortar', attributes:[
		'<dmg>41-132 to 56-180</dmg>','<armor-penetration>45-66</armor-penetration>','<crit-chance>36</crit-chance>','<crit-dmg>200</crit-dmg>',
		'+66 armor penetration','Critical chance increased by 25%','Bouncing Betty fires three exploding chichens instead of a single grenade but also fires less often']},
	{name:'Chimera', rarity:'legendary', type:'Hand Mortar', attributes:[
		'Damage increased by 40% when health is above 90%','Gain 170 health on crit (5 sec. cooldown)','Bouncing Betty fires three grenades but fires less often'], notes:['This mortar is buyable at <npc>GebaN</npc> the Broker on <location>The Merchant Quarter</location> map near the entrance of <location>The Cessway</location>']},
	{name:'Cold&shy;snap', rarity:'legendary', type:'Scythe', attributes:[
		'<dmg>17-176 to 18-180</dmg>','<armor-penetration>25</armor-penetration>','<crit-chance>10-17</crit-chance>','<crit-dmg>150</crit-dmg>',
		'Attack speed increased by 25%','Gain 40-68 health on hit','The Shockwave attack hits in a large circle and inflicts <effect>Frost</effect>']},
	{name:'The Con&shy;sular', rarity:'legendary', type:'Sword', attributes:[
// 		'<dmg>50-93</dmg>','<armor-penetration>90</armor-penetration>','<crit-chance>10</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Overdrive meter fills 75-110% faster','+90 armor penetration','Reflect projectiles by hitting them with the Hash attack']},
	{name:'Dark Pact', rarity:'legendary', type:'Scythe', attributes:[
		'Damage increased by 40% when the overdrive meter is full','44% faster weapon skill cooldowns','Monsters slain with this weapon release souls.','Gather souls to gain overdrive']},
	{name:'Dervish', rarity:'legendary', type:'Scythe', attributes:[
		'Damage increased by 22%','Inflicts <effect>Vulnerable</effect> with 25% chance','The Whirlwind attack releases a second spinning scythe that damages foes']},
	{name:'Elec&shy;tric Gui&shy;tar', rarity:'legendary', type:'Guitar', attributes:[
		'Attack speed increased by 25%','Critical hit chance increased by X%','Power Chord attack may inflict the <effect>Electrocuted</effect> condition on hit','Wicked Solo attack unleashes 4 lightninga balls'],dlc:2},
	{name:'The Ex&shy;plor&shy;er', rarity:'legendary', type:'Guitar', attributes:[
// 		'<dmg>27-64</dmg>','<armor-penetration>45</armor-penetration>','<crit-chance>15</crit-chance>','<crit-dmg>100</crit-dmg>',	
		'Overdrive meter fills 125% faster','+45 armor penetration','Bang Attack inflicts <effect>Headbang</effect>','Power Chord attack may inflict <effect>Headbang</effect>.','+50% damage against Headbanging monsters'],dlc:2},
	{name:'Ex&shy;ter&shy;mi&shy;na&shy;tor', rarity:'legendary', type:'Shotgun', attributes:[
		'<dmg>48-96</dmg>','<armor-penetration>75</armor-penetration>','<crit-chance>17</crit-chance>','<crit-dmg>150</crit-dmg>',
		'Damage increased by 44% when health is below 50%','+75 armor penetration','The Fire and Aimed Shot attacks pierce targets']},
	{name:'Fifty Shades of Slay', rarity:'legendary', type:'Tome', attributes:[
		'<dmg>34-57</dmg>','<armor-penetration>75</armor-penetration>','<crit-chance>11</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Damage increased by 17-28%','+75 armor penetration','Magic Missiles has longer range and higher damage but they no longer pierce targets'],dlc:5},
	{name:'Finger of Chaos', rarity:'legendary', type:'Rapier', attributes:[
		'<dmg>52-79 to 54-81</dmg>','<armor-penetration>100</armor-penetration>','<crit-chance>10-17</crit-chance>','<crit-dmg>220-262</crit-dmg>',
		'Critical damage increased by 70-112%','While equipped: Find 40% more item','The fourth and final Flurry attack unleashes a burst of projectiles that strike random foes. Enemies killed by those projectiles are turned into exploding chickens.'], notes:['Can be baught at <npc>GebaN</npc> in <location>Bottomless Pit</location>.']},
	{name:'Force of nature', rarity:'legendary', type:'Hammer', attributes:[
		'Damage increased by 50% when health is below 50%','Gain 170 health on overkill (10 sec. cooldown)','Stack Aether Charges on overkill.','At 15 charges the Pound attack unleashes crows in all directions that damage and pierce foes.']},
	{name:'The Ghost&shy;buster', rarity:'legendary', type:'Lightning Gun', attributes:[
		'Damage increased by 22%','Overdrive meter fills 125% faster','Basic attacks pulls targeted enemy periodically.','Lightning Trap pulls enemies before the eplosion']},
	{name:'The Guardian', rarity:'legendary', type:'Sword', attributes:[
		'Attack speed increased by 22%','+90 armor penetration','Reflect projectiles by hitting them with the Hack attack','Available after completing the <bounty>FEEL-THE-FORCE</bounty> bounty hunt.']},
	{name:'Haunt', rarity:'legendary', type:'Rapier', attributes:[
		'Damage increased by 22%','Knocks back enemies with 25% chance','The Coup De Grace attack fires a piercing projectile that pushes back foes']},
	{name:'Hell&shy;fire', rarity:'legendary', type:'Hammer', attributes:[
		'<dmg>168-224</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>22</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Damage increased by 22%','Inflicts <effect>Vulnerable</effect> with 25% chance.','Smash attack created a lake of molten fire']},
	{name:'Hell&shy;rais&shy;ers', rarity:'legendary', type:'Revolver', attributes:[
		'50% faster weapon skill cooldowns','Critical hits knock back enemies (5 sec. cooldown)','Double shots and special attacks inflict <effect>Burning</effect>'],dlc:2},
	{name:'Ignis Tene&shy;bris', rarity:'legendary', type:'Tome', attributes:[
		'<dmg>26-44 to 27-45</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>7-11</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Damage increased by 47% when health is above 90%','Gain 40-68 health on hit','Dimension Wave leaves a trail of flame that damages foes.'],dlc:5},
	{name:'Justice', rarity:'legendary', type:'Hammer', attributes:[
// 		'<dmg>132-176</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>15</crit-chance>','<crit-dmg>100</crit-dmg>',
		'30-44% faster weapon skill cooldowns','Attack speed increased by 25%','Crush attack creates a vortex that pulls enemies towards you']},
	{name:'The Kill&shy;meister', rarity:'legendary', type:'Guitar', attributes:[
		'Damage increased by 32%','Knocks back enemies with X% chance','Power Chord attack pierces targets and has longer range'],dlc:2},
	{name:'The King in Yellow', rarity:'legendary', type:'Tome', attributes:[
		'<dmg>33-56 to 38-64</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>7-11</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Damage increased by 30%','While equipped: Minimal gold drops','Gain 10.0% of max health on crit (5 sec. cooldown)','A zone of yellow flames appears around the caster while channeling the Magic Missile attack dealing damage to foes in the area'],dlc:5},
	{name:'Kladenets', rarity:'legendary', type:'Sword', attributes:[
		'Damage increased by 40% when health is above 90%','Gain 170 health on crit (5 sec cooldown)','Stack Aether Charges when you deliver a critical hit.','At 15 charges the Hack attack unleashes a powerful explosion that steals life from nearby enemies']},
	{name:'Lady Luck', rarity:'legendary', type:'Sword', attributes:[
		'While equipped: Monsters drop 116% more gold','Critical chance increased by 25%','Enemies drop gold piles when critical hit']},
	{name:'The Master', rarity:'legendary', type:'Sword', attributes:[
		'Damage increased by 34% when health is above 90%','+90 armor penetration','Reflect projectiles by hitting them with the Hack attack']},
	{name:'Meteor', rarity:'legendary', type:'Hammer', attributes:[
		'+75 armor penetration','Knocks enemies back with X% chance','Attacks cause a meteor to fall down from the sky']},
	{name:'The Mikkeys', rarity:'legendary', type:'Revolver', attributes:[
		'<dmg>22-32 to 27-38</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>10-17</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Overdrive meter fills 75-110% faster','Gain 80 health on hit','Double shots cause Headbanging in large area'],dlc:2},
	{name:'Needle', rarity:'legendary', type:'Rapier', attributes:[
		'Damage increased by X% when the overdrive meter is full','Overdrive meter fills 125% faster','Charge attack leaves a trail of fire']},
	{name:'Neko&shy;nom&shy;i&shy;con', rarity:'legendary', type:'Tome', attributes:[
// 		'<dmg>26-44</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>26</crit-chance>','<crit-dmg>260</crit-dmg>',
		'Critical damage increased by 160%','Critical chance increased by 15%','Stack Aether Charges when picking up power orbs. At 10 charges the Magic Missiles attack calls down neon cats from the heavens'],dlc:5},
	{name:'Nova', rarity:'legendary', type:'Lightning Gun', attributes:[
		'Attack speed increased by 22%','Attack cooldowns reduced by 4 seconds on overkill (1 sec. cooldown)','Dodging leaves a Lightning Trap behind (5 sec. cooldown)']},
	{name:'Oil Shoot&shy;er', rarity:'legendary', type:'Hand Mortar', attributes:[
//		'<dmg>48-153</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>7</crit-chance>','<crit-dmg>200</crit-dmg>',
		'Overdrive meter fills 75-110% faster','While equipped: Monsters drop 200% more gold','Oil Spill attack (replaces Fire Lake) creates a pool of oil which causes <effect>Daze</effect> on hit and can be ignited by other mortar attacks']},
	{name:'Old Gutrots', rarity:'legendary', type:'Revolver', attributes:[
		'<dmg>21-30 to 27-38</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>42</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Attack speed increased by 15-22%','Critical chance increased by 25%','Stack aether charges on crit','At 10 charges the barrage attack inflicts additional damage and <effect>cripples</effect> all foes in the area'],dlc:2},
	{name:'Party Starter', rarity:'legendary', type:'Shotgun', attributes:[
// 		'<dmg>48-96</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>10</crit-chance>','<crit-dmg>220</crit-dmg>',
		'Critical damage increased by 70-88%','Knocks back enemies with 35% chance','Stack Aether Charges on Split Timing.','At 15 chargers the Fire attack unleashes a spread of fireworks']},
	{name:'The Piece&shy;mak&shy;ers', rarity:'legendary', type:'Revolver', attributes:[
// 		'<dmg>22-32</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>10</crit-chance>','<crit-dmg>170</crit-dmg>',	
		'Critical damage increased by 70%','Inflicts <effect>vulnarable</effect> with 40% chance','exploding bullets']},
	{name:'Power Foil', rarity:'legendary', type:'Rapier', attributes:[
		'Attack speed increased by 25%','44% faster weapon skill cooldowns','Grants additional Charge use without triggering a cooldown']},
	{name:'Pump&shy;kin Hammer', rarity:'legendary', type:'Hammer', attributes:[
// 		'<dmg>99-132</dmg>','<armor-penetration>0</armor-penetration>','<crit-chance>15</crit-chance>','<crit-dmg>100</crit-dmg>',
		'Damage increased by 40-47% when the overdrive meter is full','Attack cooldowns reduced by 2-3 seconds on overkill (1 sec. cooldown)','Spawns exploding pumpkins on overkill (0.5 sec. cooldown)'], notes:['Can be bought by <npc>GebaN</npc> the Broker in the north-western corner of the <location>Cemetery Grounds</location>']},
	{name:'Rain&shy;bow Gun', rarity:'legendary', type:'Lightning Gun', attributes:[
		'Damage increased by 40% when the overdrive meter is full','Gain 170 health on crit (5 sec. cooldown)','The Shock attack uses a wider beam that pierces enemies and doesn\'t overheat. However, it also doesn\'t chain to electrocuted enemies.']},
	{name:'Re&shy;an&shy;i&shy;ma&shy;tor', rarity:'legendary', type:'Shotgun', attributes:[
		'Damage increased by 40% when the overdrive meter is full','Overdrive meter fills 110% faster','Aimed Shot causes <effect>Cripple</effect>','Extra 30% damage against crippled enemies']},
	{name:'The Re&shy;ac&shy;tor', rarity:'legendary', type:'Lightning Gun', attributes:[
		'Damage increased by 40% when health is above 90%','Gain 170 health on overkill (10 sec. cooldown)','Creates an explosion on overheat']},
	{name:'The Re&shy;peater', rarity:'legendary', type:'Shotgun', attributes:[
		'44% faster weapon skill cooldowns','Gain 80 health on hit','Greatly increased attack speed']},
	{name:'Rock and Roll', rarity:'legendary', type:'Revolver', attributes:[
		'+75 armor penetration','+45 armor penetration','Piercing bullets'],dlc:2},
	{name:'Scoundrel', rarity:'legendary', type:'Rapier', attributes:[
		'Damage increased by X% when health is above 90%','Gain 80 health on hit','Stack Aether Charges on hits with the Charge attack. At 10 charges the Flurry attack grants Quickness and inflicts Frost to all foes in the area']},
	{name:'The Sen&shy;tinel', rarity:'legendary', type:'Sword', attributes:[
// 		'<dmg>50-94</dmg>','<armor-penetration>90</armor-penetration>','<crit-chance>10</crit-chance>','<crit-dmg>176</crit-dmg>',	
		'Critical damage increased by 76-88%','+90 armor penetration','Reflect projectiles by hitting them with the Hack attack']},
	{name:'Shackles', rarity:'legendary', type:'Sword', attributes:[
		'+66 armor penetration','Attack cooldowns reduces by 4 cesonds on overkill (1 sec. cooldown)','Larger Daze ares.','Dash attack inflicts damage to all dazed enemies']},
	{name:'Shard', rarity:'legendary', type:'Sword', attributes:[
		'50% faster weapon skill cooldowns','Inflicts <effect>Vulnerable</effect> with 22% chance','Slash and Dash unleash a slow moving projectile that pierces and weakens enemies']},
	{name:'Solo', rarity:'legendary', type:'Guitar', attributes:[
		'50% faster weapon skill cooldowns','While equipped: Find 20% more items','Wicket Solo attack helas you and grants Lifesteal to nearby allies'],dlc:2},
	{name:'Spark', rarity:'legendary', type:'Lightning Gun', attributes:[
		'44% faster weapon skill cooldowns','While equipped: Find 40% more items','Random Electrocuted enemy is struck by lightning every 3 seconds']},
	{name:'Storm', rarity:'legendary', type:'Sword', attributes:[
		'Attack speed increased by 25%','Critical chance increased by 22%','Critical hits create ball lightnings']},
	{name:'Tri-blade', rarity:'legendary', type:'Scythe', attributes:[
		'Critical damage increased by 14%','+66 armor penetration','The Whirlwind attack shoots projectiles']},
	{name:'Vengeance', rarity:'legendary', type:'Scythe', attributes:[
		'<dmg>14-140 to 17-172</dmg>','<armor-penetration>25</armor-penetration>','<crit-chance>10-17</crit-chance>','<crit-dmg>150</crit-dmg>',
		'Damage increased by 32-44% when health is below 50%','Gain 10% health on crit (5 sec. cooldown)','Triggers a Meteor storm when your health drops below 40%. Cannot trigger more than once every 60 seconds']},
	{name:'Vera', rarity:'legendary', type:'Shotgun', attributes:[
		'+66 armor penetration','Inflicts <effect>Vulnerable</effect> with 30% chance','Exploding shells']},
];
