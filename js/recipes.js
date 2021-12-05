(function($) {
	/** jQuery plugin to create recipe from array of items */
    $.fn.recipe = function(arrayOfItems) {
		const EMPTY = '<img src="../img/empty.png" alt="empty slot" title="empty slot" />';
		
		function ingredImg(text) {
			if (text.startsWith('<card')) {
				const rarity = $(text).attr('rarity')||'common';
				const name = $(text).text();
				const id = $(text).attr('id')||name.toLowerCase().replace(/ /g,'_')+'_'+rarity[0];
				return '<a href="../html/card.htm?'+id+'" title="'+name+' ('+rarity+')"><img src="../img/dc/'+id+'.png" alt="'+name+' ('+rarity+')" class="'+rarity+'" width=100" height=157"/></a>';
			} else if (text.startsWith('<power')) {
				const rarity = $(text).attr('rarity')||'common';
				const name = $(text).text();
				const id = $(text).attr('id')||name.toLowerCase().replace(/ /g,'_')+'_'+rarity[0];
				return '<a href="../html/power.htm?'+id+'" title="'+name+' ('+rarity+')"><img src="../img/dp/'+id+'.png" alt="'+name+' ('+rarity+')" /></a>';
			} else if (text.startsWith('<item')) {
				const name = $(text).text();
				const id = $(text).attr('id')||window.id(name);
				const item = items.filter(item => (item.id||window.id(item.name)) === id)[0];
				if (!!item) {
					return '<a href="../html/item.htm?'+id+'" title="'+name+'"><img src="../img/item/'+item.type.toLowerCase()+'/'+id+'.png" alt="'+name+'" /></a>';
				} else {
					return text;
				}
			} else if (text.startsWith('<talisman')) {
				const id = ($(text).text()||'').toLowerCase();
				const talisman = talismans.filter(t => window.id(t.name) === id)[0];
				if (!!talisman) {
					return '<a href="talisman.htm?'+id+'" title="'+talisman.name+'"><img src="../img/talisman/'+id+'.png" alt="'+talisman.name+'" /></a>';
				} else {
					return text;
				}
			} else if (text.startsWith('<weapon')) {
				const id = $(text).attr('id')||window.id($(text).text());
				const name = $(text).text();
				const rarity = $(text).attr('rarity')||'common';
				const type = ($(text).attr('type')||'rapier').toLowerCase();
				if (rarity === 'legendary') {
					return '<a href="../html/weapon.htm?'+id+'"><img src="../img/weapon/'+type+'/'+id+'.png" alt="'+name+'" /></a>';
				} else {
					return text;
				}
			}
			return text;
		}
			
		return this.each(function() {
            $(this).removeClass('d-none');
			
			var s = '<h2>Recipe</h2><div class="row">';
			if (!arrayOfItems[0]) {
				// TODO
				s += '<div class="offset-4 col-4 text-center">'+EMPTY+'</div>';
			} else {
				s += '<div class="offset-4 col-4 text-center">'+ingredImg(arrayOfItems[0])+'</div>';
			}
			s += '</div><div class="row mt-3 mb-3">';
			if (!arrayOfItems[1]) {
				// TODO
				s += '<div class="col-4" style="text-align: right;">'+EMPTY+'</div>';
			} else {
				s += '<div class="col-4" style="text-align: right;">'+ingredImg(arrayOfItems[1])+'</div>';
			}
			if (!arrayOfItems[2]) {
				// TODO
				s += '<div class="col-4 text-center">'+EMPTY+'</div>';
			} else {
				s += '<div class="col-4 text-center">'+ingredImg(arrayOfItems[2])+'</div>';
			}
			if (!arrayOfItems[3]) {
				// TODO
				s += '<div class="col-4">'+EMPTY+'</div>';
			} else {
				s += '<div class="col-4">'+ingredImg(arrayOfItems[3])+'</div>';
			}
			s += '</div>';
			
			$(this).html(s);
        });
    };
}(jQuery));
