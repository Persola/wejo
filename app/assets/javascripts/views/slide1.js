Slide1 = Backbone.View.extend({
	renderWordsAndPictures: function() {
		this.$el.html("Words <br><br> Pictures");
		return this;
	},

	renderWords: function() {
		this.$el.html("Words");
		return this;
	}
});