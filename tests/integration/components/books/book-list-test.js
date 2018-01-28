import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let books = [
	{id: 1, title: 'testing 1'},
	{id: 2, title: 'testing 2'}
];


moduleForComponent('books/book-list', 'Integration | Component | books/book list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

	this.set('objs', books);
	
  // Template block usage:
  this.render(hbs`
		{{books/book-list books=objs}}
  `);

	assert.equal(this.$(".item-wrapper").length, 2);

});

