window.customTags = window.customTags||function() {
	
	$('npc').each((index,elem) => {
		const text = $(elem).text();
		const id = text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="npc.htm#'+id+'">'+text+'</a>');
	});
	
	$('location').each((index,elem) => {
		const text = $(elem).text();
		const id = text.toLowerCase().replace(/ /g,'_');
		$(elem).replaceWith('<a href="location.htm#'+id+'">'+text+'</a>');
	});

};