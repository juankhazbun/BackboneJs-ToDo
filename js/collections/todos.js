var app = app || {};

var TodoList = Backbone.Collection.extend({

	// Reference this collection to the model
	model: app.Todo,

	// Save all the todo items under the 'todos-backbone' namespace.
	// You will need to have the Backbone localStorage plug-in
	// loaded inside your page in order for this to work.
	localStorage: new Backbone.LocalStorage('todos-backbone'),

	// Filter down the list of all todo items that are finished
	completed: function() {
		return this.filter(function( todo ){
			return todo.get('completed');
		});
	},

	// Filter down the list to only items that are still not finished.
	remaining: function() {
		return this.without.apply( this, this.completed );
	},

	// Next sequential order, despite being saved by unordered GUID in the database.
	nextOrder: function() {
		if ( !this.length ) {
			return 1;
		}
		return this.last().get('order') + 1;
	},

	// Todos are sorted by their original insertion order
	comparator: function( todo ) {
		return todo.get( 'order' );
	}	
});

// Create global collection of Todos
	app.Todos = new TodoList();