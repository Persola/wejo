ProfileSlide = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	render: function() {
		var self = this;

		self.$el.html(Wejo.store.users[0].name);
		return self;
	}
});