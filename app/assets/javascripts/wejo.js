var Wejo = {
	init: function(bootstrapData) {
		self = this;

		console.log("INITIALIZATION INITIALIZED!");
		self.initDataStorage(bootstrapData);
		self.initMap();
		self.overlay = new Overlay();
		self.setZoomListener();
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
    			stylers: [{ saturation: -100 }]
    		}
 			]
		};

		this.map = new google.maps.Map(document.getElementById('map-canvas'), self.mapOptions);
	},

	setZoomListener: function() {
		var self = this;

		self.oldZoom = self.mapOptions.zoom;

		google.maps.event.addListener(self.map, "zoom_changed", function() {
			console.log("old zoom: " + self.oldZoom);
			console.log("new zoom: " + self.map.getZoom());
		 		if(self.map.getZoom() < 7 && self.oldZoom >= 7) {
		 			self.overlay.toWorldLayout();
		 		} else if(_([7, 8, 9, 10, 11, 12, 13]).contains(self.map.getZoom()) &&
		 							! _([7, 8, 9, 10, 11, 12, 13]).contains(self.oldZoom)) {
		 			self.overlay.toCountryLayout();
		 		} else if(self.map.getZoom() >= 14 && self.oldZoom < 14) {
		 			self.overlay.toStreetLayout();
		 		}

		 	self.oldZoom = self.map.getZoom();
		});
	}
};