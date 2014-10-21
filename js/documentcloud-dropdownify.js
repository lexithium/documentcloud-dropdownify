$('.doc-cloud-holder').height(0);
$('.DC-note-container').hide();

function docCloudDropdown(cloud,div,thing) {
	var whichCloud = '#' + cloud;
	var whichDiv = '#' + div;
	var the_height = $(whichDiv).height();
	if($(thing).hasClass('not-open')) {
		$(thing).removeClass('not-open');
		$(whichCloud).animate({
			height: the_height,
		}, 600, function() {
			$(whichDiv).fadeTo(300,1);
		});
	} else {
		$(thing).addClass('not-open');
		$(whichDiv).hide();
		$(whichCloud).animate({
			height: 0,
		}, 600);
	}
}