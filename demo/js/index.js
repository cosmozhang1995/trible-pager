$(document).ready(function() {
	$('#main-container').fullpage({
		easing: 'swing',
		anchors:['home', 'animation', 'sizing', 'options', 'show'],
		sectionSelector: '.screen',
		navigation: true,
		navigationPostion: 'right',
		navigationTooltips: ['Home', 'Animation', 'Sizing', 'Options', 'Pager it']
	});
	$('[data-toggle="checkbox"]').radiocheck();
	$('[data-toggle="radio"]').radiocheck();
	$('[data-toggle="select"]').select2();
	$('#slider-anim-duration').slider({
		min: 100,
		max: 1000,
		value: 200,
		orientation: 'horizontal',
		range: 'min'
	});
	$('#slider-sizing-width').slider({
		min: 0,
		max: 100,
		value: 90,
		orientation: 'horizontal',
		range: 'min'
	});
	$('#slider-sizing-height').slider({
		min: 0,
		max: 100,
		value: 90,
		orientation: 'horizontal',
		range: 'min'
	});
});

var pictures = [
	{
		url: "http://gamemoir.files.wordpress.com/2014/04/assassins-creed.jpg"
	},
	{
		url: "http://pic1.ipadown.com/imgs/201103261233162581.jpg"
	},
	{
		url: "http://img.6niu.com/allimg/1206/2-1206201A531448.jpg"
	},
	{
		url: "http://pic2.52pk.com/files/120217/801441_111159_4188.jpg"
	},
	{
		url: "http://www.91danji.com/upload/20121126/20121126173738388.jpg"
	},
	{
		url: "http://imgcdn.1322.com/download/pics/paper0/4/4336_1342166488.jpg"
	},
	{
		url: "http://img.6niu.com/allimg/1206/2-120620162011C5.jpg"
	},
	{
		url: "http://www.google.com/40440404404.jpg"
	}
];

pagerView = null;
function showPager() {
	console.info("Start pager with configurations:")
	var easing = $("input[name='anim-easing']:checked").val();
	console.info("     easing:                ", easing);
	var animDuration = $("#slider-anim-duration").slider('value');
	console.info("     animation duration:    ", animDuration);
	var adjustment = $("input[name='sizing-adjust']:checked").val();
	console.info("     image adjustment:      ", adjustment);
	var width = $("#slider-sizing-width").slider('value') + "%";
	console.info("     image width:           ", width);
	var height = $("#slider-sizing-height").slider('value') + "%";
	console.info("     image height:          ", height);
	var showLoadingIndicator = $('#checkbox-option-loading-indicator')[0].checked;
	var loadingIndicator = showLoadingIndicator ? "<span style=\"/*margin-top:50%;*/ display:inline-block;\"><i class=\"fa fa-circle-o-notch fa-spin\" style=\"font-size:40px; margin-top:20px;\"></i></span>" : null;
	console.info("     show loading indicator:", showLoadingIndicator);
	var showCloseButton = $('#checkbox-option-close-button')[0].checked;
	var closeButton = showCloseButton ? "<i class=\"fa fa-fw fa-close\"></i>" : null;
	console.info("     show close button:     ", showCloseButton);
	// var showImmediately = $('#checkbox-option-immediately')[0].checked;
	// console.info("     show immediately:      ", showImmediately);
	var clickToClose = $('#checkbox-option-click-close')[0].checked;
	var clickListener = clickToClose ? function(e,pager) {
		pager.destroy();
		pager = null;
	} : null;
	console.info("     click to close:        ", clickToClose);
	var showPageRegion = $('#checkbox-option-paging-region')[0].checked;
	var pageRegion = showPageRegion ? "30%" : "0%";
	console.info("     has page region:       ", showPageRegion);

	var screenWidth = $(document.body).width();
	var sensitivity = 200.0 / (parseFloat(screenWidth));
	if (sensitivity > 0.5) sensitivity = 0.5;

	if (pagerView && pagerView.destroy) {
		pagerView.destroy();
		pagerView = null;
	}
	pagerView = new TriblePager(pictures, 0, {
		animateDuration: animDuration,
		animateEasing: easing,
		imageAdjustment: adjustment,
		pageSize: {
			width: width,
			height: height
		},
		loadingIndicator: loadingIndicator,
		closeButton: closeButton,
		clickListener: clickListener,
		pagingRegion: pageRegion,
		sensitivity: sensitivity
	});

	console.log("");
}
function showPagerWithoutConfigurations() {
	if (pagerView && pagerView.destroy) {
		pagerView.destroy();
		pagerView = null;
	}
	pagerView = new TriblePager(pictures, 0);
}