var Wejo = {
	init: function(bootstrapData) {
		self = this;

		self.slideWidth = 200;

		console.log("INITIALIZATION INITIALIZED!");

		self.initDataStorage(bootstrapData);

		self.initMap();

		self.setZoomListener();

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
	},

	initDataStorage: function(bootstrapData) {
		var self = this;

		self.store = {};

		for (var bootstrapAttr in bootstrapData) {
			self.store[bootstrapAttr] = bootstrapData[bootstrapAttr];
		};
	},

	initMap: function() {
		self.mapOptions = {
	    zoom: 2,
	    center: new google.maps.LatLng(0, 0),
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	    styles: [
  			{
    			featureType: "all",
    			stylers: [{ saturation: -80 }]
    		}
 			]
		};

		this.map = new google.maps.Map(document.getElementById('map-canvas'), self.mapOptions);
	},

	animateSlides: function(slidePositions) {
		for (var sP in slidePositions) {
			$('.slide' + sP).animate({left: (slidePositions[sP] + 'px')});
		};
	},

	slidePosition: function(multiplier) {
		return (self.slideWidth * multiplier).toString();
	},

	toWorldLayout: function(user) {
		var self = this;

		if(user) {
			this.animateSlides({1: self.slidePosition(1),
													2: self.slidePosition(1),
													3: self.slidePosition(1),
													4: self.slidePosition(0)
			});

			this.slides[1].renderWordsAndPictures();
		} else {
			this.animateSlides({1: self.slidePosition(0),
													2: self.slidePosition(0),
													3: self.slidePosition(0),
													4: self.slidePosition(0)
			});

			this.slides[1].renderWordsAndPictures();
		}
	},

	toCountryLayout: function(user) {		
		var self = this;

		if(user) {
			this.animateSlides({1: self.slidePosition(1),
													2: self.slidePosition(2),
													3: self.slidePosition(2),
													4: self.slidePosition(0)
			});

			this.slides[1].renderWords();
		} else {
			this.animateSlides({1: self.slidePosition(0),
													2: self.slidePosition(1),
													3: self.slidePosition(1),
													4: self.slidePosition(0)
			});

			this.slides[1].renderWords();
		}
	},

	toStreetLayout: function(user) {
		var self = this;
		
		if(user) {
			this.animateSlides({1: self.slidePosition(1),
													2: self.slidePosition(2),
													3: self.slidePosition(3),
													4: self.slidePosition(0)
			});

			this.slides[1].renderWords();
		} else {
			this.animateSlides({1: self.slidePosition(0),
													2: self.slidePosition(1),
													3: self.slidePosition(2),
													4: self.slidePosition(0)
			});

			this.slides[1].renderWords();
		}
	},

	setZoomListener: function() {
		var self = this;

		self.oldZoom = self.mapOptions.zoom;

		google.maps.event.addListener(self.map, "zoom_changed", function() {
			console.log("old zoom: " + self.oldZoom);
			console.log("new zoom: " + self.map.getZoom());
		 		if(self.map.getZoom() < 7 && self.oldZoom >= 7) {
		 			self.toWorldLayout();
		 		} else if(_([7, 8, 9, 10, 11, 12, 13]).contains(self.map.getZoom()) &&
		 							! _([7, 8, 9, 10, 11, 12, 13]).contains(self.oldZoom)) {
		 			self.toCountryLayout();
		 		} else if(self.map.getZoom() >= 14 && self.oldZoom < 14) {
		 			self.toStreetLayout();
		 		}
		 	self.oldZoom = self.map.getZoom();
		});
	}
};