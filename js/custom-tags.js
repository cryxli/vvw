window.customTags = window.customTags||function() {
	
	$('npc').each((index,elem) => {
		const text = $(elem).text();
		const id = text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="npc.htm?'+id+'">'+text+'</a>');
	});
	
	$('location').each((index,elem) => {
		const text = $(elem).text();
		const id = text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="location.htm?'+id+'">'+text+'</a>');
	});
	
	$('effect').each((index,elem) => {
		const text = $(elem).text();
		const id = text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="effect.htm?'+id+'">'+text+'</a>');
	});

};
window.id=window.id||function(text) {
	return decodeURI(text||'').toLowerCase().replace(/&shy;/g,'').replace(/[' ]/g,'_');
};

$(document).ready(function() {
	var url = '../';
	if (window.location.href.indexOf('/html/') === -1) {
		url = '';
	}	
	$('nav').addClass(['navbar','navbar-expand-lg','navbar-dark','bg-dark']);
	var s = '<div class="container-fluid"><a class="navbar-brand" href="'+url+'index.htm">Victor Vran </a>';
	
	s += '<div class="collapse navbar-collapse" id="navbarText">';
    s += '<ul class="navbar-nav me-auto mb-2 mb-lg-0">';
	if (window.location.href.indexOf('/power.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link active" href="'+url+'/html/powers.htm">Demon Powers</a></li>';
	}
	if (window.location.href.indexOf('/card.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link active" href="'+url+'/html/cards.htm">Destiny Cards</a></li>';
	}
	if (window.location.href.indexOf('/hex.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link active" href="'+url+'/html/hexes.htm">Hexes</a></li>';
	}
	if (window.location.href.indexOf('/weapon.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link active" href="'+url+'/html/weapons.htm">Weapons</a></li>';
	}
	if (window.location.href.indexOf('/stone.htm?') !== -1) {
        s += '<li class="nav-item"><a class="nav-link active" href="'+url+'/html/stones.htm">Power Stones</a></li>';
	}
    s += '</ul>';
    s += '</div>';
	
	s += '</div>';
	$('nav').html(s);
	$('div.container').addClass('mt-3');
});
