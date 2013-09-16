PicturesSlide = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	render: function() {
		var self = this;

		self.$el.append("Pictures");
		_(Wejo.store.pictures).each(function(picture) {
			self.$el.append(self.listifyPicture(picture));
		});

		return this;
	},

	listifyPicture: function(picture) {
		return '<div class="listItem">' + picture.caption + '</div>'
	}
});