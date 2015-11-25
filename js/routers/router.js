var Workspace = Backbone.Router.extend({

	routes: {
		'*filter': 'setFilter'
	},

	setFilter: function() {
		window.app.Todos.trigger('filter');	
	}
});

app.TodoRouter = new Workspace();
Backbone.history.start();