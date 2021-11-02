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