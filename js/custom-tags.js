window.urlPrefix = window.urlPrefix||function() {
	if (window.location.href.indexOf('/html/') !== -1) {
		var s = window.location.href.substring(window.location.href.indexOf('/html/')+5).replace(/[^\/]/g,'').length;
		return '../'.repeat(s);
	} else if (window.location.href.indexOf('index.htm') !== -1 || window.location.href.indexOf('build.htm') !== -1) {
		// DEBUG dev
		return '';
	} else {
		return '../';
	}
};
window.readParam = window.readParam||function(paramKey, defaultValue) {
	const key = (paramKey||'id').toLowerCase();
	var paramList = decodeURI(window.location.search||'?').substring(1);
	if (paramList.indexOf('id=') === -1) { paramList = 'id='+paramList; }
	var pos = paramList.toLowerCase().indexOf(key+'=');
	if (pos === -1) {
		return defaultValue||null;
	}
	pos += key.length+1;
	var value = paramList.substring(pos);
	pos = value.indexOf('&');
	if (pos === -1) {
		return value||defaultValue||null;
	} else {
		return value.substring(0,pos)||defaultValue||null;
	}
};
window.customTags = window.customTags||function(customConfig) {
	const config=$.extend({img:false,name:true},customConfig);
	if (!config.img&&!config.name) { config.name = true; }
	const url = window.urlPrefix();

	
	$('npc').each((index,elem) => {
		const text = $(elem).text();
		const id = text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="'+url+'html/npc.htm?'+id+'">'+text+'</a>');
	});
	
	$('location').each((index,elem) => {
		const text = $(elem).text();
		const id = $(elem).attr('id')||text.toLowerCase().replace(/[' ]/g,'_');
		$(elem).replaceWith('<a href="'+url+'html/location.htm?'+id+'">'+text+'</a>');
	});
	
	$('effect').each((index,elem) => {
		const text = $(elem).text();
		const id = $(elem).attr('id')||text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="'+url+'html/effect.htm?'+id+'">'+text+'</a>');
	});

	$('outfit').each((index,elem) => {
		const text = $(elem).text();
		const id = text.toLowerCase().replace(/[' ]/g,'_');
		if (config.img&&!config.name) {
			$(elem).replaceWith('<a href="'+url+'html/item.htm?'+id+'"><img src="'+url+'img/item/outfit/'+id+'.png" alt="'+text+'" title="'+text+'" class="legendary" /></a>');
		} else {
			$(elem).replaceWith('<a href="'+url+'html/item.htm?'+id+'" class="legendary">'+text+'</a>');
		}
	});

	$('weapon').each((index,elem) => {
		const text = $(elem).text();
		const rarity = $(elem).attr('rarity')||'common';
		const id = $(elem).attr('id')||text.toLowerCase().replace(/ /g,'_');
		if (config.img&&!config.name&&!!weapons) {
			const type = ((weapons.filter(w=>window.id(w.name)===id)[0]||{type:'Sword'}).type||'Sword').toLowerCase().replace(/ /g,'_');
			$(elem).replaceWith('<a href="'+url+'html/weapon.htm?'+id+'" class="'+rarity+'"><img src="'+url+'img/weapon/'+type+'/'+id+'.png" alt="'+text+'" title="'+text+'" class="'+rarity+'"/></a>');
		} else {
			$(elem).replaceWith('<a href="'+url+'html/weapon.htm?'+id+'" class="'+rarity+'">'+text+'</a>');
		}
	});

	$('power').each((index,elem) => {
		const text = $(elem).text();
		const rarity = $(elem).attr('rarity')||'common';
		const id = text.toLowerCase().replace(/ /g,'_');
		if (config.img&&!config.name) {
			const img = id+'_'+rarity[0];
			$(elem).replaceWith('<a href="'+url+'html/power.htm?'+id+'" class="'+rarity+'"><img src="'+url+'img/dp/'+img+'.png" alt="'+text+'" title="'+text+'" class="'+rarity+'"/></a>');
		} else {
			$(elem).replaceWith('<a href="'+url+'html/power.htm?'+id+'" class="'+rarity+'">'+text+'</a>');
		}
	});
	
	$('card').each((index,elem) => {
		const text = $(elem).text();
		const rarity = $(elem).attr('rarity')||'common';
		const id = $(elem).attr('id')||text.toLowerCase().replace(/ /g,'_')+'_'+rarity[0];
		const divine = $(elem).attr('divine');
		const wicked = $(elem).attr('wicked');
		const value = $(elem).attr('value');
		var s = '<a href="'+url+'html/card.htm?'+id;
		if (!!divine) {
			s += '&amp;divine='+divine;
			if (!!value) {
				s += '&amp;value='+value;
			}
		} else if (!!wicked) {
			s += '&amp;wicked='+wicked;
			if (!!value) {
				s += '&amp;value='+value;
			}
		}
		s += '" class="'+rarity+'">';
		if (config.img&&!config.name) {
			s += '<img src="'+url+'img/dc/'+id+'.png" alt="'+text+'" title="'+text+'" class="'+rarity+'"/>';
		} else {
			s += text;
		}
		s += '</a>';
		$(elem).replaceWith(s);
	});

	$('item').each((index,elem) => {
		const text = $(elem).text();
		const rarity = $(elem).attr('rarity')||'common';
		const id = $(elem).attr('id')||text.toLowerCase().replace(/ /g,'_');
		if (config.img&&!config.name&&!!items) {
			const type = ((items.filter(i=>window.id(i.name)===id)[0]||{type:'Potion'}).type||'Potion').toLowerCase().replace(/ /g,'_');
			$(elem).replaceWith('<a href="'+url+'html/item.htm?'+id+'" class="'+rarity+'"><img src="'+url+'img/item/'+type+'/'+id+'.png" alt="'+text+'" title="'+text+'"/></a>');
		} else {
			$(elem).replaceWith('<a href="'+url+'html/item.htm?'+id+'" class="'+rarity+'">'+text+'</a>');
		}
	});

	$('stone').each((index,elem) => {
		const text = $(elem).text();
		const id = $(elem).attr('id')||text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="'+url+'html/stone.htm?'+id+'" class="rare">'+text+'</a>');
	});
	
	$('talisman').each((index,elem) => {
		const text = $(elem).text();
		const rarity = $(elem).attr('rarity')||'uncommon';
		const id = $(elem).attr('id')||text.toLowerCase().replace(/ /g,'_');
		if (config.img&&!config.name) {
			$(elem).replaceWith('<a href="'+url+'html/talisman.htm?'+id+'" class="'+rarity+'"><img src="'+url+'img/talisman/'+id+'.png" alt="'+text+'"/></a>');
		} else {
			$(elem).replaceWith('<a href="'+url+'html/talisman.htm?'+id+'" class="'+rarity+'">'+text+'</a>');
		}
	});
	
	$('hex').each((index,elem) => {
		const text = $(elem).text();
		$(elem).replaceWith('<a href="'+url+'html/hexes.htm" class="legendary">'+text+'</a>');
	});
	
	//
	$('dmg').each((index,elem) => {
		const text = $(elem).text();
		$(elem).replaceWith('<span class="black" title="Damage"><img src="'+url+'img/dmg.png" alt="Damage"/>'+text+'</span>');
	});
	$('armor-penetration').each((index,elem) => {
		const text = $(elem).text();
		$(elem).replaceWith('<span class="black" title="Armor Penetration"><img src="'+url+'img/armor_penetration.png" alt="Armor Penetration"/>'+text+'</span>');
	});
	$('crit-chance').each((index,elem) => {
		const text = $(elem).text();
		$(elem).replaceWith('<span class="black" title="Crit Chance"><img src="'+url+'img/crit_chance.png" alt="Crit Chance"/>'+text+'%</span>');
	});
	$('crit-dmg').each((index,elem) => {
		const text = $(elem).text();
		$(elem).replaceWith('<span class="black" title="Crit Damage"><img src="'+url+'img/crit_dmg.png" alt="Crit Damage"/>'+text+'%</span>');
	});

};
window.id=window.id||function(text) {
	return decodeURI(text||'').toLowerCase().replace(/&shy;/g,'').replace(/[' ]/g,'_');
};

$(document).ready(function() {
	const url = window.urlPrefix();

	$('nav').addClass(['navbar','navbar-expand-lg','navbar-dark','bg-dark']);
	var s = '<div class="container-fluid"><a class="navbar-brand" href="'+url+'index.htm">Victor Vran </a>';
	
	s += '<div class="collapse navbar-collapse" id="navbarText">';
    s += '<ul class="navbar-nav me-auto mb-2 mb-lg-0">';
	if (window.location.href.indexOf('/power.htm?') !== -1 || window.location.href.indexOf('/html/dp/') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/powers.htm">Demon Powers</a></li>';
	}
	if (window.location.href.indexOf('/card.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/cards.htm">Destiny Cards</a></li>';
	}
	if (window.location.href.indexOf('/hex.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/hexes.htm">Hexes</a></li>';
	}
	if (window.location.href.indexOf('/weapon.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/weapons.htm">Weapons</a></li>';
	}
	if (window.location.href.indexOf('/item.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/items.htm">Other Items</a></li>';
	}
	if (window.location.href.indexOf('/stone.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/stones.htm">Power Stones</a></li>';
	}
	if (window.location.href.indexOf('/html/npc/') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/npcs.htm">NPCs</a></li>';
	}
	if (window.location.href.indexOf('/talisman.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/talismans.htm">Talismans</a></li>';
	}
	if (window.location.href.indexOf('/dlc/') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/dlcs.htm">DLCs</a></li>';
	}
	if (window.location.href.indexOf('/location.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link" href="'+url+'html/locations.htm">Locations</a></li>';
	}
    s += '</ul>';
    s += '</div>';
	
	s += '</div>';
	$('nav').html(s);
	$('div.container').addClass('mt-3');
});
