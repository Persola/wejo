MainSlide = Backbone.View.extend({
	initialize: function() {
		this.renderWordsAndPictures();
	},

	renderWordsAndPictures: function() {
		var self = this;

		self.renderWords();

		self.$el.append("Pictures");
		_(Wejo.store.pictures).each(function(picture) {
			self.$el.append(self.listifyPicture(picture));
		});

		return this;
	},

	renderWords: function() {
		var self = this;

		self.$el.html("Words");
		_(Wejo.store.words).each(function(word) {
			self.$el.append(self.listifyWord(word));
		});
		return self;
	},

	listifyWord: function(word) {
		return '<div class="listItem">' + word.body + '</div>'
	},

	listifyPicture: function(picture) {
		return '<div class="listItem">' + picture.caption + '</div>'
	}
});