import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

let book = EmberObject.create({
		id: 1,
		title: "testing"
});


moduleForComponent('books/book-item', 'Integration | Component | books/book item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });


	this.set('obj', book);

  // Template block usage:
  this.render(hbs`
    {{books/book-item book=obj}}
  `);

  assert.equal(this.$(".link").text().trim(), book.title);
});
