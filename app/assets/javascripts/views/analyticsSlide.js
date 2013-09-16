AnalyticsSlide = Backbone.View.extend({
	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html("Analytics<br />");
		for(i=0;i<5;i++) {
			this.$el.append(Math.floor((Math.random()*10000000000)).toString() + "<br />");
		};
		return this;
	}
});