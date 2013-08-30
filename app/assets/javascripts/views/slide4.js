Slide4 = Backbone.View.extend({
	render: function() {
		var self = this;

		self.$el.html(Wejo.store.users[0].name);
		return self;
	}
});