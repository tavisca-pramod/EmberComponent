Todos.Todo = DS.Model.extend({

	title : DS.attr('string'),
	isComplete : DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'learn Ember.js',
		isComplete: true
	},
	{
		id: 2,
		title: '....',
		isComplete: false
	},
	{
		id: 3,
		title: 'Profit!',
		isComplete: true
	}
]