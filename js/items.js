const items = [
	// --- potion
	{name:'Lucky Rab&shy;bit\'s Foot', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Gives <effect>Luck</effect> for 5 sec.','Very rare drop.']},
	{name:'Med&shy;ical Kit', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Restores 300 health and removes one negative effect','Heals extra 150 health, if an effect is removed','Rare drop only.']},
	{name:'Greater Med Kit', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Restores 500 health and removes one negative effect','Heals extra 250 health, if an effect is removed','Only obtainable through crafting'], recipe:[null,'<item rarity="legendary">Medical Kit</item>','<item rarity="legendary">Medical Kit</item>','<item rarity="legendary">Medical Kit</item>']},
	{name:'Superior Med Kit', rarity:'legendary', type:'Potion', attributes:['Unlimited use','Restores 750 health and removes one negative effect','Heals extra 250 health, if an effect is removed','Only obtainable through crafting'], recipe:[null,'<item rarity="legendary">Greater Med Kit</item>','<item rarity="legendary">Greater Med Kit</item>','<item rarity="legendary">Greater Med Kit</item>']},
	{name:'Adren&shy;a&shy;line Shot', rarity:'uncommon', type:'Potion', attributes:['Gives <effect>Speed</effect> for 20 sec.']},
	{name:'Aether Vial', rarity:'rare', type:'Potion', attributes:['Instantly fills overdrive meter']},
	{name:'Antidote', rarity:'rare', type:'Potion', attributes:['Restores 200 health and removes one negative effect','Heals extra 400 health, if an effect is removed']},
	{name:'Am&shy;brosia', rarity:'uncommon', type:'Potion', attributes:['Restores 100% health and refreshes the cooldowns of all attacks and Demon Powers']},
	{name:'Barkskin Potion', rarity:'common', type:'Potion', attributes:['Gain 100 armor and immunity to daze, interrupts and push effects for 20 sec.']},
	{name:'Fire Bomb', rarity:'uncommon', type:'Potion', attributes:['Inflicts 5000 damage to all enemies within 7m']},
	{name:'Flash Bomb', rarity:'uncommon', type:'Potion', attributes:['Inflicts 300 damage and <effect>Daze</effect> to all enemies within 7m']},
	{name:'Frost Bomb', rarity:'uncommon', type:'Potion', attributes:['Inflicts 300 damage and <effect>Frost</effect> for 3 seconds to all enemies within 7m']},
	{name:'Healing Potion', rarity:'uncommon', type:'Potion', attributes:['Restores 60% health']},
	{name:'Leech Bomb', rarity:'uncommon', type:'Potion', attributes:['Inflicts 300 damage to all enemies within 7m','Gain 100 health per enemy hit (up to 1000 health)']},
	{name:'Liquid Madness', rarity:'rare', type:'Potion', attributes:['Gives <effect>britality/effect> for 20 sec.']},
	{name:'Vampire Blood', rarity:'uncommon', type:'Potion', attributes:['Gain 50% Life Steal for 45 sec']},
	// --- ingredient
	{name:'Black Dye', rarity:'rare', type:'Ingredient', attributes:['Use in Transmutation to change the color of your outfit']},
	{name:'Blue Dye', rarity:'uncommon', type:'Ingredient', attributes:['Use in Transmutation to change the color of your outfit']},
	{name:'Green Dye', rarity:'uncommon', type:'Ingredient', attributes:['Use in Transmutation to change the color of your outfit']},
	{name:'Red Dye', rarity:'uncommon', type:'Ingredient', attributes:['Use in Transmutation to change the color of your outfit']},
	{name:'White Dye', rarity:'rare', type:'Ingredient', attributes:['Use in Transmutation to change the color of your outfit']},
	{name:'Legendary Dye', rarity:'legendary', type:'Ingredient', attributes:['Use in Transmutation to change the color of your outfit','This "color" adds a glow effect similar to divine or wicked cards to an outfit.']},
	// --- outfits
	{name:'Hunter\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['Gain 100% of the damage taken as Overdrive']},
	{name:'Cav&shy;a&shy;lier\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['You gain 80-180 Overdrive every second, but attacks no longer grant Overdrive']},
	{name:'Vig&shy;i&shy;lante\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['Critical hits grant 150% more Overdrive','Normal Attacks no longer grant Overdrive']},
	{name:'Wan&shy;der&shy;er\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['You gain 80-180 Overdrive every second, but attacks no longer grant Overdrive','Has exactly the same stats as <item rarity="legendary" id="cavalier_s_outfit">Cav&shy;a&shy;lier\'s Outfit</item>','Pre-order only item']},
	{name:'Van&shy;guard\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['+40 armor penetration','Increases maximum Overdrive by 2000 (1 charge)','Decreases overdrive gain by 10%']},
	{name:'Zealot\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['High Armor','Increases Health by 500']},
	{name:'Ad&shy;ven&shy;tur&shy;er\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['0-30 armor','Increases the Destiny Slots by 1','Increases maximum Overdrive by 2000','Increases Overdrive gain by 10-30%']},
	{name:'High&shy;lander\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['20-70 armor','You gain 200-300 Overdrive when you use a weapon special attack, but attacks no longer grant Overdrive','Reduces weapon cooldowns by 15%']},
	{name:'Lemmy\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['Increases maximumx Overdrive by 2000 (1 charge)','You gain 50-200 armor while below 50% health'], dlc:2},
	{name:'Phil\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['Increases the Destiny Slot by 1','Increases the Destiny Points by 4','Decreases Overdrive gain by 40-20%'], dlc:2},
	{name:'Mikkey\'s Outfit', rarity:'legendary', type:'Outfit', attributes:['Gain 20-40% of maximum health when using a Demon Power'], dlc:2},
	//
	{name:'Gift Box', id:'gift_box_c', rarity:'common', type:'Potion', attributes:['Contains a random piece of equipment','Combine with other Gift Boxes in Transmutation to get better items']},
	{name:'Gift Box', id:'gift_box_u', rarity:'uncommon', type:'Potion', attributes:['Contains a random piece of equipment','Combine with other Gift Boxes in Transmutation to get better items'], recipe:[null,'<item id="gift_box_c">Gift Box</item>','<item id="gift_box_c">Gift Box</item>','<item id="gift_box_c">Gift Box</item>']},
	{name:'Gift Box', id:'gift_box_r', rarity:'rare', type:'Potion', attributes:['Contains a random piece of equipment','Combine with other Gift Boxes in Transmutation to get better items'], recipe:[null,'<item id="gift_box_u">Gift Box</item>','<item id="gift_box_u">Gift Box</item>','<item id="gift_box_u">Gift Box</item>']},
	{name:'Gift Box', id:'gift_box_l', rarity:'legendary', type:'Potion', attributes:['Contains a random piece of equipment'], recipe:[null,'<item id="gift_box_r">Gift Box</item>','<item id="gift_box_r">Gift Box</item>','<item id="gift_box_r">Gift Box</item>']},
	{name:'Carved Box', rarity:'rare', type:'Potion', attributes:['Contains a random piece of equipment','<i>Trick or Treat!</i>']},
	{name:'Pumpkin Pie', rarity:'legendary', type:'Potion', attributes:['Eat Pumpkin Pie to travel to the <location>Secret Pumpkin Level</location>.','<i>This pie smells unbelievably delicious. Would you take a bite?</i>']},
	//
	{name:'The Point&shy;er of the As&shy;tro&shy;labe', rarity:'legendary', type:'Other', attributes:['A tiny cursor which always turns in the direction of the next piece of the Astrolabe']},
	{name:'The Frame of the As&shy;tro&shy;labe', rarity:'legendary', type:'Other', attributes:['A metallic casing engraved with astral symbols and hieroglyphs']},
	{name:'Shard of the As&shy;tro&shy;labe', rarity:'legendary', type:'Other', attributes:['A dented piece of a disk which is engraved with shifting pictures of astral planes and strange places']},
	{name:'Demon Soul', rarity:'rare', type:'Other', attributes:['<i>Trade this with GebaN for special items.</i>','The <npc>GebaN</npc> at the end of <location>Cauldron of Chaos</location> that is.','The souls are supposed to drop more frequently in the <location>Cauldron of Chaos</location>']},
];
