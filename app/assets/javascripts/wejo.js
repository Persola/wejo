var Wejo = {
	init: function() {
		self = this;

		$(function() {
			console.log("INITIALIZATION INITIALIZED!");

			self.$slide1 = $('.slide1');
			self.$slide2 = $('.slide2');
			self.$slide3 = $('.slide3');
			self.$slide4 = $('.slide4');

			self.slides = {
				1: new Slide1(),
				2: new Slide2(),
				3: new Slide3(),
				4: new Slide4()
			};

			self.$slide1.html(self.slides[1].renderWordsAndPictures().$el);
			self.$slide2.html(self.slides[2].render().$el);
			self.$slide3.html(self.slides[3].render().$el);
			self.$slide4.html(self.slides[4].render().$el);
		})
	},

	animateSlides: function(slidePositions) {
		for (var sP in slidePositions) {
			$('.slide' + sP).animate({left: (slidePositions[sP] + 'px')});
		};
	},

	getSlim: function() {
		this.animateSlides({1:"0",
												2:"0",
												3:"0",
												4:"0"});
		this.slides[1].renderWordsAndPictures();
	},

	getWide: function() {
		this.animateSlides({1:"0",
												2:"200",
												3:"400",
												4:"0"});
		this.slides[1].renderWords();
	},

	showProfile: function() {
		this.animateSlides({1:"200",
												2:"400",
												3:"600",
												4:"0"});
		this.slides[1].renderWords();
	}
};