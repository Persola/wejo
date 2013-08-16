Wejo = {
	start: function() {
		console.log("BLAH");
	},

	animateSlides: function(slidePositions) {
		for (var sP in slidePositions) {
			$('.slide' + sP).animate({left: (slidePositions[sP] + 'px')});
		};
	},

	to1slide: function() {
		this.animateSlides({1:"0",
												2:"0",
												3:"0",
												4:"0"});
	},

	to3slides: function() {
		this.animateSlides({1:"0",
												2:"200",
												3:"400",
												4:"0"});
	},

	to4slides: function() {
		this.animateSlides({1:"200",
												2:"400",
												3:"600",
												4:"0"});
	}
};