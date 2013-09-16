Overlay = Backbone.View.extend({
	initialize: function() {
		var self = this;

		self.slideWidth = 200; // Needs to corrospond with CSS

		self.slideEls = {
			'main': $('.mainSlide'),
			'pictures': $('.picturesSlide'),
			'analytics': $('.analyticsSlide'),
			'profiles': $('.profilesSlide')
		};

		self.slides = {
			'main': new MainSlide({el: self.slideEls.main}),
			'pictures': new PicturesSlide({el: self.slideEls.pictures}),
			'analytics': new AnalyticsSlide({el: self.slideEls.analytics}),
			'profiles': new ProfileSlide({el: self.slideEls.profiles})
		};
	},

	animateSlides: function(slidePositions) {
		var self = this;

		for (var sP in slidePositions) {
			var pixels = (self.slideWidth * slidePositions[sP]);
			self.slideEls[sP].animate({left: (pixels.toString() + 'px')});
		};
	},

	toWorldLayout: function(user) {
		var self = this;

		if(user) {
			self.animateSlides({'main': 1,
													'pictures': 1,
													'analytics': 1,
													'profiles': 0
			});

			self.slides.main.renderWordsAndPictures();
		} else {
			self.animateSlides({'main': 0,
													'pictures': 0,
													'analytics': 0,
													'profiles': 0
			});

			self.slides.main.renderWordsAndPictures();
		}
	},

	toCountryLayout: function(user) {		
		var self = this;

		if(user) {
			self.animateSlides({'main': 1,
													'pictures': 2,
													'analytics': 2,
													'profiles': 0
			});

			self.slides.main.renderWords();
		} else {
			self.animateSlides({'main': 0,
													'pictures': 1,
													'analytics': 1,
													'profiles': 0
			});

			self.slides.main.renderWords();
		}
	},

	toStreetLayout: function(user) {
		var self = this;
		
		if(user) {
			self.animateSlides({'main': 1,
													'pictures': 2,
													'analytics': 3,
													'profiles': 0
			});

			self.slides.main.renderWords();
		} else {
			self.animateSlides({'main': 0,
													'pictures': 1,
													'analytics': 2,
													'profiles': 0
			});

			self.slides.main.renderWords();
		}
	}
});